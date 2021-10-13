import { Box } from '@material-ui/core';
import styled from 'styled-components';

import { theme, TWMuiThemeProvider } from '../../modules/styles/theming';

export const NavigationLinks = styled(Box)`
  ${theme.breakpoints.down('xs')} {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 8px;
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