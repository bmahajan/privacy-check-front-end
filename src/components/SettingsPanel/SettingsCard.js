import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HelpIcon from '@material-ui/icons/Help';
import { Switch, Card } from '@material-ui/core';
import { ThemeSwitchContext, StartupSwitchContext } from "../PanelManager";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontSize: 30,
    marginBottom: 164,
  },
  dark: {
    marginBottom: 12,
    marginLeft: 16,
  },
  popup: {
    marginBottom: 12,
    marginLeft: 16,
  },
  icons: {
    marginLeft: 10,
  },
  colorBlind: {
    color: theme.palette.primary[500],
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default function SettingsCard() {

  const themeHandler = React.useContext(ThemeSwitchContext);
  const startupHandler = React.useContext(StartupSwitchContext);

  const [themeState, setThemeState] = React.useState(() => {
    const currentTheme = localStorage.getItem('theme');
    switch (currentTheme) {
      case 'light':
        return false;
      case 'dark':
        return true;
      default:
        return false;
    }
  });

  const [startupState, setStartupState] = React.useState(() =>{
    const currentStartup = localStorage.getItem('startup');
    switch (currentStartup) {
      case 'enabled':
        return true;
      case 'disabled':
        return false;
      default:
        return true;
    }
  });

  const handleThemeChange = event => {
    if (event.target.checked) {
      console.log('true');
      themeHandler('dark');
      setThemeState(true);
    } else {
      console.log('false')
      themeHandler('light');
      setThemeState(false);
    }
  };

  const handleStartupChange = event => {
    if (event.target.checked) {
      console.log('Display popup is enabled.');
      startupHandler('enabled');
      setStartupState(true);
    } else {
      console.log('Display popup is disabled.');
      startupHandler('disabled');
      setStartupState(false);
    }
  };
    
  const classes = useStyles();

  return (
    <Card>
      <List component="nav" className={classes.root} >
        <ListItem>
          <Brightness4Icon fontSize="small" className={classes.icons}/>
          <ListItemText primary="Dark Mode" className={classes.dark} />
          <Switch checked={themeState} onClick={handleThemeChange} inputProps={{ 'aria-label': 'primary checkbox' }}/>
        </ListItem>
        <Divider/>
        <ListItem>
          <HelpIcon fontSize="small" className={classes.icons}/>
          <ListItemText primary="Show Instructions on Startup" className={classes.dark} />
          <Switch checked={startupState} onClick={handleStartupChange} inputProps={{ 'aria-label': 'primary checkbox' }}/>
        </ListItem>
        <Divider/>
      </List>
    </Card>
  );
}
