import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip'
import { PanelSwitchContext, PrivacyPolicyScoreContext } from "../PanelManager";

const useStyles = makeStyles(theme => ({
  score: {
    width: 125,
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
  const overallScore = React.useContext(PrivacyPolicyScoreContext);

  return(
    <div>
      <Tooltip title="Click to view score breakdown" placement="top" enterDelay={500} leaveDelay={200}>
        <Button onClick={() => panelHandler('BreakdownPanel')} className={classes.button} >
          <Grid container spacing={3} direction="column">
            <Grid item className={classes.score}>
              <Typography variant="caption"> User Control </Typography>
             <Typography variant="h3">{overallScore.Control}</Typography>
            </Grid>
            <Grid item className={classes.score}>
              <Typography variant="caption"> GDPR </Typography>
              <Typography variant="h3">{overallScore.GDPR}</Typography>
            </Grid>
          </Grid>
        </Button>
      </Tooltip>
    </div>
  );
}