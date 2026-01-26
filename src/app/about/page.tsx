import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Button, Stack, Group } from "@mantine/core";

{/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
export default function About() {
  return (
    <>
      <PageTitle>ABOUT ME ABOUT ME ABOUT ME ABOUT ME</PageTitle>
      <Container p="sm" size={"xl"}>
        <Stack gap="sm">
          <ContentPaper>
            <Title>Skills</Title>
            <Text>Content</Text>
          </ContentPaper>
          <ContentPaper>
            <Title>Experience</Title>
            <Text>Content</Text>
          </ContentPaper>
          <ContentPaper>
            <Title>Education</Title>
            <Text>Content</Text>
          </ContentPaper>
          <ContentPaper>
            <Title>Hobbies</Title>
            <Text>Stuff I do</Text>
          </ContentPaper>
          <Group justify="end">
            <Button variant="filled" bg="var(--mantine-color-dark-0)" size="lg" radius="md">Download Resume!</Button>
          </Group>
        </Stack>
      </Container>
    </>
  );
}
