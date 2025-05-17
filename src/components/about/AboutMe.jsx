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

  const fontSizeTitle = isMobile ? '2rem' : '3rem';
  const fontSizeText = isMobile ? '1rem' : '1.25rem';
  const lineHeightText = isMobile ? '1.4' : '1.6';

  return (
    <section
      id="about"
      style={{
        ...styles.container,
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '20px 0' : '40px',
        height: '200%',
        position: 'relative',
      }}
    >
      {/* Left fish only on large screens */}
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

      {/* About Me text */}
      <div
        style={{
          ...styles.textContainer,
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: isMobile ? '100%' : '500px',
        }}
      >
        <h2 style={{ ...styles.title, fontSize: fontSizeTitle }}>
          About Me
        </h2>
        <p
          style={{
            ...styles.text,
            fontSize: fontSizeText,
            lineHeight: lineHeightText,
          }}
        >
          Hi! I’m <strong>Syna Malhan</strong>, a curious computer science student with a love for merging logic with imagination. Whether it's through writing expressive code, exploring the elegance of algorithms, or crafting immersive front-end interfaces, I’m always looking for new ways to make digital experiences more intuitive and delightful.
          <br />
          <br />
          Outside the world of tech, I’m endlessly inspired by marine life — the colors, movement, and mysteries of the ocean often find their way into my creative process. This portfolio is a reflection of both my technical journey and my love for nature’s quiet intelligence.
          <br />
          <br />
          <span style={styles.resumeHint}>
            🐠 P.S. If you're looking for my resume... you'll have to ask the fishes swimming around this section!
          </span>
        </p>

        {/* On mobile, show an additional floating fish near where button would be */}
        {isMobile && (
  <div style={{ 
    marginTop: 0, 
    display: 'flex', 
    justifyContent: 'center', 
    // gap: '10px',  // spacing between fishes
    alignItems: 'center',
  }}>
    <FloatingFishResume size={40} />
    <FloatingFishResume4 size={40} />
    <FloatingFishResume3 size={40} />
  </div>
)}

      </div>

      {/* Right fish column - only on larger screens */}
      {!isMobile && (
        <div style={styles.rightFishContainer}>
          <FloatingFishResume size={200} />
          <FloatingFishResume5 size={100} />
        </div>
      )}
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
    width: '100vw',
    minWidth: '100%',
    boxSizing: 'border-box',
  },
  textContainer: {
    fontFamily: "'Lora', serif",
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: '20px',
    color: '#00e5ff',
    textShadow: '2px 2px 6px rgba(0,0,0,1)',
  },
  text: {},
  resumeHint: {
    fontStyle: 'italic',
    opacity: 0.8,
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
