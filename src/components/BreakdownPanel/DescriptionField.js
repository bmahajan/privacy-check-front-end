import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

export default function DescriptionField(props) {

  return (
    <div>
      <ExpansionPanel square expanded={props.expanded} onChange={props.onChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar>{props.icon}</Avatar>
          <Grid>
            <Typography>{props.name}</Typography>
            <Typography>{props.score}</Typography>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.details}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );

}