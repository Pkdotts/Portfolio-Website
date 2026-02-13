"use client";

import { useState} from "react";
import Sidebar from "@/components/ui/dashboard/sidebar";

import { Text, Stack, Title, Group, Paper, Table, TableThead, TableTr, TableTd, TableTh, Container, SegmentedControl, Grid, GridCol, Button, Tabs, TabsList, TabsTab, TabsPanel, Divider, Drawer } from "@mantine/core";
import { Education, Hobby, Project, Skill, WorkExperience } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";

function ProjectTable({projects}: {projects: Project[]}){
  return(
    <Table>
        <TableThead>
          <TableTr>
          <TableTh w="30%">Title</TableTh>
          <TableTh w="30%">Description</TableTh>
          <TableTh w="30%">Type</TableTh>
          <TableTh w="10%"></TableTh>
        </TableTr>
        </TableThead>
        {projects.map((p) => (
          <TableTr id={p.projectId.toString()}>
            
            <TableTd >
              {p.title}
            </TableTd>
            <TableTd >
              {p.description}
            </TableTd>
            <TableTd >
              {(p.startYear ?? "").toString()}
            </TableTd>
          </TableTr>
      ))}
    </Table>
  )
}


export default function ProjectDashboard({
    projects,
    }: {
    projects: Project[],
    }) {

    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
      
        <Grid>
          <GridCol span={3}>
            <Sidebar/>
          </GridCol>
          <GridCol span={9}>
            <Stack w="100%" p="xs">
              <Paper bdrs="md">
                <Group p="xs">
                  <Button size="xs" onClick={open}>
                    Insert 
                  </Button>
                </Group>
                <Divider/>
                <ProjectTable projects={projects}/>
              </Paper>
            </Stack>
          </GridCol>
          
        </Grid>
        <Drawer opened={opened} onClose={close} title="Drawer" position="right" zIndex={10000}>
        {/* Drawer content */}
        </Drawer>
        </>
    );
}
