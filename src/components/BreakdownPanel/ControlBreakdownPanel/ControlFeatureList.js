import React from 'react';
import { Email, CreditCard, LocalOffer, Explore, ChildCare, Security, ExitToApp, Lock, Person } from '@material-ui/icons';
import DescriptionField from "../DescriptionField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiGridList from '@material-ui/core/GridList';
import { ApiResponseContext } from "../../PanelManager";

const GridList = withStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: 400,
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
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const response = React.useContext(ApiResponseContext); //add in the scores

  return (
    <div className={classes.root}>
      <GridList>
        <DescriptionField
          name={'Email Security'}
          icon={<Email />}
          details={'How well does this website protect your email address?'}
          expanded={expanded === 'p1'}
          onChange={handleChange('p1')}
        />
        <DescriptionField
          name={'PII Security'}
          icon={<CreditCard />}
          details={'How well does this website protect your credit card information, address, and social security number?'}
          expanded={expanded === 'p2'}
          onChange={handleChange('p2')}
        />
        <DescriptionField
          name={'Targeted Advertising'}
          icon={<LocalOffer />}
          details={'Does this website use your information for targeted advertisements?'}
          expanded={expanded === 'p3'}
          onChange={handleChange('p3')}
        />
        <DescriptionField
          name={'Location Tracking'}
          icon={<Explore />}
          details={'How well does this website protect your location information?'}
          expanded={expanded === 'p4'}
          onChange={handleChange('p4')}
        />
        <DescriptionField
          name={'COPPA Compliance'}
          icon={<ChildCare />}
          details={'How well does this website comply with COPPA?'}
          expanded={expanded === 'p5'}
          onChange={handleChange('p5')}
        />
        <DescriptionField
          name={'Law Enforcement'}
          icon={<Security />}
          details={'How well does this website protect your information from law enforcement?'}
          expanded={expanded === 'p6'}
          onChange={handleChange('p6')}
        />
        <DescriptionField
          name={'Privacy Policy Opt-In/Opt-Out'}
          icon={<ExitToApp />}
          details={'Does this website allow you to opt out after changing their privacy policy?'}
          expanded={expanded === 'p7'}
          onChange={handleChange('p7')}
        />
        <DescriptionField
          name={'Data Control'}
          icon={<Lock />}
          details={'How much control does this website give the user over their data?'}
          expanded={expanded === 'p8'}
          onChange={handleChange('p8')}
        />
        <DescriptionField
          name={'PII Stripping'}
          icon={<Person />}
          details={'How well does this website strip PII from collected data?'}
          expanded={expanded === 'p9'}
          onChange={handleChange('p9')}
        />
      </GridList>
    </div>
  );
}