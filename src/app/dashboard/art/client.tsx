"use client";

import { useState} from "react";

import {  Stack,  Group, Paper, Table, TableThead, TableTr, TableTd, TableTh, Container, SegmentedControl, Grid, GridCol, Button, Tabs, TabsList, TabsTab, TabsPanel, Divider, Drawer } from "@mantine/core";
import { Art } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";

function ArtTable({art}: {art: Art[]}){
  return(
    <Stack p="sm">
        {/* {art.map((p) => (
          <ArtRow key={p.projectId} projectId={p.projectId} title={p.title} description={p.description} imageUrls={p.imageUrls} visible={p.visible} bannerUrl={p.bannerUrl} logoUrl={p.logoUrl} startYear={p.startYear} endYear={p.endYear}/>
      ))} */}
    </Stack>
  )
}


export default function ArtDashboard({
    art,
    }: {
    art: Art[],
    }) {

    const [opened, { open, close }] = useDisclosure(false);

    const [selectedArt, setSelectedArt] = useState<Art | null>(null);
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
            <ArtTable art={art}/>
          </Paper>
        </Container>
          
        <Drawer opened={opened} onClose={close} title="Drawer" position="right" zIndex={10000}>
        {/* Drawer content */}
        </Drawer>
        </>
    );
}
