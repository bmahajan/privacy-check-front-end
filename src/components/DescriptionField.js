import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Avatar, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from "@material-ui/core/Grid";

// ExpansionPanel styling
const ExpansionPanel = withStyles(theme => ({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})) (MuiExpansionPanel);

// ExpansionPanelSummary styling sheet
const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    // marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
    alignItems: 'center',
  },
  expanded: {},
})) (MuiExpansionPanelSummary);

// ExpansionPanelDetails styling sheet
const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
})) (MuiExpansionPanelDetails);

// General stylesheet for various divs
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    marginLeft: theme.spacing(2),
  },
  scoreHeading: {
    marginLeft: theme.spacing(2),
  },
}));

export default function DescriptionField(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel square expanded={props.expanded} onChange={props.onChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar>{props.icon}</Avatar>
            <Grid direction={'column'}>
              <Typography className={classes.heading}>{props.name}</Typography>
              <Typography className={classes.scoreHeading}>{props.score}</Typography>
            </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.details}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}