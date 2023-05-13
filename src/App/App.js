import React, { useState } from 'react';
import Sidebar from '../Components/SideBar/SideBar';
import RightTopCorner from '../Components/RightTopCorner/RightTopCorner';
import Content from '../Components/Content/Content';
import Stories from '../Components/Stories/Stories';
import StoryPage from '../Components/StoryPage/StoryPage';

import './App.css';

function App() {

  const [update, setUpdate] = useState(false);
  const [morePopUp, setMorePopUp] = useState(false);
  const [isStoryActive, setIsStoryActive] = useState(false);

  const handleOnStory = () => {

    isStoryActive === false ? setIsStoryActive(true) : setIsStoryActive(false);
  };


  const handleOnPress = () => {

    update === false ? setUpdate(true) : setUpdate(false);
  };
  
  const handleOnExit = () => {

    if(update || morePopUp === true) {

        setUpdate(false)
        setMorePopUp(false)
    }
  };

  const handleOnMoreOpen = () => {

    if(morePopUp === false) {

      setMorePopUp(true)
    }

    if(morePopUp === true) {

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
      morePopUp={morePopUp}
      handleOnMoreOpen={handleOnMoreOpen} 
      handleOnExit={handleOnExit}
      id='side-bar' 
      />

      <Stories
      handleOnExit={handleOnExit}
      handleOnStory={handleOnStory}
      />
      
      <Content 
      update={update}
      handleOnPress={handleOnPress}
      handleOnExit={handleOnExit} 
      />

      <RightTopCorner
      handleOnExit={handleOnExit} 
      id='right-top' 
      />
    </div>
  );
}

export default App;
