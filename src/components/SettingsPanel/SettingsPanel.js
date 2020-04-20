import React from 'react';
import NavigationBar from '../Misc/NavigationBar'
import SettingsCard from './SettingsCard';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    height: theme.panel.height,
  },
}));

export default function SettingsPanel(props) {
  const classes = useStyles(props);

  return(
    <Card className={classes.root}>
      <NavigationBar title='Settings' backLabel='RunPanel'/>
      <SettingsCard/>
    </Card>
  );

}