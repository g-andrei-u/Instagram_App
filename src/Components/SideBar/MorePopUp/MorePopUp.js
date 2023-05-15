import React from "react";

import Settings from '../../Pictures/settings-icon.png';
import Clock from '../../Pictures/clock-transparent.png';
import Saved from '../../Pictures/saved.png';
import Sun from '../../Pictures/sun.png';
import Report from '../../Pictures/report-problem-caution.png';

import './MorePopUp.css';

function MorePopUp(props) {

    return (props.status) ? (
    <>
    <div className="more-popup">
        <div className="anchor">
            <img className="icon" src={Settings} />
            <a>Settings</a>
        </div>
        <div className="anchor">
            <img className="icon" src={Clock} />
            <a>Your activity</a>
        </div>
        <div className="anchor">
            <img className="icon" src={Saved} />
            <a>Saved</a>
        </div>
        <div className="anchor">
            <img className="icon" src={Sun} />
            <a>Switch appearance</a>
        </div>
        <div className="anchor">
            <img className="icon" src={Report} />
            <a>Report a problem</a>
        </div>
        <br />
        <div className="anchor">
            <a>Switch accounts</a>
        </div>
        <div className="anchor">
            <a>Log out</a>
        </div>
    </div>
    </>
    ) : '';
};


export default MorePopUp;