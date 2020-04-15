import React from 'react';
import clsx from 'clsx';
import { Fab, CircularProgress, Fade, makeStyles } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { green, blue, red } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip'
import { ApiCallContext } from "../PanelManager";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
    buttonBegin:{
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    buttonLoading:{
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    dialogBox: {
      width: theme.panel.maxWidth,
    },
  }));

export default function RunButton(props) {
  const classes = useStyles();

  const apiCallHandler = React.useContext(ApiCallContext);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [begin, setBegin] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [allowRun, setAllowRun] = React.useState(false);

  const handleOpen = () => {
    console.log('Opening alert window...');
    setOpen(true);
  };

  const handleClose = (userChoice) => {
    console.log('Closing alert window...');
    setAllowRun(userChoice);
    setOpen(false);
    if (allowRun) handleRunClick();
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonBegin]: begin,
    [classes.buttonLoading]: loading,
  });

  const isPrivacyPolicy = () => {
    console.log('Checking to see if the current window is a privacy policy...');
    const path = window.location.pathname;
    const regex = RegExp('privacy|legal|conditions');
    console.log(path, regex);
    if (regex.test(path.toLowerCase())) {
      console.log('The current window is a privacy policy.');
      return true;
    } else {
      console.log('The current window is not a privacy policy.');
      return false;
    }
  };

  const handleRunClick = () => {
    console.log('Checking to see if PrivacyCheck can be run on the current window...');
    if (isPrivacyPolicy(window.location.pathname) || allowRun) {
      console.log('Running PrivacyCheck on the current window...');
      setSuccess(false);
      setLoading(true);
      setBegin(false);
      apiCallHandler();
      setSuccess(true);
      setLoading(false);
      console.log('Received response from API Gateway.');
    } else {
      console.log('Asking user if they still want to run PrivacyCheck in the current window...');
      handleOpen();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fade in={true} style={{ transformOrigin: '0 0 0' }}>
          <Tooltip title={'Click to evaluate privacy policy'} enterDelay={500} leaveDelay={200}>
            <Fab aria-label={'save'} color={'secondary'} className={buttonClassname} onClick={handleRunClick}>
              {begin ? <PlayArrowRoundedIcon /> : success ? <ReplayIcon /> : <StopRoundedIcon />}
            </Fab>
          </Tooltip>
        </Fade>
        <Dialog className={classes.dialogBox} open={open} onClose={handleClose} aria-labelledby={'alert-dialog-title'} aria-describedby={'alert-dialog-description'}>
          <DialogTitle id={'alert-dialog-title'}>Are you sure you want to run PrivacyCheck here?</DialogTitle>
          <DialogContent>
            <DialogContentText id={'alert-dialog-description'}>
              PrivacyCheck does not believe that this website is a privacy policy. This could lead to inaccurate results from our machine learning models.
              Are you sure you want to continue?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose(true)} color={'primary'}>
              Yes
            </Button>
            <Button onClick={() => handleClose(false)} color={'primary'} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
        {loading && <CircularProgress className={classes.fabProgress} size={68} />}
      </div>
    </div>
  );
}