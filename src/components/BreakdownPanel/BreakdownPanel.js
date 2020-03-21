import React from 'react';
import NavigationBar from "../MiscComponents/NavigationBar";
import Card from "@material-ui/core/Card";
import DescriptionField from "./DescriptionField";

export default function() {


  return (
    <div style={{width: 300, height: 550, backgroundColor: 'beige'}}>
      <Card>
        <NavigationBar title={'Breakdown Panel'}/>
        <DescriptionField />
      </Card>
    </div>
  );

}