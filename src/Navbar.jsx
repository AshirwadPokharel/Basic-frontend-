import React, { useState } from 'react';
import { FaCar } from "react-icons/fa";

function Navbar({ searchTerm, setSearchTerm, addCar }) {
  return (
    <nav className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-white text-4xl font-semibold">CarShop</span>
          <div className="px-2 pt-3 text-yellow-500 car-icon text-4xl"><FaCar /></div>
        </div>

        <div className="flex space-x-6 text-white hover:text-yellow-400 transition-all duration-300">
          <a>Home</a>
          <a href="#electric" className="hover:text-yellow-400 transition-all duration-300">Electric</a>
          <a href="#contact" className="hover:text-yellow-400 transition-all duration-300">Contact</a>
          <a href="#about" className="hover:text-yellow-400 transition-all duration-300">About</a>
        </div>

        
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cars or devices..."
            className="px-4 py-2 rounded-full text-black w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="absolute right-0 top-0 mt-2 mr-3 text-white hover:text-yellow-400">🔍</button>
        </div>

    
      </div>
    </nav>
  );
}

export default Navbar;
