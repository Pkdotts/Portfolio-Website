'use client';

import { createContext, useContext, useState } from 'react';
import { MantineColorScheme } from '@mantine/core';

type ThemeContextType = {
  colorScheme: MantineColorScheme;
  toggleColorScheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<MantineColorScheme>('dark');

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeToggle() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeToggle must be inside ThemeProviderWrapper');
  return ctx;
}