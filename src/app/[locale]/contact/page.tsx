"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid, Grid } from "@mantine/core";
import { createContactMessage } from "../../api/controllers/contactMessageController";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/ui/buttons/submit";

export default function ContactPage() {
    const t = useTranslations('contact');
    const [state, formAction] = useFormState(createContactMessage, { success: false });

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
                                        state.success ? 
                                        <Stack p="xl" gap="0">
                                            <Title>{t('thankYou')}</Title>
                                            <Title order={2}>{t('contactReceived')}</Title>
                                        </Stack> 
                                        :
                                        <form 
                                            name="form" 
                                            action={formAction} 
                                            onSubmit={(e) => { 
                                                const form = e.currentTarget;
                                                if (!form.checkValidity()) return;
                                            }}>
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
                                                        <Input name="name" placeholder={t('namePlaceholder')} required/>
                                                        </div>
                                                        <div>
                                                        <Text>
                                                            {t('emailLabel')}
                                                        </Text>
                                                        <Input name="email" placeholder={t('emailPlaceholder')} required/>
                                                        </div>
                                                    </Group>
                                                </div>
                                                <div>
                                                    <Text>
                                                        {t('messageLabel')}
                                                    </Text>
                                                    <Textarea name="message" placeholder={t('messagePlaceholder')} resize="vertical" required/>
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
