import React from 'react';
import {Card, Typography, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ScoreBubble from './ScoreBubble';
import { blue } from '@material-ui/core/colors';

const useStyles = theme => ({
  card: {
    color: blue,
    margin: 5,
    padding: 1,
    variant: 'elevation',
  },
});

class CompetitorCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return(
      <Card className={classes.card}>
        <Grid container alignItems='center' direction='row' justify='center' spacing={2}>
          <Grid item>
            <Typography variant='h5' align='center'>
              <p>{this.props.company}</p>
            </Typography>
          </Grid>
          <Grid item>
            <ScoreBubble score={this.props.score} />
          </Grid>
        </Grid>
      </Card>
    )
  }
}

export default withStyles(useStyles)(CompetitorCard);
