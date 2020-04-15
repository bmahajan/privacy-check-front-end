import React from 'react';
import { Send, Map, PhonelinkErase, NotificationImportant, RemoveCircle, Face, EnhancedEncryption, ContactSupport, DoneAll, Warning } from "@material-ui/icons";
import { withStyles, makeStyles } from "@material-ui/core";
import MuiGridList from '@material-ui/core/GridList'
import { ApiResponseContext } from "../../PanelManager";
import DescriptionFieldGDPR from './GDPRDescriptionField'

const GridList = withStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
  },
})) (MuiGridList);

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.height,
    marginLeft: 'auto',
  },
}));

export default function GDPRBreakdownPanel(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const response = React.useContext(ApiResponseContext);

  return (
    <div className={classes.root}>
      <GridList>
        <DescriptionFieldGDPR
          name={'Between Site Transfer'}
          icon={<Send />}
          details={'Does this website share the user\'s information with other websites?'}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
          score={response.GDPR_Scores[0]}
        />
        <DescriptionFieldGDPR
          name={'Company Location'}
          icon={<Map />}
          details={'Does this website disclose where the company is based and where the user\'s information will be processed and/or transferred?'}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
          score={response.GDPR_Scores[1]}
        />
        <DescriptionFieldGDPR
          name={'Right To Be Forgotten'}
          icon={<PhonelinkErase />}
          details={'Does this website support the right to be forgotten? That is, when requested, will the website delete all of the user\'s information?'}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
          score={response.GDPR_Scores[2]}
        />
        <DescriptionFieldGDPR
          name={'Data Retention Notification'}
          icon={<NotificationImportant />}
          details={'If this website retains information for legal purposes after the user\'s request to be forgotten, will they inform the user?'}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
          score={response.GDPR_Scores[3]}
        />
        <DescriptionFieldGDPR
          name={'Reject Usage of PII'}
          icon={<RemoveCircle />}
          details={'Does this website allow the user the ability to reject usage of user\'s PII (Personally Identifiable Information)?'}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
          score={response.GDPR_Scores[4]}
        />
        <DescriptionFieldGDPR
          name={'Under 16 Protection'}
          icon={<Face />}
          details={'Does this website collect the data of users under the age of 16?'}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
          score={response.GDPR_Scores[5]}
        />
        <DescriptionFieldGDPR
          name={'Data Encryption'}
          icon={<EnhancedEncryption />}
          details={'Does this website advise the user that their data is encrypted even while at rest?'}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
          score={response.GDPR_Scores[6]}
        />
        <DescriptionFieldGDPR
          name={'Data Processing Consent'}
          icon={<ContactSupport />}
          details={'Does this website ask for the user\'s informed consent to perform data processing?'}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
          score={response.GDPR_Scores[7]}
        />
        <DescriptionFieldGDPR
          name={'Data Protection Principles'}
          icon={<DoneAll />}
          details={'Does this website implement all of the principles of data protection by design and by default?'}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
          score={response.GDPR_Scores[8]}
        />
        <DescriptionFieldGDPR
          name={'Breach Notification'}
          icon={<Warning />}
          details={'Does this website notify the user of security breaches without undue delay?'}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
          score={response.GDPR_Scores[9]}
        />
      </GridList>
    </div>
  );
}