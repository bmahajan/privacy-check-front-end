import React from "react";
import {PrivacyPolicyResponseContext} from "../../PanelManager";
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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ControlBreakdownInfo from "../../../data/ControlBreakdownInfo.json"

export default function ControlBreakdownPanel() {
  const response = React.useContext(PrivacyPolicyResponseContext);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const answerHandler = (questionNum) => {
    switch (response.Control_Scores[questionNum]) {
      case '1':
        return({score: 0, color: 0, message: ControlBreakdownInfo.descriptions[questionNum].answer_red});
      case '2':
        return({score: 5, color: 1, message: ControlBreakdownInfo.descriptions[questionNum].answer_yellow});
      case '3':
        return({score: 10, color: 2, message: ControlBreakdownInfo.descriptions[questionNum].answer_green});
      default:
        return({score: 0, color: null, message: ControlBreakdownInfo.descriptions[questionNum].answer_default});
    }
  }

  return (
    <div>
      <List>
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[0].title}
          icon={<Email />}
          question={ControlBreakdownInfo.descriptions[0].question}
          answer={answerHandler(0)}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[1].title} //billing
          icon={<CreditCard />}
          question={ControlBreakdownInfo.descriptions[1].question}
          answer={answerHandler(1)}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[2].title}
          icon={<MoreHoriz />}
          question={ControlBreakdownInfo.descriptions[2].question}
          answer={answerHandler(2)}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[3].title}
          icon={<LocalOffer />}
          question={ControlBreakdownInfo.descriptions[3].question}
          answer={answerHandler(3)}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[4].title}
          icon={<Explore />}
          question={ControlBreakdownInfo.descriptions[4].question}
          answer={answerHandler(4)}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[5].title}
          icon={<ChildCare />}
          question={ControlBreakdownInfo.descriptions[5].question}
          answer={answerHandler(5)}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[6].title}
          icon={<Security />}
          question={ControlBreakdownInfo.descriptions[6].question}
          answer={answerHandler(6)}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[7].title}
          icon={<ExitToApp />}
          question={ControlBreakdownInfo.descriptions[7].question}
          answer={answerHandler(7)}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[8].title}
          icon={<Lock />}
          question={ControlBreakdownInfo.descriptions[8].question}
          answer={answerHandler(8)}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
        />
        <DescriptionFieldControl
          name={ControlBreakdownInfo.descriptions[9].title}
          icon={<Person />}
          question={ControlBreakdownInfo.descriptions[9].question}
          answer={answerHandler(9)}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
        />
      </List>
    </div>
  );
}