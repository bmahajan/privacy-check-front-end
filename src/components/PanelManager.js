import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import MainPanel from './MainPanel/MainPanel';
import BreakdownPanel from './BreakdownPanel/BreakdownPanel';
import SettingsPanel from './SettingsPanel/SettingsPanel';
import AboutPanel from "./AboutPanel/AboutPanel.js";
import lightTheme from './Themes/lightTheme';
import darkTheme from './Themes/darkTheme';
import defaultResponse from '../data/defaultResponse';
import generalTheme from "./Themes/generalTheme";

export const PanelSwitchContext = React.createContext();
export const ThemeSwitchContext = React.createContext();
export const ApiCallContext = React.createContext();
export const ApiResponseContext = React.createContext();
export const OverallScoreContext = React.createContext();

export default function PanelManager() {

  const [panel, setPanel] = React.useState(<MainPanel />);
  const [colorTheme, setColorTheme] = React.useState(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      return lightTheme;
    } else if (currentTheme === 'dark') {
      return darkTheme;
    } else {
      return lightTheme;
    }
  });

  const [response, setResponse] = React.useState(defaultResponse);

  const defaultOverallScore = {Control: 0, GDPR: 0};
  const [overallScore, setOverallScore] = React.useState(defaultOverallScore);

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
        setColorTheme(lightTheme);
        localStorage.setItem('theme', 'light');
        console.log('Successfully changed theme to ' + lightTheme.palette.type);
        break;
      case 'dark':
        setColorTheme(darkTheme);
        localStorage.setItem('theme', 'dark');
        console.log('Successfully changed theme to ' + darkTheme.palette.type);
        break;
      default:
        console.log('Failed to change active theme to ' + themeName);
        break;
    }
  };

  const apiCallHandler = () => {
    console.log('Making call to api gateway...');
    fetch('https://n08kagpdqh.execute-api.us-east-2.amazonaws.com/dev/database_get/?url=facebook.com')
      .then(res => res.json())
      .then((data) => {
        console.log('Attempting to update response data');
        setResponse(data);
        console.log('Successfully updated response data!')
        console.log(data);
        overallScoreHandler(data);
      })
      .then(console.log('Finished making call to api gateway!'))
      .catch(console.log);
  };

  const overallScoreHandler = (data) => {
    console.log('calculateing overall score...')
    var GDPROverallScore = 0;
    var ControlOverallScore = 0;

    for(var i = 0; i < 10; i++){
        ControlOverallScore = ControlOverallScore + ((data.Control_Scores[i])*5 -5);
        GDPROverallScore = GDPROverallScore + (data.GDPR_Scores[i] == 2 ? 10 : 0);
    }

    setOverallScore({Control: ControlOverallScore, GDPR: GDPROverallScore});
  };

  return (
    <div>
      <ThemeProvider theme={generalTheme}>
        <ThemeProvider theme={colorTheme}>
          <PanelSwitchContext.Provider value={panelSwitchHandler}>
            <ThemeSwitchContext.Provider value={themeSwitchHandler}>
              <ApiCallContext.Provider value={apiCallHandler}>
                <ApiResponseContext.Provider value={response}>
                  <OverallScoreContext.Provider value={overallScore}>
                    {panel}
                  </OverallScoreContext.Provider>
                </ApiResponseContext.Provider>
              </ApiCallContext.Provider>
            </ThemeSwitchContext.Provider>
          </PanelSwitchContext.Provider>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );

}