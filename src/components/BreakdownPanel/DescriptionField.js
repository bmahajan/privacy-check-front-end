import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Avatar, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from "@material-ui/core/Grid";
import { green, yellow, red } from '@material-ui/core/colors';
import StatusIcon from './StatusIcon';

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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(0),
  },
  avatar: {
    marginLeft: theme.spacing(-1),
    style: {
      backgroundColor: theme.palette.secondary[700],
    },
  },
  heading: {
    marginLeft: theme.spacing(2),
    style: {
      alignItems: 'center'
    }
  },
  scoreHeading: {
    marginLeft: theme.spacing(2),
  },
  
}));

function ControlIcons(score){
  if (score == 3)
  { return('green'); }
  else if (score == 2)
  { return('red'); }
  else
  { return('yellow'); }
};

function GdprIcons(score){
  if (score == 2)
  { return('green'); }
  else if (score == 1)
  { return('red'); }
};


export default function DescriptionField(props) {

  const classes = useStyles();
  const icon_color = GdprIcons(props.score);

  return (
    <div className={classes.root}>
      <ExpansionPanel square expanded={props.expanded} onChange={props.onChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar className={classes.avatar} >{props.icon}</Avatar>
          <Grid container direction={'column'}>
            <Typography className={classes.heading}>{props.name}
            </Typography>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{props.details}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}