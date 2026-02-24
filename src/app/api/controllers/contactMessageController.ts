"use server";
import { FormState } from "@/entities/types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { headers } from "next/headers";

const opts = {
    points: 1, 
    duration: 300, 
  };

const rateLimiter = new RateLimiterMemory(opts);

export async function createContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "anonymous";

  try {
    await rateLimiter.consume(ip);
  } catch {
    return { success: false, error: "error.tooManyRequests" };
  }

  const honeypot = formData.get("company");
  if (honeypot) return {success: false}; // protect from bots
  
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
