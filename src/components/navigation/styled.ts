import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: block;
`;

export const NavigationLinks = styled(Box)`
  ${props => props.theme.breakpoints.down('xs')} {
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

  ${props => props.theme.breakpoints.up('sm')} {
    position: absolute;
    top: 64px;
    right: 32px;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
  }
`;

export const SocialMediaLinks = styled(Box)`
  ${props => props.theme.breakpoints.down('xs')} {
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

  ${props => props.theme.breakpoints.up('sm')} {
    position: absolute;
    top: 24px;
    right: 16px;
    min-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  };
`;