import React from 'react';
import { Grid, Typography, Paper} from '@material-ui/core';
import ScoreBubble from '../../MainPanel/ScoreBubble';
import DataVisualization from './DataVisualization'

export default function CompetitorAnalysisPanel(props) {

  return (
    <div>
      <Paper style={{width: 400, height: 362}}>
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