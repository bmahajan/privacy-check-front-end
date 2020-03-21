import React from 'react';
import { Email, CreditCard, LocalOffer, Explore, ChildCare, Security, ExitToApp, Lock, Person } from '@material-ui/icons';
import DescriptionPanel from "./DescriptionPanel";
import { withStyles, makeStyles } from "@material-ui/core";
import MuiGridList from '@material-ui/core/GridList'

const GridList = withStyles(theme => ({
  root: {
    maxHeight: 500,
    maxWidth: 350,
    width: '100%',
    padding: 2.5,
  },
})) (MuiGridList);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {

  },
}));

export default function ControlDescriptionPanel(props) {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <GridList>
        <DescriptionPanel
          name={'Email Security'}
          icon={<Email />}
          details={'How well does this website protect your email address?'}
          expanded={expanded === 'p1'}
          onChange={handleChange('p1')}
        />
        <DescriptionPanel
          name={'PII Security'}
          icon={<CreditCard />}
          details={'How well does this website protect your credit card information, address, and social security number?'}
          expanded={expanded === 'p2'}
          onChange={handleChange('p2')}
        />
        <DescriptionPanel
          name={'Targeted Advertising'}
          icon={<LocalOffer />}
          details={'Does this website use your information for targeted advertisements?'}
          expanded={expanded === 'p3'}
          onChange={handleChange('p3')}
        />
        <DescriptionPanel
          name={'Location Tracking'}
          icon={<Explore />}
          details={'How well does this website protect your location information?'}
          expanded={expanded === 'p4'}
          onChange={handleChange('p4')}
        />
        <DescriptionPanel
          name={'COPPA Compliance'}
          icon={<ChildCare />}
          details={'How well does this website comply with COPPA?'}
          expanded={expanded === 'p5'}
          onChange={handleChange('p5')}
        />
        <DescriptionPanel
          name={'Law Enforcement'}
          icon={<Security />}
          details={'How well does this website protect your information from law enforcement?'}
          expanded={expanded === 'p6'}
          onChange={handleChange('p6')}
        />
        <DescriptionPanel
          name={'Privacy Policy Opt-In/Opt-Out'}
          icon={<ExitToApp />}
          details={'Does this website allow you to opt out after changing their privacy policy?'}
          expanded={expanded === 'p7'}
          onChange={handleChange('p7')}
        />
        <DescriptionPanel
          name={'Data Control'}
          icon={<Lock />}
          details={'How much control does this website give the user over their data?'}
          expanded={expanded === 'p8'}
          onChange={handleChange('p8')}
        />
        <DescriptionPanel
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