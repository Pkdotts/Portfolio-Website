"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { Testimonial } from "@/generated/prisma/client";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid, TextInput } from "@mantine/core";
import { createTestimonial } from "../../api/controllers/testimonialsController";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SubmitButton } from "@/components/ui/buttons/submit";
import { notifications } from '@mantine/notifications';
import { useForm } from "@mantine/form";

export default function Testimonials({testimonials}: {testimonials: Testimonial[]}) {
    const t = useTranslations('testimonials');
    const [writing, setWriting] = useState<boolean>(false);
    const [success, setSuccess] = useState(false);
    
    const form = useForm({
        initialValues: { name: '', message: ''},

        validate: {
            name: (value) => (value.length < 1 ? t('error.name') : null),
            message: (value) => (value.length < 10 ? t('error.message') : null),
        },
    });
    
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
                                    onSubmit={form.onSubmit(async (values) => {
                                        const formData = new FormData();
                                        formData.append("name", values.name);
                                        formData.append("message", values.message);

                                        const result = await createTestimonial(
                                        { success: false },
                                        formData
                                        );

                                        if (result.error) {
                                        notifications.show({
                                            message: t(result.error),
                                            color: "red",
                                        });
                                        return;
                                        }

                                        if (result.success) {
                                            form.reset();
                                            setSuccess(true);
                                            setWriting(false);
                                        }
                                    })}
                                >
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
                                            <TextInput
                                                name="name"
                                                placeholder={t('namePlaceholder')}
                                                key={form.key('name')} 
                                                {...form.getInputProps('name')}
                                            />
                                        </div>
                                        <div>
                                            <Text>
                                                {t('messageLabel')}
                                            </Text>
                                            <Textarea
                                                name="message"
                                                placeholder={t('messagePlaceholder')}
                                                resize="vertical"
                                                key={form.key('message')} 
                                                {...form.getInputProps('message')}
                                            />
                                        </div>
                                        <Group justify="flex-end">
                                            <Button type="button" onClick={() => {setWriting(false)}}>{t('cancel')}</Button>
                                            <SubmitButton>{t('submit')}</SubmitButton>
                                        </Group>
                                    </Stack>
                                </form>
                            </InnerPaper>
                            : success ?
                            <InnerPaper>
                                <Stack p="xl" gap="0">

                                    <Title>{t('thankYou')}</Title>
                                    <Title order={2}>{t('testimonyReceived')}</Title>
                                </Stack>
                            </InnerPaper>
                            :
                            <Group justify="center">
                                <Button variant="white" size="lg" radius="xl" onClick={() => {setWriting(true)}}>
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
