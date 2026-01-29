'use client'

import { Button, colorsTuple, createTheme } from '@mantine/core';
import classes from './theme.module.css';

export const defaultTheme = createTheme({
  fontFamily: 'Quicksand, sans-serif',
  headings: { fontFamily: 'Barlow, sans-serif'},
  primaryColor: 'primary',

  colors: {
    dark: colorsTuple('#110a13'),
    darkAccent: colorsTuple('#38110e'),
    primary: [
        "#fff2e0","#ffe4cb","#ffdf99","#ffc863","#ffab43",
        "#ff9023","#ff7605","#df7848","#f05b21","#db3417"
        ],
    light: colorsTuple('#f7f1ec')
  },

  components: {
    Button: Button.extend({
      classNames: classes,
    }),
    AppShell: {
        styles: {
            main:{
                
                
            }
        }
    }
  },

  

});