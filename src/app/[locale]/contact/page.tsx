"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid, Grid, TextInput } from "@mantine/core";
import { createContactMessage } from "../../api/controllers/contactMessageController";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/ui/buttons/submit";
import { FormState } from "@/entities/types";
import { notifications } from "@mantine/notifications";
import { useForm } from '@mantine/form';

export default function ContactPage() {
    const t = useTranslations('contact');
    const [success, setSuccess] = useState(false);

    const form = useForm({
        initialValues: { name: '', email: '', message: ''},

        validate: {
            name: (value) => (value.length < 1 ? t('error.name') : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : t('error.email')),
            message: (value) => (value.length < 10 ? t('error.message') : null),
        },
    });

    return (
        <>
        <PageTitle>{t('title')}</PageTitle>

        <Container p="sm" size={"md"}>
            <Stack>
                <ContentPaper>
                    <Stack>
                        <Title order={2}>{t('header')}</Title> 
                        <Grid align="center">
                            <Grid.Col span={{xs: 12, sm: 7}}>
                                <InnerPaper>
                                    {
                                        success ? 
                                        <Stack p="xl" gap="0">
                                            <Title>{t('thankYou')}</Title>
                                            <Title order={2}>{t('contactReceived')}</Title>
                                        </Stack> 
                                        :
                                        <form
                                            onSubmit={form.onSubmit(async (values) => {
                                                const formData = new FormData();
                                                formData.append("name", values.name);
                                                formData.append("email", values.email);
                                                formData.append("message", values.message);

                                                const result = await createContactMessage(
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
                                                }
                                            })}
                                        >
                                            <Stack>
                                                <div>
                                                    <Group grow>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                name="company"
                                                                style={{ display: "none" }}
                                                                tabIndex={-1}
                                                                autoComplete="off"
                                                            />
                                                            <Text>
                                                                {t('nameLabel')}
                                                            </Text>
                                                            <TextInput name="name" placeholder={t('namePlaceholder')} key={form.key('name')} {...form.getInputProps('name')}/>
                                                            </div>
                                                        <div>
                                                            <Text>
                                                                {t('emailLabel')}
                                                            </Text>
                                                            <TextInput name="email" placeholder={t('emailPlaceholder')} key={form.key('email')} {...form.getInputProps('email')}/>
                                                        </div>
                                                    </Group>
                                                </div>
                                                <div>
                                                    <Text>
                                                        {t('messageLabel')}
                                                    </Text>
                                                    <Textarea name="message" placeholder={t('messagePlaceholder')} resize="vertical" key={form.key('message')} {...form.getInputProps('message')}/>
                                                </div>
                                                <Group justify="flex-end">
                                                    <SubmitButton>{t('submit')}</SubmitButton>
                                                </Group>
                                            </Stack>
                                        </form>
                                    }
                                </InnerPaper>
                            </Grid.Col>
                            <Grid.Col span={{xs: 12, sm: 5}}>
                                <Group justify="center">
                                    <Group>
                                        <PkSpriteFront/>
                                    </Group>
                                    <Group>
                                        <PkSpriteFront/>
                                    </Group>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </ContentPaper>
            </Stack>
        </Container>
        </>
    );
}
