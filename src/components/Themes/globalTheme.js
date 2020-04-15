import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const GlobalTheme = createMuiTheme({
  panel: {
    width: 350,
    height: 500,
    maxWidth: 350,
    maxHeight: 600,
    maxDescriptionHeight: 300,
  },
});

export default GlobalTheme;