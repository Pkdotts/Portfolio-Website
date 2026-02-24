"use server";
import prisma from "@/lib/prisma";
import LinkDashboard from "./client";

export default async function AboutDashboardPage() {

  const links = await prisma.link.findMany({orderBy: {order: 'asc'}});

  return (
    <LinkDashboard 
      links={links} 
    />
  );
}
