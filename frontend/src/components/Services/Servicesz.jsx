import React from "react";
import "./Servicesz.css";
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
  { emoji: kundali, heading: "Personalized Kundali", detail: "10+ years Career, Business, Money, Health, Love, Marriage Prediction Report." },
  { emoji: swastik1, heading: "Mega Astrology Webinar", detail: "1 Day Live Astrology Webinar on Zoom." },
  { emoji: vidiocall, heading: "Baby Name Report", detail: "Get personalized name suggestions as per numerological explanation.", color: "rgba(252, 166, 31, 0.45)" },
  { emoji: kalash, heading: "Live Courses", detail: "Enroll in our Live Online comprehensive Astrology, Numerology & Vastu Shastra courses." },
  // New Cards
  { emoji: defaultImage, heading: "Couple Matching Kundli", detail: "Couple Kundli matching/ Milan Report based on male & female partner’s birth date & time." },
  { emoji: defaultImage, heading: "Fortune Report", detail: "Numerology help you align with nature, & attract more success, money, & positivity into your life." },
  { emoji: defaultImage, heading: "Buy Gemstones", detail: "Explore our diverse collection of astrological guidance gemstones." },
];

const Servicesz = () => {
  const navigate = useNavigate();

  const handleMoreServices = () => {
    navigate('/services');
  };

  return (
    <div className="servicesz" id="servicesz">
      <h1 className="headingz">Our Services</h1>
      <div className="cardsz">
        {cardDetails.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
          >
            <div className="cardz">
              <div className="card-emojez" style={{ backgroundImage: `url(${card.emoji || defaultImage})` }}></div>
              <span className="card-headingz">{card.heading}</span>
              <span className="card-detailz">{card.detail}</span>
              <button className="c-buttonz">Order Now</button>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="more-buttonz" onClick={handleMoreServices}>More Services</button>
      <div className="blur s-blur2z" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Servicesz;
