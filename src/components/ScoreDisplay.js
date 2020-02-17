import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { green, yellow, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    progress: {
        size: '50%',
    },
    avatar: {
        color: props => {
            if (props.score <= 33) {
                return red;
            } else if (props.score <= 66) {
                return yellow;
            } else if (props.score <= 100) {
                return green;
            }
        }
    }
}));

function ScoreDisplay(props) {
    const classes = useStyles();
    
    return(
        <Avatar>
            <Typography variant='h3'>
               Score: {props.score}
            </Typography> 
        </Avatar>
    );
}

export default ScoreDisplay;

