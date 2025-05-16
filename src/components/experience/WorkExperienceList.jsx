// src/components/WorkExperienceList.jsx
import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import jspl from '../../assets/jspl.png';
import asu from '../../assets/asu.png';
import pwc from '../../assets/pwc.png';
import ripik from '../../assets/ripik.svg';
import headstarter from '../../assets/headstarter.avif';
const experiences = [
  {
    title: 'Trainee',
    company: 'PwC',
    duration: 'June 2025 - July 2025',
    summary: 'Details to come...',
    details: (
      <>
        <p>Details to come...</p>
      </>
    ),
    logo: pwc,
  },
  {
    title: 'Cloud Front End Developer',
    company: 'Arizona State University AI Cloud Innovation Center',
    duration: 'Aug 2024 - Present',
    summary: 'Built cloud infrastructure with AWS and UI, improving user experience for public sector solutions.',
    details: (
      <>
        <ul>
          <li>Collaborated on AI/ML projects, supporting CIC operations and generating status reports for stakeholders.</li>
        </ul>
      </>
    ),
    logo: asu,
  },
  {
    title: 'Intern in Digitalization',
    company: 'Jindal Steel and Power Ltd',
    duration: 'May 2024 - July 2024',
    summary: 'Developed full-stack app with AngularJS, Spring Boot, and SQL, improving data retrieval speed by 15%.',
    details: (
      <>
        <ul>
          <li>Deployed the app on Tomcat and integrated cloud services to enhance system performance.</li>
        </ul>
      </>
    ),
    logo: jspl,
  },
  {
    title: 'Intern in Machine Learning and Data Analytics',
    company: 'Ripik.AI',
    duration: 'July 2024 – Aug 2024',
    summary: 'Engineered algorithms using YOLO and Ultralytics, improving accuracy by 80%.',
    details: (
      <>
        <ul>
          <li>Trained OCR models and integrated AI solutions into operations, increasing recognition accuracy by 25%.</li>
        </ul>
      </>
    ),
    logo: ripik,

  },
  {
    title: 'Software Engineering Fellow',
    company: 'Headstarter AI',
    duration: 'July 2024 – Sept 2024',
    summary: 'Built 5+ AI apps using NextJS, OpenAI, Pinecone, StripeAPI, achieving 98% accuracy.',
    details: (
      <>
        <ul>
          <li>Led 4+ engineering fellows in full-stack development, with coaching from Amazon, Bloomberg, and Capital One engineers.</li>
        </ul>
      </>
    ),
    logo: headstarter,


  },
];



const WorkExperienceList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {experiences.map((exp, i) => (
        <div
          key={i}
          style={{
            marginTop: i % 2 === 0 ? 0 : 280,  // Staggered layout like WorkExperienceList
            transition: 'margin-top 0.3s ease',
          }}
        >
          <WorkExperienceCard
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            summary={exp.summary}
            details={exp.details}
            logo={exp.logo || asu}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceList;
