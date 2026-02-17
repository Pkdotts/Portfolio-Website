'use client'

import { MantineProvider } from "@mantine/core";
import { cssVarResolver, darkTheme, lightTheme } from "../theme";
import { useThemeToggle } from "../contexts/theme-toggle";

export function LayoutInner({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useThemeToggle();

  return (
    <MantineProvider
      theme={colorScheme === 'dark' ? darkTheme : lightTheme}
      defaultColorScheme={colorScheme}
      cssVariablesResolver={cssVarResolver}
    >
      {children}
    </MantineProvider>
  );
}
