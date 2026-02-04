import ContentPaper from "@/components/common/contentpaper";
import InnerPaper from "@/components/ui/cards/innerpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Button, Stack, Group, Grid, GridCol, Accordion, AccordionItem, AccordionPanel, AccordionControl } from "@mantine/core";
import prisma from "@/lib/prisma";

async function Skills(){
  const skillTypes = await prisma.skillType.findMany({include: {Skill: true}});
  return (
    <>
      { 
        skillTypes &&
        <ContentPaper >
          <Title className="titleShadow">Skills</Title>
          <InnerPaper >
            {skillTypes.map((t) => (
              <div style={{color:"var(--mantine-color-light-0)"}}>
                {(t.Skill.length > 0) && (
                  <Accordion key={t.name_en} defaultValue={t.name_en}  >
                
                    <AccordionItem value={t.name_en}>
                    <AccordionControl h={"xl"}><Title size="sm" c="var(--mantine-color-light-0)">{t.name_en}</Title></AccordionControl>
                    <AccordionPanel style={{padding: 0}}>
                      <ul style={{margin: 0}}>
                      {t.Skill.map((s) => (
                        <li>
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

async function Experience(){
  const experience = await prisma.workExperience.findMany();
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

async function Education(){
  const education = await prisma.education.findMany();
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

async function Hobbies(){
  const hobbies = await prisma.hobby.findMany();
  return (
    <>
      { 
        hobbies &&
        <ContentPaper>
            <Title className="titleShadow">Hobbies</Title>
              <InnerPaper>
                <ul style={{margin: 0}}>

                
                {hobbies.map((h) => (
                  <li>
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
export default function About() {


  return (
    <>
      <PageTitle>ABOUT ME</PageTitle>
      <Container p="sm" size={"xl"}>
        <Stack gap="sm">
          <Grid>
            <GridCol span={8}>
              <Stack >
                <Skills/>
                <Education/>
              </Stack>
            </GridCol>
            <GridCol span={4}>
              <Stack >
                <Experience/>
                <Hobbies/>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
