import React, { useState } from "react";
import UppperSide from "./UppperSide/UpperSide";
import LowerSide from "./LowerSide/LowerSide";
import ProfileSettings from "./ProfileSettings/ProfileSettings";

import './ProfilePage.css';

function ProfilePage(props) {

    const [profilePopUp, setProfilePopUp] = useState(false);
    const [morePopUp, setMorePopUp] = [props.morePopUp, props.setMorePopUp];


    const handleOnProfileSettings = () => {

        profilePopUp === false ? setProfilePopUp(true) : setProfilePopUp(false)
    };

    const HandleOnProfileSettingsOpen = () => {

        if(profilePopUp === true || morePopUp === true) {setProfilePopUp(false); setMorePopUp(false)};
    };


    return (
        <>
        <ProfileSettings 
        status={profilePopUp}
        handleOnProfileSettings={handleOnProfileSettings} 
        />
        <div onClick={HandleOnProfileSettingsOpen} id="profile-page">
            <UppperSide
            handleOnProfileSettings={handleOnProfileSettings}
            />
            <LowerSide
            saved1={props.saved1} saved2={props.saved2} saved3={props.saved3} saved4={props.saved4}
            image={props.image}
            />
        </div>
        </>
    )
};


export default ProfilePage;