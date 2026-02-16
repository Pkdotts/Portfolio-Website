"use client";

import {
    Group,
    Stack,
    Title,
} from "@mantine/core";

import "../ui/effects/styles/underlinebutton.css";

export function Header() {
    return (
        <header className="header-main">
            <Stack align="stretch" justify="center" h="100%" >
                <Group justify="space-between" >
                    <a href="/">
                        <Title className="titleShadow" order={1}>Andy Le</Title>
                    </a>
                    <Group gap="30px">
                        <a href="/" > 
                            About Me 
                        </a>
                        <a href="/games">
                            Games
                        </a>
                        <a href="/art">
                            Art
                        </a>
                        <a href="/testimonials"> 
                            Testimonials 
                        </a>
                        <a href="/supersecretdashboard/about"> 
                            Dashboard 
                        </a>
                        
                        {/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
                    </Group>
                </Group>
            </Stack>
        </header>
    );

}