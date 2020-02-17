import React from 'react';
import {CreditCard, Accessibility, LocationOn} from '@material-ui/icons';
import ScoreBreakdownField from "./ScoreBreakdownField";
import NavBar from './NavBar';
import GridList from "@material-ui/core/GridList";
import makeStyles from "@material-ui/core/styles/makeStyles";



class ScoreBreakdownPanel extends React.Component {

  render() {
    return (
      <div>
        <NavBar title={'Score Breakdown'} />
        <ScoreBreakdownField
          name={'Credit Card'}
          icon={<CreditCard style={{fontSize: 40}}/> }
          description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
          color={'green'}
        />
        <ScoreBreakdownField
          name={'Social Security Number'}
          icon={<Accessibility style={{fontSize: 40}}/> }
          description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
          color={'yellow'}
        />
        <ScoreBreakdownField
          name={'Location'}
          icon={<LocationOn style={{fontSize: 40}}/> }
          description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
          color={'red'}
        />
      </div>
    );
  }

}

export default ScoreBreakdownPanel;