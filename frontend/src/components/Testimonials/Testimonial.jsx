import React, { useState, useEffect } from "react";
import "./Testimonial.css";

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const clients = [
    {
      img: profilePic1,
      name: "Client 1",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      name: "Client 2",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      name: "Client 3",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      name: "Client 4",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <div className="testimonial-container">
        <button className="carousel-button prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="testimonial-wrapper">
          {clients.slice(currentIndex, currentIndex + (windowWidth > 768 ? 3 : 1)).map((client, index) => (
            <div className="testimonial" key={index}>
              <img src={client.img} alt={client.name} />
              <h3>{client.name}</h3>
              <span>{client.review}</span>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
