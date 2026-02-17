import ContentPaper from "@/components/common/contentpaper";
import InnerPaper from "@/components/ui/cards/innerpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Stack, Group, Grid, GridCol, Accordion, AccordionItem, AccordionPanel, AccordionControl, SimpleGrid, Badge } from "@mantine/core";
import prisma from "@/lib/prisma";
import { SkillTypeWithSkills } from "@/entities/types";
import { Education, Hobby, WorkExperience } from "@/generated/prisma/client";
import { useTranslations } from "next-intl";
import { pickLocalizedName } from "@/app/hooks/getLocalizedName";


async function SkillsPaper({skillTypes}: {skillTypes: SkillTypeWithSkills[]}){
  const t = useTranslations('about');
  return (
    <>
      { 
        skillTypes &&
        <ContentPaper >
          <Title className="titleShadow">{t('skills')}</Title>
          <InnerPaper >
            <Stack>

            
            {skillTypes.map((t) => (
              <div key={pickLocalizedName(t.name_en, t.name_fr)}>

                {(t.Skill.length > 0) && (
                  <Stack gap="0">
                      <Text>{pickLocalizedName(t.name_en, t.name_fr)}</Text>
                      <Group m="xs">
                      {t.Skill.map((s) => (
                        <Badge variant="outline" size="lg">
                          {s.name_en}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                )}
              
              </div>
            ))}
            </Stack>
            
          </InnerPaper>
        </ContentPaper> 
      }
    </>
  );
}

async function ExperiencePaper({experience}: {experience: WorkExperience[]}){
  const t = useTranslations('about');
  return (
    <>
      { 
        experience &&
        <ContentPaper>
          <Title className="titleShadow">{t('experience')}</Title>
          <Stack>
            {experience.map((e) => (
              <InnerPaper key={e.workId}>
                <Group justify="space-between">
                  <Title order={4}>{pickLocalizedName(e.position_en, e.position_fr)}</Title>
                  <Title order={6}>{e.company}</Title>
                </Group>
                <Text size="xs">{e.startDate}{e.endDate && "-" + e.endDate}</Text>
                <Text size="sm">{pickLocalizedName(e.description_en, e.description_fr)}</Text>
              </InnerPaper>
            ))}
          </Stack>
        </ContentPaper>
      }
    </>
  );
}

async function EducationPaper({education}: {education: Education[]}){
  const t = useTranslations('about');
  return (
    <>
      { 
        education &&
        <ContentPaper>
            <Title className="titleShadow">{t('education')}</Title>
            <Stack>

               {education.map((e) => (
                 <InnerPaper key={e.educationId}>
                  <Group justify="space-between">
                    <Title order={4}>{e.school}</Title>
                    <Title order={6}>{e.diploma}</Title>
                  </Group>
                  <Text>{e.startYear}-{e.endYear}</Text>
                </InnerPaper>
              ))}
            </Stack>
          </ContentPaper>
      }
    </>
  );
}

async function HobbiesPaper({hobbies}: {hobbies: Hobby[]}){
  const t = useTranslations('about');
  return (
    <>
      { 
        hobbies &&
        <ContentPaper>
            <Title className="titleShadow">{t('hobbies')}</Title>
              <InnerPaper>
                <ul style={{margin: 0}}>
                {hobbies.map((h) => (
                  <li key={h.hobbyId}>
                    <Text>{pickLocalizedName(h.name_en, h.name_fr)}</Text>
                    </li>
                ))}

                </ul>
              </InnerPaper>
          </ContentPaper>
      }
    </>
  );
}


export default async function About() {
  
  const [skillTypes, experience, education, hobbies] = await Promise.all([
    prisma.skillType.findMany({ include: { Skill: true } }),
    prisma.workExperience.findMany(),
    prisma.education.findMany(),
    prisma.hobby.findMany(),
  ]);

  return (
    <>
      
      <Container my="xl" size={"md"}>
        <Grid gutter={"xl"}>
          <GridCol span={{md: 8, sm: 7, xs: 12}}>
            <Stack gap={"xl"}>
              <SkillsPaper skillTypes={skillTypes}/>
              <EducationPaper education={education}/>
            </Stack>
          </GridCol>
          <GridCol span={{md: 4, sm: 5, xs: 12}}>
            <Stack gap={"xl"}>
              <HobbiesPaper hobbies={hobbies}/>
              <ExperiencePaper experience={experience}/>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </>
  );
}
