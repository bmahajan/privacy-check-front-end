import React from 'react';
import {Grid, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RunButton from './RunButton';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import MainPanelButton from './MainPanelButton';
import ScoreButton from './ScoreButton'
import Encrypt from '../Misc/Encrypt';

const useStyles = makeStyles(theme => ({
  scoreButton: {
    width: 100,
  },

  button: {
    backgroundColor: 'orange'
  }

}))

export default function MainPanel(props){

    const classes = useStyles();

    const HandleRunClick = () =>{
      alert('Clicked Run')
    }
      return(
        <Card
        style = {{width: 400}}>
          <Grid container
          direction = 'column'
          alignContent = 'center'
          alignItems = 'center'
          spacing = {3}>
            <Grid item
            flex-basis='content'>
              <Card elevation={0}>
                {<Encrypt />}
              </Card>
            </Grid>
            <Grid item
            flex-basis='content'>
                <ScoreButton 
                 pane={'BreakdownPanel'}
                 scores={[]}
                />
            </Grid>
            <Grid item
            flex-basis='content'>
              <RunButton onClick = {HandleRunClick}/>
            </Grid>
            <Grid item>
              <Grid container
              direction = 'row'
              padding = {3}>
                <Grid item>
                  <MainPanelButton 
                    icon={<SettingsIcon />} 
                    pane={'SettingsPanel'}
                  />
                </Grid>
                <Grid item>
                  <MainPanelButton 
                    icon={<BarChartRoundedIcon />}
                    pane={'BreakdownPanel'}
                  />
                </Grid>
                <Grid item>
                  <MainPanelButton 
                    icon={<HelpOutlineRoundedIcon />}
                    pane={'AboutPanel'}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      );
    
}