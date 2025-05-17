import React, { useState } from 'react';
import submarine from '../../assets/submarine.jpeg';
import linkedinIcon from '../../assets/linkedin.webp';
import xIcon from '../../assets/x.png';
import githubIcon from '../../assets/github.png'
const openEmailClient = () => {
  window.location.href = 'mailto:synamalhan22@gmail.com';
};

const socialMedia = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/synamalhan',
    icon: linkedinIcon,
    color: '#0077B5',
  },
  {
    name: 'Github',
    url: 'https://github.com/synamalhan',
    icon: githubIcon,
    color: '#000000',
  },
  // {
  //   name: 'X',
  //   url: 'https://x.com/yourprofile',
  //   icon: xIcon,
  //   color: '#000000',
  // },
];

const blobStyle = (color) => ({
  background: color,
  borderRadius: `${Math.floor(Math.random() * 50) + 30}% ${Math.floor(Math.random() * 50) + 30}% ${
    Math.floor(Math.random() * 50) + 30
  }% ${Math.floor(Math.random() * 50) + 30}%`,
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  boxShadow: '0 0 15px rgba(0,0,0,0.4)',
  transition: 'transform 0.3s ease-in-out',
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;

    window.location.href = `mailto:synamalhan22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #00141a 0%, #000608 100%)',
        padding: '60px 20px',
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
          marginBottom: '20px',
          color: '#92daf7',
          textShadow: '2px 2px 6px rgba(128, 128, 128, 0.8)',
        }}
      >
        Contact Me
      </h2>

      <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
        Whether you're interested in working together, have a question, or just want to say hi, feel free to drop me a message or connect through my social profiles!
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '100%',
          maxWidth: '500px',
          marginBottom: '40px',
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, resize: 'none' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#92daf7',
            color: '#00141a',
            padding: '10px 20px',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(146, 218, 247, 0.5)',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Send Message
        </button>
      </form>

      {/* Social Media Blobs */}
      <div
        style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div style={blobStyle(media.color)}>
              <img
                src={media.icon}
                alt={media.name}
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #a0d8ef',
  backgroundColor: '#00242a',
  color: '#a0d8ef',
  fontSize: '1rem',
  fontFamily: "'Montserrat', sans-serif",
};

export default ContactSection;
