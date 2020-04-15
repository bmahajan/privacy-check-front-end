import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip'
import { PanelSwitchContext, OverallScoreContext } from "../PanelManager";

const useStyles = makeStyles(theme => ({
  score: {
    width: 100,
  },
  button: {
    backgroundColor: theme.palette.secondary[800],
      '&:hover': {
        backgroundColor: theme.palette.secondary[900],
      },
  },
}));

export default function ScoreButton (props){

  const classes = useStyles();
  const panelHandler = React.useContext(PanelSwitchContext);
  const overallScore = React.useContext(OverallScoreContext);

  return(
    <div>
      <Tooltip title="Click to view score breakdown" placement="top" enterDelay={500} leaveDelay={200}>
        <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} >
          <Grid container spacing={3} direction="column">
            <Grid item className={classes.score}>
                <Typography variant="body2"> GDPR </Typography>
                <Typography variant="h3"> {overallScore.GDPR} </Typography>
            </Grid>
            <Grid item className={classes.score}>
              <Typography variant="body2"> Control </Typography>
             <Typography variant="h3"> {overallScore.Control} </Typography>
            </Grid>
          </Grid>
        </Button>
      </Tooltip>
    </div>
  );
}