import React from 'react';
import NavigationBar from '../Misc/NavigationBar'
import SettingsCard from './SettingsCard';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.sizing.width,
    maxHeight: theme.sizing.maxHeight,
  },
}));

export default function SettingsPanel(props) {

  const classes = useStyles(props);

  return(
    <div className={classes.root}>
      <NavigationBar title='Settings' color='orange' backLabel='RunPanel'/>
      <div>
        <SettingsCard/>
      </div>
    </div>
  );

}