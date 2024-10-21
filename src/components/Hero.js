// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero bg-cover bg-center h-96 relative" style={{ backgroundImage: 'url("/path-to-image.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-bold">Meet the Creator 2024</h1>
        <p className="text-white text-lg mt-4">Kollam, Kerala | Jan 10-12, 2024</p>
        <div className="mt-6">
          {/* <a href="#register" className="btn btn-primary mr-4">Register Now</a> */}
          <Link to="/events" className="btn btn-secondary">Explore Events</Link> {/* Update here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
