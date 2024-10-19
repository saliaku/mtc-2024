import React, { useEffect, useState, useRef } from 'react';

// Load all images from the specified folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));

const Brief = () => {
  const imageKeys = Object.keys(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageKeys.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;

        // Fade out if section is scrolled past the top of the viewport
        if (sectionTop < 0 && !isFadingOut) {
          setIsFadingOut(true);
        } 
        // Fade in if section is back in the viewport
        else if (sectionTop >= 0 && isFadingOut) {
          setIsFadingOut(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFadingOut]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageKeys.length) % imageKeys.length);
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    margin: '20px',
    transition: 'opacity 0.5s ease',
    opacity: isFadingOut ? 0 : 1,
  };

  const imageContainerStyle = {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
    marginRight: '20px', // Add space between image and text
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    transition: 'transform 1s ease',
    transform: `translateX(-${currentIndex * 100}%)`,
    display: 'flex',
  };

  const descriptionContainerStyle = {
    flex: 1,
    paddingLeft: '20px',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1,
  };

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div style={imageContainerStyle}>
        <button style={{ ...buttonStyle, left: '10px' }} onClick={handlePrevious}>
          &lt; {/* Left Arrow */}
        </button>
        <div style={imageStyle}>
          {imageKeys.map((key) => (
            <img
              key={key}
              src={images[key]}
              alt={`Meet the Creator ${key}`}
              style={{ width: '100%', height: 'auto' }}
            />
          ))}
        </div>
        <button style={{ ...buttonStyle, right: '10px' }} onClick={handleNext}>
          &gt; {/* Right Arrow */}
        </button>
      </div>
      <div style={descriptionContainerStyle}>
        <h2 className="text-2xl font-bold mb-4">About Meet the Creator</h2>
        <p>
          Meet the Creator is an engaging event designed for creators, innovators, and enthusiasts. 
          Attendees can expect insightful talks, networking opportunities, and workshops that 
          inspire creativity and collaboration.
        </p>
      </div>
    </section>
  );
};

export default Brief;
