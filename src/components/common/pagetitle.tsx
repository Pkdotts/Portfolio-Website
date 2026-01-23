"use client";

import {
    Container,
    Title,
} from "@mantine/core";

export function PageTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <Container size="100%" p="0" style={{ backgroundColor: 'var(--mantine-color-light-0)' }}>
            <Title size={120} textWrap="nowrap" lineClamp={1} c="var(--mantine-color-primary-3)" style={{ fontStyle: 'italic', letterSpacing: -16} }>{children}</Title>
        </Container>
    );

}