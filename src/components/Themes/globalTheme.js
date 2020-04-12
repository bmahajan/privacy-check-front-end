import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const GlobalTheme = createMuiTheme({
  panel: {
    width: 400,
    height: 500,
    maxWidth: 400,
    maxHeight: 500,
  },
});

export default GlobalTheme;