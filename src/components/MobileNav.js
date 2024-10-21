import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ toggleMenu }) => {
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu(); // Close the menu when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div ref={menuRef} className="bg-white rounded-lg p-6 w-3/4 max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Menu</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#register" className="text-blue-500 hover:text-blue-700 transition duration-200" onClick={toggleMenu}>
            Register Now
          </a>
          <Link to="/events" className="text-blue-500 hover:text-blue-700 transition duration-200" onClick={toggleMenu}>
            Explore Events
          </Link>
          <a href="#speakers" className="text-blue-500 hover:text-blue-700 transition duration-200" onClick={toggleMenu}>
            Speakers
          </a>
          <a href="#schedule" className="text-blue-500 hover:text-blue-700 transition duration-200" onClick={toggleMenu}>
            Schedule
          </a>
          <Link to="/contact" className="text-blue-500 hover:text-blue-700 transition duration-200" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
        <button
          className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleMenu}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
