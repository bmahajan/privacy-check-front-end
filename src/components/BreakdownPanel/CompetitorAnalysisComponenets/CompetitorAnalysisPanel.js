import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../../RunPanel/ScoreBubble';
import DataVisualization from './DataVisualization'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

export default function CompetitorAnalysisPanel(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction='column' alignContent='center' justify='center' spacing={2}>
          <Grid item>
            <DataVisualization />
          </Grid>
          <Grid container direction='row' alignContent='center' alignItems='center' justify='center' spacing={2}>
            <Grid item>
              <Typography variant='h4'>
                Score
              </Typography>
            </Grid>
            <Grid item>
              <ScoreBubble score='80' height={60} width={60} />
            </Grid>
          </Grid>
          <Grid container direction='row' alignContent='center' justify='center' spacing={2}>
            <Grid item>
              <Typography>
                Ranks in the top 20% of the industry
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}