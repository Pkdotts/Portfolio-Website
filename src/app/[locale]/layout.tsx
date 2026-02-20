import type { Metadata } from "next";
import '../globals.css';
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { cssVarResolver, darkTheme, lightTheme } from "../theme";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { Box, Flex, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { barlow, encodeSans, quicksand } from "../fonts";
import { createClient } from "@/lib/supabase/server";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export const metadata: Metadata = {
  title: "Andy Le",
  description: "Andy Le's Portfolio",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en" {...mantineHtmlProps} className={`${barlow.variable} ${encodeSans.variable} ${quicksand.variable}`}>
      <body >
        <NextIntlClientProvider>
          <MantineProvider theme={lightTheme} cssVariablesResolver={cssVarResolver} >
            <Flex direction="column" mih="100vh" className="mainBody">
              <Header user={user}/>
              <Box style={{flexGrow: 1}}>
                {children}
              </Box>
              {/* <GrainFilterOverlay/> */}
              <Footer/>
            </Flex>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
