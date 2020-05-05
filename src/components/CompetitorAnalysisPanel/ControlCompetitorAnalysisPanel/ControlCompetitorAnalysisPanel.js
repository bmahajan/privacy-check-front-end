import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../../BreakdownPanel/ScoreBubble';
import ControlDataVisualization from './ControlDataVisualization'
import {makeStyles} from "@material-ui/core/styles";
import { PrivacyPolicyResponseContext, PrivacyPolicyScoreContext, CompetitorAnalysisResponseContext } from "../../PanelManager";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  scoregrid: {
    marginTop: 5,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center"  
  },
  market: {
    display: "flex",
    align: "left",
    marginLeft: 25,
    marginRight: 20
  },
  score: {
    display: "flex",
    align: "right",
    justifyContent: "right",
    marginRight: 20,
  },
  last: {
    marginBottom: 10,
  },
  link: {
    color: theme.palette.primary[500],
  }
}));

function url_domain(data) {
  if (data === "") {
    return "";
  }
  var a = document.createElement('a');
  a.href = data;
  return a.hostname;
}

export default function ControlCompetitorAnalysisPanel(props) {

  const classes = useStyles();
  const response = React.useContext(PrivacyPolicyResponseContext);
  const catResponse = React.useContext(CompetitorAnalysisResponseContext);
  const overallScore = React.useContext(PrivacyPolicyScoreContext);
  var score = overallScore.Control;
  score = score.slice(0,-1);
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
            <ScoreBubble score={score} variant='h5'/>
          </Grid>
        </Grid>
        <Grid container direction='column'>
          <Grid item>
            <ControlDataVisualization />
          </Grid>
          <Grid item>
            <Typography variant='body1' className={classes.scoregrid}>
              {<b>Market Sector: </b>}&nbsp;{response.Market_Sector}
            </Typography>
            <Typography variant='body1' className={classes.scoregrid}>
              {<b>Market Sector Mean Score: </b>}&nbsp;{catResponse.control_mean}{'%'}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' className={classes.scoregrid}>
              <b>Top 3 Competitors</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.market} container direction='column' alignContent='center' justify='center' spacing={2}>
          <Grid  container direction='row' wrap="nowrap" alignItems='center' spacing={2}>
            <Grid item xs={8}>
              <Typography variant='body1'>
                1.  {<a href={catResponse.control_top_scorers[0].Privacy_Policy_URL} target="_blank" className={classes.link}>
                    {url_domain(catResponse.control_top_scorers[0].Privacy_Policy_URL)}</a>} 
              </Typography>
            </Grid>
            <Grid item className={classes.score} xs={2}>
              <ScoreBubble score={catResponse.control_top_scorers[0].Control_Overall_Score} height={40} width={40}/>
            </Grid>
          </Grid>
          <Grid  container direction='row' alignItems='center' spacing={2}>
            <Grid item xs={8}>
              <Typography variant='body1'>
                2.  {<a href={catResponse.control_top_scorers[1].Privacy_Policy_URL} target="_blank" className={classes.link}>
                    {url_domain(catResponse.control_top_scorers[1].Privacy_Policy_URL)}</a>} 
              </Typography>
            </Grid>
            <Grid item className={classes.score} xs={2}>
              <ScoreBubble score={catResponse.control_top_scorers[1].Control_Overall_Score} height={40} width={40}/>
            </Grid>
          </Grid>
          <Grid container className={classes.last} direction='row' alignItems='center' spacing={2}>
            <Grid item xs={8}>
              <Typography variant='body1'>
                3.  {<a href={catResponse.control_top_scorers[2].Privacy_Policy_URL} target="_blank" className={classes.link}>
                    {url_domain(catResponse.control_top_scorers[2].Privacy_Policy_URL)}</a>}
              </Typography>
            </Grid>
            <Grid item className={classes.score} xs={2}>
              <ScoreBubble score={catResponse.control_top_scorers[2].Control_Overall_Score} height={40} width={40}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}