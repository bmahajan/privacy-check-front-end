import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const GlobalTheme = createMuiTheme({
  panel: {
    width: 375,
    height: 225,
    maxWidth: 375,
    maxHeight: 600,
    maxDescriptionHeight: 300,
  },
});

export default GlobalTheme;