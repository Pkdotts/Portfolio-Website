"use server";
import prisma from "@/lib/prisma";
import AboutDashboard from "./client";

export default async function AboutDashboardPage() {

  const [skillTypes, experience, education, hobbies] = await Promise.all([
    prisma.skillType.findMany({ include: { Skill: true } }),
    prisma.workExperience.findMany(),
    prisma.education.findMany(),
    prisma.hobby.findMany(),
  ]);

  return (
    <AboutDashboard 
      skillTypes={skillTypes} 
      experience={experience} 
      education={education} 
      hobbies={hobbies}
    />
  );
}
