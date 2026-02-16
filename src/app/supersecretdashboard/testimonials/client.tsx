"use client";

import { useState} from "react";
import Sidebar from "@/components/ui/dashboard/dashbar";

import { useDisclosure } from "@mantine/hooks";
import { ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";
import { Testimonial } from "@/generated/prisma/client";
import { Group, Stack, Title, Text, Drawer, Container, Paper, Divider, Button } from "@mantine/core";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { acceptTestimonial, deleteTestimonial } from "@/app/api/controllers/testimonialsController";

function TestimonialTable({testimonials}: {testimonials: Testimonial[]}){
  return(
    <Stack p="sm">
        {testimonials.map((t) => (
            <InnerPaper key={t.testimonialId}>
                <Group justify="space-between">
                    <Title order={4}>{t.name}</Title> <Text c="var(--mantine-color-main-9)">{t.date.toDateString()}</Text>
                </Group>
                <Text>{t.message}</Text>
                <Group justify="flex-end">
                  <Button onClick={() => {acceptTestimonial(t.testimonialId)}}>
                    Accept
                  </Button>
                  <Button onClick={() => {deleteTestimonial(t.testimonialId)}}>
                    Deny
                  </Button>
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
      
        <Container w="100%" p="xs" size="xl">
          <Paper bdrs="md">
                <DashBar/>
            <Divider/>
            <TestimonialTable testimonials={testimonials}/>
          </Paper>
        </Container>
          
        </>
    );
}
