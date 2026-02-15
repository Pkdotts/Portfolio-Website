"use client";

import { useState} from "react";

import { Text, Stack, Group, Paper,  Container,  Button,   Divider,  Input, Textarea, Chip, Switch } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import { Project } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { DashboardModal, ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";
import ProjectRow from "@/components/ui/dashboard/gamerow";
import { createProject, deleteProject, updateProject } from "@/app/api/controllers/projectController";
import ImageUploadField from "@/components/ui/dashboard/imageuploadfield";

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

    const [opened, { open, close }] = useDisclosure(false);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalAction, setModalAction] = useState<ModalActions>(ModalActions.create);
    
    

    function openEditModal(item: Project) {
      setSelectedProject(item);
      setModalAction(ModalActions.edit);
      open();
    }

    function openCreateModal(){
      setSelectedProject(null);
      setModalAction(ModalActions.create);
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
            item={selectedProject}
            itemName={selectedProject?.title}
            itemId={selectedProject?.projectId}
            itemIdName="projectId"
            createAction={createProject}
            updateAction={updateProject}
            deleteAction={deleteProject}
          >
            <div>
              <Text>Title</Text>
              <Input name="title" placeholder="Your project title, please" defaultValue={selectedProject?.title}/>
            </div>
            <div>
              <Text>Page URL</Text>
              <Input name="newProjectId" placeholder="The URL for your project" defaultValue={selectedProject?.projectId}/>
            </div>
            <div>
              <Text>Description</Text>
              <Textarea name="description" placeholder="Tell me about your project..." defaultValue={selectedProject?.description}/>
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
            <div>
              <Text>Logo</Text>
              <ImageUploadField
                name="logoUrl"
                bucket="project-images"
                defaultValue={selectedProject?.logoUrl}
                />
            </div>
            <div>
              <Text>Cover Image</Text>
              <ImageUploadField
                name="coverUrl"
                bucket="project-images"
                defaultValue={selectedProject?.coverUrl}
              />
            </div>
            <div>
              <Text>Gallery Images</Text>
              <ImageUploadField
                name="imageUrls"
                bucket="project-images"
                multiple
                defaultValue={selectedProject?.imageUrls}
              />
            </div>
            <Switch
              name="visible"
              label="Visible"
              defaultChecked={selectedProject?.visible ?? true}
            />
          </DashboardModal> 
        </>
    );
}
