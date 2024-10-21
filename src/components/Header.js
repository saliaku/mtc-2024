import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav"; // Import the new MobileNav component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth < 900;
      setIsMobileView(isCurrentlyMobile);
      // Close the menu if window is resized to desktop view
      if (!isCurrentlyMobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white p-4 shadow-lg-custom rounded-lg mx-4">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="text-3xl font-bold">
            Meet the Creator 2024
          </h1>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✖" : "☰"} {/* Basic icons for open/close */}
        </button>

        {/* Navigation Links */}
        <nav className={`hidden lg:flex lg:flex-row space-x-4`}>
          <a href="#register" className="hover:text-yellow-300 transition">
            Register Now
          </a>
          <Link to="/events" className="hover:text-yellow-300 transition">
            Explore Events
          </Link>
          <a href="#speakers" className="hover:text-yellow-300 transition">
            Speakers
          </a>
          <a href="#schedule" className="hover:text-yellow-300 transition">
            Schedule
          </a>
          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileView && isMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
