import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const globalTheme = createMuiTheme({
  panel: {
    width: 375,
    height: 225,
    maxWidth: 375,
    maxHeight: 670,
    maxDescriptionHeight: 300,
  },
});

export default globalTheme;