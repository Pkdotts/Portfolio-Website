import { Container, Paper } from "@mantine/core";
import classes from "./innerpaper.module.css";
import Reveal from "../effects/scrollfade/scrollreveal";

export default function InnerPaper ({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <div className={classes.paperparent}>
            <div className={classes.backpaper2}/>
            <div className={classes.backpaper1}/>
            <Paper 
                bdrs={"md"} 
                shadow="sm" 
                p="xs"
                className={classes.inner}
            >
                {children}
            </Paper>
        </div>
    )
}