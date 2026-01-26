import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { AppShell, AppShellMain, Box, ColorSchemeScript, Container, Flex, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { defaultTheme } from "./theme";


export const metadata: Metadata = {
  title: "Andy Bao Le",
  description: "Andy Bao Le's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body >
        <MantineProvider theme={defaultTheme}>
          <Flex direction="column" mih="100vh" style={{backgroundColor: defaultTheme.primaryColor}}>
            <Header/>
            <Box style={{flexGrow: 1, backgroundColor: 'var(--mantine-color-primary-4)',} }>
              {children}
            </Box>
            <Footer/>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
