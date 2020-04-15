import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import NavigationBar from "../Misc/NavigationBar";


const useStyles = makeStyles({
  root: {
    // width: theme.panel.width,
    // height: theme.panel.height,
  },
});

export default function CompetitorAnalysisPanel(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <NavigationBar title={'Competitor Analysis Panel'} />
        
      </Card>
    </div>
  );
}