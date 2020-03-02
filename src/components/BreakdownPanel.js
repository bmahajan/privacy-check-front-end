import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from "@material-ui/core/styles";
import DescriptionField from "./DescriptionField";
import GDPRDescriptionPanel from "./GDPRDescriptionPanel";

class BreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{width: 350}}>
        <NavBar title={'Score Breakdown'} color={'orange'}/>
        <GDPRDescriptionPanel />
      </div>
    );
  }

}

export default BreakdownPanel;