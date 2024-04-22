import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaTicketAlt, FaStore, FaImages, FaVoteYea, FaPhoneAlt, FaUser, FaSignInAlt } from 'react-icons/fa';

const NavigationMenu = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationClick = () => {
    navigate('/RegistrationPage');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className="hidden sm:flex justify-end items-center bg-gray-900 fixed top-0 left-0 w-full z-50">
  <ul className="flex space-x-6 text-white">
    <li className="cursor-pointer flex items-center hover:bg-yellow-500 px-4 py-2 rounded transition duration-300" onClick={() => scrollToSection('about')}>
      <FaInfoCircle className="mr-2" /> About Us
    </li>
    <li className="cursor-pointer flex items-center hover:bg-yellow-500 px-4 py-2 rounded transition duration-300" onClick={() => navigate('/tickets')}>
      <FaTicketAlt className="mr-2" /> Tickets
    </li>
    <li className="cursor-pointer flex items-center hover:bg-yellow-500 px-4 py-2 rounded transition duration-300" onClick={() => navigate('/vendor')}>
      <FaStore className="mr-2" /> Become a Vendor
    </li>
    <li className="cursor-pointer flex items-center hover:bg-yellow-500 px-4 py-2 rounded transition duration-300" onClick={() => scrollToSection('gallery')}>
      <FaImages className="mr-2" /> Gallery
    </li>
    <li className="cursor-pointer flex items-center hover:bg-yellow-500 px-4 py-2 rounded transition duration-300" onClick={() => scrollToSection('vote')}>
      <FaVoteYea className="mr-2" /> Vote
    </li>
    <li className="cursor-pointer flex items-center hover:bg-yellow-500 px-4 py-2 rounded transition duration-300" onClick={() => scrollToSection('contact')}>
      <FaPhoneAlt className="mr-2" /> Contact
    </li>
    
    <li className="relative group flex items-center">
      <button className="cursor-pointer hover:bg-gray-800 px-8 py-2 rounded transition duration-300">
        <FaUser className=""/> 
      </button>
      <ul className="absolute hidden bg-gray-800 text-white rounded-md p-2 top-full left-0 group-hover:block">
        <li className="cursor-pointer" onClick={handleRegistrationClick}>Register</li>
        <li className="cursor-pointer" onClick={handleLoginClick}>Login</li>
      </ul>
    </li>
  </ul>
</nav>


      <div className="sm:hidden fixed top-0 left-0 w-full h-full z-50 transition-transform duration-300 ease-in-out" style={{ transform: showMenu ? 'translateX(0)' : 'translateX(-100%)' }}>
        <div className="bg-gray-700 text-white w-3/4 h-full flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-4 left-4 text-white"
            onClick={() => setShowMenu(false)}
          >
            
          </button>
          <ul className="text-white">
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={() => scrollToSection('about')}>
    <FaInfoCircle className="mr-2" /> About Us
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={() => navigate('/tickets')}>
    <FaTicketAlt className="mr-2" /> Tickets
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={() => navigate('/vendor')}>
    <FaStore className="mr-2" /> Become a Vendor
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={() => scrollToSection('gallery')}>
    <FaImages className="mr-2" /> Gallery
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={() => scrollToSection('vote')}>
    <FaVoteYea className="mr-2" /> Vote
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={() => scrollToSection('contact')}>
    <FaPhoneAlt className="mr-2" /> Contact
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={handleRegistrationClick}>
    <FaUser className="mr-2" /> Register
  </li>
  <li className="flex items-center py-2 cursor-pointer hover:bg-gray-800 px-4 rounded transition duration-300" onClick={handleLoginClick}>
    <FaSignInAlt className="mr-2" /> Login
  </li>
</ul>

        </div>
      </div>
      
      <button
        className="sm:hidden fixed top-4 left-4 bg-gray-700 text-white rounded-full h-10 w-10 flex items-center justify-center z-50"
        onClick={() => setShowMenu(prev => !prev)}
      >
        {showMenu ? 'X' : '☰'}
      </button>
    </>
  );
};

export default NavigationMenu;
