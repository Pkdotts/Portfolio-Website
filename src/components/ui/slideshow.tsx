
'use client'

import { ActionIcon, Image, Group, Transition, MantineTransition } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export interface SlideshowProps{
    images: string[]
    children: React.ReactNode
}

export default function Slideshow({images, children}: SlideshowProps) {
    const [index, setIndex] = useState<number>(0);
    const fadeInterval = 6000;
    const fadeTime = 1000;
    const height = "640px";
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
            
            <div style={{height: "100%", position: "relative", backgroundColor: "var(--mantine-color-dark-0)"}}>
                <Group p="lg" w="100%" h="100%" justify="space-between" style={{position:"absolute", zIndex: 1}}>
                    <ActionIcon variant="filled" radius="lg" size="lg">
                        <IconChevronLeft 
                            onClick={() => addIndex(-1)}
                            style={{ width: '80%', height: '80%' }} 
                            stroke={2} />
                    </ActionIcon>
                    <ActionIcon variant="filled" radius="lg" size="lg">
                        <IconChevronRight 
                            onClick={() => addIndex(1)}
                            style={{ width: '80%', height: '80%' }} 
                            stroke={2} />
                    </ActionIcon>
                </Group>
                {images.map((src, i) => (
                    <Transition
                        key={i}
                        mounted={i === index}
                        transition={skewAnim}
                        duration={fadeTime}
                        timingFunction="ease"
                        
                    >
                        {(transitionStyle) => (
                            <Image src={src} style={{...transitionStyle, height: height, position: "absolute"}}>
                                
                                
                            </Image>
                        )}
                    </Transition>
                ))
                }
            </div>

            
        </div>
    )
}