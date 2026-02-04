"use client";

import {
    Anchor,
    Button,
    Group,
    Stack,
    Title,
} from "@mantine/core";

import "../ui/styles/underlinebutton.css";

export function Header() {
    return (
        <header>
            <Stack align="stretch" justify="center" h="100%" >
                <Group justify="space-between" >
                    <a href="/">
                        <Title order={1}>Andy Bao Le</Title>
                    </a>
                    <Group gap="30px">
                        <a href="/about"> 
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
                        <a href="/dashboard/about"> 
                            Dashboard 
                        </a>
                        <Button variant="filled" bg="var(--mantine-color-primary-6)" size="lg" radius="md">Resume</Button>
                        {/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
                    </Group>
                </Group>
            </Stack>
        </header>
    );

}