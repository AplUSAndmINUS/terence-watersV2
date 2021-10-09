import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Container, Icon } from '@material-ui/core';
import styled from 'styled-components';

import { SOCIAL_MEDIA } from './modules/constants/social-media';
import { ROUTES } from './modules/constants/routes';
import { theme, TWMuiThemeProvider } from './modules/styles/theming';
import './App.scss';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const handleSetToggleDarkMode = ($e: Event) => {
    setToggleDarkMode(!toggleDarkMode);
  }

  const SocialMediaLinks = styled(Container)`
    ${theme.breakpoints.down('xs')} {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    };

    ${theme.breakpoints.up('sm')} {
      position: absolute;
      top: 24px;
      right: 8px;
    };
  `;

  const Router = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <SocialMediaLinks className="social_media-links">
            {SOCIAL_MEDIA.map(s => (
              <Link to={s.path}><Icon component={s.icon} color="primary" fontSize="large" /></Link>
            ))}
          </SocialMediaLinks>

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
