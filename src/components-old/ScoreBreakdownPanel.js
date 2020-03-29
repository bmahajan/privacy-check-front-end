import React from 'react';
import NavigationBar from './NavigationBar';
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
        <NavigationBar click={this.props.clickBack} title={'Score Breakdown'} color={'orange'}/>
        <CompetitorAnalysisPanel />
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;