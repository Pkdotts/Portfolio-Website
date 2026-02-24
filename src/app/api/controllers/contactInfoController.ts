"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateLinks(links: {
  name: string;
  link: string;
  icon: string;
}[]) {
  await prisma.$transaction(async (tx) => {
    await tx.link.deleteMany();

    await tx.link.createMany({
      data: links.map((link, index) => ({
        name: link.name,
        link: link.link,
        icon: link.icon,
        order: index,
      })),
    });
  });

  revalidatePath("/supersecretdashboard/links");
}