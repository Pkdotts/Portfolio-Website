"use client";

import { Stack, Group, Paper,  Container, Button, Divider, Grid, GridCol, TextInput, ActionIcon } from "@mantine/core";

import { Link } from "@/generated/prisma/client";
import DashBar from "@/components/ui/dashboard/dashbar";
import InnerPaper from "@/components/ui/cards/innerpaper";
import { IconLink, IconTrash } from "@tabler/icons-react";
import IconSelector from "@/components/ui/dashboard/IconSelector"; 
import { formRootRule, isNotEmpty, useForm } from "@mantine/form";
import { updateLinks } from "@/app/api/controllers/contactInfoController";



export default function LinkDashboard({
    links,
    }: {
    links: Link[],
    }) {
    const form = useForm({
    initialValues: {
        links: links.length
        ? links
        : [{ linkId: 0, name: '', link: '', icon: '', order: 0 }],
    },
    validate: {
      links: {
        [formRootRule]: isNotEmpty('At least one link is required'),
        name: isNotEmpty('Name is required'),
      },
    },
  });

    const fields = form.getValues().links.map((link, index) => (
        <InnerPaper>
            <Container p="sm">
            <Stack>

            <input type="hidden" name="linkId" value={link.linkId}/>
            <input type="hidden" name="order" value={index}/>
            <Grid>
            <GridCol span={1}>
                <IconSelector
                    value={link.icon}
                    onChange={(iconName) =>
                        form.setFieldValue(`links.${index}.icon`, iconName)
                    }
                />
            </GridCol>
            <GridCol span={3}>
                <TextInput name="name" placeholder="Name" {...form.getInputProps(`links.${index}.name`)} required  />
            </GridCol>
            <GridCol span={6}>
                <TextInput leftSection={<IconLink/>} name="link" placeholder="Link" {...form.getInputProps(`links.${index}.link`)}  h="100%" w="100%"/>
            </GridCol>
            <GridCol span={1} >
                <ActionIcon onClick={() => form.removeListItem('links', index)}>
                    <IconTrash />
                </ActionIcon>
            </GridCol>
            </Grid>
            </Stack>
            </Container>
        </InnerPaper>
    ))

    return (
      <>
      
        <Container w="100%" p="xs" size="md">
          <Paper bdrs="md">
            <DashBar/>
            <form
                onSubmit={form.onSubmit(async (values) => {
                    await updateLinks(values.links);
                    })}
                >
                <Stack p="lg" gap="xs">

                <Group justify="space-between" mt="md">
                    <Button
                    variant="default"
                    onClick={() => {
                        form.insertListItem('links', {
                            name: '', link: '', icon: '', order: 0,
                            linkId: 0
                        });
                        form.clearFieldError('links');
                    }}
                    >
                    Add link
                    </Button>
                    <Button type="submit">Submit</Button>
                </Group>
                <Divider/>
                {fields}
                </Stack>
            </form>
          </Paper>
        </Container>
        </>
    );
}
