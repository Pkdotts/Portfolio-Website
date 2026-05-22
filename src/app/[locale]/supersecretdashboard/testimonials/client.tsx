"use client";

import DashBar from "@/components/ui/dashboard/dashbar";
import { Testimonial } from "@/generated/prisma/client";
import {
  Group,
  Stack,
  Title,
  Text,
  Container,
  Paper,
  Divider,
  Badge,
  ActionIcon,
} from "@mantine/core";
import InnerPaper from "@/components/ui/cards/innerpaper";
import {
  acceptTestimonial,
  deleteTestimonial,
  unacceptTestimonial,
} from "@/app/api/controllers/testimonialsController";
import { IconCheck, IconTrash, IconX } from "@tabler/icons-react";

function TestimonialTable({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <Stack p="sm">
      {testimonials.map((t) => (
        <InnerPaper key={t.testimonialId}>
          <Group justify="space-between">
            <Title order={4}>{t.name}</Title>
            <Text c="var(--mantine-color-main-10)">
              {t.date.toLocaleDateString() + " " + t.date.toLocaleTimeString()}
            </Text>
          </Group>
          <Text>{t.message}</Text>
          <Group justify="space-between">
            {
              <>
                <Badge>{t.accepted ? "Accepted" : "Pending"}</Badge>
                <Group>
                  {t.accepted ? (
                    <ActionIcon
                      variant="subtle"
                      radius="xl"
                      onClick={() => {
                        unacceptTestimonial(t.testimonialId);
                      }}
                    >
                      <IconX />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      variant="subtle"
                      radius="xl"
                      onClick={() => {
                        acceptTestimonial(t.testimonialId);
                      }}
                    >
                      <IconCheck />
                    </ActionIcon>
                  )}
                  <ActionIcon
                    variant="subtle"
                    radius="xl"
                    onClick={() => {
                      deleteTestimonial(t.testimonialId);
                    }}
                  >
                    <IconTrash />
                  </ActionIcon>
                </Group>
              </>
            }
          </Group>
        </InnerPaper>
      ))}
    </Stack>
  );
}

export default function TestimonialDashboard({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <>
      <Container w="100%" p="xs" size="md">
        <Paper bdrs="md">
          <DashBar />
          <Divider />
          <TestimonialTable testimonials={testimonials} />
        </Paper>
      </Container>
    </>
  );
}
