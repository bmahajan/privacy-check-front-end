import React from 'react';
import NavigationBar from '../Misc/NavigationBar';
import GDPRDescriptionPanel from "./GDPRDescriptionPanel";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";
import { AppBar, Tabs, Tab } from '@material-ui/core';

class BreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    return (
      <div style={{maxWidth: 400}}>
        <NavigationBar title={'Score Breakdown'} color={'orange'}/>
        <CompetitorAnalysisPanel />
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default BreakdownPanel;