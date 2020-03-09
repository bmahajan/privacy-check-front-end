import React from 'react';
import './SettingsPane.css';
import NavBar from './NavBar'
import './Typical.css';
import './SimpleCard.js';
import Encrypt from './encrypt.js';
import DarkMode from './DarkMode'


class SettingsPane extends React.Component {

    render() {
        return (
            <div className='Settings'>
                <NavBar click={this.props.clickBack} title='Settings'/>
                <div className='Typical'>
                    <Encrypt />
                </div>
                <div>
                    <DarkMode />
                </div>
            </div>
        );
    }

}

export default SettingsPane;