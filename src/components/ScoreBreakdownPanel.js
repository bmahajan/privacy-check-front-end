import React from 'react';
import NavigationBar from './NavigationBar';
import GDPRDescriptionPanel from "./GDPRDescriptionPanel";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";
import Paper from "@material-ui/core/Paper";

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
        <Paper>
          <CompetitorAnalysisPanel />
        </Paper>
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;