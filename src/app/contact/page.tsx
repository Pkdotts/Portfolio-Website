"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid } from "@mantine/core";
import { createContactMessage } from "../api/controllers/contactMessageController";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";

export default function ContactPage() {
    return (
        <>
        <PageTitle>Contact</PageTitle>

        <Container p="sm" size={"md"}>
            <Stack>
                <ContentPaper>
                    <Stack>
                        <Title order={2}>Get in contact!</Title> 
                        <Group grow>
                            <InnerPaper>
                                <form name="form" action={createContactMessage}>
                                    <Stack>
                                        <div>
                                            <Group grow>
                                                <div>

                                                <Text>
                                                    Who are you?
                                                </Text>
                                                <Input name="name" placeholder="Your name, please" required/>
                                                </div>
                                                <div>
                                                <Text>
                                                    Email
                                                </Text>
                                                <Input name="email" placeholder="Give me your email" required/>
                                                </div>
                                            </Group>
                                        </div>
                                        <div>
                                            <Text>
                                                Write a message
                                            </Text>
                                            <Textarea name="message" placeholder="What do you want from me?!" resize="vertical" required/>
                                        </div>
                                        <Group justify="flex-end">
                                            <Button type="submit">Submit</Button>
                                        </Group>
                                    </Stack>
                                </form>
                            </InnerPaper>
                            <Group grow>

                                <PkSpriteFront/>
                                <PkSpriteFront/>
                            </Group>
                        </Group>
                    </Stack>
                </ContentPaper>
            </Stack>
        </Container>
        </>
    );
}
