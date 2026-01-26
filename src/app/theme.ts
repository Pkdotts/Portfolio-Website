'use client'

import { Button, colorsTuple, createTheme } from '@mantine/core';
import classes from './theme.module.css';

export const defaultTheme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'primary',

  colors: {
    dark: colorsTuple('#211826'),
    primary: [
        "#fff2e0","#ffe4cb","#ffdf99","#ffc863","#ffab43",
        "#ff9023","#ff7605","#dc7a4b","#de5c49","#c94358"
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
                
                
            }
        }
    }
  },

});