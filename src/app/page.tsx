import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import NameTitle from "@/components/ui/nametitle/nametitle";
import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import About from "./about/page";
import { Contrail_One } from "next/font/google";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";
import InnerPaper from "@/components/ui/cards/innerpaper";

export default function Home() {
  return (
    <>
      <Container  size={"xl"} h="70vh" >
        <Group h="100%">
          <Stack>
          <NameTitle/>
          <Group pl="4rem">
            <Button variant="filled"  size="lg" radius="xl">Resume</Button>
          </Group>
          </Stack>
        </Group>
      </Container>
        <Container p="lg">
          <ContentPaper>
          <PkSpriteFront/>
          <InnerPaper>
            <Text size="lg">
              <Stack>
                  <Text>
                    Welcome to my amazing digital portfolio! My name is Andy, and I am an artist, animator, programmer and gamedev. If you're here, then that's probably because you're a big fan of me.
                    Well if you want my autograph, then you can download my resume. That's close enough, right?
                  </Text>
                  <Text>
                    I've had a passion for video games ever since I was a lil kid. My earliest memories of playing games were from playing Super Mario World on my SNES when I was 4
                    years old. It wasn't long before I began taking an interest in game development. When I started pushing 13 years old, I began experimenting with simple game engines such
                    as Construct 2, and tried my hand at making little game projects on it. 
                  </Text>
                  <Text>
                    In the meantime, I also created a bunch of pixel art and animation. While I initially began doing pixel art out of necessity for my games, I eventually
                    learned to really love it! There's something special about the limitations of placing tiny squares on a grid that feels satisfying. It's almost as if you're
                    solving a puzzle.
                  </Text>
                  <Text>
                    In 2020, my life would forever change when I joined MOTHER: Encore, a fanmade reimagining of the original MOTHER on the NES. While I was originally brought on board
                    as a pixel artist, I eventually became one of the programmers on the project. I didn't have much experience with programming before, so this was essentially the first
                    game I actually did programming for.
                  </Text>
                  <Text>
                    I would then go on to make more games on the side, often as part of game jams.
                  </Text>
              </Stack>
            </Text>
          </InnerPaper>
          </ContentPaper>
        </Container>
      <About/>
    </>
  );
}
