import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Avatar, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from "@material-ui/core/Grid";

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
    backgroundColor: props => {
      const colors = [theme.status.poor[600], theme.status.okay[600], theme.status.good[600]];
      return colors[props.answer.color];
    }
  },
  heading: {
    marginLeft: theme.spacing(2),
  },
  scoreHeading: {
    marginLeft: theme.spacing(2),
  },
  
}));

function scoreConverter(score){
  if(score==3)
  { return '10/10'}
  else if(score==2)
  { return '5/10'}
  else
  { return '0/10'}
}

export default function DescriptionFieldControl(props) {

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <ExpansionPanel square expanded={props.expanded} onChange={props.onChange}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar className={classes.avatar}>{props.icon}</Avatar>
          <Grid container direction={'column'} >
            <Typography className={classes.heading}>
              {props.name} - {props.answer.score}/10
            </Typography>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container direction={'column'}>
            <Typography variant="h6" fontweight="bold">{props.question}</Typography>
            <Typography>{props.answer.message}</Typography>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}