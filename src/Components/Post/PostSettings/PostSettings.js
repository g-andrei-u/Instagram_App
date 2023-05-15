import React from "react";

import './PostSettings.css';

const redStyle = {
    color: 'red',
    fontSize: '14px',
    fontWeight: '600'
}

const lastStyle = {
    paddingBottom: '3px',
    borderBottom: '0px solid rgba(0, 0, 0, 0.2)'
}

function PostSettings(props) {

    const settingsStyle = {
        display: props.update === false? 'none' : 'block',
    }

    return (
        <div id="settings" style={settingsStyle}>
            <p style={redStyle}>Report</p>
            <p style={redStyle}>Unfollow</p>
            <p>Add to favorites</p>
            <p>Go to post</p>
            <p>Share to...</p>
            <p>Copy link</p>
            <p>Embed</p>
            <p>About this account</p>
            <p style={lastStyle}>Cancel</p>
        </div>
    )
};

export default PostSettings;