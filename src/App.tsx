import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Box, Container, Icon } from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';
import styled from 'styled-components';

import { SOCIAL_MEDIA } from './modules/constants/social-media';
import { ROUTES } from './modules/constants/routes';
import { theme, TWMuiThemeProvider } from './modules/styles/theming';
import './App.scss';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const SocialMediaLinks = styled(Box)`
    ${theme.breakpoints.down('xs')} {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    };

    ${theme.breakpoints.up('sm')} {
      position: absolute;
      top: 24px;
      right: 8px;
      display: flex;
      flex-direction: row;
    };
  `;

  const NavigationLinks = styled(Container)`
    ${theme.breakpoints.down('xs')} {
      width: 100%;
      height: 100%;
      position: fixed;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
    };

    ${theme.breakpoints.up('sm')} {
      position: absolute;
      top: 64px;
      right: 8px;
      display: flex;
      flex-direction: column;
      align-content: flex-end;
    }
  `;

  const Router = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <SocialMediaLinks sx={{ p: 1, m: 1 }} className="social_media-links">
            {SOCIAL_MEDIA.map(s => (
              <Link to={s.path}><Icon component={s.icon} color="primary" fontSize="large" /></Link>
            ))}
          </SocialMediaLinks>

          <NavigationLinks className="navigation-links">
            <Box style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)}>
              <Icon component={showMenu ? MenuOpen : Menu} color="primary" fontSize="large" />
            </Box>
            {showMenu ? (<Box>
              <ul>
                {ROUTES.map(r => (
                  !r.subMenu && !r.notFound ? <li><Link className="navigation-links_link" style={{ textAlign: 'right' }} to={r.path}>{r.componentName}</Link></li>
                    : null))}
              </ul>
            </Box>) : <h1>Do not show menu</h1>}
          </NavigationLinks>

          <Switch>
            {ROUTES.map(r => (
              !r.notFound ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
            ))}
          </Switch>
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
