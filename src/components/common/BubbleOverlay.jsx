import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import bubblesAnimation from '../../assets/bubblesbg.json';

const BubbleOverlay = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const baseStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 5,
    overflow: 'hidden',
    filter: `hue-rotate(${200 + scrollProgress * 90}deg)`, // rotates hue from 200deg to 290deg on scroll
  };

  const layers = [
    { scale: 1.5, baseOpacity: 0.3, offsetY: '-40vh', offsetX: '-20vw', speedFactor: 0.8 },
    { scale: 1.3, baseOpacity: 0.28, offsetY: '-20vh', offsetX: '10vw', speedFactor: 0.85 },
    { scale: 1.1, baseOpacity: 0.25, offsetY: '0vh', offsetX: '-15vw', speedFactor: 0.9 },
    { scale: 1.0, baseOpacity: 0.2, offsetY: '20vh', offsetX: '5vw', speedFactor: 0.95 },
    { scale: 0.9, baseOpacity: 0.15, offsetY: '40vh', offsetX: '-10vw', speedFactor: 1.0 },
    { scale: 0.8, baseOpacity: 0.1, offsetY: '60vh', offsetX: '15vw', speedFactor: 1.05 },
    { scale: 0.7, baseOpacity: 0.08, offsetY: '80vh', offsetX: '-5vw', speedFactor: 1.1 },
  ];

  return (
    <div style={baseStyle}>
      {layers.map(({ scale, baseOpacity, offsetX, offsetY, speedFactor }, index) => {
        // Modify opacity and vertical position dynamically by scrollProgress and speedFactor
        const dynamicOpacity = baseOpacity * (1 - scrollProgress);
        // Move bubbles up/down for parallax effect: smaller speedFactor means slower movement
        const dynamicOffsetY = `calc(${offsetY} + ${scrollProgress * 100 * speedFactor}px)`;

        return (
          <Lottie
            key={index}
            animationData={bubblesAnimation}
            loop
            autoplay
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '150vw',
              height: '150vh',
              transform: `translate(${offsetX}, ${dynamicOffsetY}) scale(${scale})`,
              opacity: dynamicOpacity,
              willChange: 'transform, opacity',
            }}
          />
        );
      })}
    </div>
  );
};

export default BubbleOverlay;
