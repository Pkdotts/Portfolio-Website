import { Container, Paper } from "@mantine/core";
import classes from "./innerpaper.module.css";
import Reveal from "../effects/scrollfade/scrollreveal";

export default function InnerPaper ({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <div className={classes.paperparent}>
            <div className={classes.backpaper1}/>
            <div className={classes.backpaper2}/>
            <Paper 
                bdrs={"md"} 
                shadow="sm" 
                bg="var(--mantine-color-main-0)" 
                p="xs"
                className={classes.inner}
            >
                {children}
            </Paper>
        </div>
    )
}