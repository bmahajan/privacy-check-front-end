import React from "react";
import {PrivacyPolicyResponseContext} from "../../PanelManager";
import GridList from "@material-ui/core/GridList";
import DescriptionFieldControl from "./ControlDescriptionField";
import {
  ChildCare,
  CreditCard,
  Email,
  ExitToApp,
  Explore,
  LocalOffer,
  Lock,
  MoreHoriz, Person,
  Security
} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

export default function ControlBreakdownPanel() {
  const response = React.useContext(PrivacyPolicyResponseContext);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <GridList>
        <DescriptionFieldControl
          name={'Email Address Security'}
          icon={<Email />}
          details={'How well does this website protect your email address?'}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
          score={response.Control_Scores[0]}
        />
        <DescriptionFieldControl
          name={'PII Security'} //billing
          icon={<CreditCard />}
          details={'How well does this website protect your credit card information and address?'}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
          score={response.Control_Scores[1]}
        />
        <DescriptionFieldControl
          name={'Social Security Number'}
          icon={<MoreHoriz />}
          details={'How well does this website handle your social security number?'}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
          score={response.Control_Scores[2]}
        />
        <DescriptionFieldControl
          name={'Targeted Advertising'}
          icon={<LocalOffer />}
          details={'Does this website use or share your personally identifiable information for marketing purposes?'}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
          score={response.Control_Scores[3]}
        />
        <DescriptionFieldControl
          name={'Location Tracking'}
          icon={<Explore />}
          details={'Does this site track or share your location?'}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
          score={response.Control_Scores[4]}
        />
        <DescriptionFieldControl
          name={'COPPA Compliance'}
          icon={<ChildCare />}
          details={'Does this site collect personally identifiable information from children under 13?'}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
          score={response.Control_Scores[5]}
        />
        <DescriptionFieldControl
          name={'Law Enforcement'}
          icon={<Security />}
          details={'Does this site share your information with law enforcement?'}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
          score={response.Control_Scores[6]}
        />
        <DescriptionFieldControl
          name={'Privacy Policy Opt-Out'}
          icon={<ExitToApp />}
          details={'Does this website notify or allow you to opt-out after changing their privacy policy?'}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
          score={response.Control_Scores[7]}
        />
        <DescriptionFieldControl
          name={'Data Control'}
          icon={<Lock />}
          details={'Does this site allow you to edit or delete your information from its records?'}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
          score={response.Control_Scores[8]}
        />
        <DescriptionFieldControl
          name={'Data Aggregation'}
          icon={<Person />}
          details={'Does this site collect or share aggregated data related to your identity or behavior?'}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
          score={response.Control_Scores[9]}
        />
      </GridList>
    </div>
  );
}