import React from "react";
import AnchorImage from "../AnchorImage/AnchorImage";

import Image1 from '../Pictures/Instagram_logo.svg.png';
import Image2 from '../Pictures/chimney-home-icon-transparent-1.png';
import Image3 from '../Pictures/search-icon-png-21.png';
import Image4 from '../Pictures/compass-icon-27.png';
import Image5 from '../Pictures/instagram-reels-icon.png';
import Image6 from '../Pictures/messeges.png';
import Image7 from '../Pictures/heart-shaped-instagram-transparent-image.png';
import Image8 from '../Pictures/square-with-plus-sign-icon.png';
import Image9 from '../Pictures/more.png'

import './SideBar.css';


const hideStyle = {
    display: 'none'
};


function Sidebar() {

    return (
    <div id="side-bar">
        <div id="start-part">
            <a>
                <img src={Image1} style={{width: 115, marginTop: 30, padding: 6}} />
            </a>
        </div>
        <div id="mid-part">
            <AnchorImage img={Image2}><p>Home</p></AnchorImage>
            <AnchorImage img={Image3}><p>Search</p></AnchorImage>
            <AnchorImage img={Image4}><p>Explore</p></AnchorImage>
            <AnchorImage img={Image5}><p>Reels</p></AnchorImage>
            <AnchorImage img={Image6}><p>Messages</p></AnchorImage>
            <AnchorImage img={Image7}><p>Notifications</p></AnchorImage>
            <AnchorImage img={Image8}><p>Create</p></AnchorImage>
            <AnchorImage img={'w'}><p>Profile</p></AnchorImage>
        </div>
        <div id="last-part">
            <AnchorImage img={Image9}><p>More</p></AnchorImage>
        </div>
    </div>);
};


export default Sidebar;