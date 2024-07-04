import React from "react";
import "./Servicesz.css";
import defaultImage from "../../img/kundali.png"; // Import the default background image
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const transition = {
  duration: 1,
  type: "spring",
};

const cardDetails = [
  { emoji: defaultImage, heading: "Astrology", detail: "Get personalized astrological consultations and predictions." },
  { emoji: defaultImage, heading: "Numerology", detail: "Discover the significance of numbers in your life through numerology." },
  { emoji: defaultImage, heading: "Vaastu Shastra", detail: "Apply Vaastu principles for a harmonious living and working space." },
  { emoji: defaultImage, heading: "Dosh Shanti Pujan", detail: "Perform pujas to nullify various doshas and bring positivity." },
  { emoji: defaultImage, heading: "Gems Stone", detail: "Choose the right gemstones to enhance your life and mitigate doshas." },
  { emoji: defaultImage, heading: "Vaastu Remedies", detail: "Get remedies to rectify Vastu doshas and improve your living space." },
  { emoji: defaultImage, heading: "Underground Water Testing", detail: "Test and locate underground water sources for effective utilization." },
  { emoji: defaultImage, heading: "Vaastu Visit", detail: "Schedule a visit for personalized Vastu consultation and remedies." },
  { emoji: defaultImage, heading: "Vaastu Anuroop Bhavan Naksha Nirmaan", detail: "Design building plans as per Vastu principles to ensure harmony and prosperity." },
  { emoji: defaultImage, heading: "Janm Patrika Nirmaan", detail: "Create your personalized birth chart based on your birth details." },
  { emoji: defaultImage, heading: "Kaal Sarp Shanti Puja", detail: "Perform rituals to mitigate the effects of Kaal Sarp Dosh and bring peace." },
  { emoji: defaultImage, heading: "Chandal Yog Shanti", detail: "Rituals to calm the malefic effects of Chandal Yog and bring prosperity." },
  { emoji: defaultImage, heading: "Angarak Yog Shanti", detail: "Perform Angarak Yog Shanti to reduce obstacles and enhance positivity." },
  { emoji: defaultImage, heading: "Grahan Yog Shanti", detail: "Special pujas to nullify the effects of Grahan Yog for betterment." },
  { emoji: defaultImage, heading: "Nakshatra Dosh Shanti", detail: "Puja to balance Nakshatra Dosh and bring harmony to life." },
  { emoji: defaultImage, heading: "Yog Dosh Shanti", detail: "Rituals to alleviate the negative impacts of various Yog Dosh." },
  { emoji: defaultImage, heading: "Karan Dosh Shanti", detail: "Special pujas to rectify Karan Dosh and enhance life quality." },
  { emoji: defaultImage, heading: "Mangal Shanti Puja", detail: "Rituals to mitigate the adverse effects of Mangal Dosh." },
];

const Servicesz = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact-now');
  };

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
              <button className="c-buttonz" onClick={handleOrderNow}>Order Now</button>
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



