import type { Metadata } from "next";
import '@mantine/core/styles.css';
import './globals.css';
import { Box, Flex, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { defaultTheme } from "./theme";
import GrainFilterOverlay from "@/components/ui/overlays/grainfilter";
import ScrollReveal from "@/components/ui/scrollfade/scrollreveal";

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
          <ScrollReveal />
          <Flex direction="column" mih="100vh" style={{backgroundColor: defaultTheme.primaryColor}}>
            <Header/>
            <Box style={{flexGrow: 1, backgroundColor: 'var(--mantine-color-primary-4)',} }>
              {children}
            </Box>
            <GrainFilterOverlay/>
            <Footer/>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
