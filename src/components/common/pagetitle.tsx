"use client";

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
                backgroundColor: 'var(--mantine-color-dark-7)', 
                backgroundSize: '300px 300px', 
                // backgroundImage:'linear-gradient(45deg, \
                //     var(--mantine-color-primary-1) 25%, transparent 25%, \
                //     transparent 50%, var(--mantine-color-primary-2) 50%, \
                //     var(--mantine-color-primary-1) 75%, transparent 75%)' 
            }}
            >
                <Container size="xl">
                    <Title 
                        size={100} 
                        textWrap="nowrap" 
                        lineClamp={1} 
                        c="var(--mantine-color-dark-7)" 
                        style={{ 
                            fontStyle: 'italic', 
                            letterSpacing: -8, 
                            WebkitTextStroke: '2px var(--mantine-color-primary-6)', 
                            textShadow: '3px 3px 1px var(--mantine-color-primary-6)'
                    }}>
                        {children}
                    </Title>
            </Container>
        </Container>
    );

}