import React from 'react';
import { Send, Map, PhonelinkErase, NotificationImportant, RemoveCircle, Face, EnhancedEncryption, ContactSupport, DoneAll, Warning } from "@material-ui/icons";
import { PrivacyPolicyResponseContext } from "../../PanelManager";
import DescriptionFieldGDPR from './GDPRDescriptionField'
import List from "@material-ui/core/List";
import GDPRBreakdownInfo from "../../../data/GDPRBreakdownInfo.json";

export default function GDPRBreakdownPanel() {
  const response = React.useContext(PrivacyPolicyResponseContext);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpansionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const answerHandler = (questionNum) => {
    switch (response.GDPR_Scores[questionNum]) {
      case '0':
        return({score: 0, color: 0, message: GDPRBreakdownInfo.descriptions[questionNum].answer_null})
      case '1':
        return({score: 0, color: 0, message: GDPRBreakdownInfo.descriptions[questionNum].answer_no})
      case '2':
        return({score: 10, color: 1, message: GDPRBreakdownInfo.descriptions[questionNum].answer_yes})
      default:
        return({score: 0, color: null, message: GDPRBreakdownInfo.descriptions[questionNum].answer_default})
    }
  }

  return (
    <div>
      <List>
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[0].title}
          icon={<Send />}
          question={GDPRBreakdownInfo.descriptions[0].question}
          answer={answerHandler(0)}
          expanded={expanded === 'p1'}
          onChange={handleExpansionChange('p1')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[1].title}
          icon={<Map />}
          question={GDPRBreakdownInfo.descriptions[1].question}
          answer={answerHandler(1)}
          expanded={expanded === 'p2'}
          onChange={handleExpansionChange('p2')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[2].title}
          icon={<PhonelinkErase />}
          question={GDPRBreakdownInfo.descriptions[2].question}
          answer={answerHandler(2)}
          expanded={expanded === 'p3'}
          onChange={handleExpansionChange('p3')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[3].title}
          icon={<NotificationImportant />}
          question={GDPRBreakdownInfo.descriptions[3].question}
          answer={answerHandler(3)}
          expanded={expanded === 'p4'}
          onChange={handleExpansionChange('p4')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[4].title}
          icon={<RemoveCircle />}
          question={GDPRBreakdownInfo.descriptions[4].question}
          answer={answerHandler(4)}
          expanded={expanded === 'p5'}
          onChange={handleExpansionChange('p5')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[5].title}
          icon={<Face />}
          question={GDPRBreakdownInfo.descriptions[5].question}
          answer={answerHandler(5)}
          expanded={expanded === 'p6'}
          onChange={handleExpansionChange('p6')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[6].title}
          icon={<EnhancedEncryption />}
          question={GDPRBreakdownInfo.descriptions[6].question}
          answer={answerHandler(6)}
          expanded={expanded === 'p7'}
          onChange={handleExpansionChange('p7')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[7].title}
          icon={<ContactSupport />}
          question={GDPRBreakdownInfo.descriptions[7].question}
          answer={answerHandler(7)}
          expanded={expanded === 'p8'}
          onChange={handleExpansionChange('p8')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[8].title}
          icon={<DoneAll />}
          question={GDPRBreakdownInfo.descriptions[8].question}
          answer={answerHandler(8)}
          expanded={expanded === 'p9'}
          onChange={handleExpansionChange('p9')}
        />
        <DescriptionFieldGDPR
          name={GDPRBreakdownInfo.descriptions[9].title}
          icon={<Warning />}
          question={GDPRBreakdownInfo.descriptions[9].question}
          answer={answerHandler(9)}
          expanded={expanded === 'p10'}
          onChange={handleExpansionChange('p10')}
        />
      </List>
    </div>
  );
}