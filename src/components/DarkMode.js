import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SettingsCard from './SettingsCard'

const DarkMode = () => {
  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  // the mui theme is used in the themeProvider.
  return (
    <MuiThemeProvider theme={muiTheme}>
      <SettingsCard onToggleDark={toggleDarkTheme} />
    </MuiThemeProvider>
  );
};

export default DarkMode;
