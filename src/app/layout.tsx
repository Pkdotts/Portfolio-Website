import type { Metadata } from "next";
import './globals.css';
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { cssVarResolver, darkTheme, lightTheme } from "./theme";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { Box, Flex, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { barlow, encodeSans, quicksand } from "./fonts";


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
    <html lang="en" {...mantineHtmlProps} className={`${barlow.variable} ${encodeSans.variable} ${quicksand.variable}`}>
      <body >
        <MantineProvider theme={lightTheme} cssVariablesResolver={cssVarResolver} >
          <Flex direction="column" mih="100vh" className="mainBody">
            <Header/>
            <Box style={{flexGrow: 1} }>
              {children}
            </Box>
            {/* <GrainFilterOverlay/> */}
            <Footer/>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
