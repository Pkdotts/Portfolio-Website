"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createHobby(formData: FormData) {
  const name_en = formData.get("name_en") as string;
  const name_fr = formData.get("name_fr") as string;

  await prisma.hobby.create({
    data: {
      name_en,
      name_fr
    },
  });

  revalidatePath("/dashboard/about");
}

export async function updateHobby(formData: FormData) {
  const hobbyId = Number(formData.get("hobbyId") as string);
  const name_en = formData.get("name_en") as string;
  const name_fr = formData.get("name_fr") as string;

  await prisma.hobby.update({
    where: {
      hobbyId
    },
    data: {
      name_en,
      name_fr
    },
  });

  revalidatePath("/dashboard/about");
}

export async function deleteHobby(hobbyId: number) {
  await prisma.hobby.delete({
      where: {
          hobbyId
      }
  })

  revalidatePath("/dashboard/about");
} 