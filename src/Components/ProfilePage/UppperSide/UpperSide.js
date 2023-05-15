import React from "react";

import SettingsImage from '../../Pictures/settings-icon.png';
import Tom from '../../Pictures/tom-face-sticker-india.png';

import './UpperSide.css'


function UpperSide() {
    return (
        <div id='UpperSide'>
            <img className="profile-picture" src={Tom} />
            <div>
                <div className="first-line">
                    <p style={{fontWeight: '500'}}>Tom_from_Tom.and.Jerry</p>
                    <button>Edit profile</button>
                    <img className="settings-img" src={SettingsImage} />
                </div>

                <div className="first-line">
                    <p><strong>0</strong>  posts</p>
                    <p><strong>89</strong>  fallowers</p>
                    <p><strong>195</strong>  fallowing</p>
                </div>

                <div>
                    <p><strong>Tom</strong></p>
                    <p>I love milk and meat</p>
                </div>
            </div>
        </div>
    )
};


export default UpperSide;