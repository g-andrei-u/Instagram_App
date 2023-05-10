import React from "react";

import './MorePopUp.css'

function MorePopUp(props) {

    return (props.status) ? (
    <>
    <div className="more-popup">
        <div className="anchor">
            <a>Settings</a>
        </div>
        <div className="anchor">
            <a>Your activity</a>
        </div>
        <div className="anchor">
            <a>Saved</a>
        </div>
        <div className="anchor">
            <a>Switch appearance</a>
        </div>
        <div className="anchor">
            <a>Report a problem</a>
        </div>
    </div>
    </>
    ) : '';
};


export default MorePopUp;