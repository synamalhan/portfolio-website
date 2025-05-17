import React from 'react';
import SkillCard from './SkillBadge';

const skills = [
    // Languages
    { skill: 'Python', level: 5 },
    { skill: 'Java', level: 4 },
    { skill: 'C++', level: 4 },
    { skill: 'SQL', level: 4 },           
    { skill: 'Swift', level: 2 },
    { skill: 'HTML', level: 4 },
    { skill: 'CSS', level: 4 },
    { skill: 'JavaScript', level: 4 },
    { skill: 'TypeScript', level: 3 },
    { skill: 'ReactJS', level: 4 },       
    { skill: 'AngularJS', level: 3 },     
    { skill: 'R', level: 2 },
    { skill: 'C', level: 3 },
    // Technical
    { skill: 'TensorFlow', level: 4 },
    { skill: 'Kafka', level: 3 },
    { skill: 'PyTorch', level: 4 },
    { skill: 'Keras', level: 4 },
    { skill: 'Sklearn', level: 4 },
    { skill: 'Docker', level: 4 },
    { skill: 'AWS', level: 4 },
    { skill: 'Streamlit', level: 3 },
    { skill: 'OpenAI', level: 3 },
    { skill: 'Pandas', level: 5 },
    { skill: 'Numpy', level: 5 },
    { skill: 'Matplotlib', level: 4 },
    { skill: 'Plotly', level: 4 },
    { skill: 'Generative AI', level: 3 },
    { skill: 'Computer Vision', level: 4 },
    { skill: 'Node.js', level: 4 },
    { skill: 'NextJS', level: 3 },
    { skill: 'MongoDB', level: 4 },
    { skill: 'Kubernetes', level: 3 },
    { skill: 'Cloud Technologies (AWS)', level: 4 },
    { skill: 'Test Automation', level: 3 },
    { skill: 'QA Methodologies', level: 3 },
  
    
  ];
  
  const getRandomTransform = () => {
    const rotate = Math.floor(Math.random() * 10 - 5);
    const translateX = Math.floor(Math.random() * 10 - 5);
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
  
        <style>{`
          @media (max-width: 600px) {
            #skills {
              padding: 20px 10px !important;
            }
            #skills h2 {
              font-size: 2rem !important;
              margin-bottom: 20px !important;
            }
            #skills > div {
              gap: 16px !important;
            }
          }
        `}</style>
      </section>
    );
  };
  
  export default SkillSection;