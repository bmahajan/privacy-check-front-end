import React from 'react';
import NavBar from './NavBar';
import GDPRDescriptionPanel from "./GDPRDescriptionPanel";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";

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
        <CompetitorAnalysisPanel />
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;