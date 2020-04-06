import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function DescriptionField(props) {

  return (
    <div>
      <ExpansionPanel square expanded={props.expanded} onChange={props.onChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar>{props.avatar}</Avatar>
          <Grid>
            <Typography>{props.title}</Typography>
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