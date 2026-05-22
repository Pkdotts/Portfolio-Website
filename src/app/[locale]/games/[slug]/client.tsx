import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import GameCard from "@/components/ui/cards/gamecard";
import Slideshow, { Slide } from "@/components/ui/slideshow";
import {
  Container,
  Title,
  Text,
  BackgroundImage,
  Grid,
  GridCol,
  Stack,
} from "@mantine/core";
import { Project } from "@/generated/prisma/client";
import { useTranslations } from "next-intl";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { pickLocalizedName } from "@/app/hooks/pickLocalizedName";

async function GameGrid({ projects }: { projects: Project[] }) {
  const t = useTranslations("games");
  return (
    <>
      {projects ? (
        <Grid>
          {projects.map((p) => (
            <GridCol
              key={p.projectId}
              span={{ base: 12, xs: 5, sm: 4, md: 3, lg: 3 }}
            >
              <GameCard project={p} />
            </GridCol>
          ))}
        </Grid>
      ) : (
        <Text>{t("noGames")}</Text>
      )}
    </>
  );
}

export default function GameDetailsPage({
  project,
  slug,
}: {
  project: Project | null;
  slug: string;
}) {
  const t = useTranslations("games");

  return (
    <div>
      {project ? (
        <>
          <PageTitle>{project.title}</PageTitle>
          <Container p="sm" size="xl">
            <ContentPaper>
              <Stack gap="md">
                <Title>{project.title}</Title>
                <Text>
                  {pickLocalizedName(
                    project.pageDescriptionEn,
                    project.pageDescriptionFr,
                  )}
                </Text>
              </Stack>
            </ContentPaper>
          </Container>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
