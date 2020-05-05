import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip'
import { PanelSwitchContext, PrivacyPolicyScoreContext } from "../PanelManager";
import Divider from "@material-ui/core/Divider";
import BreakdownPanel from "../BreakdownPanel/BreakdownPanel";

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
      <Grid container spacing={3} direction="column">
        <Tooltip
          title={'The User Control score is based off of 10 common privacy concerns as defined by the Center for Identity at ' +
          'The University of Texas at Austin. Click here to see them. ' +
          'See the about page for the full scoring algorithm.'}
          placement='top'
          enterDelay={500}
          leaveDelay={200}
        >
          <Button onClick={() => panelHandler(<BreakdownPanel tab={0}/>)} className={classes.button}>
            <Grid item className={classes.score}>
              <Typography variant="caption"> User Control </Typography>
              <Typography variant="h4">{overallScore.Control}</Typography>
            </Grid>
          </Button>
        </Tooltip>
        <Divider/>
        <Tooltip
          title={'The GDPR score is based off of 10 guiding principles outlined in the ' +
          'European Union\'s General Data Protection Regulation. Click here to see them. ' +
          'See the about page for the full scoring algorithm.'}
          placement='bottom'
          enterDelay={500}
          leaveDelay={200}
        >
          <Button onClick={() => panelHandler(<BreakdownPanel tab={1}/>)} className={classes.button}>
            <Grid item className={classes.score}>
              <Typography variant="caption"> GDPR </Typography>
              <Typography variant="h4">{overallScore.GDPR}</Typography>
            </Grid>
          </Button>
        </Tooltip>
      </Grid>
    </div>
  );
}