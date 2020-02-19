import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, Grid, Paper, Typography} from "@material-ui/core";
import {green, grey, red, yellow} from "@material-ui/core/colors";

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'snow',
    padding: theme.spacing(0.4),
  },
  paper: {
    maxWidth: '100%',
    align: 'center',
    padding: theme.spacing(3),
    backgroundColor: 'beige',
  },
  avatar: {
    width: 50,
    height: 50,
    padding: theme.spacing(0.5),
    color: 'white',
    backgroundColor: props => {
      if (inRange(props.score, 0, 33)) {
        return red[300];
      } else if (inRange(props.score, 34, 66)) {
        return yellow[300];
      } else if (inRange(props.score, 67, 100)) {
        return green[300];
      } else {
        return grey[500];
      }
    },
  },
}));

function inRange(x, start, stop) {
  return ((x-start)*(x-stop) <= 0);
}

export default function ScoreBreakdownField(props) {
  const classes = styles(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container wrap={'nowrap'} spacing={4} direction={'row'}>
          <Grid item spacing={1}>
            <Avatar className={classes.avatar}>
              {props.icon}
            </Avatar>
          </Grid>
          <Grid container wrap={'nowrap'} direction={'column'}>
            <Grid item>
              <Typography className={classes.text}>
                <b>{props.name}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                {props.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}