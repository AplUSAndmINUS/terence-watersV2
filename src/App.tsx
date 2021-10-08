import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { ROUTES } from './modules/constants/routes';
import { TWMuiThemeProvider } from './modules/styles/theming';
import './App.scss';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const handleSetToggleDarkMode = ($e: Event) => {
    setToggleDarkMode(!toggleDarkMode);
  }

  const Router = () => {
    return (
      <BrowserRouter>
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
            
            {ROUTES.map(r => (
              !r.subMenu && !r.notFound ? <Link to={r.path}>{r.componentName}</Link>
                : null))}

            <Switch>
              {ROUTES.map(r => (
                !r.notFound ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
              ))}
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    )
  }

  return (
    <TWMuiThemeProvider
      children={<Router />}
      setToggleDarkMode={setToggleDarkMode}
      toggleDarkMode={toggleDarkMode} />
  );
}

export default App;
