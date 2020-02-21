import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Switches from "./Switch";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Switch } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
      type: 'dark'
    },
  });
  
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
    }
}));

export default function Divided({onPoop}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <List component="nav" className={classes.root} aria-label="mailbox folders" >
    <ListItem button>
        <Brightness4Icon fontSize="small"/>
        <ListItemText primary="GDPR/FCC"  />
        <Switch
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    </ListItem>
    <Divider />
    <ListItem button>
        <ListItemText primary="Dark Mode" />
        <Switch 
        onChange={onPoop}
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
    </ListItem>
    <ListItem button divider>
        <ListItemText primary="Color Blind" />
        <Switch 
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
    </ListItem>
    <Divider light />
    </List>
    </ThemeProvider>
  );
}
