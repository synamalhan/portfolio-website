import React, { useState } from 'react';
import Lottie from 'lottie-react';
import fishAnimation from '../../assets/fish.json';

const FloatingFishResume5 = () => {
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Syna_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={handleDownload}
      aria-label="Floating fish with downloadable resume"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') handleDownload(); }}
    >
      <div style={styles.lottieWrapper}>
        <Lottie 
          animationData={fishAnimation} 
          loop={true} 
          style={{
            ...styles.lottie,
            transform: open ? 'rotate(0deg)' : 'rotate(15deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        {open && (
          <div style={styles.resumeLink}>Download Resume</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '400px',      // smaller size
    margin: '20px',
    cursor: 'pointer',
    userSelect: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // transform: 'translateX(-50px)',  // lateral shift to the left
  },
  lottieWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  lottie: {
    width: '100%',
    height: '100%',
    transform: ' rotate(15deg)',        // flip horizontally
    filter: 'hue-rotate(200deg)',     // shift color hue (adjust value as desired)
    pointerEvents: 'none',
  },
  resumeLink: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#87CEEB',
    textDecoration: 'underline',
    fontWeight: 'bold',
    fontFamily: "'Montserrat', sans-serif",
    padding: '8px 16px',
    borderRadius: '8px',
    zIndex: 10,
    pointerEvents: 'none',
  },
};

export default FloatingFishResume5;
