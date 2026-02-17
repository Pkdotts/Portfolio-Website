"use client";

import {
    ActionIcon,
    Group,
    Menu,
    Stack,
    Title,
} from "@mantine/core";

import "../ui/effects/styles/underlinebutton.css";
import LogoutButton from "../ui/buttons/logout";
import { useMediaQuery } from "@mantine/hooks";
import { IconMenu } from "@tabler/icons-react";

type HeaderProps = {
  user: any | null;
};

export function Header({ user }: HeaderProps) {
    const isMobile = useMediaQuery("(max-width: 958px)");
    
    const buttons = [["/", "About Me"], ["/games", "Games"], ["/testimonials", "Testimonials"], ["/contact", "Contact me"]];
    const dashboard = ["/supersecretdashboard/projects", "Dashboard"];

    return (
        <header className="header-main">
            <Stack align="stretch" justify="center" h="100%" >
                <Group justify="space-between" >
                    <a href="/">
                        <Title className="titleShadow" order={1}>Andy Le</Title>
                    </a>
                    {
                        isMobile ? 
                        <Menu width={200} position="bottom-start">
                            <Menu.Target>
                                <ActionIcon>
                                    <IconMenu/>
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                            {buttons.map((b)=>(
                                <a href={b[0]} key={b[0]}>
                                    <Menu.Item >
                                        {b[1]}
                                    </Menu.Item>
                                </a>
                            ))}
                            {
                                user && <>
                                <a href={dashboard[0]}> 
                                    <Menu.Item>
                                        {dashboard[1]}
                                    </Menu.Item>
                                </a>
                                <Menu.Item>
                                    <LogoutButton/>
                                </Menu.Item>
                                </>
                            }
                            </Menu.Dropdown>
                            
                        </Menu>
                        :
                        <Group gap="30px">
                            {buttons.map((b) => (
                                <a href={b[0]} key={b[0]}>{b[1]}</a>
                            ))}
                            {
                                user && <>
                                <a href={dashboard[0]}> 
                                    {dashboard[1]}
                                </a>
                                <LogoutButton/>
                                </>
                            }
                        </Group>
                    }                    
                </Group>
            </Stack>
        </header>
    );

}