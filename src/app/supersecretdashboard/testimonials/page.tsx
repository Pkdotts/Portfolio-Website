import prisma from "@/lib/prisma";
import TestimonialDashboard from "./client";

export default async function TestimonialPage() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <TestimonialDashboard 
      testimonials={testimonials}
    />
  );
}
