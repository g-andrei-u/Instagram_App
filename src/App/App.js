import React, { useState } from 'react';
import Sidebar from '../Components/SideBar/SideBar';
import RightTopCorner from '../Components/RightTopCorner/RightTopCorner';
import Content from '../Components/Content/Content';
import Stories from '../Components/Stories/Stories';

import './App.css';

function App() {

  const [update, setUpdate] = useState(false);
  const [morePopUp, setMorePopUp] = useState(false);


  const handleOnPress = () => {

    if(update === false) {

        setUpdate(true)
    }

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


  return (
    <div className="App">
      <Sidebar
      morePopUp={morePopUp}
      handleOnMoreOpen={handleOnMoreOpen} 
      handleOnExit={handleOnExit}
      id='side-bar' 
      />

      <Stories
      handleOnExit={handleOnExit}
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
