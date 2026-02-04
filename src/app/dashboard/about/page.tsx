import prisma from "@/lib/prisma";
import AboutDashboard from "./client";

export default async function About() {
  const skills = await prisma.skill.findMany();
  const experience = await prisma.workExperience.findMany();

  return (
    <AboutDashboard skills={skills} experience={experience}/>
  );
}
