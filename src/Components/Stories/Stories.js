import React from "react";

import DonaldDuck from '../Pictures/StoriesPictures/donald-duck.png';
import Minnie from '../Pictures/StoriesPictures/minnie.png';
import Pluto from '../Pictures/StoriesPictures/pluto.png';
import McDuck from '../Pictures/StoriesPictures/Scrooge-McDuck.png';
import TinkerBell from '../Pictures/StoriesPictures/tinkerbell.jpeg';
import Lola from '../Pictures/lola-bunny.png';
import Gaston from '../Pictures/StoriesPictures/Profile-Gaston.png';


import './Stories.css'

function Stories(props) {

    return (
        <div onClick={props.handleOnExit} className="stories">
            <div onClick={props.handleOnStory} style={{marginRight: '20px'}}>
                <img className="profile-pic" src={McDuck} />
                <p>$crooge.McD...</p>
            </div>
            <div onClick={props.handleOnStory} style={{marginRight: '20px'}}>
                <img className="profile-pic" src={DonaldDuck} />
                <p>Donald_Duck</p>
            </div>
            <div onClick={props.handleOnStory} style={{marginRight: '20px'}}>
                <img className="profile-pic" src={Minnie} />
                <p>Minnie_Mouse</p>
            </div>
            <div onClick={props.handleOnStory} style={{marginRight: '20px'}}>
                <img className="profile-pic" src={Pluto} />
                <p>Pluto</p>
            </div>
            <div onClick={props.handleOnStory} style={{marginRight: '20px'}}>
                <img className="profile-pic" src={TinkerBell} />
                <p>TinkerBell</p>
            </div>
            <div onClick={props.handleOnStory} style={{marginRight: '20px'}}>
                <img className="profile-pic" src={Lola} />
                <p>Lola</p>
            </div>
            <div onClick={props.handleOnStory}>
                <img className="profile-pic" src={Gaston} />
                <p>Gaston</p>
            </div>
        </div>
    )
};

export default Stories;