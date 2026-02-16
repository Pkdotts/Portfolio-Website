import prisma from "@/lib/prisma";
import TestimonialDashboard from "./client";

export default async function About() {
  const projects = await prisma.project.findMany();

  return (
    <TestimonialDashboard 
      projects={projects}
    />
  );
}
