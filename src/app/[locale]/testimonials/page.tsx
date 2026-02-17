import prisma from "@/lib/prisma";
import Testimonials from "./client";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({where:{accepted: true}, orderBy: [{date: 'desc'}]});
  
  return (
    <>
      <Testimonials testimonials={testimonials}/>
    </>
  );
}
