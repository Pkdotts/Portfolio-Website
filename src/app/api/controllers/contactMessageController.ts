"use server";
import { FormState } from "@/entities/types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const honeypot = formData.get("company");
  if (honeypot) return {success: false}; // protect from bots
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const recent = await prisma.contactMessage.count({
    where: {
      email,
      date: {
        gte: new Date(Date.now() - 10 * 60 * 1000) // last 10 min
      }
    }
  });

  if (recent >= 5) {
    throw new Error("Too many messages. Please wait.");
  }

  await prisma.contactMessage.create({
    data: {
      name,
      email,
      message
    },
  });

  revalidatePath("/testimonials");
  return {success: true};
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