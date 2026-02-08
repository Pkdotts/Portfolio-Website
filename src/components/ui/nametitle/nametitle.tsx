'use client';

import { Text, Title } from "@mantine/core";
import classes from "./nametitle.module.css"

import "../effects/styles/textoutline.css";
import { useMediaQuery } from "@mantine/hooks";

export default function NameTitle(){
    const isMobile = useMediaQuery("(max-width: 768px)");
    return(
        <div className={classes.nametitleparent}>
            <div className={classes.backshape}/>
            <div className={classes.content}>
            <Title c='var(--mantine-color-accent-5)' style={{WebkitTextStroke: '1px var(--mantine-color-main-0)'}}>

            <Text 
                fw={1000} 
                size={isMobile ? "60px" :"125px"}
                // variant="gradient" 
                // gradient={{ from: 'var(--mantine-color-accent-5)', to: 'var(--mantine-color-accent-6)', deg: 90 }} 
                className="textoutline-main"
                
                lineClamp={0}
                >
                ANDY LE
            </Text>
            </Title>
            <Text 
                fw={1000} 
                size={isMobile ? "25px" :"40px" }
                fs="italic" 
                className="textoutline-accent">
                Gamedev & Artist
            </Text>
            </div>

        </div>
    )
}