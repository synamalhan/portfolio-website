import React, { useState, useEffect } from 'react';
import ship from '../../assets/ship.webp';

const hobbies = [
  'Building Metal Earth Models',
  'Swimming',
  'Marine Life',
  'Coding'
];

const FinalSection = () => {
  const [showHobbies, setShowHobbies] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmall = windowWidth < 768;

  return (
    <section
      id="final-section"
      style={{
        background: 'linear-gradient(180deg, #000608 0%, #000000 100%)',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        minHeight: '700px',
        fontFamily: "'Montserrat', sans-serif",
        color: '#92daf7',
        userSelect: 'none',
        paddingBottom: 0,
        position: 'relative',
      }}
    >
      {/* Centered Ship with hobby bubble */}
      <div
        style={{
          position: 'relative',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0.5,
          userSelect: 'none',
          flexGrow: 1,
          maxWidth: '700px',
          justifyContent: 'flex-end',
          marginLeft: '30px',
          marginRight: '30px',
        }}
      >
        <img
          src={ship}
          alt="Ship"
          style={{
            height: isSmall ? '300px' : '700px', // smaller on small screen
            objectFit: 'contain',
            filter: 'hue-rotate(190deg)',
          }}
          onClick={() => {
            setShowHobbies(!showHobbies);
          }}
        />

        {/* Hobby bubble position changes on small screens */}
        {showHobbies && (
          <div
            style={{
              position: 'absolute',
              bottom: isSmall ? '300px' : '100px',
              left: isSmall ? '0%' : '100%',
              transform: isSmall ? 'translateX(-100%) translateY(100)' : 'none',
              background: 'rgba(10, 62, 87, 0.95)',
              borderRadius: '15px',
              padding: '25px 35px',
              boxShadow: '0 0 25px rgba(146, 218, 247, 0.9)',
              maxWidth: '400px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              animation: 'fadeInRight 0.3s ease forwards',
              fontSize: '1.1rem',
              lineHeight: 1.5,
              zIndex: 10,
              color: '#92daf7',
              opacity: 1,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '1.4rem',
                fontWeight: '600',
                borderBottom: '1px solid #4a9bdc',
                paddingBottom: '6px',
              }}
            >
              Hobbies and Interests
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginTop: '10px',
              }}
            >
              {hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  style={{
                    background: '#0a3e57',
                    padding: '10px 18px',
                    borderRadius: '20px',
                    boxShadow: '0 0 10px #4a9bdc',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Empty space on right to balance left (reduced on small screens) */}
      <div style={{ width: isSmall ? '40px' : '160px', marginRight: isSmall ? '10px' : '30px' }} />

      <style>
        {`
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default FinalSection;
