"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  await prisma.contactMessage.create({
    data: {
      name,
      email,
      message
    },
  });

  revalidatePath("/testimonials");
}

export async function viewContactMessage(contactId: number) {

  await prisma.contactMessage.update({
    where: { contactId },
    data: { seen: true }
  });

  revalidatePath("/supersecretdashboard/contactmessages");
}

export async function unviewContactMessage(contactId: number) {

  await prisma.contactMessage.update({
    where: { contactId },
    data: { seen: false }
  });

  revalidatePath("/supersecretdashboard/contactmessages");
}

export async function deleteContactMessage(contactId: number) {
    
  await prisma.contactMessage.delete({
    where: {
      contactId
    }
  })

    revalidatePath("/supersecretdashboard/contactmessages");
} 