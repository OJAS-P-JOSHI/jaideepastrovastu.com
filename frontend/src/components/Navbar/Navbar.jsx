import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToHome = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const navigateToBlogs = () => {
    navigate("/blogs");
    setMenuOpen(false);
  };

  const navigateToPoojaGallery = () => {
    navigate("/pooja-gallery");
    setMenuOpen(false);
  };

  const navigateToServices = () => {
    navigate("/service");
    setMenuOpen(false);
  };

  const navigateToContact = () => {
    navigate("/contact-now");
    setMenuOpen(false);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Astro Jaideep Sharma</div>
      </div>
      <div className="n-right">
        <div className={`n-list ${menuOpen ? "open" : ""}`}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a href="/" onClick={(e) => { e.preventDefault(); navigateToHome(); }}>
                Home
              </a>
            </li>
            <li>
              <a href="/service" onClick={(e) => { e.preventDefault(); navigateToServices(); }}>
                Services
              </a>
            </li>
            <li>
              <a href="/blogs" onClick={(e) => { e.preventDefault(); navigateToBlogs(); }}>
                Blogs
              </a>
            </li>
            <li>
              <a href="/pooja-gallery" onClick={(e) => { e.preventDefault(); navigateToPoojaGallery(); }}>
                Pooja Gallery
              </a>
            </li>
            <li>
              <a href="/contact-now" onClick={(e) => { e.preventDefault(); navigateToContact(); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
          <span className={`line ${menuOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
