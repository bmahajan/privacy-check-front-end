import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green, grey, orange, red, yellow } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
  palette: {
    primary: grey,
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