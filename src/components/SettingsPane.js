import React from 'react';
import './SettingsPane.css';
import NavBar from './NavBar'
import './Typical.css';
import Encrypt from './Encrypt.js';
import SettingsCard from './SettingsCard'
import DarkMode from './DarkMode';


class SettingsPane extends React.Component {

    render() {
        return (
            <div className='Settings'>
                <NavBar click={this.props.clickBack} title='Settings'color="orange"/>
                <div>
                    <DarkMode />
                </div>
            </div>
        );
    }

}

export default SettingsPane;