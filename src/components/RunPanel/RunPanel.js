import React from 'react';
import {Grid, Card, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RunButton from './RunButton';

import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import BallotIcon from '@material-ui/icons/Ballot';

import RunPanelButton from './RunPanelButton';
import ScoreButton from './ScoreButton';
import Encrypt from '../Misc/Encrypt';
import UTCIDLogo from '../../UTCID.png'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { StartupContext } from '../PanelManager';

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

  const [open, setOpen] = React.useState(startupContext);

  const classes = useStyles();

  const closePopup = () => {
    setOpen(false);
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
              <RunPanelButton icon={<SettingsIcon />} panel={'SettingsPanel'} tooltip={'Settings'} />
            </Grid>
            <Grid item>
              <RunPanelButton icon={<BallotIcon />} panel={'BreakdownPanel'} tooltip={'Score Breakdown'} />
            </Grid>
            <Grid item>
              <RunPanelButton icon={<BarChartRoundedIcon />} panel={'CompetitorAnalysisPanel'} tooltip={'Competitor Analysis'} />
            </Grid>
            <Grid item>
              <RunPanelButton icon={<HelpOutlineRoundedIcon />} panel={'AboutPanel'} tooltip={'About'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog className={classes.dialogBox} open={open} onClose={closePopup} aria-labelledby={'alert-dialog-title'} aria-describedby={'alert-dialog-description'}>
        <DialogTitle id={'alert-dialog-title'}>Welcome to PrivacyCheck&trade;!</DialogTitle>
        <DialogContent>
          <DialogContentText id={'alert-dialog-description'}>
            <Typography>
              PrivacyCheck&trade; is designed to help inform you about how website's use your data by reading privacy policies for you!
              <p>
                To use PrivacyCheck&trade;, navigate to a websites privacy policy page, open the extension,
                and then click play!
              </p>
              <p>
                *You may disable this popup in the settings.
              </p>
            </Typography>
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