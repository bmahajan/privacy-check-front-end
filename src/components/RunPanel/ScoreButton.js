import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { orange, blue } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip'
import { PanelSwitchContext, OverallScoreContext } from "../PanelManager";

const useStyles = makeStyles(theme => ({
  score: {
    width: 100,
  },
  button: {
    backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
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
      <Tooltip title="Click to view score breakdown" placement="top">
        <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} >
          <Grid container spacing={3} direction="column">
            <Grid item className={classes.score}>
                <Typography variant="caption"> GDPR </Typography>
                <Typography variant="h3"> {overallScore.GDPR} </Typography>
            </Grid>
            <Grid item className={classes.score}>
              <Typography variant="caption"> Control </Typography>
             <Typography variant="h3"> {overallScore.Control} </Typography>
            </Grid>
          </Grid>
        </Button>
      </Tooltip>
    </div>
  );
}