import React from 'react';
import NavigationBar from './NavigationBar'
import SettingsCard from './SettingsCard';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    height: 500,
  },
}));

export default function SettingsPanel(props) {

  const classes = useStyles(props);

  return(
    <div className={classes.root}>
      <NavigationBar click={props.clickBack} title='Settings' color="orange"/>
      <div>
        <SettingsCard onToggleDark={props.onToggleDark}/>
      </div>
    </div>
  );

}