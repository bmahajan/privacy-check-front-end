import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from "@material-ui/core/styles";
import DescriptionField from "./DescriptionField";
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
      <div style={{maxWidth: 350, width: 350}}>
        <NavBar title={'Score Breakdown'} color={'orange'}/>
        <CompetitorAnalysisPanel />
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;