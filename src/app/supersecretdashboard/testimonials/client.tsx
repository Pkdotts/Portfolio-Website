"use client";

import { useState} from "react";
import Sidebar from "@/components/ui/dashboard/dashbar";

import { Text, Stack, Title, Group, Paper, Table, TableThead, TableTr, TableTd, TableTh, Container, SegmentedControl, Grid, GridCol, Button, Tabs, TabsList, TabsTab, TabsPanel, Divider, Drawer } from "@mantine/core";
import { Education, Hobby, Project, Skill, WorkExperience } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";
import ProjectRow from "@/components/ui/dashboard/projectrow";

function ProjectTable({projects}: {projects: Project[]}){
  return(
    <Stack p="sm">
        {/* {projects.map((p) => (
          <ProjectRow key={p.projectId} title={p.title} description={p.description} imageUrls={p.imageUrls} visible={p.visible} bannerUrl={p.bannerUrl} logoUrl={p.logoUrl} startYear={p.startYear} endYear={p.endYear}/>
      ))} */}
    </Stack>
  )
}


export default function TestimonialDashboard({
    projects,
    }: {
    projects: Project[],
    }) {

    const [opened, { open, close }] = useDisclosure(false);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalAction, setModalAction] = useState<ModalActions>(ModalActions.create);


    return (
      <>
      
        <Container w="100%" p="xs" size="xl">
          <Paper bdrs="md">
                <DashBar/>
            <Group p="xs">
              <Button size="xs" onClick={open}>
                Insert 
              </Button>
            </Group>
            <Divider/>
            <ProjectTable projects={projects}/>
          </Paper>
        </Container>
          
        <Drawer opened={opened} onClose={close} title="Drawer" position="right" zIndex={10000}>
        {/* Drawer content */}
        </Drawer>
        </>
    );
}
