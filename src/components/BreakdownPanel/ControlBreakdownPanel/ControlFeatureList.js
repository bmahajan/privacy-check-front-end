import React from 'react';
import { Email, CreditCard, MoreHoriz, LocalOffer, Explore, ChildCare, Security, ExitToApp, Lock, Person } from '@material-ui/icons';
import DescriptionField from "../DescriptionField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiGridList from '@material-ui/core/GridList';
import { ApiResponseContext } from "../../PanelManager";

const GridList = withStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxDescriptionHeight,
  },
})) (MuiGridList);

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
}));

export default function ControlFeatureList(props) {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const response = React.useContext(ApiResponseContext); //add in the scores

  return (
    <div className={classes.root}>
      <GridList >
        <DescriptionField
          name={'Email Address Security'}
          icon={<Email />}
          details={'How well does this website protect your email address?'}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
          score={response.Control_Scores[0]}
        />
        <DescriptionField
          name={'PII Security'} //billing
          icon={<CreditCard />}
          details={'How well does this website protect your credit card information, address, and social security number?'}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
          score={response.Control_Scores[1]}
        />
        <DescriptionField
          name={'Social Security Number'}
          icon={<MoreHoriz />}
          details={'How does this website handle your social security number?'}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
          score={response.Control_Scores[2]}
        />
        <DescriptionField
          name={'Targeted Advertising'}
          icon={<LocalOffer />}
          details={'Does this website use your information for targeted advertisements?'}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
          score={response.Control_Scores[3]}
        />
        <DescriptionField
          name={'Location Tracking'}
          icon={<Explore />}
          details={'How well does this website protect your location information?'}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
          score={response.Control_Scores[4]}
        />
        <DescriptionField
          name={'COPPA Compliance'}
          icon={<ChildCare />}
          details={'How well does this website comply with COPPA?'}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
          score={response.Control_Scores[5]}
        />
        <DescriptionField
          name={'Law Enforcement'}
          icon={<Security />}
          details={'How well does this website protect your information from law enforcement?'}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
          score={response.Control_Scores[6]}
        />
        <DescriptionField
          name={'Privacy Policy Opt-In/Opt-Out'}
          icon={<ExitToApp />}
          details={'Does this website notify or allow you to opt out after changing their privacy policy?'}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
          score={response.Control_Scores[7]}
        />
        <DescriptionField
          name={'Data Control'}
          icon={<Lock />}
          details={'Does the site allow you to edit or delete your information from its records?'}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
          score={response.Control_Scores[8]}
        />
        <DescriptionField
          name={'Data Aggregation'}
          icon={<Person />}
          details={'Does the site collect or share aggregated data related to your identity or data?'}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
          score={response.Control_Scores[9]}
        />
      </GridList>
    </div>
  );
}