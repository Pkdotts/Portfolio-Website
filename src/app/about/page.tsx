import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Button, Stack, Group, Grid, GridCol } from "@mantine/core";

{/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
export default function About() {
  return (
    <>
      <PageTitle>ABOUT ME ABOUT ME ABOUT ME ABOUT ME</PageTitle>
      <Container p="sm" size={"xl"}>
        <Stack gap="sm">
          <ContentPaper>
            <Title>Skills</Title>
            <Title order={3}>Pixel Art</Title>
            <Title order={3}>Programming</Title>
            <Title order={3}>Awesome Stuff</Title>
          </ContentPaper>
          <ContentPaper>
            <Title>Experience</Title>
            <Grid>
              <GridCol  span={{base: 12, xs: 5, sm: 4, md: 4, lg: 4}}>
                <ContentPaper>
                  <Title order={3}>Sushi Shop</Title>
                  <Text>2023-2026</Text>
                </ContentPaper>
              </GridCol>
              <GridCol  span={{base: 12, xs: 5, sm: 4, md: 4, lg: 4}}>
                <ContentPaper>
                  <Title order={3}>La Nuit Shanghai</Title>
                  <Text>2018-2023</Text>
                </ContentPaper>
              </GridCol>
            </Grid>
          </ContentPaper>
          <ContentPaper>
            <Title>Education</Title>
            <Grid>
              <GridCol  span={{base: 12, xs: 5, sm: 4, md: 4, lg: 4}}>
                <ContentPaper>
                  <Title order={3}>Champlain College</Title>
                  <Text>2023-2026</Text>
                </ContentPaper>
              </GridCol>
              <GridCol  span={{base: 12, xs: 5, sm: 4, md: 4, lg: 4}}>
                <ContentPaper>
                  <Title order={3}>Antoine Brossard</Title>
                  <Text>2018-2023</Text>
                </ContentPaper>
              </GridCol>
            </Grid>
          </ContentPaper>
          <ContentPaper>
            <Title>Hobbies</Title>
            <Grid>
              <GridCol  span={{base: 12, xs: 5, sm: 4, md: 4, lg: 4}}>
                <ContentPaper>
                  <Title order={3}>Something I do</Title>
                </ContentPaper>
              </GridCol>
              <GridCol  span={{base: 12, xs: 5, sm: 4, md: 4, lg: 4}}>
                <ContentPaper>
                  <Title order={3}>Something I do</Title>
                </ContentPaper>
              </GridCol>
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
