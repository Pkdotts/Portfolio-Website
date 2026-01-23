"use client";

import {
    Container,
    Title,
} from "@mantine/core";

export default function PageTitle({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <Container size="100%" p="0" style={{ backgroundColor: 'var(--mantine-color-light-0)' }}>
            <Title size={120} textWrap="nowrap" lineClamp={1} c="var(--mantine-color-primary-3)" style={{ fontStyle: 'italic', letterSpacing: -8, WebkitTextStroke: '1px var(--mantine-color-dark-0)',} }>{children}</Title>
        </Container>
    );

}