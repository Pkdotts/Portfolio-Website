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
import { LocaleSwitcher } from "../ui/buttons/localeswitcher";

type HeaderProps = {
  user: any | null;
};

export function Header({ user }: HeaderProps) {
    const t = useTranslations('header');
    const isMobile = useMediaQuery("(max-width: 1035px)");
    
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
                    <Link href="/" style={{textDecoration: "none"}}>
                        <Title className="titleShadow" order={1}>ANDY LE</Title>
                    </Link>
                    <Group gap="30px">
                        <LocaleSwitcher/>
                        {
                            isMobile ? 
                            
                            <Menu width={200} position="bottom-start">
                                
                                <Menu.Target>
                                    <ActionIcon variant="white" size="lg">
                                        <IconMenu/>
                                    </ActionIcon>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item>
                                        
                                    </Menu.Item>
                                    {buttons.map((b)=>(
                                        <Link href={b[0]} key={b[0]} className="underline">
                                            <Menu.Item >
                                                {b[1]}
                                            </Menu.Item>
                                        </Link>
                                    ))}
                                    {
                                        user && <>
                                    <a href={dashboard[0]} className="underline"> 
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
                            <>
                                
                                {buttons.map((b) => (
                                    <Link href={b[0]} key={b[0]} className="underline">{b[1]}</Link>
                                ))}
                                {
                                    user && <>
                                    <a href={dashboard[0]} className="underline"> 
                                        {dashboard[1]}
                                    </a>
                                    <LogoutButton/>
                                    </>
                                }
                            </>
                        }       
                    </Group>             
                </Group>
            </Stack>
        </header>
    );

}