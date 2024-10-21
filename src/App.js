// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brief from "./components/Brief";
import EventOverview from "./components/EventOverview";
import Speakers from "./components/Speakers";
import EventPartners from "./components/EventPartners";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Events from "./components/Pages/Events"; // Ensure this import is correct
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Brief />
                <EventOverview />
                <Speakers />
                <EventPartners />
                <FAQs />
              </>
            }
          />
          <Route path="/events" element={<Events />} /> {/* Updated syntax */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
