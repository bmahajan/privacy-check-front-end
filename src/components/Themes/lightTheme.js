import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green, grey, orange, red, yellow } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    secondary: orange,
    type: 'light',
  },
  status: {
    good: green,
    okay: yellow,
    poor: red,
  },
});

export default lightTheme;