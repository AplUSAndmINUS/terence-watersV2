import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { ROUTES } from './modules/constants/routes';
import { TWMuiThemeProvider } from './modules/styles/theming';
import About from './pages/about/about';
import NotFound from './pages/404/404';
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
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/NotFoundSpot">404</Link>
          </header>
        </div>
      </Router>
    </TWMuiThemeProvider>
  );
}

export default App;
