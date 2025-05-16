import React, { useState, useEffect } from 'react';
import FloatingFishResume from './FloatingFishResume';
import FloatingFishResume2 from './FloatingFishResume2';
import FloatingFishResume3 from './FloatingFishResume3';
import FloatingFishResume4 from './FloatingFishResume4';
import FloatingFishResume5 from './FloatingFishResume5';

const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 480; // really small
  const isSmall = windowWidth < 768; // tablet/small screen

  return (
    <section
      id="about"
      style={{
        ...styles.container,
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '20px' : '40px',
        height: isMobile ? 'auto' : '100vh',
      }}
    >
      {/* Left fish only on large screens */}
      {/* Left fish cluster */}
      {!isSmall && (
        <div style={styles.leftFishContainer}>
          <div style={styles.centerFish}>
            <FloatingFishResume2 />
          </div>
          <div style={styles.sideFishLeft}>
            <FloatingFishResume3 />
          </div>
          <div style={styles.sideFishRight}>
            <FloatingFishResume4 />
          </div>
        </div>
      )}


      <div
        style={{
          ...styles.textContainer,
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: isMobile ? '100%' : '600px',
        }}
      >
        <h2 style={styles.title}>About Me</h2>
        <p style={styles.text}>
  Hi! I’m <strong>Syna Malhan</strong>, a curious computer science student with a love for merging logic with imagination. Whether it's through writing expressive code, exploring the elegance of algorithms, or crafting immersive front-end interfaces, I’m always looking for new ways to make digital experiences more intuitive and delightful.<br /><br />
  Outside the world of tech, I’m endlessly inspired by marine life — the colors, movement, and mysteries of the ocean often find their way into my creative process. This portfolio is a reflection of both my technical journey and my love for nature’s quiet intelligence.<br /><br />
  <span style={styles.resumeHint}>
    🐠 P.S. If you're looking for my resume... you'll have to ask the fishes swimming around this section!
  </span>


        </p>
      </div>

      
      {/* Right fish always visible, smaller on mobile */}
      {/* Right fish column */}
      <div style={styles.rightFishContainer}>
        <FloatingFishResume size={isMobile ? 150 : 200} />
        <FloatingFishResume5 size={isMobile ? 50 : 100} />
      </div>

    </section>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(180deg, #004466 0%, #002933 100%)',
    color: '#a0d8ef',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',        // full viewport width
    minWidth: '100%',      // prevent shrinking below full width
    boxSizing: 'border-box', // ensure padding included inside width
  },
  textContainer: {
    fontFamily: "'Lora', serif",
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#00e5ff',
    textShadow: '2px 2px 6px rgba(0,0,0,1)',

  },
  text: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
  },
  fishWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  leftFishContainer: {
    position: 'relative',
    width: 250,
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '40px',
  },
  
  centerFish: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.7)',
    zIndex: 2,
  },
  
  sideFishLeft: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    transform: 'scale(0.5)',
    zIndex: 1,
  },
  
  sideFishRight: {
    position: 'absolute',
    bottom: '25%',
    right: '10%',
    transform: 'scale(0.5)',
    zIndex: 1,
  },
  
  rightFishContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginLeft: '40px',
  },
  
};

export default AboutMe;
