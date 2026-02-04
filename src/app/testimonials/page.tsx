import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import {  Container, Title, Text, Stack } from "@mantine/core";

export default function Art() {
  return (
    <>
      <PageTitle>TESTIMONIALS</PageTitle>

      <Container p="sm" size={"xl"}>
        <Stack>
          <ContentPaper>
            <Title>Testimonial 1</Title>
            <Text>This guy is awesome</Text>
          </ContentPaper>
          <ContentPaper>
            <Title>Testimonial 2</Title>
            <Text>I agree with the above person</Text>
          </ContentPaper>
        </Stack>
      </Container>
    </>
  );
}
