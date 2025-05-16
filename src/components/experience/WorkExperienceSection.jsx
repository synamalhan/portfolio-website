// src/components/work/WorkExperienceSection.jsx
import React from 'react';
import WorkExperienceList from './WorkExperienceList';

const WorkExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        background: 'linear-gradient(180deg, #002933 0%, #001a1f 100%)',
        height: '100vh',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#a0d8ef',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          color: '#00e5ff',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Work Experience
      </h2>
      <WorkExperienceList />
    </section>
  );
};

export default WorkExperienceSection;
