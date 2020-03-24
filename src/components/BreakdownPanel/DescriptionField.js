import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import DescriptionSummary from "./DescriptionSummary";
import DescriptionDetails from "./DescriptionDetails";

export default function DescriptionField(props) {

  return (
    <div>
      <ExpansionPanel square expanded={props.expanded} onChange={props.onChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <DescriptionSummary avatar={props.avatar} title={props.title} score={props.score}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DescriptionDetails details={props.details}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );

}