// src/components/WorkExperienceList.jsx
import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import asu from '../../assets/logo.png'
const experiences = [
  {
    title: 'Cloud Front End Developer',
    company: 'Built responsive UI components with React.',
    duration: '',
    details: (
      <>
        <p>Worked on React, Redux, and Styled Components to build complex UI features.</p>
        <p>Collaborated with designers and backend engineers for seamless integration.</p>
        <ul>
          <li>Implemented reusable components</li>
          <li>Improved app performance by 30%</li>
          <li>Optimized CSS and animations</li>
        </ul>
      </>
    ),
    logo: asu,
  },
  {
    title: 'Frontend Developer at Company X',
    summary: 'Built responsive UI components with React.',
    details: (
      <>
        <p>Worked on React, Redux, and Styled Components to build complex UI features.</p>
        <p>Collaborated with designers and backend engineers for seamless integration.</p>
        <ul>
          <li>Implemented reusable components</li>
          <li>Improved app performance by 30%</li>
          <li>Optimized CSS and animations</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Intern at Marine Tech Inc.',
    summary: 'Developed interactive marine biology visualizations.',
    details: (
      <>
        <p>Created Lottie animations and data visualizations related to marine life.</p>
        <p>Contributed to UI/UX improvements and frontend testing.</p>
      </>
    ),
  },
  {
    title: 'Frontend Developer at Company X',
    summary: 'Built responsive UI components with React.',
    details: (
      <>
        <p>Worked on React, Redux, and Styled Components to build complex UI features.</p>
        <p>Collaborated with designers and backend engineers for seamless integration.</p>
        <ul>
          <li>Implemented reusable components</li>
          <li>Improved app performance by 30%</li>
          <li>Optimized CSS and animations</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Intern at Marine Tech Inc.',
    summary: 'Developed interactive marine biology visualizations.',
    details: (
      <>
        <p>Created Lottie animations and data visualizations related to marine life.</p>
        <p>Contributed to UI/UX improvements and frontend testing.</p>
      </>
    ),
  },
  // Add more as needed
];

const WorkExperienceList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {experiences.map((exp, i) => (
        <WorkExperienceCard
          key={i}
          title={exp.title}
          summary={exp.summary}
          details={exp.details}
        />
      ))}
    </div>
  );
};

export default WorkExperienceList;
