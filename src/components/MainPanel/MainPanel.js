import React from 'react';
import {Grid, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RunButton from './RunButton';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import MainPanelButton from './MainPanelButton';
import ScoreButton from './ScoreButton'
import ScoreBubble from './ScoreBubble'
import Encrypt from '../Misc/Encrypt';
import App from '../App';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.sizing.width,
    height: theme.sizing.maxHeight,
  },
  scoreButton: {
    width: 100,
  },
  button: {
    backgroundColor: 'orange'
  },
}));

export default function MainPanel(props){

  const classes = useStyles();

  const HandleRunClick = () =>{
    alert('Clicked Run')
  }

  var items = <App />;
  console.log('reached');
  console.log(items)

  return(
    <div className={classes.root}>
      <Card>
        <Grid container direction={'column'} alignContent={'center'} alignItems={'center'} spacing={3}>
          <Grid item flex-basis={'content'}>
            <Card elevation={0}>
              <Encrypt />
            </Card>
          </Grid>
          <Grid item flex-basis={'content'}>
            <ScoreButton pane={'BreakdownPanel'} scores={[]} />
          </Grid>
          <Grid item flex-basis={'content'}>
            <ScoreBubble value={items.Control_Scores} />
          </Grid>
          <Grid item flex-basis={'content'}>
            <RunButton onClick={HandleRunClick} />
          </Grid>
          <Grid item>
            <Grid container direction={'row'} padding={3}>
              <Grid item>
                <MainPanelButton icon={<SettingsIcon />} panel={'SettingsPanel'} />
              </Grid>
              <Grid item>
                <MainPanelButton icon={<BarChartRoundedIcon />} panel={'BreakdownPanel'} />
              </Grid>
              <Grid item>
                <MainPanelButton icon={<HelpOutlineRoundedIcon />} panel={'AboutPanel'} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}