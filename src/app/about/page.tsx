import ContentPaper from "@/components/common/contentpaper";
import InnerPaper from "@/components/ui/cards/innerpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Button, Stack, Group, Grid, GridCol } from "@mantine/core";

{/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
export default function About() {
  const skills = ["Pixel Art", "Animation", "Programming", "C#", "GDscript", "Godot", "Unity"];
  const experience = [
    {jobName: "Sous-Chef", companyName: "Sushi Shop", startYear: "2021", endYear: "2025"},
    {jobName: "Busser", companyName: "La Nuit Shanghai", startYear: "2025", endYear: "2025"},
  ];

  const education = [
    {school: "Antoine Brossard", diploma: "DES", startYear: "2018", endYear: "2023"},
    {school: "Champlain College Saint Lambert", diploma: "DEC - Computer Science and Technology", startYear: "2023", endYear: "2026"},
  ];

  const hobbies = [
    {name: "Drawing", description: "I looooove drawing it's soooo fun"},
    {name: "Video Games", description: "I love making video games and playing them!"},
  ]


  return (
    <>
      <PageTitle>ABOUT ME ABOUT ME ABOUT ME ABOUT ME</PageTitle>
      <Container p="sm" size={"xl"}>
        <Stack gap="sm">
          <ContentPaper>
            <Title className="titleShadow">Skills</Title>
            <Grid>
              {skills.map((s) => (<GridCol span={{base: 12, xs: 5, sm: 5, md: 4, lg: 4}}>
                <InnerPaper>
                  <Title order={4} >{s}</Title>
                </InnerPaper>
              </GridCol>))}
            </Grid>
          </ContentPaper>
          <ContentPaper>
            <Title className="titleShadow">Experience</Title>
            <Grid>
              {experience.map((e) => (<GridCol span={{base: 12, xs: 5, sm: 5, md: 4, lg: 4}}>
                <InnerPaper>
                  <Title order={4}>{e.jobName}</Title>
                  <Title order={6}>{e.companyName}</Title>
                  <Text>{e.startYear}-{e.endYear}</Text>
                </InnerPaper>
              </GridCol>))}
            </Grid>
          </ContentPaper>
          <ContentPaper>
            <Title className="titleShadow">Education</Title>
            <Grid>
               {education.map((e) => (<GridCol span={{base: 12, xs: 5, sm: 5, md: 4, lg: 4}}>
                <InnerPaper>
                  <Title order={4}>{e.school}</Title>
                  <Title order={6}>{e.diploma}</Title>
                  <Text>{e.startYear}-{e.endYear}</Text>
                </InnerPaper>
              </GridCol>))}
            </Grid>
          </ContentPaper>
          <ContentPaper>
            <Title className="titleShadow">Hobbies</Title>
            <Grid>
              {hobbies.map((h) => (<GridCol span={{base: 12, xs: 5, sm: 5, md: 4, lg: 4}}>
                <InnerPaper>
                  <Title order={4}>{h.name}</Title>
                  <Text>{h.description}</Text>
                </InnerPaper>
              </GridCol>))}
            </Grid>
          </ContentPaper>
          <Group justify="end">
            <Button variant="filled" bg="var(--mantine-color-dark-0)" size="lg" radius="md">Download Resume!</Button>
          </Group>
        </Stack>
      </Container>
    </>
  );
}
