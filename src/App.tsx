import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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
      type: toggleDarkMode ? 'dark' : 'light'
    },
  });

  // <ThemeProvider theme={theme}>{children}</ThemeProvider>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}

export default App;
