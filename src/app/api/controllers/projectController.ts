"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const projectId = formData.get("newProjectId") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const logoUrl = formData.get("logoUrl") as string;
  const imageUrlsStr = formData.get("imageUrls") as string;
  const imageUrls = imageUrlsStr ? imageUrlsStr.split(",") : [];
  const coverUrl = formData.get("coverUrl") as string;
  const slideshowUrl = formData.get("slideshowUrl") as string;
  const visible = !!formData.get("visible");
  const startDateStr = formData.get("startDate") as string;
  const startDate = startDateStr ? new Date(startDateStr) : null;
  const endDateStr = formData.get("endDate") as string;
  const endDate = endDateStr ? new Date(endDateStr) : null;

  await prisma.project.upsert({
    where: { projectId },
    update: {
        title,
        description,
        logoUrl,
        imageUrls,
        coverUrl,
        slideshowUrl,
        startDate,
        endDate,
        visible
    },
    create: {
        projectId,
        title,
        description,
        logoUrl,
        imageUrls,
        coverUrl,
        slideshowUrl,
        startDate,
        endDate,
        visible
    }
  });


  revalidatePath("/dashboard/projects");
}

export async function updateProject(formData: FormData) {
  const oldProjectId = formData.get("projectId") as string;
  const newProjectId = formData.get("newProjectId") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const logoUrl = formData.get("logoUrl") as string;
  const imageUrlsStr = formData.get("imageUrls") as string;
  const imageUrls = imageUrlsStr ? imageUrlsStr.split(",") : [];
  const coverUrl = formData.get("coverUrl") as string;
  const slideshowUrl = formData.get("slideshowUrl") as string;
  const visible = !!formData.get("visible");
  const startDate = new Date(formData.get("startDate") as string);
  const endDate = new Date(formData.get("endDate") as string);

  await prisma.project.update({
    where: {
      projectId: oldProjectId
    },
    data: {
      projectId: newProjectId,
      title,
      description,
      logoUrl,
      imageUrls,
      coverUrl,
      slideshowUrl,
      startDate,
      endDate,
      visible
    },
  });

  revalidatePath("/dashboard/projects");
}

export async function deleteProject(projectId: string) {
  await prisma.project.delete({
      where: {
          projectId
      }
  })

  revalidatePath("/dashboard/projects");
} 