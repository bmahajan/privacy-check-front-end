import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { green, yellow, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: props => {
            if (props.score <= 33) {
                return red[400];
            } else if (props.score <= 66) {
                return yellow[400];
            } else if (props.score <= 100) {
                return green[400];
            }
        },
        height: 60,
        width: 60,
    }
}));

function ScoreDisplay(props) {
    const classes = useStyles(props);
    
    return(
        <Avatar className={classes.avatar}>
            <Typography variant='h4'>
               {props.score}
            </Typography> 
        </Avatar>
    );
}

export default ScoreDisplay;

