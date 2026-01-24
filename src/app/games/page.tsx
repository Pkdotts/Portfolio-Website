import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import Slideshow from "@/components/ui/slideshow";
import {  Container, Title, Text, BackgroundImage } from "@mantine/core";

export default function Home() {

  const bgImages = [
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",

  ]

  return (
    <div>
      <PageTitle>GAMES GAMES GAMES GAMES GAMES GAMES</PageTitle>
      <Slideshow images={bgImages}>penis</Slideshow>
      <Container p="sm" size={"xl"}>
        <ContentPaper>
          <Title>Skills</Title>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
          <Text>Content</Text>
        </ContentPaper>
      </Container>
    </div>
  );
}
