import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const globalTheme = createMuiTheme({
  panel: {
    width: 400,
    height: '100%',
    maxHeight: '100%',
  },
});

export default globalTheme;