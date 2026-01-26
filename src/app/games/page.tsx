import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import GameCard from "@/components/ui/cards/gamecard";
import Slideshow from "@/components/ui/slideshow";
import prisma from "../../lib/prisma";
import {  Container, Title, Text, BackgroundImage, Grid, GridCol, Stack } from "@mantine/core";
import { title } from "process";



export default async function Games() {

  const projects = await prisma.project.findMany();

  const bgImages = [
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",

  ]

  return (
    <div>
      <Slideshow images={bgImages}>penis</Slideshow>
      <PageTitle>GAMES GAMES GAMES GAMES GAMES GAMES</PageTitle>
      
      <Container p="sm" size="xl">
        <ContentPaper>
          <Stack gap="md">
            <Title>Released</Title>
            { projects ? 
            <Grid>
              {projects.map((p,) => (
                <GridCol key={p.projectId} span={{base: 12, xs: 5, sm: 4, md: 3, lg: 3}}>
                  <GameCard title={p.name} image={p.bannerUrl}/>
                </GridCol>
              ))}
            </Grid> : <Text>No games</Text>
            
            }
          </Stack>
        </ContentPaper>
      </Container>
    </div>
  );
}
