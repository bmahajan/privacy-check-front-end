import React from 'react';
import './DescriptionPanel.css';
import './DefaultToolbar';
import { AppBar, Toolbar } from '@material-ui/core';
import DescriptionField from './DescriptionField';
import DefaultToolbar from "./DefaultToolbar";

class DescriptionPanel extends React.Component {

  render() {
    return (
      <div className={'DescriptionPanel'}>
        <div className={'flex-container'}>
          <DefaultToolbar title={'Score Breakdown'} />
        </div>

      </div>
    );
  }

}

export default DescriptionPanel;