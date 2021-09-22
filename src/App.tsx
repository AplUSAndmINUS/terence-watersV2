import { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { COLOR_OBJ, DARK_COLOR, LIGHT_COLOR } from './modules/styles/colors';
import { FONT_FAMILY_SERIF, FONT_SIZE, FONT_WEIGHT } from './modules/styles/variables';
import './App.scss';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

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
        textTransform: 'capitalize',
        fontFamily: 'Roboto, sans-serif'
      },
      caption: {
        color: toggleDarkMode ? DARK_COLOR.color : LIGHT_COLOR.color,
        fontSize: FONT_SIZE.caption,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: 'Roboto, sans-serif'
      },
      h1: {
        color: toggleDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: FONT_SIZE.heading,
        fontWeight: FONT_WEIGHT.bold,
        fontFamily: 'Proxima Nova, sans-serif',
      },
      h2: {
        color: toggleDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: FONT_SIZE.pageTitle,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: 'Roboto, sans-serif',
      },
      h3: {
        color: toggleDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: FONT_SIZE.subheading,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: FONT_FAMILY_SERIF
      },
      h4: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: FONT_SIZE.tertiary,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF
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
        fontFamily: FONT_FAMILY_SERIF
      },
      subtitle2: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: FONT_SIZE.tertiary,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
