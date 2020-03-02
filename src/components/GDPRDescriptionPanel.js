import React from 'react';
import DescriptionField from "./DescriptionField";
import {
  Send,
  Map,
  PhonelinkErase,
  NotificationImportant,
  ThumbDown,
  Face,
  EnhancedEncryption,
  ContactSupport,
  DoneAll,
  Warning,
  RemoveCircle
} from "@material-ui/icons";
import {withStyles} from "@material-ui/core";
import MuiGridList from '@material-ui/core/GridList'
import {makeStyles} from "@material-ui/core/styles";


const GridList = withStyles(theme => ({
  root: {

  },
  content: {

  },
})) (MuiGridList);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
  },
  content: {

  },
}));

export default function GDPRDescriptionPanel(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList>
        <DescriptionField
          name={'Between Site Transfer'}
          icon={<Send />}
          details={'Does this website share your information with other websites?'}
        />
        <DescriptionField
          name={'Company Location'}
          icon={<Map />}
          details={'Does this website disclose where the company is based and where your information will be processed and or transferred?'}
        />
        <DescriptionField
          name={'Right To Be Forgotten'}
          icon={<PhonelinkErase />}
          details={'Does this website support the right to be forgotten? That is, when requested will the website delete all of the users information?'}
        />
        <DescriptionField
          name={'Data Retention Notification'}
          icon={<NotificationImportant />}
          details={'If this website retains information after requesting to be forgotten, will they inform you?'}
        />
        <DescriptionField
          name={'Reject Usage of PII'}
          icon={<RemoveCircle />}
          details={'Does this website allow the user the ability to reject usage of users PII (Personally Identifiable Information)?'}
        />
        <DescriptionField
          name={'Under 16 Protection'}
          icon={<Face />}
          details={'Does this website collect the data of users under the age of 16?'}
        />
        <DescriptionField
          name={'Data Encryption'}
          icon={<EnhancedEncryption />}
          details={'Does this website encrypt user\'s data?'}
        />
        <DescriptionField

        />
        <DescriptionField

        />
      </GridList>
    </div>
  );
}