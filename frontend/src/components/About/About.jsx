import React from 'react';
import './About.css';
import ProfileImage from '../../img/Profile.jpg'; // Use your own image path

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={ProfileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="about-right">
          <h2>About Astrologer</h2>
          <p>
            From Ujjain, Madhya Pradesh, I'm a Jyotish astrologer and numerologist with over 20 years of experience. I've had the privilege of guiding over 100 happy clients and have visited more than 15 sites to offer Vastu guidance. My expertise extends to performing various pujas, shantis, and anushthans.
          </p>
          <p>
            I travel to various places to give proper Vastu guidance to my clients and help them achieve their goals.
          </p>
          <p className="highlight">
            20+ Years Of Legacy With Astrology, Jyotish, Numerology And Vastu Guidence
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
