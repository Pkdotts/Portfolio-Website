'use client'

import { Button, colorsTuple, createTheme } from '@mantine/core';
import classes from './theme.module.css';

export const defaultTheme = createTheme({
  fontFamily: 'Quicksand, sans-serif',
  headings: { fontFamily: 'Barlow, sans-serif'},
  primaryColor: 'primary',
  
  colors: {
    dark: [
        "#4d4d52","#45454c","#3e3e46","#373740","#32333b",
        "#2e2f36","#2a2b31","#25272c","#1d1f22","#191b1d"
        ],
    darkAccent: colorsTuple('#30333a'),
    primary: [
        "#fff2e0","#ffe4cb","#ffdf99","#ffc863","#ffab43",
        "#ff9023","#fc7302","#df7848","#f05b21","#db3417"
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