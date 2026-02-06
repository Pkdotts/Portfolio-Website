'use client';

import {
    Container,
    Title,
} from "@mantine/core";

export default function PageTitle({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <Container 
            size="100%" 
            p="0" 
            style={{ 
                backgroundColor: 'var(--mantine-color-main-4)', 
                backgroundSize: '300px 300px', 
                // backgroundImage:'linear-gradient(45deg, \
                //     var(--mantine-color-accent-1) 25%, transparent 25%, \
                //     transparent 50%, var(--mantine-color-accent-2) 50%, \
                //     var(--mantine-color-accent-1) 75%, transparent 75%)' 
            }}
            >
                <Container size="xl">
                    <Title 
                        size={100} 
                        textWrap="nowrap" 
                        lineClamp={1} 
                        c="var(--mantine-color-main-4)" 
                        style={{ 
                            fontStyle: 'italic', 
                            letterSpacing: 8, 
                            WebkitTextStroke: '2px var(--mantine-color-accent-6)', 
                            textShadow: '3px 3px 1px var(--mantine-color-accent-6)'
                    }}>
                        {children}
                    </Title>
            </Container>
        </Container>
    );

}