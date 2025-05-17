import React, { useState, useEffect } from 'react';
import kelp1 from "../../assets/kelp1.png";
import kelp2 from "../../assets/kelp2.jpeg";
import reef from "../../assets/reef.png";

const images = [kelp1, kelp2, reef];

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function ReefImageOverlay() {
  const [count, setCount] = useState(5); // number of copies on each side
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const maxScroll = document.body.scrollHeight - height;
      const percent = Math.min(scrollY / maxScroll, 1);

      setScrollPercent(percent);

      // Let's say max 20 copies per side at bottom
      setCount(Math.floor(5 + percent * 15));
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // init

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Generate copies for left and right
  const leftImages = [];
  const rightImages = [];

  for (let i = 0; i < count; i++) {
    // Pick random image from array
    const imgLeft = images[randInt(0, images.length - 1)];
    const imgRight = images[randInt(0, images.length - 1)];

    // Calculate darkness filter: darker as i increases
    // We'll map i from 0..count-1 to brightness 1..0.4
    const brightness = 1 - (i / count) * 0.6; // from 1 to 0.4
    // Further darken by scrollPercent
    const finalBrightness = brightness * (1 - scrollPercent * 0.5);

    // Position from bottom, stacking with some spacing (e.g. 60px height per image)
    const bottomPos = i * 60;

    leftImages.push(
      <img
        key={`left-${i}`}
        src={imgLeft}
        alt="kelp left"
        style={{
          position: 'fixed',
          bottom: bottomPos,
          left: 0,
          width: 80,
          height: 'auto',
          filter: `brightness(${finalBrightness})`,
          userSelect: 'none',
          pointerEvents: 'none',
          transform: `translateX(-10px)`,
        }}
        draggable={false}
      />
    );

    rightImages.push(
      <img
        key={`right-${i}`}
        src={imgRight}
        alt="kelp right"
        style={{
          position: 'fixed',
          bottom: bottomPos,
          right: 0,
          width: 80,
          height: 'auto',
          filter: `brightness(${finalBrightness})`,
          userSelect: 'none',
          pointerEvents: 'none',
          transform: `translateX(10px) scaleX(-1)`, // flip horizontally for right side
        }}
        draggable={false}
      />
    );
  }

  return (
    <>
      {leftImages}
      {rightImages}
    </>
  );
}
