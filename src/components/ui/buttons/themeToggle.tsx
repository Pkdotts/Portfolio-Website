import { ActionIcon } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from 'clsx';
import classes from './themeToggle.module.css';
import { darkTheme, lightTheme } from "@/app/theme";
import { useThemeToggle } from "@/app/contexts/theme-toggle";

export function ThemeToggle(){
  const { toggleColorScheme, colorScheme } = useThemeToggle();

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {colorScheme === "light" ? 
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5}/> :
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      }
    </ActionIcon>
  );
}