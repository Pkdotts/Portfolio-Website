import ContentPaper from "@/components/common/contentpaper";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";
import { Translation } from "@/generated/prisma/client";
import { Container, Stack, Text } from "@mantine/core";
import { pickLocalizedName } from "../hooks/pickLocalizedName";
import prisma from "@/lib/prisma";

export default async function Bio(){
    const bio = await prisma.translation.findUnique({where: {key: "welcomeParagraph"}});

    return(
        <Body text={bio}/>
    )
}

function Body({text}: {text: Translation | null})
{
    return(
        <Container size="md">
            <ContentPaper>
            <PkSpriteFront/>
            <InnerPaper>
            <Container size="sm">
                <Stack m="lg" gap="xl">
                <Text>
                    {text && pickLocalizedName(text.en, text.fr)}
                </Text>
                {/* <Text>
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
                </Text> */}
                </Stack>
            </Container>
            </InnerPaper>
            </ContentPaper>
        </Container>
    )
    
}