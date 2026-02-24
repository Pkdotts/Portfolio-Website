"use server";
import { FormState } from "@/entities/types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { RateLimiterMemory } from "rate-limiter-flexible";

const opts = {
    points: 1, 
    duration: 300, 
  };

const rateLimiter = new RateLimiterMemory(opts);

export async function createTestimonial(
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
  const message = formData.get("message") as string;

  await prisma.testimonial.create({
    data: {
      name,
      message,
      accepted: false
    },
  });

  revalidatePath("/testimonials");
  return { success: true, error: null };
}

export async function acceptTestimonial(testimonialId: number) {

    await prisma.testimonial.update({
        where: { testimonialId },
        data: { accepted: true }
    });

  revalidatePath("/supersecretdashboard/testimonials");
}

export async function deleteTestimonial(testimonialId: number) {
    
    await prisma.testimonial.delete({
        where: {
            testimonialId
        }
    })

    revalidatePath("/supersecretdashboard/testimonials");
} 