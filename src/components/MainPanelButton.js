import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    Typography,
    IconButton,
    makeStyles,
    Fade,
} from '@material-ui/core';
import RunButton from './RunButton';

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
            visible: false,
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
    const classes = useStyles(props);
    const [breathing, setBreathing] = React.useState(true);
    //const [begin, setBegin] = React.useState(true);
    //let [loading, setLoading] = React.useState(false);
    //let [success, setSuccess] = React.useState(false);
    const breathe = React.useState(true);
    const timer = React.useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: props.success,
        [classes.buttonBegin]: props.begin,
        [classes.buttonLoading]: props.loading,
      });

    const handleButtonClick = () => {
      

    } 

    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);

    const didFadeIn = () => {
        
    }

    return(
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Fade 
                in={buttonClassname.visible}
                style={{ transformOrigin: '0 0 0' }}
                {...(buttonClassname.visible ? { timeout: 1000 } : { timeout: 1000 })}>
                    <IconButton 
                    aria-label={props.name} 
                    onclick={handleButtonClick}
                    disabled={buttonClassname.disabled}>
                        {props.icon}
                    </IconButton>
                </Fade>
            </div>
        </div>
    )
}