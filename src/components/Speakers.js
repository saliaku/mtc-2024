import React from 'react';

const Speakers = () => {
  return (
    <section className="speakers p-8">
      <h2 className="text-4xl font-bold mb-6">Famous Guests & Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="speaker-card">
          <img src="/speaker1.jpg" alt="Speaker 1" className="rounded" />
          <h3 className="text-xl font-bold mt-4">John Doe</h3>
          <p>Industry Leader, Design</p>
        </div>
        {/* Repeat for other speakers */}
      </div>
    </section>
  );
};

export default Speakers;
