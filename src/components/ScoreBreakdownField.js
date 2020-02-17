import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, Grid, Paper, Typography} from "@material-ui/core";

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: '100%',
    align: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'beige',
  },
  avatar: {
    width: 50,
    height: 50,
    padding: 5,
    color: 'white',
    backgroundColor: props => props.color,
  },
  text: {
    padding: theme.spacing(0.1),
  },
}));

export default function ScoreBreakdownField(props) {
  const classes = styles(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Grid container wrap={'nowrap'} spacing={2} direction={'row'}>
          <Grid item>
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