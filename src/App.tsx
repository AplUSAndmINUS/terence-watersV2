import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {
  Box,
  Button,
  Icon,
  SvgIcon,
  Typography
} from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';
import styled from 'styled-components';

import homePageBackground from './assets/images/homepage_TerenceW.jpg';
import homePageBackgroundMobile from './assets/images/homepageMobile_TerenceW.jpg';
import { SOCIAL_MEDIA } from './modules/constants/social-media';
import { ROUTES } from './modules/constants/routes';
import { COLORS, DARK_COLOR, LIGHT_COLOR } from './modules/styles/colors';
import { theme, TWMuiThemeProvider } from './modules/styles/theming';
import { FONT_FAMILY_SERIF, FONT_SIZE } from './modules/styles/variables';

function App() {
  const [imgBackground, setImgBackground] = useState('none');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const SocialMediaLinks = styled(Box)`
    ${theme.breakpoints.down('xs')} {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    };

    ${theme.breakpoints.up('sm')} {
      position: absolute;
      top: 24px;
      right: 16px;
      min-width: 500px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    };
  `;

  const NavigationLinks = styled(Box)`
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
      right: 32px;
      display: flex;
      flex-direction: column;
      align-content: flex-end;
    }
  `;

  const HomePageLink = styled(Link)`
    color: ${isHomePage
    ? COLORS.white
    : isDarkMode
      ? COLORS.colorDark
      : COLORS.colorLight};
    font-family: ${FONT_FAMILY_SERIF};
    font-size: ${FONT_SIZE.link}rem;
    text-align: right;
    text-decoration: none;
    
    :hover {
      color: ${isHomePage ? COLORS.lighterGray : COLORS.colorMainSecondary};
    }

    :visited {
      color: ${isHomePage ? COLORS.white : COLORS.colorMainSecondary};
    }
  `;

  const BackgroundImageDiv = styled('div')`
    background-attachment: fixed;
    background-color: ${isDarkMode
      ? DARK_COLOR.background
      : LIGHT_COLOR.background};
    background-image: ${isHomePage ? `url(${imgBackground})` : 'none'};
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${isHomePage ? 'cover' : 'none'};
    height: 100%;
    width: 100%;
  `;

  const MyApp = () => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth <= 480) {
        setImgBackground(homePageBackgroundMobile);
        setIsMobile(true);
      } else {
        setImgBackground(homePageBackground);
        setIsMobile(false);
      }
    };

    useEffect(() => {
      isDarkMode ? 
        document.body.style.backgroundColor = DARK_COLOR.background : 
        document.body.style.backgroundColor = LIGHT_COLOR.background
      }, [])
      
    useEffect(() => {
      isHomePage 
        ? isMobile
          ? setImgBackground(homePageBackgroundMobile)
          : setImgBackground(homePageBackground)
        : setImgBackground('none')
    }, [])

    useEffect(() => {
      window.addEventListener('resize', handleWindowResize, false);
      handleWindowResize();

      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
      <div className="App" style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}>
        <BrowserRouter>
          <BackgroundImageDiv className="background-div">
            <SocialMediaLinks sx={{ p: 1, m: 1 }} className="social_media-links">
              {SOCIAL_MEDIA.map(s => (
                <Link to={{ pathname: s.path }} target="_blank">
                  {s.customSvg ? <SvgIcon fontSize="large"
                    style={{
                      fill: isHomePage
                        ? COLORS.white
                        : isDarkMode
                          ? DARK_COLOR.buttonPrimary
                          : LIGHT_COLOR.buttonPrimary,
                      fontSize: '24px',
                      marginTop: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline'
                    }} component={s.icon}>{s.icon}</SvgIcon> :
                    <Icon
                      component={s.icon}
                      fontSize="medium"
                      style={{
                        fill: isHomePage
                          ? COLORS.white
                          : isDarkMode
                            ? DARK_COLOR.buttonPrimary
                            : LIGHT_COLOR.buttonPrimary,
                        fontSize: '30px',
                        marginTop: '6px'
                      }} />}
                </Link>))}
                <Button color="primary" href="/contact" variant="contained" value="Hire Me!">hire me!</Button>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  flex-direction="column"
                  onClick={() => setShowMenu(!showMenu)}
                  style={{ cursor: 'pointer', marginTop: '2px' }}>
                  <Icon component={showMenu ? MenuOpen : Menu} fontSize="large" style={{
                    fill: isHomePage
                      ? COLORS.white
                      : isDarkMode
                        ? DARK_COLOR.buttonPrimary
                        : LIGHT_COLOR.buttonPrimary,
                    fontSize: '48px',
                    marginTop: '-6px'
                  }} />
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: isHomePage
                        ? COLORS.white
                        : isDarkMode
                          ? DARK_COLOR.menuText
                          : LIGHT_COLOR.menuText,
                      fontWeight: 500
                    }}>menu</Typography>
                </Box>
            </SocialMediaLinks>

            <NavigationLinks className="navigation-links">
              {showMenu && (<Box sx={{
                borderRight: '2px solid #FFF',
                display: 'flex',
                flexDirection: 'column',
                paddingRight: '12px',
                marginTop: '16px'
              }}>
                {ROUTES.map(r => (
                  !r.subMenu &&
                    !r.isNotMenu
                      ? <HomePageLink className="navigation-links_link" style={{ textAlign: 'right' }} to={r.path}>{r.componentName}</HomePageLink>
                      : null))}
              </Box>)}
            </NavigationLinks>

            <Switch>
              {ROUTES.map(r => (
                !r.isNotMenu ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
              ))}
            </Switch>
          </BackgroundImageDiv>
        </BrowserRouter>
      </div>
    )
  }

  // do I need to change props to go into MyApp for Dark Mode & Home Page?
  return (
    <TWMuiThemeProvider
      children={<MyApp />}
      isDarkMode={isDarkMode}
      isHomePage={isHomePage}
      setDarkMode={setIsDarkMode}
      setHomePage={setIsHomePage} />
  );
}

export default App;
