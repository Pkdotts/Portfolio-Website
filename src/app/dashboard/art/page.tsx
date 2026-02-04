import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import Sidebar from "@/components/ui/dashboard/sidebar";
import prisma from "@/lib/prisma";
import { Text, Stack, Title, Group, Paper, Table, TableThead, TableTr, TableTd, TableTh, Container } from "@mantine/core";

async function Skills(){
  const skills = await prisma.skill.findMany();
  return(
    <>
    {skills.map((s) => (
        <TableTr>
          <TableTd >
            {s.name_en}
          </TableTd>
          <TableTd >
            {s.name_fr}
          </TableTd>
          <TableTd >
            {s.skillType}
          </TableTd>
        </TableTr>
      ))}
    </>
  )
}

export default function Art() {

  return (
    <Group >
      <Sidebar/>
      <Paper bg="var(--mantine-color-primary-1)" radius="lg" 
      p="md" 
      bd="1px solid var(--mantine-color-primary-4)" 
      bdrs={"md"} >
        <Container w={"70vw"}>
        <Title >Skills</Title>
        <Table highlightOnHover >
        <TableThead>
          <TableTr>
          <TableTh w="30%">Skill (eng)</TableTh>
          <TableTh w="30%">Skill (french)</TableTh>
          <TableTh w="30%">Type</TableTh>
          <TableTh w="10%"></TableTh>
        </TableTr>
        </TableThead>
        <Skills/>
        </Table>
        </Container>
      </Paper>
    </Group>
  );
}
