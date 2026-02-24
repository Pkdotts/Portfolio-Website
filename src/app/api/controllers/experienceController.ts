"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createExperience(formData: FormData) {
  const position_en = formData.get("positionEn") as string;
  const position_fr = formData.get("positionFr") as string;
  const company = formData.get("company") as string;
  const description_en = formData.get("descriptionEn") as string;
  const description_fr = formData.get("descriptionFr") as string;
  const startDate = Number(formData.get("startDate") as string);
  const endDate = Number(formData.get("endDate") as string);

  await prisma.workExperience.create({
    data: {
      position_en,
      position_fr,
      company,
      description_en,
      description_fr,
      startDate,
      endDate
    },
  });

  revalidatePath("/supersecretdashboard/about");
}

export async function updateExperience(formData: FormData) {
  const workId = Number(formData.get("workId"));
  const position_en = formData.get("positionEn") as string;
  const position_fr = formData.get("positionFr") as string;
  const company = formData.get("company") as string;
  const description_en = formData.get("descriptionEn") as string;
  const description_fr = formData.get("descriptionFr") as string;
  const startDate = Number(formData.get("startDate"));
  const endDate = Number(formData.get("endDate"));

  await prisma.workExperience.update({
    where: { workId },
    data: {
      position_en,
      position_fr,
      company,
      description_en,
      description_fr,
      startDate,
      endDate
    },
  });

  revalidatePath("/supersecretdashboard/about");
}

export async function deleteExperience(workId: number) {
  await prisma.workExperience.delete({
      where: {
          workId
      }
  })

  revalidatePath("/supersecretdashboard/about");
} 