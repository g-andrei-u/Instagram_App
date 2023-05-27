import React from "react";
import AnchorImage from "./AnchorImage/AnchorImage";
import MorePopUp from "./MorePopUp/MorePopUp";
import Image1 from '../Pictures/Instagram_logo.svg.png';
import Image2 from '../Pictures/chimney-home-icon-transparent-1.png';
import Image3 from '../Pictures/search-icon-png-21.png';
import Image4 from '../Pictures/compass-icon-27.png';
import Image5 from '../Pictures/instagram-reels-icon.png';
import Image6 from '../Pictures/messeges.png';
import Image7 from '../Pictures/heart-shaped-instagram-transparent-image.png';
import Image8 from '../Pictures/square-with-plus-sign-icon.png';
import Image9 from '../Pictures/more.png';
import ProfilePic from '../Pictures/tom-face-sticker-india.png';
import './SideBar.css';



function Sidebar(props) {

    const [createPopUp, setCreatePopUp] = [props.createPopUp ,props.setCreatePopUp]

    const homeStyle = {
        fontWeight: props.profileState === true ? '500' : '800',
        fontSize: '15px'
    };

    const profileStyle = {
        fontWeight: props.profileState === true ? '800' : '500',
        fontSize: '15px'
    };


    return (
    <>
    <MorePopUp status={props.morePopUp} />
    <div id="side-bar" onClick={props.handleOnExit}>
        <div id="start-part">
            <a style={{display: "flex", alignContent: "center"}} onClick={props.handleOnProfileClose}>
                <img src={Image1} style={{display: "inline", width: 115, marginTop: 30, padding: '6px 0'}} />
                <p style={{display: "inline", fontSize: '10px', fontWeight: '700', marginTop: 52, marginLeft: -2, color: 'purple'}}>for cartoons</p>
            </a>
        </div>
        <div id="mid-part">
            <AnchorImage onClick={props.handleOnProfileClose} img={Image2}><p style={homeStyle}>Home</p></AnchorImage>
            {/*<AnchorImage img={Image3}><p>Search</p></AnchorImage>*/}
            {/*<AnchorImage img={Image4}><p>Explore</p></AnchorImage>*/}
            {/*<AnchorImage img={Image5}><p>Reels</p></AnchorImage>*/}
            <AnchorImage onClick={props.handleOnMessagesOpen} img={Image6}><p>Messages</p></AnchorImage>
            {/*<AnchorImage img={Image7}><p>Notifications</p></AnchorImage>*/}
            <AnchorImage onClick={() => setCreatePopUp(true)} img={Image8}><p>Create</p></AnchorImage>
            <AnchorImage onClick={props.handleOnProfileOpen} img={ProfilePic}><p style={profileStyle}>Profile</p></AnchorImage>
        </div>
        <div id="last-part">
            <AnchorImage onClick={props.handleOnMoreOpen} img={Image9}><p>More</p></AnchorImage>
        </div>
    </div>
    </>);
};


export default Sidebar;