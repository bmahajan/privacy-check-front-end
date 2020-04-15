import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../ScoreBubble';
import GDPRDataVisualization from './GDPRDataVisualization'
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
  },
  top: {
    marginLeft: 15,
    display: "flex",
    alignContent: "left",
  },
  last: {
    marginLeft: 15,
    marginBottom: 10,
  }
}));

export default function GDPRCompetitorAnalysisPanel(props) {

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
            <ScoreBubble score={overallScore.GDPR} height={50} width={50} />
          </Grid>
        </Grid>
        <Grid container className={classes.scoregrid} direction='column' alignContent='center' justify='center' spacing>
          <Grid item>
            <GDPRDataVisualization />
          </Grid>
          <Grid item>
              <Typography variant='h6' className={classes.market}>
                <b>Market Sector:  </b> {response.Market_Sector}
              </Typography>
          </Grid>
          <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
            <Grid item>
                <Typography variant='h6' className={classes.market}>
                <b>Top 3 Competitors:</b> 
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.top}>
                <b>1. {catResponse.gdpr_top_scorers[0].Domain_URL} </b>(Score: {catResponse.gdpr_top_scorers[0].GDPR_Overall_Score})
                </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.top}>
                <b>2. {catResponse.gdpr_top_scorers[1].Domain_URL} </b>(Score: {catResponse.gdpr_top_scorers[1].GDPR_Overall_Score})
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.last}>
                <b>3. {catResponse.gdpr_top_scorers[2].Domain_URL} </b>(Score: {catResponse.gdpr_top_scorers[2].GDPR_Overall_Score})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}