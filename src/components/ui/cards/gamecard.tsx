import { Paper, Title, Image, BackgroundImage, Container, AspectRatio, Anchor, Stack } from "@mantine/core";
import styles from "./gamecard.module.css";

interface GameCardProps{
    title: String;
    image: string | null;
}

export default function GameCard({title, image}: GameCardProps){
    const ratio = 650/500
    
    return(
        <Anchor  color="black" underline="never">
            <Stack maw={300}  className={styles.container}>
                <AspectRatio ratio={ratio}>
                    <Paper className={styles.imagecontainer} radius="md" shadow="sm" >
                        {/* <StatusBadge status={MediaAdStatuses.DISPLAYING}/> */}
                        <AspectRatio ratio={ratio}>
                            <Image src={image} alt="Project"  className={styles.image}  fit="cover" />
                        </AspectRatio>
                    </Paper>
                </AspectRatio>
                <Title order={3} c="var(--mantine-color-dark-0)">{title} </Title>
            </Stack>
        </Anchor>
    )
}