import React from 'react';
import SponsorTile from './SponsorTile';
import gold from '../assets/img/partners/gold.png'; // Import your icons

// Placeholder images (you can replace these with actual sponsor logos later)
const platinumSponsor1 = 'https://via.placeholder.com/150'; // Replace with actual logo
const platinumSponsor2 = 'https://via.placeholder.com/150'; // Replace with actual logo
const goldSponsor1 = 'https://via.placeholder.com/150'; // Replace with actual logo
const goldSponsor2 = 'https://via.placeholder.com/150'; // Replace with actual logo
const silverSponsor1 = 'https://via.placeholder.com/150'; // Replace with actual logo
const silverSponsor2 = 'https://via.placeholder.com/150'; // Replace with actual logo

const EventPartners = () => {
  return (
    <section className="partners p-8 bg-gray-200 flex flex-col items-center">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
      
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 border-b-2 border-gray-400 pb-2">
        Event Partners
      </h2>

      {/* Platinum Sponsors */}
      <div className="mb-8 w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          <img src={gold} alt="Platinum Icon" className="h-8 mr-2" />
          Platinum Sponsors
        </h3>
        <div className="carousel flex justify-start space-x-6 overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
            <SponsorTile image={platinumSponsor1} name="Platinum Sponsor 1" website="https://example.com" />
            <SponsorTile image={platinumSponsor2} name="Platinum Sponsor 2" website="https://example.com" />
            <SponsorTile image={platinumSponsor1} name="Platinum Sponsor 1" website="https://example.com" />
            <SponsorTile image={platinumSponsor2} name="Platinum Sponsor 2" website="https://example.com" />
            <SponsorTile image={platinumSponsor1} name="Platinum Sponsor 1" website="https://example.com" />
            <SponsorTile image={platinumSponsor2} name="Platinum Sponsor 2" website="https://example.com" />
          </div>
        </div>
      </div>

      {/* Gold Sponsors */}
      <div className="mb-8 w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          <img src={gold} alt="Gold Icon" className="h-8 mr-2" />
          Gold Sponsors
        </h3>
        <div className="carousel flex justify-start space-x-6 overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
            <SponsorTile image={goldSponsor1} name="Gold Sponsor 1" website="https://example.com" />
            <SponsorTile image={goldSponsor2} name="Gold Sponsor 2" website="https://example.com" />
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="mb-8 w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          <img src={gold} alt="Silver Icon" className="h-8 mr-2" />
          Silver Sponsors
        </h3>
        <div className="carousel flex justify-start space-x-6 overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
            <SponsorTile image={silverSponsor1} name="Silver Sponsor 1" website="https://example.com" />
            <SponsorTile image={silverSponsor2} name="Silver Sponsor 2" website="https://example.com" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPartners;
