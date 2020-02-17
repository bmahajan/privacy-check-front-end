import React from 'react';
import './SettingsPane.css';
import NavBar from './NavBar'
import './Typical.css';
import './SimpleCard.js';
import Encrypt from './encrypt.js';
import Divided from './divided.js'
import SimpleCard from './SimpleCard.js';



class SettingsPane extends React.Component {

    render() {
        return (
            <div className='Settings'>
                <NavBar name='Settings'/>
                <div className='Typical'>
                    <Encrypt />
                </div>
                <div>
                    <Divided />
                </div>
            </div>
        );
    }

}

export default SettingsPane;