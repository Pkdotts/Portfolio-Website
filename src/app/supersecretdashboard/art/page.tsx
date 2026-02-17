import ArtDashboard from "./client";
import prisma from "@/lib/prisma";

export default async function ArtDashboardPage() {
  const art = await prisma.art.findMany();
  return (
    <ArtDashboard art={art}/>
  );
}
