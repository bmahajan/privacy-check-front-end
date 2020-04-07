import React from 'react';
import NavigationBar from '../Misc/NavigationBar'
import SettingsCard from './SettingsCard';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    maxHeight: 400
  },
}));

export default function SettingsPanel(props) {

  const classes = useStyles(props);

  return(
    <div className={classes.root}>
      <NavigationBar title='Settings' color="orange"/>
      <div>
        <SettingsCard/>
      </div>
    </div>
  );

}