import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import MainPanel from './MainPanel/MainPanel';
import BreakdownPanel from './BreakdownPanel/BreakdownPanel';
import SettingsPanel from './SettingsPanel/SettingsPanel';
import AboutPanel from "./Misc/AboutPanel.js";
import lightTheme from './Themes/lightTheme';
import darkTheme from './Themes/darkTheme';

export const PanelSwitchContext = React.createContext();
export const ThemeSwitchContext = React.createContext();

export default function PanelManager() {

  const [panel, setPanel] = React.useState(<MainPanel />);
  const [theme, setTheme] = React.useState(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      return lightTheme;
    } else if (currentTheme === 'dark') {
      return darkTheme;
    } else {
      return lightTheme;
    }
  });

  console.log('Active Panel Initialized to ' + panel);
  console.log('Active Theme Initialized to ' + lightTheme.palette.type);

  const panelSwitchHandler = (panelName) => {
    console.log('Attempting to change active panel to ' + panelName);
    switch (panelName) {
      case 'RunPanel':
        setPanel(<MainPanel />);
        console.log('Successfully changed active panel to ' + panelName);
        break;
      case 'AboutPanel':
        setPanel(<AboutPanel />);
        console.log('Successfully changed active panel to ' + panelName);
        break;
      case 'SettingsPanel':
        setPanel(<SettingsPanel />);
        console.log('Successfully changed active panel to ' + panelName);
        break;
      case 'BreakdownPanel':
        setPanel(<BreakdownPanel />);
        console.log('Successfully changed active panel to ' + panelName);
        break;
      default:
        console.log('Failed to change active panel to ' + panelName);
        break;
    }
  };

  const themeSwitchHandler = (themeName) => {
    console.log('Attempting to change active theme to ' + themeName);
    switch (themeName) {
      case 'light':
        setTheme(lightTheme);
        localStorage.setItem('theme', 'light');
        console.log('Successfully changed theme to ' + lightTheme.palette.type);
        break;
      case 'dark':
        setTheme(darkTheme);
        localStorage.setItem('theme', 'dark');
        console.log('Successfully changed theme to ' + darkTheme.palette.type);
        break;
      default:
        console.log('Failed to change active theme to ' + themeName);
        break;
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <PanelSwitchContext.Provider value={panelSwitchHandler}>
          <ThemeSwitchContext.Provider value={themeSwitchHandler}>
            {panel}
          </ThemeSwitchContext.Provider>
        </PanelSwitchContext.Provider>
      </ThemeProvider>
    </div>
  );

}