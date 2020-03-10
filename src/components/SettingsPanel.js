import React from 'react';
import './SettingsPane.css';
import NavigationBar from './NavigationBar'
import './Typical.css';
import DarkMode from './DarkMode';

export default function SettingsPanel(props) {

  return(
    <div className='Settings'>
      <NavigationBar click={props.clickBack} title='Settings' color="orange"/>
      <div>
        <DarkMode />
      </div>
    </div>
  );

}