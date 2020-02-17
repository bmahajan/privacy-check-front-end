import React from 'react';
import {CreditCardOutlined, Accessibility, LocationOn} from '@material-ui/icons';
import ScoreBreakdownField from "./ScoreBreakdownField";
import NavBar from './NavBar';
import {green, yellow, red, grey, orange} from "@material-ui/core/colors";
import GridList from "@material-ui/core/GridList";

class ScoreBreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.colors = [grey[300], green[300], yellow[300], red[300]];
  }

  render() {
    return (
      <div>
        <NavBar title={'Score Breakdown'} color={orange[500]} />
        <GridList style={{maxWidth: 300, maxHeight: 550}}>
          <ScoreBreakdownField
            name={'Credit Card'}
            icon={<CreditCardOutlined style={{fontSize: 40}} />}
            description={'Stuff and things and stuff and things anufff and thigns and stuff'}
            color={this.colors[0]}
          />
          <ScoreBreakdownField
            name={'Social Security Number'}
            icon={<Accessibility style={{fontSize: 40}}/> }
            description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
            color={this.colors[1]}
          />
          <ScoreBreakdownField
          name={'Location'}
          icon={<LocationOn style={{fontSize: 40}}/> }
          description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
          color={this.colors[2]}
          />
          <ScoreBreakdownField
            name={'Location'}
            icon={<LocationOn style={{fontSize: 40}}/> }
            description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
            color={this.colors[3]}
          />
        </GridList>
      </div>
      // <div>
      //   <NavBar title={'Score Breakdown'} color={orange[500]}/>
      //   <ScoreBreakdownField
      //     name={'Credit Card'}
      //     icon={<CreditCardOutlined style={{fontSize: 40}} />}
      //     description={'Stuff and things and stuff and things anufff and thigns and stuff'}
      //     color={this.colors[0]}
      //   />
      //   <ScoreBreakdownField
      //     name={'Social Security Number'}
      //     icon={<Accessibility style={{fontSize: 40}}/> }
      //     description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
      //     color={this.colors[1]}
      //   />
      //   <ScoreBreakdownField
      //   name={'Location'}
      //   icon={<LocationOn style={{fontSize: 40}}/> }
      //   description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
      //   color={this.colors[2]}
      //   />
      //   <ScoreBreakdownField
      //     name={'Location'}
      //     icon={<LocationOn style={{fontSize: 40}}/> }
      //     description={'Stuff and things and stuff and things and stuff and things and stuff and things and tstufff and thigns and stuff'}
      //     color={this.colors[3]}
      //   />
      // </div>
    );
  }

}

export default ScoreBreakdownPanel;