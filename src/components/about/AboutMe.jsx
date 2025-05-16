import React, { useState, useEffect } from 'react';
import FloatingFishResume from './FloatingFishResume';
import FloatingFishResume2 from './FloatingFishResume2';

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
      {!isSmall && (
        <div style={{ ...styles.fishWrapper, marginRight: '20px', justifyContent: 'center' }}>
          <div style={{ transform: 'translateX(-30px) scale(0.7)' }}>
            <FloatingFishResume2 />
          </div>
        </div>
      )}

      <div
        style={{
          ...styles.textContainer,
          textAlign: 'center',
          margin: isMobile ? '20px 0' : '0 40px',
          maxWidth: isMobile ? '100%' : '600px',
        }}
      >
        <h2 style={styles.title}>About Me</h2>
        <p style={styles.text}>
          Hi! I’m Syna Malhan, a computer science student and aspiring developer fascinated by the depths of technology and marine life.
          I love creating interactive web experiences and combining creativity with code.
          This portfolio is a journey through my skills, projects, and passions.
          PS: If you want my resume ask the fishes!
        </p>
      </div>

      {/* Right fish always visible, smaller on mobile */}
      <div style={{ ...styles.fishWrapper, marginLeft: isMobile ? 0 : '20px', justifyContent: 'center' }}>
        <FloatingFishResume size={isMobile ? 150 : 400} />
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
};

export default AboutMe;
