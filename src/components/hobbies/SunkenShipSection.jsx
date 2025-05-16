import React, { useState } from 'react';
import Lottie from 'lottie-react';
import ship from '../../assets/ship.webp';
import crabJson from '../../assets/crab.json';

const hobbies = [
  'Sailing',
  'Reading Sci-Fi',
  'Photography',
  'Coding',
  'Exploring Nature',
  'Cooking',
  'Gaming',
  'Marine Conservation',
];

const FinalSection = () => {
  const [showHobbies, setShowHobbies] = useState(false);
  const [showCrabMsg, setShowCrabMsg] = useState(false);

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
      {/* Crab Lottie Animation - Left */}
      <div
        onClick={() => {
          setShowCrabMsg(!showCrabMsg);
          // If you want to close hobbies bubble when crab clicked:
          setShowHobbies(false);
        }}
        style={{
          width: '160px',
          height: '160px',
          marginLeft: '30px',
          opacity: 0.5,
          filter: showCrabMsg ? 'hue-rotate(90deg)' : 'hue-rotate(250deg)',
          transition: 'filter 0.5s ease',
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie animationData={crabJson} loop={true} />
        {showCrabMsg && (
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(10, 62, 87, 0.9)',
              padding: '8px 14px',
              borderRadius: '12px',
              fontSize: '1rem',
              boxShadow: '0 0 15px rgba(74, 155, 220, 0.8)',
              whiteSpace: 'nowrap',
              color: '#92daf7',
              userSelect: 'text',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            Hope you had fun!
          </div>
        )}
      </div>

      {/* Centered Ship with hobby bubble to the right */}
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
        }}
      >
        <img
          src={ship}
          alt="Ship"
          style={{ height: '550px', objectFit: 'contain' }} // much larger ship
          onClick={() => {
            setShowHobbies(!showHobbies);
            setShowCrabMsg(false);
          }}
        />

        {/* Hobby bubble to the right */}
        {showHobbies && (
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '105%', // position right of ship
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

      {/* Empty space on right to balance crab on left */}
      <div style={{ width: '160px', marginRight: '30px' }} />

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
