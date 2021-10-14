import { Box } from '@material-ui/core';
import styled from 'styled-components';

import { theme } from '../../modules/styles/theming';

export const NavigationLinks = styled(Box)`
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

export const SocialMediaLinks = styled(Box)`
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