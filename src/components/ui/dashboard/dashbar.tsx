import { Button, Divider, Group, Title } from "@mantine/core";

export default function DashBar(){
    return(
        <div>
            <Group
                bdrs="md"
                p="xs"
                justify="space-between"
            >
                <Title>The Secret Dashboard</Title>
                <Group>
                    <Button variant="white" component="a" href="/dashboard/about" >
                        About
                    </Button>
                    <Button variant="white" component="a" href="/dashboard/projects" >
                        Games
                    </Button>
                    <Button variant="white" component="a" href="/dashboard/art" >
                        Art
                    </Button>
                    <Button variant="white" component="a" href="/dashboard/testimonials" >
                        Testimonials
                    </Button>
                </Group>
            </Group>
            <Divider/>
        </div>
    )
}