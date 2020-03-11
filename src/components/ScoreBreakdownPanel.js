import React from 'react';
import NavigationBar from './NavigationBar';
import GDPRDescriptionPanel from "./GDPRDescriptionPanel";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";
<<<<<<< HEAD
import { AppBar, Tabs, Tab } from '@material-ui/core';
=======
import Paper from "@material-ui/core/Paper";
>>>>>>> ecf0818e18a6010fdb02ef21e0fc96b4f6da2082

class ScoreBreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {

    return (
      <div style={{maxWidth: 400}}>
<<<<<<< HEAD
        <NavBar click={this.props.clickBack} title={'Score Breakdown'} color={'orange'}/>
        <AppBar position="static">
          <Tabs aria-label="simple tabs example" centered>
            <Tab label="GDPR" />
            <Tab label="Control" />
          </Tabs>
        </AppBar>
        <CompetitorAnalysisPanel />
=======
        <NavigationBar click={this.props.clickBack} title={'Score Breakdown'} color={'orange'}/>
        <Paper>
          <CompetitorAnalysisPanel />
        </Paper>
>>>>>>> ecf0818e18a6010fdb02ef21e0fc96b4f6da2082
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;