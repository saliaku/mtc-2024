import React from 'react';

const SponsorTile = ({ image, name, website }) => {
  return (
    <a 
      href={website} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition-transform duration-200 hover:scale-105 hover:shadow-xl"
    >
      <img 
        src={image} 
        alt={name} 
        className="h-24 mb-4 object-contain" // Increased size
      />
      <span className="font-bold text-lg text-center">{name}</span> {/* Increased font size */}
    </a>
  );
};

export default SponsorTile;
