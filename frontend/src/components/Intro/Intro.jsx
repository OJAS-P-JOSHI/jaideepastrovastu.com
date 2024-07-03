import React from "react";
import "./Intro.css";
import Astrology from "../../img/Astrology.png";
import { motion } from "framer-motion";
import { UilYoutube, UilWhatsapp, UilPhone, UilInstagram, UilFacebookF, UilStar, UilBalanceScale } from "@iconscout/react-unicons";

const Intro = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Jai Mahakal</span>
          <span>Jaideep Sharma here, your astrologer & cosmic guide. Explore Jyotish, astronomy & numerology at JaideepAstroVastu.com.</span>
          <div className="i-details">
            <span><UilStar size="20" color="#4e4e4e" /> Jyotish uses nakshatras and rashis to understand your life path</span>
            <span><UilBalanceScale size="20" color="#4e4e4e" /> Jyotish performs shantis to balance your doshas and overcome planetary afflictions</span>
          </div>
        </div>
        <a href="/contact-now">
          <button className="button i-button">Appointment</button>
        </a>
        <div className="i-icons-container">
          <div className="i-icons">
            <a href="https://www.youtube.com/@jyotishacharyjaideepsharma1621" target="_blank" rel="noopener noreferrer">
              <UilYoutube size="40" color="#FCA61F" />
              <span>YouTube</span>
            </a>
            <a href="https://wa.me/919826190941" target="_blank" rel="noopener noreferrer">
              <UilWhatsapp size="40" color="#FCA61F" />
              <span>WhatsApp</span>
            </a>
            <a href="tel:+919826190941">
              <UilPhone size="40" color="#FCA61F" />
              <span>Phone</span>
            </a>
            <a href="https://www.instagram.com/jaideep_astro_vastu/" target="_blank" rel="noopener noreferrer">
              <UilInstagram size="40" color="#FCA61F" />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/jaideep_astro_vastu/" target="_blank" rel="noopener noreferrer">
              <UilFacebookF size="40" color="#FCA61F" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="i-right">
        <motion.img
          whileInView={{ left: "20%" }}
          transition={transition}
          src={Astrology}
          alt="Astrology"/>
      </div>
    </div>
  );
};

export default Intro;
