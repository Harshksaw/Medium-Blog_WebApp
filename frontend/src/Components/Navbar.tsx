import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state logic

  useEffect(() => {
    // Simulate fetching login status (replace with your logic)
    // setTimeout(() => {
    //   setIsLoggedIn(true);

    // }, 10000);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 flex items-center justify-between px-4 py-2 md:px-8">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-800">MEDIUM</h1>
        <span className="text-sm text-gray-500 ml-2">by Harsh</span>
      </div>
      <div className="hidden md:flex space-x-4">
        {/* Use Link for navigation within React Router */}
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue-600">Explore</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
      </div>
      <div className="flex items-center space-x-2">
        {!isLoggedIn && (
          <>
            {/* Use Link for signup and login routes */}
            <Link to="/signup" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Signup
            </Link>
            <Link to="/signin" className="px-3 py-2 text-sm font-medium text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Login
            </Link>
          </>
        )}
        {isLoggedIn && (
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="https://via.placeholder.com/150" // Replace with avatar image logic
            alt="Avatar"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
