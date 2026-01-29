"use client";

import {
    Container,
    Title,
} from "@mantine/core";

export default function PageTitle({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <Container size="100%" p="0" style={{ backgroundColor: 'var(--mantine-color-primary-5)', backgroundSize: '300px 300px', backgroundImage:'linear-gradient(45deg, \
      var(--mantine-color-primary-4) 25%, transparent 25%, \
      transparent 50%, var(--mantine-color-primary-4) 50%, \
      var(--mantine-color-primary-4) 75%, transparent 75%)' }}>
            <Title size={100} textWrap="nowrap" lineClamp={1} c="var(--mantine-color-primary-2)" style={{ fontStyle: 'italic', letterSpacing: -8, WebkitTextStroke: '1px var(--mantine-color-darkAccent-0)', textShadow: '3px 3px 0px var(--mantine-color-darkAccent-0)'} }>{children}</Title>
        </Container>
    );

}