"use client";

import {
    Group,
    Stack,
    Title,
} from "@mantine/core";

import "../ui/effects/styles/underlinebutton.css";
import LogoutButton from "../ui/buttons/logout";

type HeaderProps = {
  user: any | null;
};

export function Header({ user }: HeaderProps) {
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
                        {/* <a href="/art">
                            Art
                        </a> */}
                        
                        <a href="/testimonials"> 
                            Testimonials 
                        </a>
                        {
                            user && <>
                            <a href="/supersecretdashboard/projects"> 
                                Dashboard 
                            </a>
                            <LogoutButton/>
                        </>
                        }
                    </Group>
                </Group>
            </Stack>
        </header>
    );

}