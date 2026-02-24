"use client";

import { pickLocalizedName } from "@/app/hooks/pickLocalizedName";
import { Link, Translation } from "@/generated/prisma/client";
import { ActionIcon, Group, Stack, Tooltip } from "@mantine/core";
import * as Icons from "@tabler/icons-react";
import { IconProps } from "@tabler/icons-react";
import { FC } from "react";


function GetIcon(iconName: string) {
  const IconComponent = Icons[iconName as keyof typeof Icons] as FC<IconProps> | undefined;

  return IconComponent ? <IconComponent size={20} /> : null;
}

export default function FooterClient({links, email}: {links: Link[], email: Translation | null}){
     return (
        <footer >
          <Stack align="center" gap="xs" >
            <Group justify="center">
              {links.map((l, k)=>
                <Tooltip label={l.name} key={l.linkId}>
                  <ActionIcon variant="subtle" component="a" target="_blank" href={l.link}>
                    {GetIcon(l.icon)}
                  </ActionIcon>
                </Tooltip>
              )}  
            </Group>
            <a style={{textDecoration: "none", color: "var(--mantine-color-accent-6)"}} href={`mailto:${email && pickLocalizedName(email.en, email.fr)}`}>{email && pickLocalizedName(email.en, email.fr)}</a>
          </Stack>
        </footer>
      );
}