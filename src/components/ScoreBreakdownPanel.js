import React from 'react';
import { CreditCard, LocalOffer, Explore, ChildCare, Security, ExitToApp, Lock, Person } from '@material-ui/icons';
import { Send, Map, PhonelinkErase, NotificationImportant, ThumbDown, Face, EnhancedEncryption, ContactSupport, DoneAll, Warning } from "@material-ui/icons";
import ScoreBreakdownField from './ScoreBreakdownField';
import NavBar from './NavBar';
import {green, yellow, red, grey, orange} from '@material-ui/core/colors';
import { withStyles } from "@material-ui/core";
import MuiGridList from '@material-ui/core/GridList'

const GridList = withStyles(theme => ({
  root: {
    padding: theme.spacing(0),
  },
})) (MuiGridList);

class ScoreBreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{width: 350}}>
        <NavBar title={'Score Breakdown'} color={orange[500]} />
        <GridList cols={1} spacing={0} style={{maxHeight: 500}}>
          <ScoreBreakdownField
            name={'Expansion Panel 1'}
            icon={<Send />}
            score={0}
            details={'Expansion Panel 1 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 2'}
            icon={<Map />}
            score={0}
            details={'Expansion Panel 2 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 3'}
            icon={<PhonelinkErase />}
            score={0}
            details={'Expansion Panel 3 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 4'}
            icon={<NotificationImportant />}
            score={0}
            details={'Expansion Panel 4 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 5'}
            icon={<ThumbDown />}
            score={0}
            details={'Expansion Panel 5 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 6'}
            icon={<Face />}
            score={0}
            details={'Expansion Panel 6 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 7'}
            icon={<EnhancedEncryption />}
            score={0}
            details={'Expansion Panel 7 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 8'}
            icon={<ContactSupport />}
            score={0}
            details={'Expansion Panel 8 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 9'}
            icon={<DoneAll />}
            score={0}
            details={'Expansion Panel 9 details'}
          />
          <ScoreBreakdownField
            name={'Expansion Panel 10'}
            icon={<Warning />}
            score={0}
            details={'Expansion Panel 10 details'}
          />
        </GridList>
      </div>
    );
  }

}

export default ScoreBreakdownPanel;