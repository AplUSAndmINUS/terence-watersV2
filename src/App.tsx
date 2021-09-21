import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { colorObj, darkColor, lightColor } from './modules/styles/colors';

import './App.scss';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const fontFamily = `${"'Proxima Nova', 'Roboto', 'Helvetica Neue', 'Arial', 'Verdana', 'sans-serif'"}`;

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
        contrastText: colorObj.colorContrastTextPrimary,
        dark: colorObj.colorDark,
        light: colorObj.colorLight,
        main: colorObj.colorMainPrimary
      },
      secondary: {
        contrastText: colorObj.colorContrastTextSecondary,
        main: colorObj.colorMainSecondary
      },
      error: {
        main: colorObj.red
      },
      success: {
        main: colorObj.green
      },
      warning: {
        main: colorObj.yellow
      },
      info: {
        main: colorObj.lightBlue
      },
      text: {
        primary: toggleDarkMode ? darkColor.text : lightColor.text,
        secondary: lightColor.text,
        disabled: colorObj.lightGray
      }
    },
    typography: {
      fontFamily: fontFamily,
      fontSize: 14,
      fontWeightBold: 700,
      fontWeightMedium: 500,
      fontWeightRegular: 300,
      fontWeightLight: 100,
      button: {
        color: colorObj.white,
        textTransform: 'capitalize'
      },
      caption: {
        color: toggleDarkMode ? darkColor.color : lightColor.color,
        fontSize: '.6rem'
      },
      h1: {
        color: toggleDarkMode ? darkColor.largeHeading : lightColor.largeHeading,
        fontSize: '3.25rem'
      },
      h3: {
        color: toggleDarkMode ? darkColor.pageHeading : lightColor.pageHeading,
        fontSize: '1.7rem'
      },
      h4: {
        color: toggleDarkMode ? darkColor.subHeading : lightColor.subHeading,
        fontSize: '1.25rem',
        fontWeight: 100
      },
      h6: {
        color: toggleDarkMode ? darkColor.subHeading : lightColor.subHeading,
        fontSize: '0.75rem',
        textTransform: 'uppercase'
      },
      subtitle1: {
        color: toggleDarkMode ? darkColor.pageHeading : lightColor.pageHeading,
        fontSize: '1.7rem'
      },
      subtitle2: {
        color: toggleDarkMode ? darkColor.subHeading : lightColor.subHeading,
        fontSize: '1.25rem',
        fontWeight: 100
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
