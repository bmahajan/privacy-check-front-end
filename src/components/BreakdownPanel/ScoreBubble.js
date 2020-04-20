import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { green, yellow, red } from '@material-ui/core/colors';
import { PrivacyPolicyScoreContext } from "../PanelManager";

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: props => {
      if (props.score <= 33) {
        return red[600];
      } else if (props.score <= 66) {
        return yellow[600];
      } else if (props.score <= 100) {
        return green[600];
      }
    },
    height: props => {
      if (props.height === undefined) {
        return 50;
      } else {
        return props.height;
      }
    },
    width: props => {
      if (props.width === undefined) {
        return 50;
      } else {
        return props.width;
      }
    },
    marginBottom: 5
  }
}));

function ScoreBubble(props) {

  const classes = useStyles(props);

  return(
    <Avatar className={classes.avatar}>
      <Typography variant='h4'>
        {props.score}
      </Typography>
    </Avatar>
  );
}

export default ScoreBubble;

