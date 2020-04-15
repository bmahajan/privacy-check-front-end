import React from "react";
import ControlFeatureList from "./ControlFeatureList";
import ControlCompetitorAnalysisPanel from "./ControlCompetitorAnalysisPanel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight + 50,
  },
}));

export default function ControlBreakdownPanel(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ControlCompetitorAnalysisPanel />
      <ControlFeatureList />
    </div>
  );
}