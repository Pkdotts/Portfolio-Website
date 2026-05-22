import prisma from "@/lib/prisma";
import GameDetailsPage from "./client";

export default async function Games({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { visible: true, projectUrl: decodeURIComponent(slug) },
  });

  return <GameDetailsPage project={project} slug={slug} />;
}
