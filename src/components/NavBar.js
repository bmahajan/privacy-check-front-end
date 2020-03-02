import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: props => props.color,
  },
  backButton: {
    // marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function NavBar(props) {

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position='static'>
        <Toolbar variant={'dense'}>
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