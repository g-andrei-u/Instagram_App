import React, { useState } from 'react';
import RightTopCorner from '../RightTopCorner/RightTopCorner';
import Content from '../Content/Content';
import Stories from '../Stories/Stories';
import ProfilePage from '../ProfilePage/ProfilePage';

import './ThePage.css'


function ThePage(props) {

    const [saved1, setSaved1] = useState(false);
    const [saved2, setSaved2] = useState(false);
    const [saved3, setSaved3] = useState(false);
    const [saved4, setSaved4] = useState(false);


    return props.profileState === true ? (
        <div className='starting-page'>
        <ProfilePage
        saved1={saved1} saved2={saved2} saved3={saved3} saved4={saved4}
        morePopUp={props.morePopUp}
        setMorePopUp={props.setMorePopUp}
        /> 
        </div>) : (
        <div className='starting-page'>
            <Stories
            handleOnExit={props.handleOnExit}
            handleOnStory={props.handleOnStory}
            />
      
            <Content 
            update={props.update}
            handleOnPress={props.handleOnPress}
            handleOnExit={props.handleOnExit} 
            saved1={saved1} saved2={saved2} saved3={saved3} saved4={saved4}
            setSaved1={setSaved1} setSaved2={setSaved2} setSaved3={setSaved3} setSaved4={setSaved4} 
            />

            <RightTopCorner
            handleOnExit={props.handleOnExit} 
            id='right-top' 
            />
        </div>
    )
};


export default ThePage;