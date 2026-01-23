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
        "#ff8421","#ff7605","#e46400","#cc3a00","#b23200"
        ],
    light: colorsTuple('#fffcf0')
  },

  components: {
    Button: Button.extend({
      classNames: classes,
    }),
    AppShell: {
        styles: {
            header: {
                height: 90,
                padding: 10,
                backgroundColor: 'var(--mantine-color-dark-0)',
                color: 'var(--mantine-color-light-0)',
                border: 'none',
            },
            main:{
                backgroundColor: 'var(--mantine-color-primary-4)'
            },
            footer: {
              height: 90,
                padding: 10,
                backgroundColor: 'var(--mantine-color-dark-0)',
                color: 'var(--mantine-color-light-0)',
                border: 'none',
            }
        }
    }
  },

});