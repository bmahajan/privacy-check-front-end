import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

    const GDPRButtonMessage = "GDPR \n" + overallScore.GDPR;
    const ControlButtonMessage = "Control \n" + overallScore.Control;

    return(
        <div>
            <ButtonGroup
                color="primary"
                size="large"
                aria-label="Score Button"
                variant="contained"
                >
                  <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} style={{width: 100}}>
                    <div>
                    <Typography variant="caption"> GDPR </Typography>
                    <Typography varitan="title"> {overallScore.GDPR} </Typography>
                    </div>
                  </Button>
                  <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} style={{width: 100}}>
                    <div>
                    <Typography variant="caption"> Control </Typography>
                    <Typography varitan="title"> {overallScore.Control} </Typography>
                    </div>
                  </Button>
                </ButtonGroup>
        </div>
    )

}