import { Project } from "@/generated/prisma/client";
import { Badge, Text, Group, Image, Stack, Title, AspectRatio, Container, Paper, ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";


export interface ProjectRowProps{
    title: string;
    visible: boolean;
    coverUrl: string | null;
    startDate: Date | null;
    endDate: Date | null;
    openEditModal: (e: any) => void,
    openDeleteModal: (e: any) => void,
}

export default function ProjectRow(project: ProjectRowProps){

    return(
        <Paper withBorder radius="md" style={{overflow: "hidden"}}>
            <Group  w="100%" h="100%" gap="0" grow preventGrowOverflow={false} wrap="nowrap">
                <AspectRatio ratio={4/3} maw="192px" mih="144px" >
                    <Image src={project.coverUrl !== "" ? project.coverUrl : undefined}/>
                </AspectRatio>
                <Stack justify="space-between" h="144px" p="xs">
                    <div>
                        <Group justify="space-between" wrap="nowrap" align="start">
                            <Title order={3} lineClamp={2}>
                                {project.title}
                            </Title>
                            <Group wrap="nowrap">
                                <ActionIcon variant="subtle" onClick={project.openEditModal}>
                                    <IconPencil/>
                                </ActionIcon>
                                <ActionIcon variant="subtle" onClick={project.openDeleteModal}>
                                    <IconTrash/>
                                </ActionIcon>
                            </Group>
                        </Group>
                        <Text lineClamp={1}>
                            {project.startDate?.toDateString() } {project.endDate && "-" + project.endDate?.toDateString() }
                        </Text>
                    </div>
                        <Badge variant={project.visible ? "filled" : "outline"}>
                            {project.visible ? "Visible" : "Hidden"}
                        </Badge>
                        
                </Stack>
                
            </Group>
        </Paper>
    )
}