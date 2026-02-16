"use client";

import { useState} from "react";

import { Text, Stack, Group, Paper,  Container,  Button,   Divider,  Input, Textarea, Chip, Switch, Grid, GridCol } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import { Project } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { DashboardModal, ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";
import ProjectRow from "@/components/ui/dashboard/projectrow";
import { createProject, deleteProject, updateProject } from "@/app/api/controllers/projectController";
import { DropzoneButton } from "@/components/ui/dashboard/dropzonebutton";

function ProjectTable({
  projects,
  openEditModal,
  openDeleteModal,
}: {
  projects: Project[];
  openEditModal: (item: Project) => void;
  openDeleteModal: (item: Project) => void;
}){
  return(
    <Stack p="sm">
        {projects.map((p) => (
          <ProjectRow 
            key={p.projectId} 
            title={p.title} 
            visible={p.visible} 
            coverUrl={p.coverUrl} 
            startDate={p.startDate} 
            endDate={p.endDate} 
            openEditModal={() => openEditModal(p)} 
            openDeleteModal={() => openDeleteModal(p)}/>
      ))}
    </Stack>
  )
}


export default function ProjectDashboard({
    projects,
    }: {
    projects: Project[],
    }) {
    const tempBucket = "Projects-Temp";

    const [opened, { open, close }] = useDisclosure(false);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalAction, setModalAction] = useState<ModalActions>(ModalActions.create);
    
    const [sessionId, setSessionId] = useState("");

    function openCreateModal(){
      setSessionId(crypto.randomUUID());
      setSelectedProject(null);
      setModalAction(ModalActions.create);
      open();
    }

    function openEditModal(item: Project) {
      setSessionId(crypto.randomUUID());
      setSelectedProject(item);
      setModalAction(ModalActions.edit);
      open();
    }

    function openDeleteModal(item: Project){
      setSelectedProject(item)
      setModalAction(ModalActions.delete);
      open();
    }

    return (
      <>
      
        <Container w="100%" p="xs" size="xl">
          <Paper bdrs="md">
                <DashBar/>
            <Group p="xs">
              <Button size="xs" onClick={openCreateModal}>
                Insert 
              </Button>
            </Group>
            <Divider/>
            <ProjectTable projects={projects} openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
          </Paper>
        </Container>
          
        <DashboardModal<Project>
            opened={opened}
            close={close}
            action={modalAction}
            title="Project"
            size="67%"            
            item={selectedProject}
            itemName={selectedProject?.title}
            itemId={selectedProject?.projectId}
            itemIdName="projectId"
            createAction={createProject}
            updateAction={updateProject}
            deleteAction={deleteProject}
          >
            <Grid>
              <GridCol span={8} >
                <Stack>
                  <div>
                    <Text>Title</Text>
                    <Input name="title" placeholder="Your project title, please" defaultValue={selectedProject?.title}/>
                  </div>
                  <div>
                    <Text>Page URL</Text>
                    <Input name="projectUrl" placeholder="The URL for your project" defaultValue={selectedProject?.projectUrl}/>
                  </div>
                  <div>
                    <Text>Description</Text>
                    <Textarea name="description" resize="vertical"  placeholder="Tell me about your project..." defaultValue={selectedProject?.description}/>
                  </div>
                  <Group grow>
                    <div>
                      <Text>Start Date</Text>
                      <DateInput name="startDate" placeholder="Start Date" defaultValue={selectedProject?.startDate}/>
                    </div>
                    <div>
                      <Text>End Date</Text>
                      <DateInput name="endDate" placeholder="End Date" defaultValue={selectedProject?.endDate ?? undefined}/>
                    </div>
                    
                  </Group>
                  <Switch
                    name="visible"
                    label="Visible"
                    defaultChecked={selectedProject?.visible ?? true}
                  />
                  <div>
                    <Text>Logo</Text>
                    <DropzoneButton
                      name="logoUrl"
                      bucket={tempBucket}
                      defaultValue={selectedProject?.logoUrl}
                      sessionId={sessionId}
                      />
                  </div>
                  <div>
                    <Text>Cover Image</Text>
                    <DropzoneButton
                      name="coverUrl"
                      bucket={tempBucket}
                      defaultValue={selectedProject?.coverUrl}
                      sessionId={sessionId}
                    />
                  </div>
                  <div>
                    <Text>Slideshow Image</Text>
                    <DropzoneButton
                      name="slideshowUrl"
                      bucket={tempBucket}
                      defaultValue={selectedProject?.slideshowUrl}
                      sessionId={sessionId}
                    />
                  </div>
                </Stack>
              </GridCol>
              <GridCol span={4}>
                
                <div>
                  <Text>Screenshots</Text>
                  <DropzoneButton
                    name="imageUrls"
                    bucket={tempBucket}
                    multiple
                    imageColumns={1}
                    defaultValue={selectedProject?.imageUrls}
                    sessionId={sessionId}
                  />
                </div>
                
              </GridCol>
              <input type="hidden" name="sessionId" value={sessionId} />
            </Grid>
           
            
          </DashboardModal> 
        </>
    );
}
