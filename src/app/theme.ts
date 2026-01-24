'use client'

import { Button, colorsTuple, createTheme } from '@mantine/core';
import classes from './theme.module.css';

export const defaultTheme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'primary',

  colors: {
    dark: colorsTuple('#211826'),
    primary: [
        "#fff2e0","#ffe4cb","#ffdf99","#ffc863","#ffa136",
        "#ff8421","#ff7605","#e46400","#d35106","#bb4e05"
        ],
    light: colorsTuple('#fffcf0')
  },

  components: {
    Button: Button.extend({
      classNames: classes,
    }),
    AppShell: {
        styles: {
            main:{
                backgroundColor: 'var(--mantine-color-primary-4)'
            }
        }
    }
  },

});