import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import GameCard from "@/components/ui/cards/gamecard";
import Slideshow, { Slide } from "@/components/ui/slideshow";
import {  Container, Title, Text, BackgroundImage, Grid, GridCol, Stack } from "@mantine/core";
import { Project } from "@/generated/prisma/client";
import { useTranslations } from "next-intl";

async function GameGrid({
  projects,
}: {
  projects: Project[],
}) {
  const t = useTranslations('games');
  return(
    <>
    { 
      projects ? 
        <Grid>
          {projects.map((p,) => (
            <GridCol key={p.projectId} span={{base: 12, xs: 5, sm: 4, md: 3, lg: 3}}>
              <GameCard title={p.title} image={p.coverUrl}/>
            </GridCol>
          ))}
        </Grid> : <Text>{t('noGames')}</Text>
      }
      </>
  )
}


export default function GamesPage({
    projects,
    }: {
    projects: Project[],
}) {
  const t = useTranslations('games');
  const slideshowImages: Slide[] = projects.map(p => [p.slideshowUrl, p.logoUrl]).filter((p): p is [string, string] => (p[0] != "" && p[1] != "")).filter((p) => (p[0] != null )).map((p) => ({slideshowUrl: p[0], logoUrl: p[1]}));
  
  console.log(slideshowImages);

  return (
    <div>
      <PageTitle>{t('title')}</PageTitle>
      <Slideshow images={slideshowImages}/>
      
      <Container p="sm" size="xl">
        <ContentPaper>
          <Stack gap="md">
            <Title className="titleShadow">{t('released')}</Title>
            <GameGrid projects={projects}/>
          </Stack>
        </ContentPaper>
      </Container>
    </div>
  );
}
