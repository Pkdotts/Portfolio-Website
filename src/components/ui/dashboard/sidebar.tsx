import { Button, Stack, Title } from "@mantine/core";

export default function Sidebar(){
    return(
        <Stack 
            bd="1px solid var(--mantine-color-primary-4)"  
            style={{
                borderLeft: "0px", 
                borderTop: "0px", 
                borderBottom: "0px", 
                width: "20vw", 
                minHeight: "100vh", 
                position: "relative", 
                left: 0}} 
            bg="var(--mantine-color-primary-1)" 
            p="sm">
            <Title>Dashboard</Title>
            <Button component="a" href="/dashboard/about">
                About
            </Button>
            <Button component="a" href="/dashboard/projects">
                Project
            </Button>
            <Button component="a" href="/dashboard/art">
                Art
            </Button>
        </Stack>
    )
}