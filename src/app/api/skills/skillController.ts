"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSkill(formData: FormData, skillType: string) {
  const name_en = formData.get("name_en") as string;
  const name_fr = formData.get("name_fr") as string;

  await prisma.skill.create({
    data: {
      name_en,
      name_fr,
      skillType
    },
  });

  revalidatePath("/dashboard/about");
}

export async function updateSkill(formData: FormData, skillType: string, skillId: number) {
  const name_en = formData.get("name_en") as string;
  const name_fr = formData.get("name_fr") as string;

  await prisma.skill.update({
    where: {
      skillId
    },
    data: {
      name_en,
      name_fr,
      skillType
    },
  });

  revalidatePath("/dashboard/about");
}

export async function deleteSkill(skillId: number) {
    await prisma.skill.delete({
        where: {
            skillId
        }
    })

    revalidatePath("/dashboard/about");
} 