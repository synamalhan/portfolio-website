import React from 'react';
import BackgroundGradient from '../components/common/BackgroundGradient';
import Navbar from '../components/global/Navbar';
import HeroSection from '../components/hero/HeroSection';
import AboutMe from '../components/about/AboutMe';
import WorkExperienceSection from '../components/experience/WorkExperienceSection';
import ProjectSection from '../components/projects/ProjectSection';
import SkillSection from '../components/skills/SkillSection';
import ContactSection from '../components/contacts/ContactSection';
import SunkenShipSection from '../components/hobbies/SunkenShipSection';

const sections = [
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BackgroundGradient>
        <HeroSection />
        <AboutMe />
        <WorkExperienceSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <SunkenShipSection />
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
