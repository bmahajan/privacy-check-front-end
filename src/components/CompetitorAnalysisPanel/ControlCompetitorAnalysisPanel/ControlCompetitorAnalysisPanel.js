import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../../BreakdownPanel/ScoreBubble';
import ControlDataVisualization from './ControlDataVisualization'
import {makeStyles} from "@material-ui/core/styles";
import { ApiResponseContext, OverallScoreContext, CATResponseContext } from "../../PanelManager";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  grid: {
    marginTop: 5,
    marginBottom: 10,
  },
  scoregrid: {
    marginTop: 5,
    marginBottom: 0,
  },
  market: {
    display: "flex",
    justifyContent: "center",
  }
}));

export default function ControlCompetitorAnalysisPanel(props) {

  const classes = useStyles();
  const response = React.useContext(ApiResponseContext);
  const catResponse = React.useContext(CATResponseContext);
  const overallScore = React.useContext(OverallScoreContext);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container className={classes.scoregrid} direction='row' alignContent='center' alignItems='center' justify='center' spacing={2}>
          <Grid item>
            <Typography variant='h4'>
              Score
              </Typography>
          </Grid>
          <Grid item>
            <ScoreBubble score={overallScore.Control} height={50} width={50} />
          </Grid>
        </Grid>
        <Grid container className={classes.scoregrid} direction='column' alignContent='center' justify='center' spacing>
          <Grid item>
            <ControlDataVisualization />
          </Grid>
          <Grid item>
              <Typography variant='h6' className={classes.market}>
                <b>Market Sector:</b> {response.Market_Sector}
              </Typography>
          </Grid>
          <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
            <Grid item>
                <Typography variant='h6' className={classes.market}>
                <b>Top 3 Competitors:</b> 
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.market}>
                <b>1. {catResponse.control_top_scorers[0].Privacy_Policy_URL} Score: {catResponse.control_top_scorers[0].Control_Overall_Score} </b>
                </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.market}>
                <b>2. {catResponse.control_top_scorers[1].Privacy_Policy_URL} Score: {catResponse.control_top_scorers[1].Control_Overall_Score} </b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.market}>
                <b>3. {catResponse.control_top_scorers[2].Privacy_Policy_URL} Score: {catResponse.control_top_scorers[2].Control_Overall_Score} </b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}