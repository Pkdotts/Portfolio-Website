"use server";
import { getFilePathFromUrl } from "@/app/hooks/getFilePathFromUrl";
import { parseLocalDate } from "@/app/hooks/parseLocalDate";
import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const bucket = "Projects";

async function deleteSupabaseFile(publicUrl: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  try {
    const url = new URL(publicUrl);
    const path = getFilePathFromUrl(url.toString(), bucket);
    if (!path) {
      console.warn("Could not extract file path from URL:", publicUrl);
      return;
    }
    const { error } = await supabase.storage.from(bucket).remove([path]);
    if (error) {
      console.error("Supabase deletion error:", error);
    }
  } catch (err) {
    console.error("Error deleting Supabase file:", err);
  }
}

export async function createProject(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const projectId = Number(formData.get("projectId") as string);
  const projectUrl = formData.get("projectUrl") as string;
  const externalLink = formData.get("externalLink") as string;
  const title = formData.get("title") as string;
  const descriptionEn = formData.get("descriptionEn") as string;
  const descriptionFr = formData.get("descriptionFr") as string;
  const visible = !!formData.get("visible");

  const startDateStr = formData.get("startDate") as string;
  const startDate = startDateStr ? parseLocalDate(startDateStr): null;

  const endDateStr = formData.get("endDate") as string;
  const endDate = endDateStr ? parseLocalDate(endDateStr) : null;

  const imageUrlsStr = formData.get("imageUrls") as string;
  const imageUrls = imageUrlsStr ? imageUrlsStr.split(",") : [];

  const logoUrl = formData.get("logoUrl") as string;
  const coverUrl = formData.get("coverUrl") as string;
  const slideshowUrl = formData.get("slideshowUrl") as string;

  const finalImageUrls: string[] = [];

  for (const url of imageUrls) {
    const moved = await moveTempFileToProject(supabase, url, projectId);
    if (moved) finalImageUrls.push(moved);
  }

  const finalLogoUrl = await moveTempFileToProject(supabase, logoUrl, projectId);

  const finalCoverUrl = await moveTempFileToProject(supabase, coverUrl, projectId);

  const finalSlideshowUrl = await moveTempFileToProject(supabase, slideshowUrl, projectId);

  await prisma.project.create({
    data: {
      projectId,
      projectUrl,
      externalLink,
      title,
      descriptionEn,
      descriptionFr,
      logoUrl: finalLogoUrl,
      imageUrls: finalImageUrls,
      coverUrl: finalCoverUrl,
      slideshowUrl: finalSlideshowUrl,
      startDate,
      endDate,
      visible
    }
  });

  revalidatePath("/supersecretdashboard/projects");
}

export async function updateProject(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");
  
  const projectId = Number(formData.get("projectId") as string);
  const projectUrl = formData.get("projectUrl") as string;
  const externalLinkStr = (formData.get("externalLink") as string);
  const externalLink = (externalLinkStr === "" ? null : externalLinkStr);
  const title = formData.get("title") as string;
  const descriptionEn = formData.get("descriptionEn") as string;
  const descriptionFr = formData.get("descriptionFr") as string;
  const logoUrl = formData.get("logoUrl") as string;
  const coverUrl = formData.get("coverUrl") as string;
  const imageUrlsStr = formData.get("imageUrls") as string;
  const imageUrls = imageUrlsStr ? imageUrlsStr.split(",") : [];
  const slideshowUrl = formData.get("slideshowUrl") as string;
  const visible = !!formData.get("visible");
  const startDateStr = formData.get("startDate") as string;
  const startDate = startDateStr ? parseLocalDate(startDateStr) : null;
  const endDateStr = formData.get("endDate") as string;
  const endDate = endDateStr ? parseLocalDate(endDateStr) : null;

  const oldProject = await prisma.project.findUnique({ where: { projectId } });

  if (oldProject) {
    if (oldProject.logoUrl && oldProject.logoUrl !== logoUrl) {
      await deleteSupabaseFile(oldProject.logoUrl);
    }
    if (oldProject.coverUrl && oldProject.coverUrl !== coverUrl) {
      await deleteSupabaseFile(oldProject.coverUrl);
    }

    if (oldProject.slideshowUrl && oldProject.slideshowUrl !== slideshowUrl) {
      await deleteSupabaseFile(oldProject.slideshowUrl);
    }

    const oldGallery = oldProject.imageUrls || [];
    const removedImages = oldGallery.filter((url) => !imageUrls.includes(url));
    for (const url of removedImages) {
      await deleteSupabaseFile(url);
    }
  }


  const finalLogoUrl = await moveTempFileToProject(supabase, logoUrl, projectId);
  const finalCoverUrl = await moveTempFileToProject(supabase, coverUrl, projectId);
  const finalSlideshowUrl = await moveTempFileToProject(supabase, slideshowUrl, projectId);

  const finalImageUrls: string[] = [];
  for (const url of imageUrls) {
    const moved = await moveTempFileToProject(supabase, url, projectId);
    if (moved) finalImageUrls.push(moved);
  }

  await prisma.project.update({
    where: { projectId },
    data: {
      projectId,
      projectUrl,
      externalLink,
      title,
      descriptionEn,
      descriptionFr,
      logoUrl: finalLogoUrl ?? logoUrl,
      coverUrl: finalCoverUrl ?? coverUrl,
      slideshowUrl: finalSlideshowUrl ?? slideshowUrl,
      imageUrls: finalImageUrls.length ? finalImageUrls : imageUrls,
      visible,
      startDate,
      endDate,
    },
  });

  revalidatePath("/supersecretdashboard/projects");
}

export async function deleteProject(projectId: number) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");
  
  const project = await prisma.project.findUnique({ where: { projectId } });
  if (!project) return;

  if (project.logoUrl) await deleteSupabaseFile(project.logoUrl);
  if (project.coverUrl) await deleteSupabaseFile(project.coverUrl);
  if (project.imageUrls?.length) {
    for (const url of project.imageUrls) {
      await deleteSupabaseFile(url);
    }
  }

  await prisma.project.delete({ where: { projectId } });
  revalidatePath("/supersecretdashboard/projects");
}

async function moveTempFileToProject(
  supa: SupabaseClient,
  url: string | null,
  projectId: number
) {
  if (!url) return null;

  const fromPath = getFilePathFromUrl(url, "Projects-Temp");
  if (!fromPath) return null;

  const fileName = fromPath.split("/").pop();
  const toPath = `${projectId}/${fileName}`;

  const { data: fileData, error: downloadError } =
    await supa.storage
      .from("Projects-Temp")
      .download(fromPath);

  if (downloadError || !fileData) {
    console.error("Download failed:", downloadError);
    return null;
  }

  const { error: uploadError } =
    await supa.storage
      .from("Projects")
      .upload(toPath, fileData);

  if (uploadError) {
    console.error("Upload failed:", uploadError);
    return null;
  }

  await supa.storage
    .from("Projects-Temp")
    .remove([fromPath]);

  const { data } = supa.storage
    .from("Projects")
    .getPublicUrl(toPath);

  return data.publicUrl;
}



