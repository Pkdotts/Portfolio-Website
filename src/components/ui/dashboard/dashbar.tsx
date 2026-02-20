import { Button, Divider, Group, Title } from "@mantine/core";

export default function DashBar(){
    return(
        <div>
            <Group
                bdrs="md"
                p="xs"
                justify="space-between"
            >
                <Title>The Super Secret Dashboard</Title>
                <Group>
                    <Button variant="white" component="a" href="/supersecretdashboard/home" >
                        Home
                    </Button>
                    <Button variant="white" component="a" href="/supersecretdashboard/about" >
                        About
                    </Button>
                    <Button variant="white" component="a" href="/supersecretdashboard/projects" >
                        Games
                    </Button>
                    <Button variant="white" component="a" href="/supersecretdashboard/art" >
                        Art
                    </Button>
                    <Button variant="white" component="a" href="/supersecretdashboard/testimonials" >
                        Testimonials
                    </Button>
                    <Button variant="white" component="a" href="/supersecretdashboard/contactmessages" >
                        Contact Messages
                    </Button>
                </Group>
            </Group>
            <Divider/>
        </div>
    )
}