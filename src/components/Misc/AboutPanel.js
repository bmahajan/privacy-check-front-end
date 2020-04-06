import React from 'react';
import NavigationBar from './NavigationBar'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: 400,
        height: 500,
    },
}));

export default function AboutPanel(props) {

    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <NavigationBar title='About' color="orange" />
            <Paper>
                <Typography variant='h6' align='center'>
                    General disclaimer: The information contained in the PrivacyCheck Chrome Extension is for informational purposes only and
                     is not intended to be used as legal advice for specific legal problems or to replace or substitute the professional advice of a personal privacy specialist or expert. 
                     This information is estimated and is determined automatically by a computer program. 
                     Copyright © 2015 The University of Texas at Austin, Center for Identity, All Rights Reserved.
                </Typography>   
            </Paper>    
        </div>
    );
}