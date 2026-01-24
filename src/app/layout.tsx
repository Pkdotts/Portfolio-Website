import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { AppShell, AppShellMain, ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
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
          <AppShell
          >
            <AppShellMain style={{backgroundColor: defaultTheme.primaryColor}}>
              <Header/>
              {children}
               <Footer/>
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
