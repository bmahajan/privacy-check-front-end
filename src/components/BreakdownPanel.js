import React from 'react';
import NavBar from './NavBar';
import { CreditCard, LocalOffer, Explore, ChildCare, Security, ExitToApp, Lock, Person } from '@material-ui/icons';
import { Send, Map, PhonelinkErase, NotificationImportant, ThumbDown, Face, EnhancedEncryption, ContactSupport, DoneAll, Warning } from "@material-ui/icons";
import MuiGridList from '@material-ui/core/GridList'

class BreakdownPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {


    return (
      <div>
        <NavBar ti/>
      </div>
    );
  }

}

export default BreakdownPanel;