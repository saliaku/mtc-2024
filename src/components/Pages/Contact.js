import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Info from "./Info";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Stack on mobile
    justifyContent: 'space-between',
    padding: '20px',
  };

  const itemStyle = {
    flex: isMobile ? 'none' : 1, // Flex 1 for larger screens, none for mobile
    margin: '0 10px',
    minWidth: isMobile ? 'auto' : '300px', // Allow full width on mobile
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <Info />
      </div>
      <div style={itemStyle}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
