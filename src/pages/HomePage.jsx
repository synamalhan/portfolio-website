import React from 'react';
import Lottie from 'lottie-react';

import Navbar from '../components/global/Navbar';
import HeroSection from '../components/hero/HeroSection';
import AboutMe from '../components/about/AboutMe';
import WorkExperienceSection from '../components/experience/WorkExperienceSection';
import ProjectSection from '../components/projects/ProjectSection';
import SkillSection from '../components/skills/SkillSection';
import ContactSection from '../components/contacts/ContactSection';
import SunkenShipSection from '../components/hobbies/SunkenShipSection';

import BubbleOverlay from '../components/common/BubbleOverlay';
import ReefOverlay from '../components/common/ReefOverlay';
const HomePage = () => {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <BubbleOverlay />
      {/* <ReefOverlay /> */}
      <Navbar />
      <HeroSection />
      <AboutMe />
      <WorkExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <SunkenShipSection />
    </div>
  );
};

export default HomePage;
