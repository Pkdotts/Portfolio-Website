"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function updateTranslation(formData: FormData) {
  const key = formData.get("key") as string;
  const en = formData.get("en") as string;
  const fr = formData.get("fr") as string;

  await prisma.translation.update({
    where: {
      key
    },
    data: {
      en,
      fr
    },
  });

  revalidatePath("/supersecretdashboard/about");
}