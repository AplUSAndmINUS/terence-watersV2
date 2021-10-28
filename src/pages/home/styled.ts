import styled from 'styled-components';

export const BackgroundImageDiv = styled('div')`
  background-attachment: fixed;
  background-color: ${(props: MenuProps) => props.isDarkMode
    ? DARK_COLOR.background
    : LIGHT_COLOR.background};
  background-image: ${(props: MenuProps) => props.isHomePage ? `url(${props.imgBackground})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props: MenuProps) => props.isHomePage ? 'cover' : 'none'};
  height: 100%;
  width: 100%;
`;