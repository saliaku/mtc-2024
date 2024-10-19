import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventOverview from './components/EventOverview';
import Speakers from './components/Speakers';
import EventPartners from './components/EventPartners';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Brief from './components/Brief';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brief />
      <EventOverview />
      <Speakers />
      <EventPartners />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
