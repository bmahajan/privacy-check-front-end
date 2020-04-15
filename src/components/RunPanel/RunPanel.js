import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RunButton from './RunButton';

import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import BallotIcon from '@material-ui/icons/Ballot';

import RunPanelButton from './RunPanelButton';
import ScoreButton from './ScoreButton';
import Encrypt from '../Misc/Encrypt';
import UTCIDLogo from '../../UTCID.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
  },
  scoreButton: {
    width: 100,
  },
  utcidLogo: {
    marginBottom: 15,
  },
}));

export default function RunPanel(props){

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Card>
      <div style={{
          display: "flex",
          justifyContent: "center",
      }}>
      <Encrypt interval={500} className={classes.encrypt}/>
      </div>
        <Grid container direction={'column'} alignContent={'center'} alignItems={'center'} spacing={3}>
          <img src={UTCIDLogo} alt="utcid logo" height={40} width={220} className={classes.utcidLogo} />
          <Grid item flex-basis={'content'}>
            <ScoreButton pane={'BreakdownPanel'} scores={[]} />
          </Grid>
          <Grid item flex-basis={'content'}>
            <RunButton />
          </Grid>
          <Grid item>
            <Grid container direction={'row'} padding={3}>
              <Grid item>
                <RunPanelButton icon={<SettingsIcon />} panel={'SettingsPanel'} tooltip={'Settings'} />
              </Grid>
              <Grid item>
                <RunPanelButton icon={<BarChartRoundedIcon />} panel={'CompetitorAnalysisPanel'} tooltip={'Competitor Analysis'} />
              </Grid>
              <Grid item>
                <RunPanelButton icon={<BallotIcon />} panel={'BreakdownPanel'} tooltip={'Score Breakdown'} />
              </Grid>
              <Grid item>
                <RunPanelButton icon={<HelpOutlineRoundedIcon />} panel={'AboutPanel'} tooltip={'About'} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}