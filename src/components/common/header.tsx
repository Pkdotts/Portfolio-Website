"use client";

import {
    Anchor,
    Button,
    Group,
    Stack,
    Title,
} from "@mantine/core";

export function Header() {
    return (
        <header
            style={{height: 60,
        padding: 10,
        backgroundColor: 'var(--mantine-color-dark-0)',
        color: 'var(--mantine-color-light-0)',
        border: 'none'}}
        >
            <Stack align="stretch" justify="center" h="100%">
                <Group justify="space-between" >
                    <Anchor href="/home">
                        <Title order={1}>Andy Bao Le</Title>
                    </Anchor>
                    <Group justify="flex-end">
                        <Button variant="light" component="a" href="/games">
                            Games
                        </Button>
                        <Button variant="light" component="a" href="/art">
                            Art
                        </Button>
                        {/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
                        <Button variant="light" component="a" href="/about"> 
                            About Me 
                        </Button>
                    </Group>
                </Group>
            </Stack>
        </header>
    );

}