import ContentPaper from "@/components/common/contentpaper";
import NameTitle from "@/components/ui/nametitle/nametitle";
import { Container, Text, Button, Group, Stack } from "@mantine/core";
import About from "../pages/skillspaper";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { useTranslations } from "next-intl";
import Bio from "../pages/biopaper";

export default function Home() {
  const t = useTranslations('about');
  return (
    <>
      <Container  size={"xl"} h="70vh" >
        <Group h="100%" justify="center">
          <Stack>
          <NameTitle/>
          <Group justify="center" >
            <Button component="a" target="_blank" href="https://tyygdwvbspeearfdnijp.supabase.co/storage/v1/object/public/Resume/Andy%20Bao%20Le%20-%20CV_EN.pdf" download="Andy Bao Le CV" variant="filled" w="50%" size="lg" radius="xl">{t('resume')}</Button>
          </Group>
          </Stack>
        </Group>
      </Container>
      
      <Bio/>
      <About/>
    </>
  );
}
