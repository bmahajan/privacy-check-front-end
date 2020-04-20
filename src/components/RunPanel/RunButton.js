/* global chrome */
import React from 'react';
import clsx from 'clsx';
import { Fab, CircularProgress, Fade, makeStyles } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import BlockIcon from '@material-ui/icons/Block';
import { green, blue, red } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip'
import { PrivacyCheckRunContext } from "../PanelManager";
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
      width: theme.panel.width,
      height: theme.panel.height,
    },
  }));

export default function RunButton(props) {
  const classes = useStyles();

  const privacyCheckRunHandler = React.useContext(PrivacyCheckRunContext);

  const [runDisabled, setRunDisabled] = React.useState(false);
  const [begin, setBegin] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [block, setBlock] = React.useState(false);
  const [openNAPP, setOpenNAPP] = React.useState(false);
  const [openERR, setOpenERR] = React.useState(false);

  const buttonStateHandler = (state) => {
    switch (state) {
      case 'begin':
        console.log('RunButton state changed to begin.');
        setBegin(true); setLoading(false); setSuccess(false); setBlock(false);
        break;
      case 'loading':
        console.log('RunButton state changed to loading.');
        setBegin(false); setLoading(true); setSuccess(false); setBlock(false);
        break;
      case 'success':
        console.log('RunButton state changed to success.');
        setBegin(false); setLoading(false); setSuccess(true); setBlock(false);
        break;
      case 'block':
        console.log('RunButton state changed to block.');
        setBegin(false); setLoading(false); setSuccess(false); setBlock(true);
        break;
      default:
        break;
    }
  };

  const handleOpenNAPP = () => {
    console.log('Opening alert window, not a privacy policy...');
    setOpenNAPP(true);
  };

  const handleCloseNAPP = () => {
    console.log('Closing alert window, not a privacy policy...');
    setOpenNAPP(false);
  };

  const handleOpenERR = () => {
    console.log('Opening alert window, fetch error occurred...');
    setOpenERR(true);
  };

  const handleCloseERR = () => {
    console.log('Closing alert window, fetch error occurred...');
    setOpenERR(false);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonBegin]: begin,
    [classes.buttonLoading]: loading,
  });

  const handlePrivacyCheckRun = () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      if (isPrivacyPolicy(tabs[0].url)) {
        buttonStateHandler('loading');
        console.log('Web page is a privacy policy.');
        privacyCheckRunHandler(tabs[0].url)
          .then(__ => {
            console.log('Successfully ran PrivacyCheck on current web page.');
            buttonStateHandler('success');
          })
          .catch(__ => {
            console.log('Failed to fetch data from servers.');
            handleOpenERR();
            buttonStateHandler('success');
          });
      } else {
        console.log('Web page is not a privacy policy.')
        handleOpenNAPP();
        setRunDisabled(true);
        buttonStateHandler('block');
      }
    });
  };

  const isPrivacyPolicy = (url) => {
    const regex = RegExp(/privacy|legal|conditions|policy|policies|terms/g);
    if (regex.test(url.toLowerCase())) {
      console.log('Current window url %s is a privacy policy.', url);
      return true;
    } else {
      console.log('Current window url %s is not a privacy policy.', url);
      return false;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fade in={true} style={{ transformOrigin: '0 0 0' }}>
          <Tooltip title={'Click to evaluate privacy policy'} enterDelay={500} leaveDelay={200}>
            <Fab aria-label={'save'} color={'secondary'} className={buttonClassname} onClick={handlePrivacyCheckRun} disabled={runDisabled}>
              {begin ? <PlayArrowRoundedIcon /> : success ? <ReplayIcon /> : block ? <BlockIcon /> : <StopRoundedIcon />}
            </Fab>
          </Tooltip>
        </Fade>
        <Dialog className={classes.dialogBox} open={openNAPP} onClose={handleCloseNAPP} aria-labelledby={'alert-dialog-title'} aria-describedby={'alert-dialog-description'}>
          <DialogTitle id={'alert-dialog-title'}>PrivacyCheck doesn't think this website is a privacy policy.</DialogTitle>
          <DialogContent>
            <DialogContentText id={'alert-dialog-description'}>
              PrivacyCheck does not believe that this website is a privacy policy. In an effort to keep PrivacyCheck's database clean, PrivacyCheck cannot be run on
              websites that it does not think it is a privacy policy.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNAPP} color={'primary'}>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog className={classes.dialogBox} open={openERR} onClose={handleCloseERR} aria-labelledby={'alert-dialog-title'} aria-describedby={'alert-dialog-description'}>
          <DialogTitle id={'alert-dialog-title'}>PrivacyCheck was unable to fetch data from the database.</DialogTitle>
          <DialogContent>
            <DialogContentText id={'alert-dialog-description'}>
              PrivacyCheck ran into a problem fetching data from the database. Please try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseERR} color={'primary'}>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
        {loading && <CircularProgress className={classes.fabProgress} size={68} />}
      </div>
    </div>
  );
}