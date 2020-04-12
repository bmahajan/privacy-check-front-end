import React from 'react';
import NavigationBar from '../Misc/NavigationBar';
import GDPRFeatureList from "./GDPRFeatureList";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";
import { AppBar, Tabs, Tab } from '@material-ui/core';
import GDPRScoreBreakdown from "./GDPRScoreBreakdown";
import ControlScoreBreakdown from "./ControlScoreBreakdown";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.sizing.width,
    maxHeight: theme.sizing.maxHeight,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>

    </div>
  );
}

export default function BreakdownPanel() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <NavigationBar title={'Score Breakdown'} color={'orange'} back={'RunPanel'}/>
    </div>
  );
}