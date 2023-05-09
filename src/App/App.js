import React from 'react';
import Sidebar from '../Components/SideBar/SideBar';
import RightTopCorner from '../Components/RightTopCorner/RightTopCorner';
import Content from '../Components/Content/Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar id='side-bar' />
      <Content id='center-after' />
      <RightTopCorner id='right-top' />
    </div>
  );
}

export default App;
