
'use client'

import { ActionIcon, Image, Group, Transition, MantineTransition, Container, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export interface SlideshowProps{
    images: string[]
}

export default function Slideshow({images}: SlideshowProps) {
    const [index, setIndex] = useState<number>(0);
    const fadeInterval = 6000;
    const fadeTime = 1000;
    const height = "500px";
    const buttonSize = 80;
    const prevFade: MantineTransition = "fade-left"
    const nextFade: MantineTransition = "fade-right"
    const [skewAnim, setSkewAnim] = useState<MantineTransition>(nextFade);

    function addIndex(n: number) {
        var id = index + n;
        
        (id < 0) && (id = images.length - 1);
        (id > images.length - 1) && (id = 0);
        setSkewAnim((n < 0) ? prevFade : nextFade)
        setIndex(id);
        
    }



    useEffect(() => {
        

        const interval = setInterval(
            () => addIndex(1), 
            fadeInterval
        );

        return () => clearInterval(interval);
    }, [index]);

    return(
        <div style={{height: height}}>         
            
            <div  style={{height: "100%", position: "relative", backgroundColor: "var(--mantine-color-dark-9)"}}>
                <Stack w="100%" h="100%" align="center" justify="center" style={{position:"absolute", zIndex: 2}}>
                    <Container w="100%" h="100%" size="1600px" >
                        <Group h="100%" p="lg" justify="space-between" >
                            <ActionIcon variant="light" radius={buttonSize} size={buttonSize} style={{'--ai-bd': '3px solid'}} onClick={() => addIndex(-1)}>
                                <IconChevronLeft 
                                    color="var(--mantine-color-light-0)"
                                    style={{ width: '80%', height: '80%' }} 
                                    stroke={2} />
                            </ActionIcon>
                            <ActionIcon  variant="light" radius={buttonSize} size={buttonSize} style={{'--ai-bd': '3px solid'}} onClick={() => addIndex(1)}>
                                <IconChevronRight 
                                    color="var(--mantine-color-light-0)"
                                    style={{ width: '80%', height: '80%' }} 
                                    stroke={2} />
                            </ActionIcon>
                        </Group>
                    </Container>
                </Stack>
                
                {images.map((src, i) => (
                    <Transition
                        key={i}
                        mounted={i === index}
                        transition={skewAnim}
                        duration={fadeTime}
                        timingFunction="ease"
                        
                    >
                        {(transitionStyle) => (
                            <Image src={src} style={{...transitionStyle, height: height, position: "absolute"}}/>
                        )}
                    </Transition>
                ))}
                
                <div style={{height: "100%", width: "100%", backgroundImage: "linear-gradient(to right, var(--mantine-color-main-10) -15% , transparent, transparent, var(--mantine-color-main-10) 100% )", position: "absolute", zIndex: 1}}/>
            </div>

            
        </div>
    )
}