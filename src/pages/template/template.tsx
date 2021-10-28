import React, { Children } from 'react';

import { Navigation } from '../../components/navigation/navigation';

interface TemplateProps extends React.Component {
  imgBackground: string | null;
  isDarkMode: boolean;
  isHomePage: boolean;
  isMobile: boolean;
  showMenu: boolean;
  setIsDarkMode: Function;
  setShowMenu: Function;
}

export const Template = ({
  imgBackground,
  isDarkMode,
  isHomePage,
  isMobile,
  showMenu,
  setIsDarkMode,
  setShowMenu
}: TemplateProps) => {
  return (
    <>
      <Navigation
        isDarkMode={isDarkMode}
        isHomePage={isHomePage}
        isMobile={isMobile}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      >
        {Children}
      </Navigation>
    </>
  )
};

export default Template;