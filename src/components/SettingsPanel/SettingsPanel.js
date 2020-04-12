import React from 'react';
import NavigationBar from '../Misc/NavigationBar'
import SettingsCard from './SettingsCard';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.panel.width,
    maxHeight: theme.panel.maxHeight,
  },
}));

export default function SettingsPanel(props) {

  const classes = useStyles(props);

  return(
    <div className={classes.root}>
      <Card>
        <NavigationBar title='Settings' color='orange' backLabel='RunPanel'/>
        <SettingsCard/>
      </Card>
    </div>
  );

}