import React from 'react';
import clsx from 'clsx';
import {
    Fab,
    CircularProgress,
    Fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ReplayIcon from '@material-ui/icons/Replay'
import SaveIcon from '@material-ui/icons/Save'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { green, blue, red } from '@material-ui/core/colors';
import RunPanelButton from './RunPanelButton'
import RunPanel from './RunPanel';
import Tooltip from '@material-ui/core/Tooltip'
import { ApiCallContext, OverallScoreContext} from "../PanelManager";


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
  }));

  function isPolicy() {
    var res = 0, i, val;
    var path = window.location.pathname;
    path = path.toLowerCase();
  
    var dict = ["privacy", "legal", "conditions"]
  
    for (i of dict) {
        val = path.search(i);
        if (val >= 0) {
            res = 1;
            break;
        }
    }
  
    return res;
  }

export default function RunButton(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [begin, setBegin] = React.useState(true);
    const timer = React.useRef();
    const [checked, setChecked] = React.useState(true);
    const [loadingstate, setLoadingState] = React.useState('begin');
  
    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
      [classes.buttonBegin]: begin,
      [classes.buttonLoading]: loading,
    });
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    const [count, setCount] = React.useState(0);

    const apiCallHandler = React.useContext(ApiCallContext);
    
    const handleButtonClick = () => {
      setSuccess(false);
      setLoading(true);
      setBegin(false);
      setCount(() => {
        if (count % 2 === 0) {
          return count + 1;
        } else {
          return count + 3;
        }
      });
      
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        }, 2000);

      if(!isPolicy()){ // REVERSE THE CONDITION!!!
        apiCallHandler();
        console.log('IT IS NOT POLICY!')
      }
      else{
        console.log('IT IS A POLICY')
      }
    };
  
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fade 
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : { timeout: 1000 })}>
            <Tooltip title="Click to evaluate privacy policy">
              <Fab
              aria-label="save"
              color="secondary"
              className={buttonClassname}
              onClick={handleButtonClick}
              >
                {/*success ? <ReplayIcon /> : <StopRoundedIcon />*/}
                {begin ? <PlayArrowRoundedIcon /> : success ? <ReplayIcon /> : <StopRoundedIcon />}
              </Fab>
            </Tooltip>
          </Fade>
          {loading && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      </div>
    );
  }