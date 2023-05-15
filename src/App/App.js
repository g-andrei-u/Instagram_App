import React, { useState } from 'react';
import Sidebar from '../Components/SideBar/SideBar';
import StoryPage from '../Components/Stories/StoryPage/StoryPage';
import ThePage from '../Components/ThePage/ThePage';

import './App.css';

function App() {

  const [update, setUpdate] = useState(false);
  const [morePopUp, setMorePopUp] = useState(false);
  const [isStoryActive, setIsStoryActive] = useState(false);
  const [profileState, setProfileState] = useState(false);


  const handleOnProfileOpen = () => { if(profileState === false)  {setProfileState(true)} };
  const handleOnProfileClose = () => { if(profileState === true)  {setProfileState(false)} };

  const handleOnStory = () => { isStoryActive === false ? setIsStoryActive(true) : setIsStoryActive(false) };

  const handleOnPress = () => { update === false ? setUpdate(true) : setUpdate(false) };

  const handleOnMoreOpen = () => { morePopUp === false ? setMorePopUp(true) : setMorePopUp(false) };
  
  const handleOnExit = () => {

    if(update || morePopUp === true) {

      setUpdate(false)
      setMorePopUp(false)
    }
  };


  return (isStoryActive) ? (
    <StoryPage
    handleOnStory={handleOnStory}
    isStoryActive={isStoryActive} 
    />
  ) : (
    <div className="App">
      <Sidebar
      profileState={profileState}
      handleOnProfileClose={handleOnProfileClose}
      handleOnProfileOpen={handleOnProfileOpen}
      morePopUp={morePopUp}
      handleOnMoreOpen={handleOnMoreOpen} 
      handleOnExit={handleOnExit}
      id='side-bar' 
      />

      <ThePage
      profileState={profileState}
      handleOnProfileOpen={handleOnProfileOpen}
      handleOnExit={handleOnExit}
      handleOnStory={handleOnStory}
      update={update}
      handleOnPress={handleOnPress} 
      />
    </div>
  );
}

export default App;
