import ContentPaper from "@/components/common/contentpaper";
import InnerPaper from "@/components/ui/cards/innerpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Stack, Group, Grid, GridCol, Accordion, AccordionItem, AccordionPanel, AccordionControl } from "@mantine/core";
import prisma from "@/lib/prisma";
import { SkillTypeWithSkills } from "@/entities/types";
import { Education, Hobby, WorkExperience } from "@/generated/prisma/client";


async function SkillsPaper({skillTypes}: {skillTypes: SkillTypeWithSkills[]}){
  return (
    <>
      { 
        skillTypes &&
        <ContentPaper >
          <Title className="titleShadow">Skills</Title>
          <InnerPaper >
            {skillTypes.map((t) => (
              <div key={t.name_en}>
                {(t.Skill.length > 0) && (
                  <Accordion defaultValue={t.name_en}  >
                
                    <AccordionItem value={t.name_en}>
                    <AccordionControl h={"xl"}><Title size="sm" c="var(--mantine-color-text-0)">{t.name_en}</Title></AccordionControl>
                    <AccordionPanel style={{padding: 0}}>
                      <ul style={{margin: 0}}>
                      {t.Skill.map((s) => (
                        <li key={s.skillId}>
                          {s.name_en}
                        </li>
                      ))}
                    </ul>
                    </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                )}
              
              </div>
            ))}
            
          </InnerPaper>
        </ContentPaper> 
      }
    </>
  );
}

async function ExperiencePaper({experience}: {experience: WorkExperience[]}){
  return (
    <>
      { 
        experience &&
        <ContentPaper>
          <Title className="titleShadow">Experience</Title>
          <Stack>
            {experience.map((e) => (
              <InnerPaper key={e.workId}>
                <Group justify="space-between">
                  <Title order={4}>{e.position}</Title>
                  <Title order={6}>{e.company}</Title>
                </Group>
                <Text size="xs">{e.startDate}{e.endDate && "-" + e.endDate}</Text>
                <Text size="sm">{e.description}</Text>
              </InnerPaper>
            ))}
          </Stack>
        </ContentPaper>
      }
    </>
  );
}

async function EducationPaper({education}: {education: Education[]}){
  return (
    <>
      { 
        education &&
        <ContentPaper>
            <Title className="titleShadow">Education</Title>
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
  return (
    <>
      { 
        hobbies &&
        <ContentPaper>
            <Title className="titleShadow">Hobbies</Title>
              <InnerPaper>
                <ul style={{margin: 0}}>

                
                {hobbies.map((h) => (
                  <li key={h.hobbyId}>
                    <Title order={4}>{h.name_en}</Title>
                    </li>
                ))}

                </ul>
              </InnerPaper>
          </ContentPaper>
      }
    </>
  );
}


{/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
export default async function About() {
  const [skillTypes, experience, education, hobbies] = await Promise.all([
    prisma.skillType.findMany({ include: { Skill: true } }),
    prisma.workExperience.findMany(),
    prisma.education.findMany(),
    prisma.hobby.findMany(),
  ]);

  return (
    <>
      <PageTitle>ABOUT ME</PageTitle>
      <Container p="sm" size={"md"}>
        <Stack gap="sm">
          <Grid>
            <GridCol span={{md: 8, sm: 6, xs: 12}}>
              <Stack >
                <SkillsPaper skillTypes={skillTypes}/>
                <EducationPaper education={education}/>
              </Stack>
            </GridCol>
            <GridCol span={{md: 4, sm: 6, xs: 12}}>
              <Stack >
                <ExperiencePaper experience={experience}/>
                <HobbiesPaper hobbies={hobbies}/>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
