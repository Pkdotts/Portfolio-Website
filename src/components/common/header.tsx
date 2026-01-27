"use client";

import {
    Anchor,
    Group,
    Stack,
    Title,
} from "@mantine/core";

import "../ui/styles/underlinebutton.css";

export function Header() {
    return (
        <header
            style={{height: 60,
        padding: 10,
        backgroundColor: 'var(--mantine-color-dark-0)',
        color: 'var(--mantine-color-light-0)',
        border: 'none'}}
        >
            <Stack align="stretch" justify="center" h="100%" >
                <Group justify="space-between" >
                    <a href="/">
                        <Title order={1}>Andy Bao Le</Title>
                    </a>
                    <Group gap="30px">
                        <a href="/games">
                            Games
                        </a>
                        <a href="/art">
                            Art
                        </a>
                        <a href="/testimonials"> 
                            Testimonials 
                        </a>
                        {/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
                        <a href="/about"> 
                            About Me 
                        </a>
                    </Group>
                </Group>
            </Stack>
        </header>
    );

}