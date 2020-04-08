import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { green, yellow, red } from '@material-ui/core/colors';
import { ApiResponseContext } from "../PanelManager";

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: props => {
      if (props.score <= 33) {
        return red[400];
      } else if (props.score <= 66) {
        return yellow[400];
      } else if (props.score <= 100) {
        return green[400];
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
  }
}));

function ScoreBubble(props) {
  const classes = useStyles(props);

  const response = React.useContext(ApiResponseContext);
  console.log(response);

  return(
    <Avatar className={classes.avatar}>
      <Typography variant='h4'>
        {response.Control_Scores[0]}
      </Typography>
    </Avatar>
  );
}

export default ScoreBubble;

