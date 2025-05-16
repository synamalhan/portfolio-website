import React from 'react';
import SkillCard from './SkillBadge';

const skills = [
  { skill: 'JavaScript', level: 4 },
  { skill: 'Python', level: 5 },
  { skill: 'React', level: 4 },
  { skill: 'Machine Learning', level: 5 },
  { skill: 'AWS', level: 3 },
  { skill: 'TypeScript', level: 3 },
  { skill: 'Tailwind CSS', level: 4 },
  { skill: 'SQL', level: 4 },
];

const getRandomTransform = () => {
  const rotate = Math.floor(Math.random() * 10 - 5); // -5deg to 5deg
  const translateX = Math.floor(Math.random() * 10 - 5); // px
  const translateY = Math.floor(Math.random() * 10 - 5);
  return `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
};

const SkillSection = () => {
  return (
    <section
      id="skills"
      style={{
        background: 'linear-gradient(180deg, #00171c 0%, #00141a 100%)',
        minHeight: '100vh',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#a0d8ef',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          color: '#92daf7',
          textShadow: '2px 2px 6px rgba(128, 128, 128, 0.8)',
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        {skills.map((item, index) => (
          <div
            key={index}
            style={{
              transform: getRandomTransform(),
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <SkillCard skill={item.skill} level={item.level} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
