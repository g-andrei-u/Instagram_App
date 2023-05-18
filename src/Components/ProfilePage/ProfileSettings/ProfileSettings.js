import React from "react";

import './ProfileSettings.css';


const lastStyle = {
    paddingBottom: '3px',
    borderBottom: '0px solid rgba(0, 0, 0, 0.2)'
};


const ProfileSettings = (props) => {
    return (props.status) ? (
        <>
        <div className="profile-settings">
            <p>Apps and Websites</p>
            <p>QR Code</p>
            <p>Notifications</p>
            <p>Settings and privacy</p>
            <p>Supervision</p>
            <p>Log Out</p>
            <p style={lastStyle} onClick={props.handleOnProfileSettings}>Cancel</p>
        </div>
        </>
    ) : ''
};

export default ProfileSettings;