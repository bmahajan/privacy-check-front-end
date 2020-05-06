import React from 'react';
import {
  Grid,
  Card,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog, FormControlLabel, Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RunButton from './RunButton';

import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import BallotIcon from '@material-ui/icons/Ballot';

import RunPanelButton from './RunPanelButton';
import ScoreButton from './ScoreButton';
import Encrypt from '../Misc/Encrypt';
import UTCIDLogo from '../../UTCID.png'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { StartupContext, StartupSwitchContext } from '../PanelManager';
import SettingsPanel from "../SettingsPanel/SettingsPanel";
import BreakdownPanel from "../BreakdownPanel/BreakdownPanel";
import CompetitorAnalysisPanel from "../CompetitorAnalysisPanel/CompetitorAnalysisPanel";
import AboutPanel from "../AboutPanel/AboutPanel";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
  },
  scoreButton: {
    width: 100,
  },
  utcidLogo: {
    marginBottom: 15,
  },
  dialogBox: {
    width: theme.panel.width,
    height: theme.panel.maxHeight,
  },
}));

export default function RunPanel(props) {

  const startupContext = React.useContext(StartupContext);
  const startupSwitchHandler = React.useContext(StartupSwitchContext);

  const [open, setOpen] = React.useState(startupContext);
  const [checkState, setCheckState] = React.useState(false);

  const classes = useStyles();

  const closePopup = () => {
    setOpen(false);
  };

  const handleStartupChange = event => {
    if (event.target.checked) {
      console.log('Display popup is disabled.');
      startupSwitchHandler('disabled');
      setCheckState(true);
    } else {
      console.log('Display popup is enabled.');
      startupSwitchHandler('enabled');
      setCheckState(false);
    }
  };

  return(
    <Card className={classes.root}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Encrypt interval={500} className={classes.encrypt}/>
      </div>
      <Grid container direction={'column'} alignContent={'center'} alignItems={'center'} spacing={3}>
        <img src={UTCIDLogo} alt="utcid logo" height={40} width={220} className={classes.utcidLogo} />
        <Grid item flex-basis={'content'}>
          <ScoreButton pane={'BreakdownPanel'} scores={[]} />
        </Grid>
        <Grid item flex-basis={'content'}>
          <RunButton />
        </Grid>
        <Grid item>
          <Grid container direction={'row'} padding={3}>
            <Grid item>
              <RunPanelButton icon={<SettingsIcon />} panel={<SettingsPanel />} tooltip={'Settings'} />
            </Grid>
            <Grid item>
              <RunPanelButton icon={<BallotIcon />} panel={<BreakdownPanel />} tooltip={'Score Breakdown'} />
            </Grid>
            <Grid item>
              <RunPanelButton icon={<BarChartRoundedIcon />} panel={<CompetitorAnalysisPanel />} tooltip={'Competitor Analysis'} />
            </Grid>
            <Grid item>
              <RunPanelButton icon={<InfoIcon />} panel={<AboutPanel />} tooltip={'About'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog className={classes.dialogBox} open={open} onClose={closePopup} aria-labelledby={'alert-dialog-title'} aria-describedby={'alert-dialog-description'}>
        <DialogTitle id={'alert-dialog-title'}>Welcome to PrivacyCheck&trade;!</DialogTitle>
        <DialogContent>
          <DialogContentText id={'alert-dialog-description'}>
            <Typography>
              PrivacyCheck&trade; is designed to help inform you about how websites use your data by reading privacy policies for you!
              <p>
              To use PrivacyCheck&trade;: (1) navigate to a website's privacy policy page, (2) open this extension,
              and (3) click play!
              </p>
            </Typography>
            <FormControlLabel
              control={<Checkbox checked={checkState} onChange={handleStartupChange}/>}
              label={'Don\'t show me this again'}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} color={'primary'}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}