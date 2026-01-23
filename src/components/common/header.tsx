"use client";

import {
    AppShellHeader,
    Button,
    Group,
    Stack,
    Title,
} from "@mantine/core";

export function Header() {
    return (
        <AppShellHeader>
            <Stack align="stretch" justify="center" h="100%">
                <Group justify="space-between" >
                    <Title order={1}>Andy Bao Le</Title>
                    <Group justify="flex-end">
                        <Button variant="light">
                            Games
                        </Button>
                        <Button variant="light">
                            Art
                        </Button>
                        <Button variant="light">
                            Skills
                        </Button>
                        {/* Includes Skills, Work experience, Education, Resume, Contact Info and Hobbies */}
                        <Button variant="light"> 
                            About Me 
                        </Button>
                    </Group>
                </Group>
            </Stack>
        </AppShellHeader>
    );

}