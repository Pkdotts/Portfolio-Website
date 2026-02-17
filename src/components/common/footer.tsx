'use client';

import { ActionIcon, Group, Stack, Tooltip } from "@mantine/core";
import { IconBrandBluesky, IconBrandGithub, IconBrandItch, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

export default function Footer() {
  const links = [
    ["Linkedin", "https://www.linkedin.com/in/andy-bao-le/", <IconBrandLinkedin/>],
    ["Github", "https://github.com/Pkdotts", <IconBrandGithub/>],
    ["Itch.io", "https://pkdotts.itch.io/", <IconBrandItch/>],
    ["Twitter", "https://x.com/Pkdotts", <IconBrandTwitter/>],
    ["Bluesky", "https://bsky.app/profile/pkdotts.bsky.social", <IconBrandBluesky/>],
    ["Youtube", "https://www.youtube.com/@pkdotts", <IconBrandYoutube/>] 
  ] as const

  return (
    <footer >
      <Stack align="center" gap="xs" >
        <Group justify="center">
          {links.map((l)=>
          <Tooltip label={l[0]}>
            <ActionIcon variant="subtle" component="a" target="_blank" href={l[1]}>
              {l[2]}
            </ActionIcon>
          </Tooltip>
          )}  
        </Group>
        <a style={{textDecoration: "none", color: "var(--mantine-color-accent-6)"}} href="mailto:andybaole1234@gmail.com">andybaole1234@gmail.com</a>
      </Stack>
    </footer>
  );
}
