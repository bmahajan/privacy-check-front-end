import React from 'react';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import AboutPanel from "./AboutPanel/AboutPanel.js";
import BreakdownPanel from './BreakdownPanel/BreakdownPanel';
import CompetitorAnalysisPanel from './CompetitorAnalysisPanel/CompetitorAnalysisPanel';
import RunPanel from './RunPanel/RunPanel';
import SettingsPanel from './SettingsPanel/SettingsPanel';
import lightTheme from './Themes/lightTheme';
import darkTheme from './Themes/darkTheme';
import defaultPrivacyPolicyResponse from '../data/defaultPrivacyPolicyResponse.json';
import defaultCompetitorAnalysisResponse from '../data/defaultCompetitorAnalysisResponse.json';
import globalTheme from "./Themes/globalTheme";

export const PanelSwitchContext = React.createContext();
export const ThemeSwitchContext = React.createContext();
export const StartupSwitchContext = React.createContext();

export const PrivacyCheckRunContext = React.createContext();

export const PrivacyPolicyResponseContext = React.createContext();
export const CompetitorAnalysisResponseContext = React.createContext();
export const PrivacyPolicyScoreContext = React.createContext();
export const StartupContext = React.createContext();

export default function PanelManager() {

  const PRIVACY_POLICY_API_URL = new URL('https://n08kagpdqh.execute-api.us-east-2.amazonaws.com/dev/database_get');
  const COMPETITOR_ANALYSIS_API_URL = new URL('https://n08kagpdqh.execute-api.us-east-2.amazonaws.com/dev/competitor_analysis');

  const [privacyPolicyResponse, setPrivacyPolicyResponse] = React.useState(defaultPrivacyPolicyResponse);
  const [competitorAnalysisResponse, setCompetitorAnalysisResponse] = React.useState(defaultCompetitorAnalysisResponse);
  const [privacyPolicyScore, setPrivacyPolicyScore] = React.useState({Control: '-', GDPR: '-'});

  const [panel, setPanel] = React.useState(<RunPanel />);
  const [colorTheme, setColorTheme] = React.useState(() => {
    const currentTheme = localStorage.getItem('theme');
    switch (currentTheme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  });
  const [startup, setStartup] = React.useState(() => {
    const currentStartup = localStorage.getItem('startup');
    switch (currentStartup) {
      case 'enabled':
        return true;
      case 'disabled':
        return false;
      default:
        return true;
    }
  });

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

  const startupSwitchHandler = (isEnabled) => {
    console.log('Changing startup popup to ' + isEnabled);
    switch (isEnabled) {
      case 'enabled':
        setStartup(true);
        localStorage.setItem('startup', 'enabled');
        console.log('Successfully changed startup message state to enabled.');
        break;
      case 'disabled':
        setStartup(false);
        localStorage.setItem('startup', 'disabled');
        console.log('Successfully changed startup message state to disabled.');
        break;
      default:
        console.log('Failed to change the startup message state to ' + isEnabled);
        break;
    }
  };

  const privacyCheckRunHandler = (url) => {
    return new Promise((resolve, reject) => {
      PRIVACY_POLICY_API_URL.search = new URLSearchParams({url: url}).toString();
      fetch(PRIVACY_POLICY_API_URL)
        .then(res => res.json())
        .then(privacyPolicyData => {
          console.log('Received data from privacy policy database:\n%s', privacyPolicyData);
          setPrivacyPolicyResponse(privacyPolicyData);
          console.log('Set data to privacy policy response.');
          privacyPolicyScoreHandler(privacyPolicyData);
          console.log('Set data to privacy policy response.');
          COMPETITOR_ANALYSIS_API_URL.search = new URLSearchParams({Market_Sector: privacyPolicyData.Market_Sector});
          fetch(COMPETITOR_ANALYSIS_API_URL)
            .then(res => res.json())
            .then(competitorAnalysisData => {
              console.log('Received data from competitor analysis database:\n%s', competitorAnalysisData);
              setCompetitorAnalysisResponse(competitorAnalysisData);
              console.log('Set data to competitor analysis response.');
              resolve();
            })
            .catch(reject);
        })
        .catch(reject);
    });
  };

  const privacyPolicyScoreHandler = (data) => {
    console.log('Setting overall privacy policy score');
    setPrivacyPolicyScore({Control: data.Control_Overall_Score + '%', GDPR: data.GDPR_Overall_Score + '%'})
  };

  return (
    <div>
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={colorTheme}>
          <PanelSwitchContext.Provider value={panelSwitchHandler}>
            <ThemeSwitchContext.Provider value={themeSwitchHandler}>
              <StartupSwitchContext.Provider value={startupSwitchHandler}>
                <PrivacyCheckRunContext.Provider value={privacyCheckRunHandler}>
                  <PrivacyPolicyResponseContext.Provider value={privacyPolicyResponse}>
                    <CompetitorAnalysisResponseContext.Provider value={competitorAnalysisResponse}>
                      <PrivacyPolicyScoreContext.Provider value={privacyPolicyScore}>
                        <StartupContext.Provider value={startup}>
                          {panel}
                        </StartupContext.Provider>
                      </PrivacyPolicyScoreContext.Provider>
                    </CompetitorAnalysisResponseContext.Provider>
                  </PrivacyPolicyResponseContext.Provider>
                </PrivacyCheckRunContext.Provider>
              </StartupSwitchContext.Provider>
            </ThemeSwitchContext.Provider>
          </PanelSwitchContext.Provider>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );

}