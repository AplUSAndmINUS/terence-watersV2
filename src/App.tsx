import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Box, Container, Icon, SvgIcon } from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';
import styled from 'styled-components';

import { SOCIAL_MEDIA } from './modules/constants/social-media';
import { ROUTES } from './modules/constants/routes';
import { COLORS, DARK_COLOR, LIGHT_COLOR } from './modules/styles/colors';
import { theme, TWMuiThemeProvider } from './modules/styles/theming';
import { FONT_FAMILY_SERIF, FONT_SIZE } from './modules/styles/variables';
import homePageBackground from './assets/images/homepage_TerenceW.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [homePage, setHomePage] = useState(true);
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
      right: 48px;
      min-width: 275px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
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

  const HomePageLink = styled(Link)`
    ${theme.breakpoints.down('xs')} {
      font-size: ${FONT_SIZE.linkMobile};
    }
    
    ${theme.breakpoints.up('sm')} {
      font-size: ${FONT_SIZE.linkDesktop};
    }
    color: ${homePage ? COLORS.white : darkMode ? COLORS.colorDark : COLORS.colorLight};
    font-family: ${FONT_FAMILY_SERIF};
    text-align: right;
    text-decoration: none;
    
    :hover {
      color: ${homePage ? COLORS.lighterGray : COLORS.colorMainSecondary};
    }

    :visited {
      color: ${homePage ? COLORS.white : COLORS.colorMainSecondary};
    }
  `;

  const MyApp = () => {
    useEffect(() => {
      darkMode ? 
        document.body.style.backgroundColor = DARK_COLOR.background : 
        document.body.style.backgroundColor = LIGHT_COLOR.background
      }, [])
      
    useEffect(() => {
      homePage ?
        document.body.style.backgroundImage = `url(${homePageBackground})` : 
        document.body.style.backgroundImage = 'none'
    }, [])

    return (
      <div className="App" style={{
        backgroundColor: darkMode ? DARK_COLOR.background : LIGHT_COLOR.background,
        backgroundImage: homePage ? `url(${homePageBackground})` : 'none',
      }}>
        <BrowserRouter>
          <SocialMediaLinks sx={{ p: 1, m: 1 }} className="social_media-links">
            {SOCIAL_MEDIA.map(s => (
              <Link to={s.path}>
                {s.customSvg ? <SvgIcon fontSize="large"
                    style={{
                      fill: homePage ? COLORS.white :
                        darkMode ? DARK_COLOR.buttonPrimary : LIGHT_COLOR.buttonPrimary
                    }} component={s.icon}>{s.icon}</SvgIcon> :
                  <Icon
                    component={s.icon}
                    fontSize="large"
                    style={{
                      fill: homePage ? COLORS.white :
                        darkMode ? DARK_COLOR.buttonPrimary : LIGHT_COLOR.buttonPrimary
                    }} />}
              </Link>))}
          </SocialMediaLinks>

          <NavigationLinks className="navigation-links">
            <Box style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)}>
              <Icon component={showMenu ? MenuOpen : Menu} fontSize="large" style={{
                fill: homePage ? COLORS.white :
                  darkMode ? DARK_COLOR.buttonPrimary : LIGHT_COLOR.buttonPrimary
              }} />
            </Box>
            {showMenu && (<Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {ROUTES.map(r => (
                !r.subMenu && !r.notFound ? <HomePageLink className="navigation-links_link" style={{ textAlign: 'right' }} to={r.path}>{r.componentName}</HomePageLink>
                  : null))}
            </Box>)}
          </NavigationLinks>

          <Switch>
            {ROUTES.map(r => (
              !r.notFound ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

  // do I need to change props to go into MyApp for Dark Mode & Home Page?
  return (
    <TWMuiThemeProvider
      children={<MyApp />}
      darkMode={darkMode}
      homePage={homePage}
      setDarkMode={setDarkMode}
      setHomePage={setHomePage} />
  );
}

export default App;
