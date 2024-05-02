import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold"></div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Blog</Link>
          <Link to="/posts" className="text-white hover:text-gray-300">Posts</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/chat" className="text-white hover:text-gray-300">Chat</Link>
        </div>
      </div>
    </nav>
  );
  
  
};

export default Navbar;
