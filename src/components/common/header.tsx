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
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { LocaleSwitcher } from "../ui/buttons/localeswitcher";

type HeaderProps = {
  user: any | null;
};

export function Header({ user }: HeaderProps) {
    const pathnames = routing.pathnames;
    const t = useTranslations('header');
    const isMobile = useMediaQuery("(max-width: 958px)");
    
    const buttons = [
    ["/", t('aboutMe')],
    ["/games", t('games')],
    ["/testimonials", t('testimonials')],
    ["/contact", t('contactMe')],
    ] as const;
    const dashboard = ["/supersecretdashboard/projects", "Dashboard"];

    return (
        <header className="header-main">
            <Stack align="stretch" justify="center" h="100%" >
                <Group justify="space-between" >
                    <Link href="/">
                        <Title className="titleShadow" order={1}>Andy Le</Title>
                    </Link>
                    {
                        isMobile ? 
                        <Menu width={200} position="bottom-start">
                            
                            <Menu.Target>
                                <ActionIcon>
                                    <IconMenu/>
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>
                                    <LocaleSwitcher/>
                                </Menu.Item>
                                {buttons.map((b)=>(
                                    <Link href={b[0]} key={b[0]}>
                                        <Menu.Item >
                                            {b[1]}
                                        </Menu.Item>
                                    </Link>
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
                            <LocaleSwitcher/>
                            {buttons.map((b) => (
                                <Link href={b[0]} key={b[0]}>{b[1]}</Link>
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