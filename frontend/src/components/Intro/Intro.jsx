/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Intro.css";
import Astrology from "../../img/Astrology.png";
import { motion } from "framer-motion";
import { UilYoutube, UilWhatsapp, UilPhone, UilInstagram, UilFacebookF, UilStar, UilBalanceScale } from "@iconscout/react-unicons";

const Intro = () => {
  const transition = { duration: 1, type: "spring" };
  const names = [
    "|| Jai Mahakal ||",
    "|| Jai Shree Ram ||",
    "|| Jai Jagannath ||",
    "|| Jai Sri Vishweshwara ||",
    "|| Jai Somnath ||",
    "|| Jai Mallikarjuna ||",
    "|| Jai Mahakaleshwar ||",
    "|| Jai Omkareshwar ||",
    "|| Jai Baidyanath ||",
    "|| Jai Bhimashankar ||",
    "|| Jai Ramanathaswamy ||",
    "|| Jai Nageshwar ||",
    "|| Jai Kashi Vishwanath ||",
    "|| Jai Trimbakeshwar ||",
    "|| Jai Kedarnath ||",
    "|| Jai Grishneshwar ||",
    "|| Jai Parshuram ||"
  ];
  const [currentText, setCurrentText] = useState(names[0]);
  const [fadeProp, setFadeProp] = useState('fade-in');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFadeProp('fade-out');
      setTimeout(() => {
        index = (index + 1) % names.length;
        setCurrentText(names[index]);
        setFadeProp('fade-in');
      }, 1000); // The fade-out duration

    }, 3000); // Change name every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span className={fadeProp}>{currentText}</span>
          <span>Jaideep Sharma here, explore Jyotish, Astronomy & Numerology at JaideepAstroVastu.com.</span>
          <div className="i-details">
            <span><UilStar size="20" color="#FFD700" /> I combine traditional Jyotish practices with modern insights to provide practical guidance.</span>
            <span><UilBalanceScale size="20" color="#FFD700" />I help clients achieve harmony and well-being through personalized Vastu recommendations.</span>
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
