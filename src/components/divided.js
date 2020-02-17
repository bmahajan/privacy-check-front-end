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

export default function Divided() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <List component="nav" className={classes.root} aria-label="mailbox folders" >
    <ListItem button>
        <Brightness4Icon fontSize="small"/>
        <ListItemText primary="GDPR/FCC"  />
        <Switches />
    </ListItem>
    <Divider />
    <ListItem button>
        <ListItemText primary="Dark Mode" />
        <Switches />
    </ListItem>
    <ListItem button divider>
        <ListItemText primary="Color Blind" />
        <Switches />
    </ListItem>
    <Divider light />
    </List>
    </ThemeProvider>
  );
}
