import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../../BreakdownPanel/ScoreBubble';
import GDPRDataVisualization from './GDPRDataVisualization'
import {makeStyles} from "@material-ui/core/styles";
import { PrivacyPolicyResponseContext, PrivacyPolicyScoreContext, CompetitorAnalysisResponseContext } from "../../PanelManager";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  scoregrid: {
    marginTop: 5,
  },
  market: {
    display: "flex",
    justifyContent: "center",
    marginBottom:10,
    align: "center",
    marginLeft: 15,
    marginRight: 15 
  }
}));

export default function GDPRCompetitorAnalysisPanel(props) {

  const classes = useStyles();
  const response = React.useContext(PrivacyPolicyResponseContext);
  const catResponse = React.useContext(CompetitorAnalysisResponseContext);
  const overallScore = React.useContext(PrivacyPolicyScoreContext);

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
            <ScoreBubble score={overallScore.GDPR}/>
          </Grid>
        </Grid>
        <Grid container className={classes.scoregrid} direction='column' alignContent='center' justify='center' spacing>
          <Grid item>
            <GDPRDataVisualization />
          </Grid>
          <Grid item>
              <Typography variant='h6' className={classes.market}>
                <b>Market Sector:</b>{' '}{response.Market_Sector}
              </Typography>
          </Grid>
          <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
            <Grid item>
                <Typography variant='h6' className={classes.market}>
                <b>Top 3 Competitors </b> 
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.market} variant='body2'>
                <b>1. {catResponse.gdpr_top_scorers[0].Privacy_Policy_URL } </b> (Score: {catResponse.gdpr_top_scorers[0].GDPR_Overall_Score})
                </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.market} variant='body2'>
                <b>2. {catResponse.gdpr_top_scorers[1].Privacy_Policy_URL} </b> (Score: {catResponse.gdpr_top_scorers[1].GDPR_Overall_Score})
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.market} variant='body2'>
                <b>3. {catResponse.gdpr_top_scorers[2].Privacy_Policy_URL} </b> (Score: {catResponse.gdpr_top_scorers[2].GDPR_Overall_Score})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}