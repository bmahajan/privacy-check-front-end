import React from "react";
import ControlFeatureList from "./ControlFeatureList";
import CompetitorAnalysisPanel from "../CompetitorAnalysisComponenets/CompetitorAnalysisPanel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
}));

export default function ControlBreakdownPanel(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CompetitorAnalysisPanel />
      <ControlFeatureList />
    </div>
  );
}