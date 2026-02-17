import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text } from "@mantine/core";

export default function Art() {
  return (
    <>
      <PageTitle>ART</PageTitle>

      <Container p="sm" size={"xl"}>
        <ContentPaper>
          <Title>This place is a work in progress</Title>
          <Text>HURRY UP!!</Text>
        </ContentPaper>
      </Container>
    </>
  );
}
