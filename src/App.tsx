import { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { COLOR_OBJ, DARK_COLOR, LIGHT_COLOR } from './modules/styles/colors';
import { FONT_FAMILY_SERIF } from './modules/styles/variables';
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
        secondary: LIGHT_COLOR.text,
        disabled: COLOR_OBJ.lightGray
      }
    },
    typography: {
      fontFamily: FONT_FAMILY_SERIF,
      fontSize: 14,
      fontWeightBold: 800,
      fontWeightMedium: 400,
      fontWeightRegular: 300,
      fontWeightLight: 100,
      button: {
        color: COLOR_OBJ.white,
        textTransform: 'capitalize'
      },
      caption: {
        color: toggleDarkMode ? DARK_COLOR.color : LIGHT_COLOR.color,
        fontSize: '.6rem'
      },
      h1: {
        color: toggleDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: '3.25rem'
      },
      h3: {
        color: toggleDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: '1.7rem'
      },
      h4: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: '1.25rem',
        fontWeight: 100
      },
      h6: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: '0.75rem',
        textTransform: 'uppercase'
      },
      subtitle1: {
        color: toggleDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: '1.7rem'
      },
      subtitle2: {
        color: toggleDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
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
