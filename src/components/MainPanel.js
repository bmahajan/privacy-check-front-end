import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    Typography,
    IconButton,
    makeStyles
} from '@material-ui/core';
import RunButton from './RunButton';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import MainPanelButton from './MainPanelButton';
 

const useStyles = makeStyles(theme => ({


      
}))

export default class MainPanel extends React.Component {
    contructor(props) {
      
    }

   

    render() {
        return(
            <div>
      <Typography variant="subtitle1" gutterBottom>Home</Typography>
      {/* <Button variant="contained" color="primary" href="/Topics">
        {DescriptionPanel()}
      </Button> */}
      <Grid container>
      <Grid item container xs={12} justify="center">
        <Grid item >
          <img src="logoTexas.png" width="200px" height="140px"/>
        </Grid>
      </Grid>
      <Grid container xs={12} direction="row" justify="center" alignItems="center">
        <Grid item sm="auto">
            <MainPanelButton 
              name = {'Competitor Analysis'}
              icon={<BarChartRoundedIcon />}
            />
        </Grid>
        <Grid item>
          <RunButton />
        </Grid>
        <Grid item>
          <MainPanelButton
            name = {'Score Breakdown'}
            icon = {<BallotRoundedIcon/>}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <IconButton aria-label="questions">
            <HelpOutlineRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item>
            <IconButton aria-label="settings">
              <SettingsIcon />
            </IconButton>
        </Grid>
      </Grid>
      </Grid>
    </div>




        )
    }
}