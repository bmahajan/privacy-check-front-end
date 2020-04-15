import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../ScoreBubble';
import DataVisualization from './DataVisualization'
import {makeStyles} from "@material-ui/core/styles";
import { OverallScoreContext } from "../../PanelManager";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  grid: {
    marginTop: 5,
    marginBottom: 10,
  }
}));

export default function CompetitorAnalysisPanel(props) {

  const classes = useStyles();

  const overallScore = React.useContext(OverallScoreContext);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
          <Grid item>
            <DataVisualization />
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