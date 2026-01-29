import { Container, Paper } from "@mantine/core";
import classes from "./innerpaper.module.css";

export default function InnerPaper ({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <div className={"element hidden " + classes.paperparent}>
            <div className={classes.backpaper1}/>
            <div className={classes.backpaper2}/>
            <Paper 
                bdrs={"md"} 
                shadow="sm" 
                bg="var(--mantine-color-primary-1)" 
                c="var(--mantine-color-dark-1)"
                p="xs"
                className={classes.inner}
                
            >
                {children}
            </Paper>
        </div>
    )
}