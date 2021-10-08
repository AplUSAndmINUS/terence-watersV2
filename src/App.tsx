import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

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
      <div className="App">
        <BrowserRouter>
          {ROUTES.map(r => (
            !r.subMenu && !r.notFound ? <Link to={r.path}>{r.componentName}</Link>
              : null))}

          <Switch>
            {ROUTES.map(r => (
              !r.notFound ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
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
