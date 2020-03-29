import React from 'react';
import NavigationBar from "../MiscComponents/NavigationBar";
import Card from "@material-ui/core/Card";
import DescriptionField from "./DescriptionField";
import GridList from "@material-ui/core/GridList";

export const ExpansionContext = React.createContext();

export default function BreakdownPanel(props) {

  const [expanded, setExpanded] = React.useState(false);

  const expansionHandler = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{width: 300, height: 550, backgroundColor: 'beige'}}>
      <Card>
        <NavigationBar title={'Breakdown Panel'}/>
        <div>
          This is where the graphic information will go
        </div>
        <GridList>
          <DescriptionField expanded={expanded}/>
          <DescriptionField />
          <DescriptionField />
          <DescriptionField />
        </GridList>
      </Card>
    </div>
  );

}