import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Switch } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        fontSize: 30
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
}));

export default function SettingsCard({onToggleDark}) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders" >
    <ListItem button>
        <ListItemText primary="GDPR/FCC" />
        <Switch
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    </ListItem>
    <Divider />
    <ListItem button>
        <Brightness4Icon fontSize="small"/>
        <ListItemText primary="Dark Mode" />
        <Switch 
        onChange={onToggleDark}
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
    </ListItem>
    <Divider />
    <ListItem button>
        <ListItemText primary="Color Blind" />
        <Switch 
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
    </ListItem>
    </List>
  );
}
