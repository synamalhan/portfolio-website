// src/components/work/WorkExperienceSection.jsx
import React from 'react';
import WorkExperienceList from './WorkExperienceList';

const WorkExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        background: 'linear-gradient(180deg, #002933 0%, #001a1f 100%)',
        height: '200%',
        padding: '0px 20px',
        display: 'flex',
        justifyContent: 'top',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#a0d8ef',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          color: '#92daf7',
          fontFamily: "'Montserrat', sans-serif",
          textShadow: '2px 2px 6px rgba(0, 0, 0, 1)', // ← ADD THIS

        }}
      >
        Work Experience
      </h2>
      <WorkExperienceList />
    </section>
  );
};

export default WorkExperienceSection;
