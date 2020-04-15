import React from 'react';
import { IconButton, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { PanelSwitchContext } from "../PanelManager";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  begin: {
    disabled: true,
    visible: true,
  },
  loading: {
    disabled: true,
    visible: true,
  },
  success:{
    disabled: false,
    visible: true,
  },
}));

export default function RunPanelButton(props) {

  const panelHandler = React.useContext(PanelSwitchContext);

  const classes = useStyles(props);

  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return(
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Tooltip title={props.tooltip} placement="top" enterDelay={500} leaveDelay={200}>
          <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : { timeout: 1000 })}>
            <IconButton aria-label={props.panel} onClick={() => panelHandler(props.panel)}>
              {props.icon}
            </IconButton>
          </Fade>
        </Tooltip>
      </div>
    </div>
  );
}