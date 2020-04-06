import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    Typography,
    IconButton,
    Fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import RunButton from './RunButton';
import { PanelSwitchContext, ThemeSwitchContext } from "../PanelManager";

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
    
    
}))

export default function MainPanelButton(props) {

    const panelHandler = React.useContext(PanelSwitchContext);

    const classes = useStyles(props);
    // const [breathing, setBreathing] = React.useState(true);
    // const [begin, setBegin] = React.useState(true);
    // let [loading, setLoading] = React.useState(false);
    // let [success, setSuccess] = React.useState(false);
    // const breathe = React.useState(true);
    const timer = React.useRef();

    // const buttonClassname = clsx({
    //     [classes.buttonSuccess]: success,
    //     [classes.buttonBegin]: begin,
    //     [classes.buttonLoading]: loading,
    //   });

    const handleButtonClick = (name) => {
      //ReactDOM.render(props.pane, document.getElementById('root'));
      //alert('settings button clicked')
        console.log(`${name} button clicked `)
    } 

    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);

    
    return(
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Fade 
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : { timeout: 1000 })}>
                    <IconButton 
                    aria-label={props.pane} 
                    onClick={() => panelHandler(props.pane)}
                    /*disabled={buttonClassname.disabled}*/>
                    {props.icon}
                    </IconButton>
                </Fade>
            </div>
        </div>
    ) 
}