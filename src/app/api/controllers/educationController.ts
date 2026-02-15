"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createEducation(formData: FormData) {
  const diploma = formData.get("diploma") as string;
  const school = formData.get("school") as string;
  const startYear = Number(formData.get("startYear") as string);
  const endYear = Number(formData.get("endYear") as string);

  await prisma.education.create({
    data: {
      diploma,
      school,
      startYear,
      endYear
    },
  });

  revalidatePath("/dashboard/about");
}

export async function updateEducation(formData: FormData) {
  const educationId = Number(formData.get("educationId") as string);
  const diploma = formData.get("diploma") as string;
  const school = formData.get("school") as string;
  const startYear = Number(formData.get("startYear") as string);
  const endYear = Number(formData.get("endYear") as string);

  await prisma.education.upsert({
    where: {
      educationId
    },
    update: {
      diploma,
      school,
      startYear,
      endYear
    },
    create: {
      diploma,
      school,
      startYear,
      endYear
    }
  });

  revalidatePath("/dashboard/about");
}

export async function deleteEducation(educationId: number) {
  await prisma.education.delete({
      where: {
          educationId
      }
  })

  revalidatePath("/dashboard/about");
} 

