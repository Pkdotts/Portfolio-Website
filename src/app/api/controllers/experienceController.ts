"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createExperience(formData: FormData) {
  const position = formData.get("position") as string;
  const company = formData.get("company") as string;
  const description = formData.get("description") as string;
  const startDate = Number(formData.get("startDate") as string);
  const endDate = Number(formData.get("endDate") as string);

  await prisma.workExperience.create({
    data: {
      position,
      company,
      description,
      startDate,
      endDate
    },
  });

  revalidatePath("/supersecretdashboard/about");
}

export async function updateExperience(formData: FormData) {
  const workId = Number(formData.get("workId"));
  const position = formData.get("position") as string;
  const company = formData.get("company") as string;
  const description = formData.get("description") as string;
  const startDate = Number(formData.get("startDate"));
  const endDate = Number(formData.get("endDate"));

  await prisma.workExperience.update({
    where: { workId },
    data: {
      position,
      company,
      description,
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