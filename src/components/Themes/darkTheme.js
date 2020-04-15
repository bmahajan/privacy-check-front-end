import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green, grey, red, yellow, orange } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: orange,
    type: 'dark',
  },
  status: {
    good: green,
    okay: yellow,
    poor: red,
  },
});

export default darkTheme;