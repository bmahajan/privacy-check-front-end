import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PanelSwitchContext } from "../PanelManager";
import { orange } from "@material-ui/core/colors";
import Logo from "../../PrivacyCheck_Logo.png";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    height: 50,
    backgroundColor: theme.palette.secondary[700],
  },
  backButton: {
    marginRight: theme.spacing(0),
    color: theme.palette.primary[50],
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: theme.palette.primary[50],
  },
}));

export default function NavigationBar(props) {

  const classes = useStyles();

  const panelHandler = React.useContext(PanelSwitchContext);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position='static'>
        <Toolbar variant={'dense'}>
          <IconButton onClick={() => panelHandler('RunPanel')} edge='start' className={classes.backButton} aria-label='menu'>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} align='center'>
            {props.title}
          </Typography>
          <img src={Logo} alt="website logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
}