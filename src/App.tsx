import { useState } from 'react';

import { TWMuiThemeProvider } from './modules/styles/theming';
import './App.scss';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const handleSetToggleDarkMode = ($e: Event) => {
    setToggleDarkMode(!toggleDarkMode);
  }

  return (
    <TWMuiThemeProvider
      setToggleDarkMode={setToggleDarkMode}
      toggleDarkMode={toggleDarkMode}>
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
    </TWMuiThemeProvider>
  );
}

export default App;
