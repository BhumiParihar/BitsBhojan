import {React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Perform any login logic (e.g., API calls) here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform any logout logic (e.g., clearing tokens) here
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="">
            <img className="h-8 w-8 inline lg:pr-1 " src={logo} alt="Logo"/></NavLink>
          </div>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-3">
                <NavLink to=""
                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                 >Home</NavLink>
                <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
               <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink> 
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex items-center">
              <NavLink to="/signin" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</NavLink>
              <NavLink to="/signup" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</NavLink>

              <NavLink to="/signdashboard" className="text-gray-300 px-3 py-2 rounded-md text-sm font-normal underline underline-offset-4 ">Register your mess</NavLink>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar