import React from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const GlobalTheme = createMuiTheme({
  panel: {
    width: 200,
    height: 300,
    maxWidth: 400,
    maxHeight: 520,
  },
});

export default GlobalTheme;