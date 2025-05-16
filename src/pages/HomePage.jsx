import React from 'react';
import BackgroundGradient from '../components/common/BackgroundGradient';
import Navbar from '../components/global/Navbar';
import HeroSection from '../components/hero/HeroSection';
import AboutMe from '../components/about/AboutMe';
import WorkExperienceSection from '../components/experience/WorkExperienceSection';

const sections = [
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'contact', title: 'Contact (Submarine)' },
  { id: 'sunken-ship', title: 'Sunken Ship (Fun Facts)' },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BackgroundGradient>
        <HeroSection />
        <AboutMe />
        <WorkExperienceSection />
        {sections.map(({ id, title }) => (
          <section
            id={id}
            key={id}
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(0,0,0,0.7)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              color: '#e0f7fa',
            }}
          >
            {title}
          </section>
        ))}
      </BackgroundGradient>
    </>
  );
};

export default HomePage;
