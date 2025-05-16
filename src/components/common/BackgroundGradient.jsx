// src/components/common/BackgroundGradient.jsx
import React from 'react';

const BackgroundGradient = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '600vh', // allow enough vertical scroll for 6 sections
        background: `linear-gradient(to bottom, 
          #a0d8f7 0%,        /* light sky blue (surface) */
          #4a90e2 20%,       /* mid ocean blue */
          #1a3c6a 40%,       /* deep ocean blue */
          #0d1b2a 60%,       /* very deep blue */
          #000814 80%,       /* near black deep sea */
          #000000 100%       /* black, ocean floor */
        )`,
        color: '#fff',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundGradient;
