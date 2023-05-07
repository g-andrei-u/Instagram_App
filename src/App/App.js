import React from 'react';
import Sidebar from '../Components/SideBar/SideBar';
import RightTopCorner from '../Components/RightTopCorner/RightTopCorner';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar id='side-bar' />
      <RightTopCorner id='right-top' />
    </div>
  );
}

export default App;
