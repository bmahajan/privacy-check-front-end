import React from "react";
import CompetitorAnalysisPanel from "../CompetitorAnalysisComponenets/CompetitorAnalysisPanel";
import GDPRFeatureList from "./GDPRFeatureList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
}));

export default function GDPRBreakdownPanel(props) {

  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CompetitorAnalysisPanel />
      <GDPRFeatureList />
    </div>
  );
}