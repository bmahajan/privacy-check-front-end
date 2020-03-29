import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Switch, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        fontSize: 30,
        marginBottom: 164
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


//TODO: make a state handler for the switches
export default function SettingsCard(props) {
  const classes = useStyles();

  return (
    <Card>
        <List component="nav" className={classes.root} aria-label="mailbox folders" >
        <ListItem button>
            <Brightness4Icon fontSize="small"/>
            <ListItemText primary="Dark Mode" />
            <Switch 
            onChange={props.onToggleDark}
            inputProps={{ 'aria-label': 'primary checkbox' }}/>
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemText primary="Color Blind" />
            <Switch 
            inputProps={{ 'aria-label': 'primary checkbox' }}/>
        </ListItem>
        </List>
    </Card>
  );
}
