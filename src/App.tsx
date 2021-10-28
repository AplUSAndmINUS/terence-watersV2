import { Children, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

import homePageBackground from './assets/images/homepage_TerenceW.jpg';
import homePageBackgroundMobile from './assets/images/homepageMobile_TerenceW.jpg';
import { Template } from './pages/template/template';
import { ROUTES } from './modules/constants/routes';
import { COLORS, DARK_COLOR, LIGHT_COLOR } from './modules/styles/colors';
import { BORDER_RADIUS, FONT_FAMILY_SERIF, FONT_SIZE, FONT_WEIGHT } from './modules/styles/variables';

function App() {
  const [imgBackground, setImgBackground] = useState('none');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

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
      type: isDarkMode ? 'dark' : 'light',
      primary: {
        contrastText: COLORS.colorContrastTextPrimary,
        dark: COLORS.colorDark,
        light: COLORS.colorLight,
        main: COLORS.colorMainPrimary
      },
      secondary: {
        contrastText: COLORS.colorContrastTextSecondary,
        main: COLORS.colorMainSecondary
      },
      error: {
        main: COLORS.red
      },
      success: {
        main: COLORS.green
      },
      warning: {
        main: COLORS.yellow
      },
      info: {
        main: COLORS.lightBlue
      },
      text: {
        primary: isHomePage
          ? COLORS.white
          : isDarkMode
            ? DARK_COLOR.text
            : LIGHT_COLOR.text,
        secondary: isDarkMode ? DARK_COLOR.text : LIGHT_COLOR.text,
        disabled: COLORS.lightGray
      }
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: `${BORDER_RADIUS.none}px`,
          paddingLeft: '24px',
          paddingRight: '24px'
        },
        label: {
          fontSize: `${FONT_SIZE.button}rem`
        }
      },
      MuiButtonBase: {
        root: {
          borderRadius: `${BORDER_RADIUS.none}px`
        }
      }
    },
    typography: {
      fontFamily: FONT_FAMILY_SERIF,
      fontSize: FONT_SIZE.body,
      fontWeightBold: FONT_WEIGHT.bold,
      fontWeightMedium: FONT_WEIGHT.medium,
      fontWeightRegular: FONT_WEIGHT.regular,
      fontWeightLight: FONT_WEIGHT.light,
      button: {
        color: COLORS.white,
        textTransform: 'lowercase',
        fontFamily: 'Roboto, sans-serif'
      },
      caption: {
        color: isDarkMode ? DARK_COLOR.color : LIGHT_COLOR.color,
        fontSize: `${FONT_SIZE.caption}rem`,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: 'Roboto, sans-serif'
      },
      h1: {
        color: isDarkMode ? COLORS.white : COLORS.black,
        fontSize: `${FONT_SIZE.title}rem`,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF,
        lineHeight: '48px',
        textTransform: 'lowercase'
      },
      h2: {
        color: isDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: `${FONT_SIZE.heading}rem`,
        fontWeight: FONT_WEIGHT.bold,
        fontFamily: `"Proxima Nova", sans-serif`,
        letterSpacing: '-0.2px',
        lineHeight: '40px',
        textTransform: 'lowercase'
      },
      h3: {
        color: isDarkMode ? DARK_COLOR.largeHeading : LIGHT_COLOR.largeHeading,
        fontSize: `${FONT_SIZE.sectionTitle}rem`,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'lowercase'
      },
      h4: {
        color: isDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: `${FONT_SIZE.subheading}rem`,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      },
      h5: {
        color: isDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: `${FONT_SIZE.tertiary}rem`,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      },
      h6: {
        color: isDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: `${FONT_SIZE.quaternary}rem`,
        textTransform: 'uppercase',
        fontFamily: FONT_FAMILY_SERIF
      },
      subtitle1: {
        color: isDarkMode ? DARK_COLOR.pageHeading : LIGHT_COLOR.pageHeading,
        fontSize: `${FONT_SIZE.subheading}rem`,
        fontWeight: FONT_WEIGHT.regular,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      },
      subtitle2: {
        color: isDarkMode ? DARK_COLOR.subHeading : LIGHT_COLOR.subHeading,
        fontSize: `${FONT_SIZE.tertiary}rem`,
        fontWeight: FONT_WEIGHT.light,
        fontFamily: FONT_FAMILY_SERIF,
        textTransform: 'lowercase'
      }
    }
  });

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
  }, [isDarkMode]);
    
  useEffect(() => {
    isHomePage
      ? isMobile
        ? setImgBackground(homePageBackgroundMobile)
        : setImgBackground(homePageBackground)
      : setImgBackground('none')
  }, [isHomePage, isMobile]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Template
            imgBackground={imgBackground}
            isDarkMode={isDarkMode}
            isHomePage={isHomePage}
            isMobile={isMobile}
            showMenu={showMenu}
            setIsDarkMode={setIsDarkMode}
            setShowMenu={setShowMenu}
          >
            {Children}
            <Switch>
              {ROUTES.map(r => (
                !r.isNotMenu ? <Route exact path={r.path} component={r.component} /> : <Route component={r.component} />
              ))}
            </Switch>
          </Template>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
};

export default App;