import React from 'react';
import DescriptionField from "../DescriptionField";
import { Send, Map, PhonelinkErase, NotificationImportant, RemoveCircle, Face, EnhancedEncryption, ContactSupport, DoneAll, Warning } from "@material-ui/icons";
import { withStyles, makeStyles } from "@material-ui/core";
import MuiGridList from '@material-ui/core/GridList'
import { ApiResponseContext } from "../../PanelManager";

const GridList = withStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
})) (MuiGridList);

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
}));

export default function GDPRFeatureList(props) {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const response = React.useContext(ApiResponseContext);

  return (
    <div className={classes.root}>
      <GridList cols={1}>
        <DescriptionField
          name={'Between Site Transfer'}
          icon={<Send />}
          details={'Does this website share your information with other websites?'}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
          score={response.GDPR_Scores[0]}
        />
        <DescriptionField
          name={'Company Location'}
          icon={<Map />}
          details={'Does this website disclose where the company is based and where your information will be processed and or transferred?'}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
          score={response.GDPR_Scores[1]}
        />
        <DescriptionField
          name={'Right To Be Forgotten'}
          icon={<PhonelinkErase />}
          details={'Does this website support the right to be forgotten? That is, when requested will the website delete all of the users information?'}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
          score={response.GDPR_Scores[2]}
        />
        <DescriptionField
          name={'Data Retention Notification'}
          icon={<NotificationImportant />}
          details={'If this website retains information after requesting to be forgotten, will they inform you?'}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
          score={response.GDPR_Scores[3]}
        />
        <DescriptionField
          name={'Reject Usage of PII'}
          icon={<RemoveCircle />}
          details={'Does this website allow the user the ability to reject usage of users PII (Personally Identifiable Information)?'}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
          score={response.GDPR_Scores[4]}
        />
        <DescriptionField
          name={'Under 16 Protection'}
          icon={<Face />}
          details={'Does this website collect the data of users under the age of 16?'}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
          score={response.GDPR_Scores[5]}
        />
        <DescriptionField
          name={'Data Encryption'}
          icon={<EnhancedEncryption />}
          details={'Does this website encrypt user\'s data?'}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
          score={response.GDPR_Scores[6]}
        />
        <DescriptionField
          name={'Data Processing Consent'}
          icon={<ContactSupport />}
          details={'Does this website ask for the users consent to perform data processing?'}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
          score={response.GDPR_Scores[7]}
        />
        <DescriptionField
          name={'Principles of Data Processing'}
          icon={<DoneAll />}
          details={'Does this website meet all the principles of data processing?'}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
          score={response.GDPR_Scores[8]}
        />
        <DescriptionField
          name={'Breach Notification'}
          icon={<Warning />}
          details={'Does this website notify you of security breaches?'}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
          score={response.GDPR_Scores[9]}
        />
      </GridList>
    </div>
  );
}