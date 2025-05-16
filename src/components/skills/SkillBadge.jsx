import React, { useMemo } from 'react';
import Lottie from 'lottie-react';
import starfishAnimation from '../../assets/starfish.json';

const generateRandomBlob = () => {
  const borderRadius = `${Math.floor(Math.random() * 50) + 25}% ${Math.floor(Math.random() * 50) + 25}% ${
    Math.floor(Math.random() * 50) + 25
  }% ${Math.floor(Math.random() * 50) + 25}%`;
  const colors = ['#6e64ff', '#7f7bff', '#7158e2', '#5f7eff', '#7d60f6', '#7aa2ff', '#8b7dff'];
  const background = colors[Math.floor(Math.random() * colors.length)];
  return { borderRadius, background };
};

const SkillCard = ({ skill, level }) => {
  const { borderRadius, background } = useMemo(generateRandomBlob, []);

  return (
    <div
      style={{
        background,
        borderRadius,
        padding: '30px 20px',
        minHeight: '100px',
        color: '#fff',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.2rem',
        fontWeight: 'bold',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div>{skill}</div>
      <div style={{ display: 'flex', marginTop: '10px', gap: '4px' }}>
        {Array.from({ length: level }).map((_, i) => (
          <div key={i} style={{ width: '30px', height: '30px' }}>
            <Lottie animationData={starfishAnimation} loop autoplay />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
