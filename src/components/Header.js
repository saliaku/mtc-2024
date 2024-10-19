import React from 'react';

const Header = () => {
  const headingStyle = {
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  const headingHoverStyle = {
    transform: 'scale(1.1) rotate(2deg)',
    color: '#fbbf24', // Change to a different color on hover
  };

  return (
    <header className="bg-blue-900 text-white p-4 shadow-md rounded-lg mx-4">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <h1
          className="text-3xl font-bold"
          style={headingStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = headingHoverStyle.transform;
            e.currentTarget.style.color = headingHoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0)';
            e.currentTarget.style.color = 'white'; // Reset to original color
          }}
        >
          Meet the Creator 2024
        </h1>
        <nav className="flex space-x-4">
          <a href="#register" className="hover:text-yellow-300 transition">Register Now</a>
          <a href="#events" className="hover:text-yellow-300 transition">Explore Events</a>
          <a href="#speakers" className="hover:text-yellow-300 transition">Speakers</a>
          <a href="#schedule" className="hover:text-yellow-300 transition">Schedule</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
