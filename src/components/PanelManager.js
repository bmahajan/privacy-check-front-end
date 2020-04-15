import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AboutPanel from "./AboutPanel/AboutPanel.js";
import BreakdownPanel from './BreakdownPanel/BreakdownPanel';
import CompetitorAnalysisPanel from './CompetitorAnalysisPanel/CompetitorAnalysisPanel';
import RunPanel from './RunPanel/RunPanel';
import SettingsPanel from './SettingsPanel/SettingsPanel';
import lightTheme from './Themes/lightTheme';
import darkTheme from './Themes/darkTheme';
import defaultResponse from '../data/defaultResponse';
import defaultCATResponse from '../data/defaultCATResponse.json';
import globalTheme from "./Themes/globalTheme";

export const PanelSwitchContext = React.createContext();
export const ThemeSwitchContext = React.createContext();
export const ApiCallContext = React.createContext();
export const ApiResponseContext = React.createContext();
export const CATResponseContext = React.createContext();
export const OverallScoreContext = React.createContext();
export const ScoreTabContext = React.createContext();

export default function PanelManager() {

  const DATABASE_GET_API_URL = new URL('https://n08kagpdqh.execute-api.us-east-2.amazonaws.com/dev/database_get');
  const CAT_API_URL = new URL('https://n08kagpdqh.execute-api.us-east-2.amazonaws.com/dev/competitor_analysis')

  const [panel, setPanel] = React.useState(<RunPanel />);
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
  const [catResponse, setCATResponse] = React.useState(defaultCATResponse)

  const defaultOverallScore = {Control: 0, GDPR: 0};
  const [overallScore, setOverallScore] = React.useState(defaultOverallScore);

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
      case 'CompetitorAnalysisPanel':
        setPanel(<CompetitorAnalysisPanel />);
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

  const catCallHandler = (response) => {
    var cat_api_url = CAT_API_URL;
    var cat_api_params = { Market_Sector: response.Market_Sector }
    cat_api_url.search = new URLSearchParams(cat_api_params).toString();
    fetch(cat_api_url) //Jake please don't kill me. Can we move this somewhere else?
      .then(res => res.json())
      .then((data) => {
        console.log('Attempting to update CAT response data');
        setCATResponse(data);
        console.log('Successfully updated CAT response data!')
        console.log(data);
      })
      .then(console.log('Finished making call to api gateway!'))
      .catch(console.log);
  };

  const apiCallHandler = (url) => {
    console.log('Making call to api gateway...');

    var database_get_api_url = DATABASE_GET_API_URL;
    var params = {url: url}

    database_get_api_url.search = new URLSearchParams(params).toString();
    fetch(database_get_api_url)
      .then(res => res.json())
      .then((data) => {
        console.log('Attempting to update response data');
        setResponse(data);
        console.log('Successfully updated response data!')
        console.log(data);
        overallScoreHandler(data);
        catCallHandler(data);
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
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={colorTheme}>
          <PanelSwitchContext.Provider value={panelSwitchHandler}>
            <ThemeSwitchContext.Provider value={themeSwitchHandler}>
              <ApiCallContext.Provider value={apiCallHandler}>
                <ApiResponseContext.Provider value={response}>
                  <CATResponseContext.Provider value={catResponse}>
                    <OverallScoreContext.Provider value={overallScore}>
                      {panel}
                    </OverallScoreContext.Provider>
                  </CATResponseContext.Provider>
                </ApiResponseContext.Provider>
              </ApiCallContext.Provider>
            </ThemeSwitchContext.Provider>
          </PanelSwitchContext.Provider>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );

}