import { Container, Paper } from "@mantine/core";
import classes from "./contentpaper.module.css"

export default function ContentPaper ({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <Paper bd="1px solid var(--mantine-color-primary-7)"  bdrs={"md"} shadow="sm" className={classes.wrapper}>
            <div className={classes.polkadot}></div>
            <Container 
                bd="2px solid var(--mantine-color-light-0)" 
                bdrs={"md"}
                m="8px" 
                p="xl"
                size="auto"
                className={classes.content}>{children}</Container>
            
        </Paper>
    )
}