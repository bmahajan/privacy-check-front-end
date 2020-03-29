import React , { useState } from 'react';
import MainPanel from './MainPanel'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function PanelManager() {


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
  
  const HandleNewPane = (newPanel) => {
    setPanel(newPanel);
    console.log('Switched to panel ' + newPanel.className);
  };

  const ReturnToPrevPanel = () => {
    setPanel(panelRef.current);
  };

  const [panel, setPanel] = React.useState(<MainPanel onBack={ReturnToPrevPanel} onMPBClick={HandleNewPane} onToggleDark={toggleDarkTheme}/>);

  const panelRef = React.useRef();

  React.useEffect(() => {
    panelRef.current = panel;
    console.log(`"Previous page" reference set`)
  },[]);

  return(
    <MuiThemeProvider theme={muiTheme}>
      <div>{panel}</div>
    </MuiThemeProvider>
  );
}
