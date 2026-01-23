import { PageTitle } from "@/components/common/pagetitle";
import {  Container, Stack, Title, Text, Paper } from "@mantine/core";

export default function Home() {
  return (
    <>
      <PageTitle>ABOUT ME ABOUT ME ABOUT ME ABOUT ME</PageTitle>

        <Container p="sm" size={"xl"}>
          <Paper  bdrs={"lg"} shadow="sm"  className="polka-dot-background">
           <Container p="sm" size={"xl"}>
            <Text>Content</Text>
            <Text>Content</Text>
            <Text>Content</Text>
            <Text>Content</Text>
            <Text>Content</Text>
            <Text>Content</Text>
          </Container>
          </Paper>
        </Container>
      </>
  );
}
