import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../ScoreBubble';
import DataVisualization from './DataVisualization'
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

export default function CompetitorAnalysisPanel(props) {

  const classes = useStyles();
  const response = React.useContext(ApiResponseContext);
  const overallScore = React.useContext(OverallScoreContext);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
          <Grid item>
            <DataVisualization />
          </Grid>
          <Grid item>
              <Typography variant='h6' className={classes.market}>
                Market Sector: {response.Market_Sector}
              </Typography>
          </Grid>
          <Grid container className={classes.grid} direction='row' alignContent='center' alignItems='center' justify='center' spacing={2}>
            <Grid item>
              <Typography variant='h4'>
                Score
              </Typography>
            </Grid>
            <Grid item>
              <ScoreBubble score={overallScore.GDPR} height={50} width={50} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}