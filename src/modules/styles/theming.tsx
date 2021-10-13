import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { COLORS, DARK_COLOR, LIGHT_COLOR } from '../../modules/styles/colors';
import { FONT_FAMILY_SERIF, FONT_SIZE, FONT_WEIGHT } from '../../modules/styles/variables';

export interface ThemeProps {
  children: any;
  isDarkMode: boolean;
  isHomePage: boolean;
  setDarkMode: Function;
  setHomePage: Function;
}

let isDarkMode = false;
let isHomePage = true;
export const theme = createTheme({
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
    type: isDarkMode ? 'dark' : 'light',
    primary: {
      contrastText: COLORS.colorContrastTextPrimary,
      dark: COLORS.colorDark,
      light: COLORS.colorLight,
      main: COLORS.colorMainPrimary
    },
    secondary: {
      contrastText: COLORS.colorContrastTextSecondary,
      main: COLORS.colorMainSecondary
    },
    error: {
      main: COLORS.red
    },
    success: {
      main: COLORS.green
    },
    warning: {
      main: COLORS.yellow
    },
    info: {
      main: COLORS.lightBlue
    },
    text: {
      primary: isHomePage
        ? COLORS.white
        : isDarkMode
          ? DARK_COLOR.text
          : LIGHT_COLOR.text,
      secondary: isDarkMode ? DARK_COLOR.text : LIGHT_COLOR.text,
      disabled: COLORS.lightGray
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0px',
        paddingLeft: '24px',
        paddingRight: '24px'
      },
      label: {
        fontSize: '1rem'
      }
    },
    MuiButtonBase: {
      root: {
        borderRadius: '0px'
      }
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
      color: COLORS.white,
      textTransform: 'lowercase',
      fontFamily: 'Roboto, sans-serif'
    },
    caption: {
      color: isDarkMode ? DARK_COLOR.color : LIGHT_COLOR.color,
      fontSize: `${FONT_SIZE.caption}rem`,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: 'Roboto, sans-serif'
    },
    h1: {
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontSize: `${FONT_SIZE.title}rem`,
      fontWeight: FONT_WEIGHT.light,
      fontFamily: FONT_FAMILY_SERIF,
      lineHeight: '48px',
      textTransform: 'lowercase'
    },
    h2: {
      color: isDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
      fontSize: `${FONT_SIZE.heading}rem`,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: `"Proxima Nova", sans-serif`,
      letterSpacing: '-0.2px',
      lineHeight: '40px',
      textTransform: 'lowercase'
    },
    h3: {
      color: isDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
      fontSize: `${FONT_SIZE.sectionTitle}rem`,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: 'Roboto, sans-serif',
      textTransform: 'lowercase'
    },
    h4: {
      color: isDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
      fontSize: `${FONT_SIZE.subheading}rem`,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY_SERIF,
      textTransform: 'lowercase'
    },
    h5: {
      color: isDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
      fontSize: `${FONT_SIZE.tertiary}rem`,
      fontWeight: FONT_WEIGHT.light,
      fontFamily: FONT_FAMILY_SERIF,
      textTransform: 'lowercase'
    },
    h6: {
      color: isDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
      fontSize: `${FONT_SIZE.quaternary}rem`,
      textTransform: 'uppercase',
      fontFamily: FONT_FAMILY_SERIF
    },
    subtitle1: {
      color: isDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
      fontSize: `${FONT_SIZE.subheading}rem`,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY_SERIF,
      textTransform: 'lowercase'
    },
    subtitle2: {
      color: isDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
      fontSize: `${FONT_SIZE.tertiary}rem`,
      fontWeight: FONT_WEIGHT.light,
      fontFamily: FONT_FAMILY_SERIF,
      textTransform: 'lowercase'
    }
  }
});

export const TWMuiThemeProvider = ({
  children,
  isDarkMode = false,
  isHomePage = false,
  setDarkMode,
  setHomePage }: ThemeProps) => {

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
};

export default TWMuiThemeProvider;