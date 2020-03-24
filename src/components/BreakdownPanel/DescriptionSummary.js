import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export default function DescriptionSummary(props) {

  return (
    <div>
      <Avatar>{props.avatar}</Avatar>
      <Grid>
        <Typography>{props.title}</Typography>
        <Typography>{props.score}</Typography>
      </Grid>
    </div>
  );

}