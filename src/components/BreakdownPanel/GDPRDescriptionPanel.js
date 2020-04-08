import React from 'react';
import DescriptionPanel from "./DescriptionPanel";
import { Send, Map, PhonelinkErase, NotificationImportant, RemoveCircle, Face, EnhancedEncryption, ContactSupport, DoneAll, Warning } from "@material-ui/icons";
import { withStyles, makeStyles } from "@material-ui/core";
import MuiGridList from '@material-ui/core/GridList'
import { ApiResponseContext } from "../PanelManager";

const GridList = withStyles(theme => ({
  root: {
    maxHeight: 300,
  },
})) (MuiGridList);

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

export default function GDPRDescriptionPanel(props) {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [scores, setScores] = React.useState(['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']);

  const response = React.useContext(ApiResponseContext);

  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  setTimeout(() => setScores(response.GDPR_Scores), 2000);

  return (
    <div className={classes.root}>
      <GridList cols={1}>
        <DescriptionPanel
          name={'Between Site Transfer'}
          icon={<Send />}
          details={'Does this website share your information with other websites?'}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
          score={scores[0]}
        />
        <DescriptionPanel
          name={'Company Location'}
          icon={<Map />}
          details={'Does this website disclose where the company is based and where your information will be processed and or transferred?'}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
          score={scores[1]}
        />
        <DescriptionPanel
          name={'Right To Be Forgotten'}
          icon={<PhonelinkErase />}
          details={'Does this website support the right to be forgotten? That is, when requested will the website delete all of the users information?'}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
          score={scores[2]}
        />
        <DescriptionPanel
          name={'Data Retention Notification'}
          icon={<NotificationImportant />}
          details={'If this website retains information after requesting to be forgotten, will they inform you?'}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
          score={scores[3]}
        />
        <DescriptionPanel
          name={'Reject Usage of PII'}
          icon={<RemoveCircle />}
          details={'Does this website allow the user the ability to reject usage of users PII (Personally Identifiable Information)?'}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
          score={scores[4]}
        />
        <DescriptionPanel
          name={'Under 16 Protection'}
          icon={<Face />}
          details={'Does this website collect the data of users under the age of 16?'}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
          score={scores[5]}
        />
        <DescriptionPanel
          name={'Data Encryption'}
          icon={<EnhancedEncryption />}
          details={'Does this website encrypt user\'s data?'}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
          score={scores[6]}
        />
        <DescriptionPanel
          name={'Data Processing Consent'}
          icon={<ContactSupport />}
          details={'Does this website ask for the users consent to perform data processing?'}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
          score={scores[7]}
        />
        <DescriptionPanel
          name={'Principles of Data Processing'}
          icon={<DoneAll />}
          details={'Does this website meet all the principles of data processing?'}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
          score={scores[8]}
        />
        <DescriptionPanel
          name={'Breach Notification'}
          icon={<Warning />}
          details={'Does this website notify you of security breaches?'}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
          score={scores[9]}
        />
      </GridList>
    </div>
  );
}