"use client";

import { useState} from "react";
import Sidebar from "@/components/ui/dashboard/sidebar";

import { Text, Stack, Title, Group, Paper, Table, TableThead, TableTr, TableTd, TableTh, Container, SegmentedControl, Grid, GridCol } from "@mantine/core";
import { Skill, WorkExperience } from "@/generated/prisma/client";

function Skills({skills}: {skills: Skill[]}){
  return(
    <>
        <TableThead>
          <TableTr>
          <TableTh w="30%">Skill (eng)</TableTh>
          <TableTh w="30%">Skill (french)</TableTh>
          <TableTh w="30%">Type</TableTh>
          <TableTh w="10%"></TableTh>
        </TableTr>
        </TableThead>
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

function Experience({experience}: {experience: WorkExperience[]}){
  return(
    <>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Position</TableTh>
          <TableTh colSpan={1}>Company</TableTh>
          <TableTh colSpan={1}>Description</TableTh>
          <TableTh colSpan={1}>Start Date</TableTh>
          <TableTh colSpan={1}>End Date</TableTh>
        </TableTr>
        </TableThead>
        {experience.map((e) => (
            <TableTr>
              <TableTd >
                {e.position}
              </TableTd>
              <TableTd >
                {e.company}
              </TableTd>
              <TableTd >
                {e.description}
              </TableTd>
              <TableTd >
                {e.startDate}
              </TableTd>
              <TableTd >
                {e.endDate}
              </TableTd>
            </TableTr>
      ))}
    </>
  )
}


export default function AboutDashboard({
    skills, 
    experience
    }: {
    skills: Skill[],
    experience: WorkExperience[],
    }) {

    const [tab, setTab] = useState<string>('Skills');

    return (
        <Grid>
          <GridCol span={2}>
            <Sidebar/>
          </GridCol>
          <GridCol span={10}>
            <Stack w="100%" p="lg">
              <SegmentedControl 
                  w="100%" 
                  data={[
                      { value: 'Skills', label: 'Skills' },
                      { value: 'Experience', label: 'Experience' },
                      { value: 'Education', label: 'Education' },
                      { value: 'Hobbies', label: 'Hobbies' },
                  ]} 
                  value={tab}
                  onChange={setTab} 
              />
              <Paper bg="var(--mantine-color-main-1)" radius="lg" 
                  p="md" 
                  bd="1px solid var(--mantine-color-main-4)" 
                  bdrs={"md"} 
              >
                  <Table highlightOnHover >
                  {
                      tab === 'Skills' ? <Skills skills={skills}/> : 
                      tab === 'Experience' ? <Experience experience={experience}/> :
                      <></>
                  }
                  </Table>
              </Paper>
            </Stack>
          </GridCol>
        </Grid>
    );
}
