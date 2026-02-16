import prisma from "@/lib/prisma";
import ProjectDashboard from "./client";

export default async function ProjectsDashboardPage() {
  const projects = await prisma.project.findMany();

  return (
    <ProjectDashboard 
      projects={projects}
    />
  );
}
