import { Button, Stack, Title } from "@mantine/core";

export default function Sidebar(){
    return(
        <Stack
            m="md"
            bdrs="lg"
            bg="var(--mantine-color-main-0)"
            style={{
                minHeight: "100vh", 
                position: "relative", 
                left: 0}} 
            p="sm">
            <Title>Dashboard</Title>
            <Button component="a" href="/dashboard/about" >
                About
            </Button>
            <Button component="a" href="/dashboard/projects" >
                Project
            </Button>
            <Button component="a" href="/dashboard/art" >
                Art
            </Button>
        </Stack>
    )
}