import { Paper, Title, Image, AspectRatio, Anchor, Stack, Text } from "@mantine/core";
import styles from "./gamecard.module.css";
import { Project } from "@/generated/prisma/client";


export default function GameCard({project}: {project: Project}){
    const ratio = 650/500
    
    return(
        <Anchor href={project.externalLink ?? undefined} target={project.externalLink ? "_blank" : undefined} underline="never">
            <Stack maw={300}  className={styles.container}>
                <AspectRatio ratio={ratio}>
                    <Paper className={styles.imagecontainer} radius="md" shadow="sm" >
                        <AspectRatio ratio={ratio}>
                            <Image src={project.coverUrl} alt="Project" className={styles.image} fit="cover" />
                        </AspectRatio>
                    </Paper>
                </AspectRatio>
                <Title className={styles.cardTitle} order={3} c="var(--mantine-color-text-0)">{project.title} </Title>
                <Text c="var(--mantine-color-text)">{project.description}</Text>
            </Stack>
        </Anchor>
    )
}