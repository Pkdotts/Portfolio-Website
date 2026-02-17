"use client";
import ContentPaper from "@/components/common/contentpaper";
import PageTitle from "@/components/common/pagetitle";
import InnerPaper from "@/components/ui/cards/innerpaper";
import {  Container, Title, Text, Stack, Input, Button, Group, Textarea, SimpleGrid } from "@mantine/core";
import { createContactMessage } from "../../api/controllers/contactMessageController";
import { PkSpriteFront } from "@/components/ui/sprites/PkSprites";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('contact');

    return (
        <>
        <PageTitle>{t('title')}</PageTitle>

        <Container p="sm" size={"md"}>
            <Stack>
                <ContentPaper>
                    <Stack>
                        <Title order={2}>{t('header')}</Title> 
                        <Group grow>
                            <InnerPaper>
                                <form name="form" action={createContactMessage}>
                                    <Stack>
                                        <div>
                                            <Group grow>
                                                <div>

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
                                            <Button type="submit">{t('submit')}</Button>
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
