import React from 'react';
import NavBar from './NavBar';
import GDPRDescriptionPanel from "./GDPRDescriptionPanel";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";
import { AppBar, Tabs, Tab } from '@material-ui/core';

class ScoreBreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {

    return (
      <div style={{maxWidth: 400}}>
        <NavBar click={this.props.clickBack} title={'Score Breakdown'} color={'orange'}/>
        <AppBar position="static">
          <Tabs aria-label="simple tabs example" centered>
            <Tab label="GDPR" />
            <Tab label="Control" />
          </Tabs>
        </AppBar>
        <CompetitorAnalysisPanel />
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;