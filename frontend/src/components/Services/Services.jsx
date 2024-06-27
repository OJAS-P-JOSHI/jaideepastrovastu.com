import React from "react";
import "./Services.css";
import swastik1 from "../../img/swastik1.png";
import kundali from "../../img/kundali.png";
import vidiocall from "../../img/vidiocall.png";
import kalash from "../../img/kalash.png";
import defaultImage from "../../img/Astrology.png"; // Import the default background image
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const transition = {
  duration: 1,
  type: "spring",
};

const cardDetails = [
  { emoji: kundali, heading: "Kundali Match", detail: "This Kundali Matching service helps you to find the right partner based on your birth details." },
  { emoji: swastik1, heading: "Vastu Report", detail: "Detailed Vastu analysis and report for your home or office." },
  { emoji: vidiocall, heading: "Video Call Pooja", detail: "Participate in a live pooja via video call from anywhere.", color: "rgba(252, 166, 31, 0.45)" },
  { emoji: kalash, heading: "Muhurat Finder", detail: "Find the most auspicious times for important events." },
  // New Cards
  { emoji: defaultImage, heading: "Astrology Report", detail: "Get your personalized astrology report." },
  { emoji: defaultImage, heading: "Numerology", detail: "Discover the significance of numbers in your life." },
  { emoji: defaultImage, heading: "Tarot Reading", detail: "Get insights and guidance through tarot card reading." },
];

const Services = () => {
  const navigate = useNavigate();

  const handleMoreServices = () => {
    navigate('/services');
  };

  return (
    <div className="services" id="services">
      <h1 className="heading">Our Services</h1>
      <div className="cards">
        {cardDetails.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
          >
            <div className="card">
              <div className="card-emoji" style={{ backgroundImage: `url(${card.emoji || defaultImage})` }}></div>
              <span className="card-heading">{card.heading}</span>
              <span className="card-detail">{card.detail}</span>
              <button className="c-button">LEARN MORE</button>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="more-button" onClick={handleMoreServices}>More Services</button>
      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Services;
