'use client';

import { colorsTuple, createTheme, CSSVariablesResolver } from '@mantine/core';

export const darkTheme = createTheme({
  fontFamily: 'Quicksand, sans-serif',
  headings: { fontFamily: 'Barlow, sans-serif'},
  primaryColor: 'accent',
  
  
  colors: {
    main: [
        "#4d4d52","#45454c","#3e3e46","#373740","#32333b",
        "#2e2f36","#2a2b31","#25272c","#1d1f22","#191b1d"
        ],
    accent: [
        "#fff2e0","#ffe4cb","#ffdf99","#ffc863","#ffab43",
        "#ff9023","#fc7302","#df7848","#f05b21","#db3417"
        ],
    light: colorsTuple('#f7f1ec')
  },

  other: {
    text: '#fafafa'
  },
  
});

export const lightTheme = createTheme({
  fontFamily: 'Quicksand, sans-serif',
  headings: { fontFamily: 'Barlow, sans-serif'},
  primaryColor: 'accent',

  colors: {
    main: [
        "#fafafa","#f7f7f8","#f4f4f6","#f0f0f3","#ededf1",
        "#e9e9ef","#e6e6ec","#e2e2ea","#d4d4df","#d0d0db", "rgba(44, 45, 59, 0.55)"
        ],
    // main: [
    //     "#fafafa","#f8f7f7","#f6f5f4","#f3f1f0","#f1eded",
    //     "#efe9ea","#ece6e8","#e2e2ea","#d4d4df","#d0d0db", "rgba(44, 45, 59, 0.45)"
    //     ],
    // main: [
    //     "#fafafa","#f7f7f8","#f4f4f6","#f0f0f3","#ededf1",
    //     "#e9e9ef","#e6e6ec","#e2e2ea","#e1dde2","#d8cecf", "rgba(44, 45, 59, 0.45)"
    //     ],
    text: colorsTuple('#30333a'),
    accent: [
        "#fff2e0","#ffe4cb","#ffdf99","#ffc863","#ffab43",
        "#ff9023","#fc7302","#df7848","#f05b21","#db3417"
        ],
    light: colorsTuple('#f7f1ec')
  },

  other: {
    text: '#4d4d52'
  },

  components:{
    TableTd: {
      styles: { verticalAlign: "top" }
    }
  }

});

export const cssVarResolver: CSSVariablesResolver = (theme) => ({
  // Shared CSS variables that should be accessible independent from color scheme
  variables: {},
  // CSS variables available only in dark color scheme
  light: {
    '--mantine-color-text': theme.other.text,
  },
  // CSS variables available only in light color scheme
  dark: {
    '--mantine-color-text': theme.other.text,
  }
})