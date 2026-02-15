import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import GameCard from "@/components/ui/cards/gamecard";
import Slideshow from "@/components/ui/slideshow";
import prisma from "../../lib/prisma";
import {  Container, Title, Text, BackgroundImage, Grid, GridCol, Stack } from "@mantine/core";
import { title } from "process";

async function GameGrid() {
  const projects = await prisma.project.findMany();

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
        </Grid> : <Text>No games</Text>
      }
      </>
  )
}

export default function Games() {

  

  const bgImages = [
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",

  ]

  return (
    <div>
      <PageTitle>GAMES</PageTitle>
      <Slideshow images={bgImages}/>
      
      <Container p="sm" size="xl">
        <ContentPaper>
          <Stack gap="md">
            <Title className="titleShadow">Released</Title>
            <GameGrid/>
          </Stack>
        </ContentPaper>
      </Container>
    </div>
  );
}
