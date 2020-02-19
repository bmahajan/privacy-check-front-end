import React from 'react';
import {CreditCardOutlined, Person, LocationOn, ChildCare, Gavel, Cloud, Storage} from '@material-ui/icons';
import ScoreBreakdownField from "./ScoreBreakdownField";
import NavBar from './NavBar';
import {green, yellow, red, grey, orange} from "@material-ui/core/colors";
import GridList from "@material-ui/core/GridList";

class ScoreBreakdownPanel extends React.Component {

  render() {
    return (
      <div style={{width: 350}}>
        <NavBar title={'Score Breakdown'} color={orange[500]} />
        <GridList cols={1} spacing={0} style={{maxHeight: 500}}>
          <ScoreBreakdownField
            name={'Credit Card'}
            icon={<CreditCardOutlined style={{fontSize: 40}} />}
            description={'Does this website handle the user\'s Card Information in a responsible way?'}
            score={30}
          />
          <ScoreBreakdownField
            name={'Social Security Number'}
            icon={<Person style={{fontSize: 40}}/> }
            description={'Does this website handle the user\'s Social Security Number (SSN) in a responsible way?'}
            score={60}
          />
          <ScoreBreakdownField
          name={'Location Services'}
          icon={<LocationOn style={{fontSize: 40}}/> }
          description={'Does this website handle user location data in a responsible way?'}
          score={70}
          />
          <ScoreBreakdownField
            name={'COPPA Compliance'}
            icon={<ChildCare style={{fontSize: 40}}/> }
            description={'Does this website comply with the Children\'s Online Privacy Protection Act (COPPA)?'}
          />
          <ScoreBreakdownField
            name={'Law Enforcement'}
            icon={<Gavel style={{fontSize: 40}}/> }
            description={'Does this website share user data with law enforcement?'}
          />
          <ScoreBreakdownField
            name={'Data Aggregation'}
            icon={<Cloud style={{fontSize: 40}}/> }
            description={'Does this website aggregate data related to the user\'s behavior?'}
          />
          <ScoreBreakdownField
            name={'Data Storage'}
            icon={<Storage style={{fontSize: 40}}/> }
            description={'Does this website allow the user to edit or delete information from their records?'}
          />
        </GridList>
      </div>
    );
  }

}

export default ScoreBreakdownPanel;