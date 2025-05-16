// src/components/Navbar.jsx
import React, { useState } from 'react';

const sections = [
  { id: 'hero', label: 'Welcome' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'sunken-ship', label: 'Sunken Ship' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Toggle menu open state
  const toggleMenu = () => setOpen(!open);

  // Close menu on clicking a link
  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav style={styles.navbar}>
        <button onClick={toggleMenu} aria-label="Toggle Menu" style={styles.hamburger}>
          <div style={{ ...styles.bar, transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ ...styles.bar, opacity: open ? 0 : 1 }} />
          <div style={{ ...styles.bar, transform: open ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }} />
        </button>
      </nav>

      <div
        style={{
          ...styles.menu,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <ul style={styles.menuList}>
          {sections.map(({ id, label }) => (
            <li key={id} style={styles.menuItem}>
              <a href={`#${id}`} onClick={handleLinkClick} style={styles.menuLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  hamburger: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    padding: 0,
    width: 30,
    height: 30,
  },
  bar: {
    width: 30,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
    transition: 'all 0.3s ease',
  },
  menu: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    height: '100vh',
    backgroundColor: 'rgba(0, 8, 20, 0.95)', // dark navy with some opacity
    paddingTop: '60px',
    transition: 'transform 0.3s ease',
    zIndex: 999,
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    marginBottom: 24,
  },
  menuLink: {
    color: '#00ccff',
    fontSize: '1.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    paddingLeft: 24,
    display: 'block',
  },
};

export default Navbar;
