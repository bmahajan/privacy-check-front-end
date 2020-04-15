import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../ScoreBubble';
import GDPRDataVisualization from './GDPRDataVisualization'
import {makeStyles} from "@material-ui/core/styles";
import { ApiResponseContext, OverallScoreContext } from "../../PanelManager";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  grid: {
    marginTop: 5,
    marginBottom: 10,
  },
  market: {
    display: "flex",
    justifyContent: "center",
  }
}));

export default function GDPRCompetitorAnalysisPanel(props) {

  const classes = useStyles();
  const response = React.useContext(ApiResponseContext);
  const overallScore = React.useContext(OverallScoreContext);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
          <Grid item>
            <GDPRDataVisualization />
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
                <b>URL1 -</b> Score
                </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.market}>
                <b>URL2 -</b> Score
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.market}>
              <b>URL3 -</b> Score
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.grid} direction='row' alignContent='center' alignItems='center' justify='center' spacing={2}>
            <Grid item>
              <Typography variant='h4'>
                Score
              </Typography>
            </Grid>
            <Grid item>
              <ScoreBubble score={overallScore.Control} height={50} width={50} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}