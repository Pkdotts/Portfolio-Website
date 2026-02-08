import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import NameTitle from "@/components/ui/nametitle/nametitle";
import {  Container, Title, Text, Button, Group, Stack } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container  size={"xl"} h="80vh" >
        <Group h="100%">
          <Stack>
          <NameTitle/>
          <Group pl="4rem">
            <Button variant="filled"  size="lg" radius="xl">Resume</Button>
          </Group>
          </Stack>
        </Group>
      </Container>
    </>
  );
}
