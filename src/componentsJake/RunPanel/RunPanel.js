import React from 'react';
import NavigationBar from "../MiscComponents/NavigationBar";
import Decrypt from "../MiscComponents/Decrypt";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Card";
import SettingsPanel from "../SettingsPanel/SettingsPanel";
import AboutPanel from "../AboutPanel/AboutPanel";
import IconButton from "@material-ui/core/IconButton";
import { PanelSwitchContext, ThemeSwitchContext } from "../PanelManager";
import RunButton from "./RunButton";

export default function RunPanel(props) {

  const panelHandler = React.useContext(PanelSwitchContext);
  const themeHandler = React.useContext(ThemeSwitchContext);

  return (
    <div style={{width: 300, height: 550, backgroundColor: 'beige'}}>
      <Card>
        <NavigationBar title={<Decrypt/>}/>
        <RunButton/>
        <Grid item>
              <Grid container
              direction = 'row'
              padding = {3}>

                <Grid item>
                <IconButton onClick={() => panelHandler('SettingsPanel')}> Settings </IconButton>
                </Grid>

                <Grid item>
                <IconButton onClick={() => panelHandler('BreakdownPanel')}> Breakdown </IconButton>
                </Grid>

                <Grid item>
                <IconButton onClick={() => panelHandler('AboutPanel')}> About </IconButton>
                </Grid>

              </Grid>
        </Grid>
      </Card>
    </div>
  );

}