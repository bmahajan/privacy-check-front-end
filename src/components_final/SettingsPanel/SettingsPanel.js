import React from 'react';
import NavigationBar from "../MiscComponents/NavigationBar";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from '@material-ui/core/styles';
import { ThemeSwitchContext } from "../PanelManager";

export default function SettingsPanel() {

  const theme = useTheme();
  const themeHandler = React.useContext(ThemeSwitchContext);

  return (
    <div style={{width: 300, height: 550, backgroundColor: 'beige'}}>
      <Card>
        <NavigationBar title={'Settings Panel'} back={true}/>
        <IconButton onClick={() => theme.palette.type === 'light' ? themeHandler('dark') : themeHandler('light')}> Switch Theme </IconButton>
      </Card>
    </div>
  );

}