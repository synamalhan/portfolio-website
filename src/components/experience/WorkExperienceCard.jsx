import React, { useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import bubbleAnimation from '../../assets/bubbles.json';
// import logo from '../../assets/logo.png';

// Fixed hues and their corresponding CSS filter for Lottie tinting
const huesWithFilters = [
  { color: 'hsl(210, 70%, 60%)', filter: 'hue-rotate(0deg) ' },   // Blue (base)
  { color: 'hsl(230, 70%, 60%)', filter: 'hue-rotate(20deg) ' },  // Slightly lighter blue
  { color: 'hsl(250, 70%, 60%)', filter: 'hue-rotate(40deg) ' }, // Indigo-ish
  { color: 'hsl(270, 80%, 65%)', filter: 'hue-rotate(60deg)' },  // Violet
  { color: 'hsl(280, 80%, 55%)', filter: 'hue-rotate(80deg) ' },  // Purple
];


const WorkExperienceCard = ({ title, company, duration, summary, details, logo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Pick random hue + filter once per component instance
  const { color: blobFillColor, filter: lottieFilter } = useMemo(() => {
    const idx = Math.floor(Math.random() * huesWithFilters.length);
    return huesWithFilters[idx];
  }, []);

  const blobSvg = (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <g transform="translate(300,300)">
        <path
          d="M120,-132.6C159.2,-109.4,190.9,-71.4,191.8,-30.3C192.7,10.7,162.7,53.8,128.3,81.7C93.9,109.6,55,122.3,17.3,111.9C-20.4,101.5,-40.7,68,-67.8,45.4C-94.9,22.8,-128.9,11.4,-144.6,-16.2C-160.3,-43.8,-157.6,-88.4,-131.7,-110.4C-105.8,-132.3,-56.8,-131.6,-21.7,-116.2C13.5,-100.8,26.9,-70.9,120,-132.6Z"
          fill={blobFillColor}
          opacity="0.6"
        />
      </g>
    </svg>
  );

  return (
    <>
      <div
        style={{ ...styles.card, boxShadow: 'none' }}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') setModalOpen(true);
        }}
      >
        <Lottie
          animationData={bubbleAnimation}
          loop
          style={{ ...styles.lottie, filter: lottieFilter }}
        />

        <div style={styles.textOverlay}>
          <div style={styles.titleText}>{title}</div>
          <div style={styles.companyText}>{company}</div>
          <div style={styles.durationText}>{duration}</div>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
      </div>

      {modalOpen && (
        <div style={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div style={styles.blobBackground}>{blobSvg}</div>
            <h2 id="modal-title" style={styles.modalTitle}>
              {title}
            </h2>
            <div style={styles.modalDetails}>{details}</div>
            <button
              onClick={() => setModalOpen(false)}
              style={styles.closeButton}
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  card: {
    position: 'relative',
    width: 250,
    height: 250,
    margin: 20,
    cursor: 'pointer',
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  textOverlay: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    color: '#fff',
    padding: '10px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  titleText: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#FFFFFF', // Gold/yellow for title
  },
  companyText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#00FFFF', // Cyan for company
  },
  durationText: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#ADFF2F', // Green-yellow for duration
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 8,
    borderRadius: 8,
    objectFit: 'contain',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px',
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#003344',
    borderRadius: 30,
    width: '90%',
    maxWidth: 600,
    padding: '40px 30px 50px',
    boxShadow: '0 0 40px #00aaff',
    color: '#a0d8ef',
    overflow: 'hidden',
  },
  blobBackground: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: 400,
    height: 400,
    opacity: 0.2,
    pointerEvents: 'none',
    zIndex: 0,
  },
  modalTitle: {
    position: 'relative',
    zIndex: 1,
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
  },
  modalDetails: {
    position: 'relative',
    zIndex: 1,
    fontSize: '1.2rem',
    lineHeight: 1.6,
    whiteSpace: 'pre-wrap',
  },
  closeButton: {
    position: 'relative',
    zIndex: 1,
    marginTop: 30,
    padding: '10px 20px',
    borderRadius: 10,
    border: 'none',
    backgroundColor: '#006699',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default WorkExperienceCard;
