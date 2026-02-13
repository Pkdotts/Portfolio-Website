'use client';

import { Container, Paper } from "@mantine/core";
import classes from "./contentpaper.module.css"
import Reveal from "../ui/effects/scrollfade/scrollreveal";

export default function ContentPaper ({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <Reveal>
            <Paper bdrs={"md"} shadow="sm" className={classes.wrapper}>
                <div className={classes.polkadot}></div>
                <Container 
                    bd="2px solid var(--mantine-color-main-0)" 
                    bdrs={"md"}
                    m="8px" 
                    p="xl"
                    size="auto"
                    className={classes.content}>{children}</Container>
            </Paper>
        </Reveal>
    )
}