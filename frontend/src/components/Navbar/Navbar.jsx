import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
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
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("/"); }}>
                Home
              </a>
            </li>
            <li>
              <a href="/services" onClick={(e) => { e.preventDefault(); navigateTo("/services"); }}>
                Services
              </a>
            </li>
            <li>
              <a href="/blogs" onClick={(e) => { e.preventDefault(); navigateTo("/blogs"); }}>
                Blogs
              </a>
            </li>
            <li>
              <a href="/pooja-gallery" onClick={(e) => { e.preventDefault(); navigateTo("/pooja-gallery"); }}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact-now" onClick={(e) => { e.preventDefault(); navigateTo("/contact-now"); }}>
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); navigateTo("/privacy-policy"); }}>
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" onClick={(e) => { e.preventDefault(); navigateTo("/terms-and-conditions"); }}>
                Terms
              </a>
            </li>
            <li>
              <a href="/refund-policy" onClick={(e) => { e.preventDefault(); navigateTo("/refund-policy"); }}>
                Refund
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
