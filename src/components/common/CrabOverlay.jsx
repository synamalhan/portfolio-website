import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import crabJson from '../../assets/crab.json';

const CrabOverlay = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle message on/off, no removal now
  const handleClick = () => {
    setShowMessage((prev) => !prev);
  };

  // Hide crab on small screens (e.g., below 768px)
  if (windowWidth < 768) return null;

  const maxTop = window.innerHeight - 160; // crab height ~160px
  const topPosition = Math.min(100 + scrollY * 0.1, maxTop);

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          position: 'fixed',
          top: topPosition,
          right: '20px',
          width: '160px',
          height: '160px',
          cursor: 'pointer',
          opacity: 0.7,
          zIndex: 9999,
          filter: showMessage ? 'hue-rotate(90deg)' : 'hue-rotate(250deg)',
          transition: 'filter 0.5s ease',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          userSelect: 'none',
        }}
        aria-label="Crab overlay"
      >
        <Lottie animationData={crabJson} loop={true} />
      </div>

      {showMessage && (
        <div
          style={{
            position: 'fixed',
            top: topPosition - 60,
            right: '50px',
            background: 'rgba(10, 62, 87, 0.95)',
            padding: '12px 20px',
            borderRadius: '15px',
            boxShadow: '0 0 25px rgba(146, 218, 247, 0.9)',
            fontSize: '1.1rem',
            color: '#92daf7',
            zIndex: 10000,
            userSelect: 'text',
            whiteSpace: 'nowrap',
          }}
        >
          <p>Nice to meet you!</p>
          <p>Be sure to send me a message!</p>
        </div>
      )}
    </>
  );
};

export default CrabOverlay;