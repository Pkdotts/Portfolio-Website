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
              <Stack gap="0">
                <Group justify="space-between">
                  <Group>
                    <Title order={4}>{t.name}</Title> -
                    <Title order={6}>{t.email}</Title>
                  </Group>
                    
                  <Text c="var(--mantine-color-main-10)">{t.date.toLocaleDateString() + " " + t.date.toLocaleTimeString()}</Text>
                </Group>
                  <Text>{t.message}</Text>
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
              </Stack>
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
