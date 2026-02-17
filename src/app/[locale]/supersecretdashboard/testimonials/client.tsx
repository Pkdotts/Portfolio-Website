"use client";

import { useState} from "react";
import Sidebar from "@/components/ui/dashboard/dashbar";

import { useDisclosure } from "@mantine/hooks";
import { ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";
import { Testimonial } from "@/generated/prisma/client";
import { Group, Stack, Title, Text, Drawer, Container, Paper, Divider, Button, Badge, ActionIcon, CheckIcon } from "@mantine/core";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { acceptTestimonial, deleteTestimonial } from "@/app/api/controllers/testimonialsController";
import { IconCheck, IconTrash } from "@tabler/icons-react";

function TestimonialTable({testimonials}: {testimonials: Testimonial[]}){
  return(
    <Stack p="sm">
        {testimonials.map((t) => (
            <InnerPaper key={t.testimonialId}>
                <Group justify="space-between">
                    <Title order={4}>{t.name}</Title><Text c="var(--mantine-color-main-10)">{t.date.toLocaleDateString() + " " + t.date.toLocaleTimeString()}</Text>
                </Group>
                <Text>{t.message}</Text>
                <Group justify="space-between">
                  {
                    t.accepted ?
                    <>
                    <Badge variant="outline">Accepted</Badge>
                    <ActionIcon variant="subtle" radius="xl" onClick={() => {deleteTestimonial(t.testimonialId)}}>
                      <IconTrash/>
                    </ActionIcon>
                    </>
                    :
                    <>
                    <Badge >Pending</Badge>
                    <Group>
                      <ActionIcon variant="subtle" radius="xl" onClick={() => {acceptTestimonial(t.testimonialId)}}>
                        <IconCheck/>
                      </ActionIcon>
                      <ActionIcon variant="subtle" radius="xl" onClick={() => {deleteTestimonial(t.testimonialId)}}>
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


export default function TestimonialDashboard({
    testimonials,
    }: {
    testimonials: Testimonial[],
    }) {


    return (
      <>
      
        <Container w="100%" p="xs" size="md">
          <Paper bdrs="md">
                <DashBar/>
            <Divider/>
            <TestimonialTable testimonials={testimonials}/>
          </Paper>
        </Container>
          
        </>
    );
}
