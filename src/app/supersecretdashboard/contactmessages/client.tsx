"use client";


import DashBar from "@/components/ui/dashboard/dashbar";
import { Group, Stack, Title, Text, Container, Paper, Divider, Button, Badge, ActionIcon } from "@mantine/core";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { IconCheck, IconEye, IconEyeCancel, IconEyeClosed, IconTrash, IconX } from "@tabler/icons-react";
import { ContactMessage } from "@/generated/prisma/client";
import { deleteContactMessage, unviewContactMessage, viewContactMessage } from "@/app/api/controllers/contactMessageController";

function ContactMessageTable({contacts}: {contacts: ContactMessage[]}){
  return(
    <Stack p="sm">
        {contacts.map((t) => (
            <InnerPaper key={t.contactId}>
                <Group justify="space-between">
                    <Title order={4}>{t.name}</Title> <Text c="var(--mantine-color-main-10)">{t.date.toLocaleDateString() + " " + t.date.toLocaleTimeString()}</Text>
                </Group>
                <Title order={6}>{t.email}</Title>
                <Container  p="lg">

                  <Text>{t.message}</Text>
                </Container>
                <Group justify="space-between">
                  {
                    t.seen ?
                    <>
                    <Badge variant="outline">Seen</Badge>
                    <Group>
                      <ActionIcon variant="subtle" radius="xl" onClick={() => {unviewContactMessage(t.contactId)}}>
                          <IconEyeCancel/>
                        </ActionIcon>
                      <ActionIcon variant="subtle" radius="xl" onClick={() => {deleteContactMessage(t.contactId)}}>
                        <IconTrash/>
                      </ActionIcon>
                    </Group>
                    </>
                    :
                    <>
                    <Badge >Unseen</Badge>
                    <Group>
                      <ActionIcon variant="subtle" radius="xl" onClick={() => {viewContactMessage(t.contactId)}}>
                        <IconEye/>
                      </ActionIcon>
                      <ActionIcon variant="subtle" radius="xl" onClick={() => {deleteContactMessage(t.contactId)}}>
                        <IconTrash/>
                      </ActionIcon>
                    </Group>
                    </>
                  }
                </Group>
            </InnerPaper>
        ))}
    </Stack>
  )
}


export default function ContactDashboard({
    contacts,
    }: {
    contacts: ContactMessage[],
    }) {
    return (
        <Container w="100%" p="xs" size="md">
          <Paper bdrs="md">
            <DashBar/>
            <Divider/>
            <ContactMessageTable contacts={contacts}/>
          </Paper>
        </Container>
    );
}
