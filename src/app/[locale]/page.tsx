import NameTitle from "@/components/ui/nametitle/nametitle";
import { Container, Text, Button, Group, Stack } from "@mantine/core";
import About from "../pages/skillspaper";
import { useTranslations } from "next-intl";
import Bio from "../pages/biopaper";
import { pickLocalizedName } from "../hooks/pickLocalizedName";
import { IconDownload } from "@tabler/icons-react";

export default function Home() {
  const t = useTranslations('about');
  const resumeEnUrl = "https://tyygdwvbspeearfdnijp.supabase.co/storage/v1/object/public/Resume/Andy%20Bao%20Le%20-%20CV_EN.pdf";
  const resumeFrUrl = "https://tyygdwvbspeearfdnijp.supabase.co/storage/v1/object/public/Resume/Andy%20Bao%20Le%20-%20CV_FR.pdf";
  return (
    <>
      <Container  size={"xl"} h="70vh" >
        <Group h="100%" justify="center">
          <Stack>
          <NameTitle/>
          <Group justify="center" >
            <Button leftSection={<IconDownload/>} component="a" target="_blank" href={pickLocalizedName(resumeEnUrl, resumeFrUrl)} download="Andy Bao Le CV" variant="filled" w="50%" size="lg" radius="xl">{t('resume')}</Button>
          </Group>
          
          </Stack>
        </Group>
      </Container>
      
      <Bio/>
      <About/>
    </>
  );
}
