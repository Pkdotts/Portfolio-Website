"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { Testimonial } from "@/generated/prisma/client";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid } from "@mantine/core";
import { createTestimonial } from "../api/controllers/testimonialsController";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Testimonials({testimonials}: {testimonials: Testimonial[]}) {
    const t = useTranslations('testimonials');
    const [writing, setWriting] = useState<boolean>(false);

    return (
        <>
        <PageTitle>{t('title')}</PageTitle>

        <Container p="sm" size={"md"}>
            <Stack>
                <Title></Title>
                <ContentPaper >
                    <Stack>
                        <Title order={2}>{t('header')}</Title>
                        {testimonials.length < 1 ? 
                            <Text>{t('noTestimonials')}</Text>
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

                    
                    <Title order={2}>{t('write')}</Title>
                        
                        {writing ? 
                            <InnerPaper>
                                <form name="form" action={createTestimonial}>
                                    <Stack>
                                        <div>
                                            <Text>
                                                {t('nameLabel')}
                                            </Text>
                                            <Input name="name" placeholder={t('namePlaceholder')} required/>
                                        </div>
                                        <div>
                                            <Text>
                                                {t('messageLabel')}
                                            </Text>
                                            <Textarea name="message" placeholder={t('messagePlaceholder')} resize="vertical" required/>
                                        </div>
                                        <Group justify="flex-end">
                                            <Button onClick={() => {setWriting(false)}}>{t('cancel')}</Button>
                                            <Button type="submit">{t('submit')}</Button>
                                        </Group>
                                    </Stack>
                                </form>
                            </InnerPaper>
                        :
                            <Button onClick={() => {setWriting(true)}}>
                                {t('make')}
                            </Button>
                        }
                        
                    </Stack>
                </ContentPaper>
            </Stack>
        </Container>
        </>
    );
}
