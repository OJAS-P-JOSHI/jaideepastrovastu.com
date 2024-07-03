import React from "react";
import "./Footer.css";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";
import UilWhatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilFacebookF from "@iconscout/react-unicons/icons/uil-facebook-f";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <div className="f-sections">
          <div className="f-section">
            <h3>Office</h3>
            <p>205, 206, Indraprasth Tower, MG Road, Indore, MP</p>
            <p>6, Zone One, MP Nagar, Bhopal, (MP)</p>
            <p>B-907, 9th Floor, Buland Heights, Crossing Republic, Ghaziabad (UP)</p>
            <h3>Home Address</h3>
            <p>Gokul Dham Nagar, Near Aditya Nagar, AB Road, Shajapur (MP)</p>
            <h3>Phone Number</h3>
            <p>+91 98261 90941</p>
            <p>+91 9826200041</p>
          </div>
          <div className="f-section">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/pooja-gallery">Pooja Gallery</a></li>
              <li><a href="/contact-now">Contact</a></li>
            </ul>
          </div>
          <div className="f-section f-icons">
            <h3>Follow Us</h3>
            <a href="https://www.youtube.com/@jyotishacharyjaideepsharma1621" target="_blank" rel="noopener noreferrer">
              <UilYoutube size="3rem" color="#FCA61F" />
              <span>YouTube</span>
            </a>
            <a href="https://wa.me/919826190941" target="_blank" rel="noopener noreferrer">
              <UilWhatsapp size="3rem" color="#FCA61F" />
              <span>WhatsApp</span>
            </a>
            <a href="tel:+919826190941">
              <UilPhone size="3rem" color="#FCA61F" />
              <span>Phone</span>
            </a>
            <a href="https://www.instagram.com/jaideep_astro_vastu/" target="_blank" rel="noopener noreferrer">
              <UilInstagram size="3rem" color="#FCA61F" />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/jaideep_astro_vastu/" target="_blank" rel="noopener noreferrer">
              <UilFacebookF size="3rem" color="#FCA61F" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.589138105802!2d75.78745304415011!3d23.22163927862518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396377c5a9abfa1d%3A0x37f4fffda14e91bc!2sMangalnath%20Mandir!5e0!3m2!1sen!2sin!4v1718168444979!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ujjain Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
