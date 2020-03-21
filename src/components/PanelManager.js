import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import RunPanel from './RunPanel/RunPanel';
import BreakdownPanel from './BreakdownPanel/BreakdownPanel';
import SettingsPanel from './SettingsPanel/SettingsPanel';
import AboutPanel from "./AboutPanel/AboutPanel";
import lightTheme from './Themes/lightTheme';
import darkTheme from './Themes/darkTheme';

export const PanelSwitchContext = React.createContext();
export const ThemeSwitchContext = React.createContext();

export default function PanelManager() {

  const [panel, setPanel] = React.useState(<RunPanel />);
  const [theme, setTheme] = React.useState(lightTheme);

  console.log('Active Panel Initialized to ' + panel);
  console.log('Active Theme Initialized to ' + lightTheme.palette.type);

  const panelSwitchHandler = (panelName) => {
    console.log('Attempting to change active panel to ' + panelName);
    switch (panelName) {
      case 'RunPanel':
        setPanel(<RunPanel />);
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
        console.log('Successfully changed theme to ' + lightTheme.type);
        break;
      case 'dark':
        setTheme(darkTheme);
        console.log('Successfully changed theme to ' + darkTheme.type);
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