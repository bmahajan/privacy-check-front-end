import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { PanelSwitchContext, ThemeSwitchContext, OverallScoreContext } from "../PanelManager";

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
    const panelHandler = React.useContext(PanelSwitchContext);
    const overallScore = React.useContext(OverallScoreContext);

    return(
        <div>
            <ButtonGroup
                color="primary"
                size="large"
                aria-label="Score Button"
                variant="contained"
                >
                  <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} style={{width: 100}}>
                    GDPs
                  </Button>
                  <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} style={{width: 100}}>
                    Control
                    {overallScore.Control}
                  </Button>
                </ButtonGroup>
        </div>
    )

}