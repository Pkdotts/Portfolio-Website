"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { Testimonial } from "@/generated/prisma/client";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid } from "@mantine/core";
import { createTestimonial } from "../../api/controllers/testimonialsController";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/ui/buttons/submit";
import { FormState } from "@/entities/types";

export default function Testimonials({testimonials}: {testimonials: Testimonial[]}) {
    const t = useTranslations('testimonials');
    const [writing, setWriting] = useState<boolean>(false);
    const [state, formAction] = useFormState<FormState, FormData>(createTestimonial, { success: false });
    
    useEffect(() => {
        if (state.success) {
            setWriting(false); 
        }
    }, [state.success]);
    
    return (
        <>
        <PageTitle>{t('title')}</PageTitle>

        <Container p="sm" size={"md"}>
            <Stack>
                <ContentPaper >
                    <Stack>
                        <Title order={2}>{t('header')}</Title>
                        {testimonials.length < 1 ? 
                            <Text>{t('noTestimonials')}</Text>
                            :
                            testimonials.map((t) => (
                                <InnerPaper key={t.testimonialId}>
                                    <Group justify="space-between">
                                        <Title order={4}>{t.name}</Title><Text c="var(--mantine-color-main-10)">{t.date.toLocaleDateString()}</Text>
                                    </Group>
                                    <Text>"{t.message}"</Text>
                                </InnerPaper>
                            ))
                        }
                    </Stack>
                </ContentPaper>
                <ContentPaper>
                    <Stack align="stretch">
                        <Stack align="center">

                            <Title order={2}>{t('write')}</Title>
                        </Stack>
                        {writing ? 
                            <InnerPaper>
                                <form 
                                    name="form" 
                                    action={formAction} 
                                    onSubmit={(e) => { 
                                        const form = e.currentTarget;
                                        if (!form.checkValidity()) return;
                                    }}>
                                    <Stack>
                                        <input
                                            type="text"
                                            name="company"
                                            style={{ display: "none" }}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
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
                                            <Button type="button" onClick={() => {setWriting(false)}}>{t('cancel')}</Button>
                                            <SubmitButton>{t('submit')}</SubmitButton>
                                        </Group>
                                    </Stack>
                                </form>
                            </InnerPaper>
                            : state.success ?
                            <InnerPaper>
                                <Stack p="xl" gap="0">

                                    <Title>{t('thankYou')}</Title>
                                    <Title order={2}>{t('testimonyReceived')}</Title>
                                </Stack>
                            </InnerPaper>
                            :
                            <Group justify="center">
                                <Button size="lg" radius="xl" onClick={() => {setWriting(true)}}>
                                    {t('make')}
                                </Button>
                            </Group>
                        }
                    </Stack>
                </ContentPaper>
            </Stack>
        </Container>
        </>
    );
}
