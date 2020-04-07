import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { Switch, Card } from '@material-ui/core';
import { PanelSwitchContext, ThemeSwitchContext } from "../PanelManager";
import IconButton from "@material-ui/core/IconButton";


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
        fontSize: 25
    },
    dark: {
        marginBottom: 12,
        marginLeft: 16
    },
    color: {
        marginBottom: 12,
        marginLeft: 13
    },
    icons: {
        marginLeft: 10
    }
}));

//TODO: make a state handler for the switches
export default function SettingsCard(props) {

  const themeHandler = React.useContext(ThemeSwitchContext);
  const currentTheme = localStorage.getItem('theme');

    var theme;

    if (currentTheme === 'light') {
        theme = false;
    } else if (currentTheme === 'dark'){
        theme = true;
    } else {
        theme = false;    
    }

  const [state, setState] = React.useState(theme);

  const handleChange = event => {

    if (event.target.checked){
        console.log('true');
        themeHandler('dark');
        setState(true);
        }
    else {
        console.log('false')
        themeHandler('light');
        setState(false);
        }

    };
    
  const classes = useStyles();

  return (
    <Card>
        <List component="nav" className={classes.root} >
            <ListItem >
                <Brightness4Icon fontSize="small" className={classes.icons}/>
                <ListItemText primary="Dark Mode" className={classes.dark} />
                <Switch 
                checked={state}
                onClick={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}/>
            </ListItem>
        <Divider />
            <ListItem >
                <ColorLensIcon className={classes.icons}/>
                <ListItemText primary="Color Blind" className={classes.color} />
                <Switch 
                inputProps={{ 'aria-label': 'primary checkbox' }}/>
            </ListItem>
        <Divider />
        </List>
    </Card>
  );
}
