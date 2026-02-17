import prisma from "@/lib/prisma";
import TestimonialDashboard from "./client";

export default async function TestimonialDashboardPage() {
  const testimonials = await prisma.testimonial.findMany({orderBy: {date: "desc"}});

  return (
    <TestimonialDashboard 
      testimonials={testimonials}
    />
  );
}
