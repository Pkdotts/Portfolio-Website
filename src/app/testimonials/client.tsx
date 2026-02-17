"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { Testimonial } from "@/generated/prisma/client";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid } from "@mantine/core";
import { createTestimonial } from "../api/controllers/testimonialsController";
import { useState } from "react";

export default function Testimonials({testimonials}: {testimonials: Testimonial[]}) {
    const [writing, setWriting] = useState<boolean>(false);

    return (
        <>
        <PageTitle>TESTIMONIALS</PageTitle>

        <Container p="sm" size={"md"}>
            <Stack>
                <Title></Title>
                <ContentPaper >
                    <Stack>
                        <Title order={2}>What people have to say about me</Title>
                        {testimonials.length < 1 ? 
                            <Text>No testimonials here... That means you can be the first!</Text>
                            :
                            testimonials.map((t) => (
                                <InnerPaper key={t.testimonialId}>
                                    <Group justify="space-between">
                                        <Title order={4}>{t.name}</Title> <Text c="var(--mantine-color-main-9)">{t.date.toDateString()}</Text>
                                    </Group>
                                    <Text>"{t.message}"</Text>
                                </InnerPaper>
                            ))
                        }
                    </Stack>
                </ContentPaper>
                <ContentPaper>
                    <Stack>

                    
                    <Title order={2}>Write your testimonial!</Title>
                        
                        {writing ? 
                            <InnerPaper>
                                <form name="form" action={createTestimonial}>
                                    <Stack>
                                        <div>
                                            <Text>
                                                Who are you?
                                            </Text>
                                            <Input name="name" placeholder="Your name, please" required/>
                                        </div>
                                        <div>
                                            <Text>
                                                Write a message
                                            </Text>
                                            <Textarea name="message" placeholder="Your thoughts about me" resize="vertical" required/>
                                        </div>
                                        <Group justify="flex-end">
                                            <Button onClick={() => {setWriting(false)}}>Cancel</Button>
                                            <Button type="submit">Submit</Button>
                                        </Group>
                                    </Stack>
                                </form>
                            </InnerPaper>
                        :
                            <Button onClick={() => {setWriting(true)}}>
                                Make a testimonial
                            </Button>
                        }
                        
                    </Stack>
                </ContentPaper>
            </Stack>
        </Container>
        </>
    );
}
