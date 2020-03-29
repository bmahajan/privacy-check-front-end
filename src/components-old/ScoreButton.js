import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    scoreButton: {
      width: 100,
    },
  
    button: {
      backgroundColor: 'orange'
    },

  }));

export default function ScoreButton (props){
    const classes = useStyles();

    return(
        <div>
            <ButtonGroup
                color="primary"
                size="large"
                aria-label="Score Button"
                variant="contained"
                >
                  <Button onClick={() => props.click(props.pane)} className={classes.button} style={{width: 100}}>GDPR</Button>
                  <Button onClick={() => props.click(props.pane)} className={classes.button} style={{width: 100}}>Control</Button>
                </ButtonGroup>
        </div>
    )

}