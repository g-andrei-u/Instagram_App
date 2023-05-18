import React from 'react';
import RightTopCorner from '../RightTopCorner/RightTopCorner';
import Content from '../Content/Content';
import Stories from '../Stories/Stories';
import ProfilePage from '../ProfilePage/ProfilePage';

import './ThePage.css'


function ThePage(props) {
    return props.profileState === true ? (
        <div className='starting-page'>
        <ProfilePage 
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
            />

            <RightTopCorner
            handleOnExit={props.handleOnExit} 
            id='right-top' 
            />
        </div>
    )
};


export default ThePage;