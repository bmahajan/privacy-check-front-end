import React from 'react';
import clsx from 'clsx';
import {
    Grid,
    Typography,
    IconButton,
    makeStyles,
    Card,
    Paper,
    Button,
    ButtonGroup,
} from '@material-ui/core';
import RunButton from './RunButton';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import MainPanelButton from './MainPanelButton';
import Encrypt from './encrypt';
import SettingsPane from './SettingsPane';
import CompAnalysisPane from './CompetitorAnalysisPanel'
 

const useStyles = makeStyles(theme => ({
  scoreButton: {
    width: 100,
  },


      
}))

export default function MainPanel(props){
    // constructor(props) {
    //   super(props)
    //   this.HandleRunClick = this.HandleRunClick.bind(this);
    //   //this.buttonClassName = 

    // }

    const HandleRunClick = () =>{
      alert('Clicked Run')
      // const [loading, setLoading] = React.useState(false);
      // const [success, setSuccess] = React.useState(false);
      // const [begin, setBegin] = React.useState(true);
      // const timer = React.useRef();

      // setSuccess(false);
      // setLoading(true);
      // setBegin(false);
      // timer.current = setTimeout(() => {
      //   setSuccess(true);
      //   setLoading(false);
      //   }, 2000);


    }
      return(
        <Card
        style = {{width: 300}}>
          <Grid container
          direction = 'column'
          alignContent = 'center'
          alignItems = 'center'
          spacing = {3}>
            <Grid item
            flex-basis='content'>
              <Card elevation={0}>
                <Encrypt />
              </Card>
            </Grid>
            <Grid item
            flex-basis='content'>
                <ButtonGroup
                size="large"
                color="primary"
                aria-label="Score Button"
                variant="contained"
                >
                  <Button style={{width: 100}}>GDPR</Button>
                  <Button style={{width: 100}}>Control</Button>
                </ButtonGroup>
            </Grid>
            <Grid item
            flex-basis='content'>
              <RunButton onClick = {HandleRunClick}/>
            </Grid>
            <Grid item>
              <Grid container
              direction = 'row'
              padding = {3}>
                <Grid item>
                  <MainPanelButton 
                    name={'settings'} 
                    icon={<SettingsIcon />} 
                    pane={<SettingsPane clickBack={props.onBack} />}
                    click={props.onMPBClick}/>
                </Grid>
                <Grid item>
                  <MainPanelButton name={'CAT'} icon={<BarChartRoundedIcon />}/>
                </Grid>
                <Grid item>
                  <MainPanelButton name={'about'} icon={<HelpOutlineRoundedIcon />}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
  
    // <Grid container>
    // <Grid item container xs={12} justify="center">
    //   <Grid item >
    //     <img src="logoTexas.png" width="200px" height="140px"/>
    //   </Grid>
    // </Grid>
    // <Grid container xs={12} direction="row" justify="center" alignItems="center">
    //   <Grid item sm="auto">
    //       <MainPanelButton 
    //         name = {'Competitor Analysis'}
    //         icon={<BarChartRoundedIcon />}
    //       />
    //   </Grid>
    //   <Grid item>
    //     <RunButton />
    //   </Grid>
    //   <Grid item>
    //     <MainPanelButton
    //       name = {'Score Breakdown'}
    //       icon = {<BallotRoundedIcon/>}
    //     />
    //   </Grid>
    // </Grid>
    // <Grid container direction="row" justify="center" alignItems="center">
    //   <Grid item>
    //     <IconButton aria-label="questions">
    //       <HelpOutlineRoundedIcon />
    //     </IconButton>
    //   </Grid>
    //   <Grid item>
    //       <IconButton aria-label="settings">
    //         <SettingsIcon />
    //       </IconButton>
    //   </Grid>
    // </Grid>
    // </Grid>
  




      );
    
}