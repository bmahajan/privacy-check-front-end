import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Avatar, Grid, Paper, Typography} from '@material-ui/core';
import { green, grey, red, yellow } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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

const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
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

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
})) (MuiExpansionPanelDetails);

export default function ScoreBreakdownField(props) {

  return (
    <div style={{width: '100%'}}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar>{props.icon}</Avatar>
          <Typography>{props.name}</Typography>
          <Typography>{props.score}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.details}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}