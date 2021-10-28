import React from 'react';

import { BackgroundImageDiv } from './styled';

interface HomePageProps {
  imgBackground: string;
  isDarkMode: boolean;
  isHomePage: boolean;
  isMobile: boolean;
  setImgBackground: Function;
  setIsDarkMode: Function;
  setIsHomePage: Function;
  setIsMobile: Function;
  setShowMenu: Function;
  showMenu: boolean;
  windowWidth: number;
}

export const HomePage = ({
  imgBackground,
  isDarkMode,
  isHomePage = true,
  isMobile,
  setImgBackground,
  setIsDarkMode,
  setIsHomePage,
  setIsMobile,
  setShowMenu,
  showMenu,
  windowWidth = 0
}: HomePageProps) => {
  return (
    <BackgroundImageDiv>
      <h1>I am the Home Page!</h1>
    </BackgroundImageDiv>
  )
};

export default HomePage;