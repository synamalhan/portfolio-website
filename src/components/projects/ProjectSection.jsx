import React from 'react';
import ProjectList from './ProjectList';

const ProjectSection = () => {
  return (
    <section
      id="projects"
      style={{
        background: 'linear-gradient(180deg, #001a1f 0%, #00171c 100%)',
        height: '200%',
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
          color: '#92daf7',
          fontFamily: "'Montserrat', sans-serif",
          textShadow: '2px 2px 6px rgba(128, 128, 128, 0.8)',
        }}
      >
        Projects
      </h2>
      <ProjectList />
    </section>
  );
};

export default ProjectSection;
