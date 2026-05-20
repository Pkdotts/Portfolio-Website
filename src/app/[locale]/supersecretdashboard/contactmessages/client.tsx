"use client";

import DashBar from "@/components/ui/dashboard/dashbar";
import {
  Group,
  Title,
  Text,
  Container,
  Paper,
  Divider,
  Button,
  Badge,
  ActionIcon,
  Accordion,
  NativeSelect,
  Stack,
} from "@mantine/core";
import { IconEye, IconEyeCancel, IconTrash } from "@tabler/icons-react";
import { ContactMessage } from "@/generated/prisma/client";
import {
  deleteContactMessage,
  unviewContactMessage,
  viewContactMessage,
} from "@/app/api/controllers/contactMessageController";
import { useState } from "react";

function ContactMessageTable({ contacts }: { contacts: ContactMessage[] }) {
  return (
    <Accordion variant="contained" radius="md">
      {contacts.map((t) => (
        <Accordion.Item
          key={t.contactId}
          value={t.contactId.toString()}
          bg={t.seen ? "#cecece" : "#f1f1f1"}
        >
          <Accordion.Control h="xl">
            <Group justify="space-between">
              <Group>
                <Title order={4}>{t.name}</Title> -
                <Title order={6}>{t.email}</Title>
              </Group>
              <Text c="var(--mantine-color-main-10)">
                {t.date.toLocaleDateString() +
                  " " +
                  t.date.toLocaleTimeString()}
              </Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <Group justify="space-between">
              <Text>{t.message}</Text>
              <Group justify="flex-end">
                {t.seen ? (
                  <>
                    <Group>
                      <ActionIcon
                        variant="subtle"
                        radius="xl"
                        onClick={() => {
                          unviewContactMessage(t.contactId);
                        }}
                      >
                        <IconEyeCancel />
                      </ActionIcon>
                      <ActionIcon
                        variant="subtle"
                        radius="xl"
                        onClick={() => {
                          deleteContactMessage(t.contactId);
                        }}
                      >
                        <IconTrash />
                      </ActionIcon>
                    </Group>
                  </>
                ) : (
                  <>
                    <Group>
                      <ActionIcon
                        variant="subtle"
                        radius="xl"
                        onClick={() => {
                          viewContactMessage(t.contactId);
                        }}
                      >
                        <IconEye />
                      </ActionIcon>
                      <ActionIcon
                        variant="subtle"
                        radius="xl"
                        onClick={() => {
                          deleteContactMessage(t.contactId);
                        }}
                      >
                        <IconTrash />
                      </ActionIcon>
                    </Group>
                  </>
                )}
              </Group>
            </Group>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

const FilterTypes = {
  All: "All",
  Read: "Read Only",
  Unread: "Unread Only",
};

export default function ContactDashboard({
  contacts,
}: {
  contacts: ContactMessage[];
}) {
  const [sort, setSort] = useState("Latest");
  const [filter, setFilter] = useState<string>(FilterTypes.All);

  function getSortedContacts(sorted: boolean): ContactMessage[] {
    return sorted ? contacts.slice().reverse() : contacts;
  }

  function filterContacts(
    contacts: ContactMessage[],
    type: string,
  ): ContactMessage[] {
    switch (type) {
      case FilterTypes.All:
        return contacts.slice();
      case FilterTypes.Read:
        return contacts.slice().filter((a) => a.seen == true);
      case FilterTypes.Unread:
        return contacts.slice().filter((a) => a.seen == false);
    }
    return contacts;
  }

  return (
    <Container w="100%" p="xs" size="md">
      <Paper bdrs="md">
        <DashBar />
        <Divider />
        <Stack p="sm">
          <Group>
            <NativeSelect
              radius="xl"
              value={sort}
              data={["Latest", "Oldest"]}
              onChange={(event) => setSort(event.currentTarget.value)}
            />
            <NativeSelect
              radius="xl"
              value={filter}
              data={[FilterTypes.All, FilterTypes.Read, FilterTypes.Unread]}
              onChange={(event) => setFilter(event.currentTarget.value)}
            />
          </Group>
          <ContactMessageTable
            contacts={filterContacts(
              getSortedContacts(sort == "Oldest"),
              filter,
            )}
          />
        </Stack>
      </Paper>
    </Container>
  );
}
