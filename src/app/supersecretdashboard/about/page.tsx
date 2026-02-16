"use server";
import prisma from "@/lib/prisma";
import AboutDashboard from "./client";

export default async function AboutDashboardPage() {

  const skillTypes = await prisma.skillType.findMany({include: {Skill: true}});
  
  const experience = await prisma.workExperience.findMany();
  const education = await prisma.education.findMany();
  const hobbies = await prisma.hobby.findMany();

  return (
    <AboutDashboard 
      skillTypes={skillTypes} 
      experience={experience} 
      education={education} 
      hobbies={hobbies}
    />
  );
}
