import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { COLOR_OBJ, DARK_COLOR, LIGHT_COLOR } from '../../modules/styles/colors';
import { FONT_FAMILY_SERIF, FONT_SIZE, FONT_WEIGHT } from '../../modules/styles/variables';

export interface ThemeProps {
  children?: React.ReactFragment;
  setToggleDarkMode?: Function;
  toggleDarkMode?: boolean;
}

export const TWMuiThemeProvider = ({
  children,
  setToggleDarkMode,
  toggleDarkMode = false }: ThemeProps) => {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 960,
        xl: 1440
      }
    },
    palette: {
      type: toggleDarkMode ? 'dark' : 'light',
      primary: {
        contrastText: COLOR_OBJ.colorContrastTextPrimary,
        dark: COLOR_OBJ.colorDark,
        light: COLOR_OBJ.colorLight,
        main: COLOR_OBJ.colorMainPrimary
      },
      secondary: {
        contrastText: COLOR_OBJ.colorContrastTextSecondary,
        main: COLOR_OBJ.colorMainSecondary
      },
      error: {
        main: COLOR_OBJ.red
      },
      success: {
        main: COLOR_OBJ.green
      },
      warning: {
        main: COLOR_OBJ.yellow
      },
      info: {
        main: COLOR_OBJ.lightBlue
      },
      text: {
        primary: toggleDarkMode ? DARK_COLOR.text : LIGHT_COLOR.text,
        secondary: toggleDarkMode ? DARK_COLOR.text : LIGHT_COLOR.text,
        disabled: COLOR_OBJ.lightGray
      }
    },
    typography: {
      fontFamily: FONT_FAMILY_SERIF,
      fontSize: FONT_SIZE.body,
      fontWeightBold: FONT_WEIGHT.bold,
      fontWeightMedium: FONT_WEIGHT.medium,
      fontWeightRegular: FONT_WEIGHT.regular,
      fontWeightLight: FONT_WEIGHT.light,
      button: {
        color: COLOR_OBJ.white,
        textTransform: 'lowercase',
        fontFamily: 'Roboto, sans-serif'
      },
      caption: {
        color: toggleDarkMode ? DARK_COLOR.color : LIGHT_COLOR.color,
        fontSize: FONT_SIZE.caption,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: 'Roboto, sans-serif'
      },
      h1: {
        color: toggleDarkMode ? COLOR_OBJ.white : COLOR_OBJ.black,
        fontSize: FONT_SIZE.title,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF,
        lineHeight: '48px',
        textTransform: 'lowercase'
      },
      h2: {
        color: toggleDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: FONT_SIZE.heading,
        fontWeight: FONT_WEIGHT.bold,
        fontFamily: 'Proxima Nova, sans-serif',
        letterSpacing: '-0.2px',
        lineHeight: '40px',
        textTransform: 'lowercase'
      },
      h3: {
        color: toggleDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: FONT_SIZE.sectionTitle,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'lowercase'
      },
      h4: {
        color: toggleDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: FONT_SIZE.subheading,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      },
      h5: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: FONT_SIZE.tertiary,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      },
      h6: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: FONT_SIZE.quaternary,
        textTransform: 'uppercase',
        fontFamily: FONT_FAMILY_SERIF
      },
      subtitle1: {
        color: toggleDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: FONT_SIZE.subheading,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      },
      subtitle2: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: FONT_SIZE.tertiary,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      }
    }
  });

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
};

export default TWMuiThemeProvider;