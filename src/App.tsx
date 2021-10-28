import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, CssBaseline, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

import homePageBackground from './assets/images/homepage_TerenceW.jpg';
import homePageBackgroundMobile from './assets/images/homepageMobile_TerenceW.jpg';
import { Navigation } from './components/navigation/navigation';
import { DARK_COLOR, LIGHT_COLOR } from './modules/styles/colors';
import { TWMuiThemeProvider } from './modules/styles/theming';

function App() {
  const [imgBackground, setImgBackground] = useState('none');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const MainTitle = styled(Grid)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
          <CssBaseline />
          <Navigation
            imgBackground={imgBackground}
            isDarkMode={isDarkMode}
            isHomePage={isHomePage}
            isMobile={isMobile}
            setImgBackground={setImgBackground}
            setIsDarkMode={setIsDarkMode}
            setIsHomePage={setIsHomePage}
            setIsMobile={setIsMobile}
            setShowMenu={setShowMenu}
            showMenu={showMenu} />
          <MainTitle container xs={12} md={6}>
            <Grid item md={6} style={{ display: isMobile ? 'none' : 'block'}}>
              &nbsp;
            </Grid> 
            <Grid item xs={12} md={6} spacing={6}>
              <Typography align="center" variant="h3">
                hi there! I'm
              </Typography>
              <Typography align="center" variant="h1">
                terence waters
              </Typography>
            </Grid>
          </MainTitle>
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
