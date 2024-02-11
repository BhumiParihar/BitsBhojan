// import React from 'react'

// import backGround from './assets/bg-home.jpg';


// import Navbar from './Components/Pages/Navbar'
// import { Outlet } from 'react-router-dom'

import React from 'react';
import backGround from './assets/bg-home.jpg';
import Navbar from './Components/Pages/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{ backgroundImage: `url(${backGround})` }}
      ></div>
      {/* Content */}
      <div className="relative z-10 bg-transparent">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App
