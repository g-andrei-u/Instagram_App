import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/SideBar/SideBar';
import StoryPage from '../Components/Stories/StoryPage/StoryPage';
import ThePage from '../Components/ThePage/ThePage';
import './App.css';
import CreatePopUp from '../Components/SideBar/CreatePopUp/CreatePopUp';
import LogIn from '../Components/LogIn/LogIn';


function DisableScroll(bol) {

  useEffect(() => {

    if (bol) {
      const preventDefault = (event) => event.preventDefault();

      const disableScroll = () => {
        document.body.style.overflow = "hidden";
      };
      const enableScroll = () => {
        document.body.style.overflow = "";
      };

      disableScroll();
      document.body.addEventListener('scroll', preventDefault, { passive: false });

      return () => {
        enableScroll()
        document.body.removeEventListener('scroll', preventDefault);
      };
    }
  }, [bol]);
}

function App() {

  const [update, setUpdate] = useState(false);
  const [morePopUp, setMorePopUp] = useState(false);
  const [isStoryActive, setIsStoryActive] = useState(false);
  const [profileState, setProfileState] = useState(false);
  const [messagesPage, setMessagesPage] = useState(false);
  const [createPopUp, setCreatePopUp] = useState(false);
  const [image, setImage] = useState(null);
  const [logIn, setLogIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onChangeUsername = (event) => (setUsername(event.target.value));
  const onChangePassword = (event) => (setPassword(event.target.value));
  const onClickLogIn = () => {
    if ( username === "Tom_from_Tom.and.Jerry" && password.length > 1) {
      setLogIn(false)
    }
  };

  const handleOnProfileOpen = () => { if(profileState === false)  {setProfileState(true); setMessagesPage(false)} };
  const handleOnMessagesOpen = () => { if(messagesPage === false)  {setMessagesPage(true); setProfileState(false)} };
  const handleOnProfileClose = () => { if(profileState === true || messagesPage === true)  {setProfileState(false); setMessagesPage(false)} };

  const handleOnStory = () => { isStoryActive === false ? setIsStoryActive(true) : setIsStoryActive(false) };
  const handleOnUpdate = () => { update === false ? setUpdate(true) : setUpdate(false) };
  const handleOnMoreOpen = () => { morePopUp === false ? setMorePopUp(true) : setMorePopUp(false) };
  
  const handleOnExit = () => {

    if(update || morePopUp === true) {

      setUpdate(false)
      setMorePopUp(false)
    }
  };

  DisableScroll(logIn)


  return (isStoryActive) ? (
    <StoryPage
    handleOnStory={handleOnStory}
    isStoryActive={isStoryActive} 
    />
  ) : (
    <div className="App">
      <LogIn
      password={password}
      onChangePassword={onChangePassword}
      username={username}
      onChangeUsername={onChangeUsername}
      logIn={logIn} 
      onClickLogIn={onClickLogIn}
      />

      <Sidebar
      profileState={profileState} handleOnProfileClose={handleOnProfileClose} handleOnProfileOpen={handleOnProfileOpen}
      morePopUp={morePopUp} handleOnMoreOpen={handleOnMoreOpen} 
      handleOnExit={handleOnExit}
      createPopUp={createPopUp} setCreatePopUp={setCreatePopUp}
      handleOnMessagesOpen={handleOnMessagesOpen}
      />

      <ThePage
      profileState={profileState}
      handleOnProfileOpen={handleOnProfileOpen}
      handleOnExit={handleOnExit}
      handleOnStory={handleOnStory}
      update={update} handleOnPress={handleOnUpdate} 
      morePopUp={morePopUp} setMorePopUp={setMorePopUp}
      image={image}
      messagesPage={messagesPage} setMessagesPage={setMessagesPage}
      />

      <CreatePopUp 
      createPopUp={createPopUp} 
      setCreatePopUp={setCreatePopUp}
      image={image} setImage={setImage}
      />
    </div>
  );
}

export default App;
