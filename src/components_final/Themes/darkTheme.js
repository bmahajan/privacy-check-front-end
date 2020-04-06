import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green, grey, blue, red, yellow } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: blue,
    type: 'dark',
  },
  status: {
    good: green,
    okay: yellow,
    poor: red,
  },
});

export default darkTheme;