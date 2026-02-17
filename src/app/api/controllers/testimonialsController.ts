"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTestimonial(
  prevState: { success: boolean } | undefined,
  formData: FormData
) {
  const honeypot = formData.get("company");
  if (honeypot) return; // protect from bots

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
  return { success: true };
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