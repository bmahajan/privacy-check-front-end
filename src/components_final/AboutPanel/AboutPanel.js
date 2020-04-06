import React from 'react';
import NavigationBar from "../MiscComponents/NavigationBar";
import Card from "@material-ui/core/Card";

export default function AboutPanel() {

  return (
    <div style={{width: 300, height: 550, backgroundColor: 'beige'}}>
      <Card>
        <NavigationBar title={'About Panel'}/>
      </Card>
    </div>
  );

}