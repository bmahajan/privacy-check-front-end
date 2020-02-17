import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import {orange} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.backButton} color='inherit' aria-label='menu'>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} align='center'>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;