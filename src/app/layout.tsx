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
          <Flex direction="column" mih="100vh" className="mainBody">
            <Header/>
            <Box style={{flexGrow: 1} }>
              {children}
            </Box>
            <GrainFilterOverlay/>
            <Footer/>
          </Flex>
        </MantineProvider>
      </body>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300..700&display=swap');
</style>
    </html>
  );
}
