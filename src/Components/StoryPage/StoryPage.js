import React, {useState} from "react";

import Insta from '../Pictures/instagram-white.png';
import McDuck from '../Pictures/StoriesPage/McDuck.png';
import ProfileMcDuck from '../Pictures/StoriesPictures/Scrooge-McDuck.png';
import Heart from '../Pictures/heart-shaped-white-transparent.png';
import RedHeart from '../Pictures/heart-logo-red-transparent.png';
import Share from '../Pictures/messeges-white.png';

import './StoryPage.css'

const timeStyle = {
    color: 'rgba(255, 255, 255, 0.6)'
}


function StoryPage(props) {
    const [heart, setHeart] = useState(false);

    const handleOnHeart = () => {

        heart === false ? setHeart(true) : setHeart(false)
    };


    return (
        <div id="story-page">
            <img className="logo" src={Insta} />
            <div className="the-story">
                <div className="name-time">
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={ProfileMcDuck} />
                        <p>name</p>
                        <p style={timeStyle}>1h</p>
                    </div>
                    <p style={{fontSize: '31px', fontWeight: '900', margin: 0, paddingBottom: 15}}>...</p>
                </div>
                <img className="main-image" src={McDuck} />
                <div className="bottom-line">
                    <input type="text" name="story-input"/>
                    <img onClick={handleOnHeart} src={heart ? RedHeart : Heart} />
                    <img src={Share} />
                </div>
            </div>
            <button onClick={props.handleOnStory}>x</button>
        </div>
    )
};

export default StoryPage;