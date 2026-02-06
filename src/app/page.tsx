import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import NameTitle from "@/components/ui/nametitle/nametitle";
import {  Container, Title, Text, Button } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container p="sm" size={"xl"}>
        <NameTitle/>
        <ContentPaper>
          <Title>Skills</Title>
          <Button variant="filled" bg="var(--mantine-color-accent-6)" size="lg" radius="md">Resume</Button>
        </ContentPaper>
      </Container>
    </>
  );
}
