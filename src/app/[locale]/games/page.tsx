import prisma from "@/lib/prisma";
import GamesPage from "./client";

export default async function Games() {
  const projects = await prisma.project.findMany({where:{visible: true}, orderBy: [{startDate: 'desc'}, {endDate: 'desc'}]});

  return(
    <GamesPage projects={projects}/>
  )
}
