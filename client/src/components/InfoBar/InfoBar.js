import React from 'react';
import { Link } from 'react-router-dom'

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room, name }) => (
    <div className="infoBar">
        <div className="left">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{name}</h3>
        </div>
        <div className="center">
            <h3>{room}</h3>
        </div>
        <div className="right">
            <Link to="/"><img src={closeIcon} alt="close icon" /></Link>
        </div>
    </div>
);

export default InfoBar;