"use server"
import ArtDashboard from "./client";
import prisma from "@/lib/prisma";

export default async function ArtDashboardPage() {
  const art = prisma.art.findMany();
  return (
    <ArtDashboard art={art}/>
  );
}
