import React, { useEffect, useState, useRef } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const videos = [
    "https://www.youtube.com/embed/aUOWOhT5JrE?si=iJbdiQ7lwWLhFhou",
    "https://www.youtube.com/embed/-x0Seh0fzwM?si=xw2-qtCcwkP6xsCV",
    "https://www.youtube.com/embed/4ApSaC4arN8?si=GJRoeZjo-alyfiMq",
    "https://www.youtube.com/embed/NmByKa0OyNQ?si=AQU1mIFhRJHn7y3j",
    "https://www.youtube.com/embed/E3PypfnX5Ks?si=2zPHaFv2aIdnHVI0",
    "https://www.youtube.com/embed/PkPXLmnKyKI?si=H0ipM7O1TBqe4QIa"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const intervalId = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalId.current = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 5000);
    };

    startInterval();

    return () => clearInterval(intervalId.current);
  }, [videos.length]);

  const handleVideoClick = (index) => {
    window.open(videos[index].replace("embed/", "watch?v="), "_blank");
  };

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container" id="portfolio">
        <div className="intro-container">
          <div className="intro-left-container">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/-x0Seh0fzwM?si=SAIh5RVx59VoLV5n&modestbranding=1"
              title="Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="intro-right-container">
            <h1 className="title">Explore your life path and potential for success through the ancient wisdom of Astrology, Jyotish, and Numerology.!</h1>
            <p className="description">
              For 20 years, we've empowered individuals through Astrology, Jyotish, and Numerology. Explore your potential with our daily guidance, from birth charts to numerology readings. Join our growing community!
            </p>
            <h2 className="subtitle">20+ Years Of Legacy With Astrology, Jyotish, Numerology And Vastu Guidence</h2>
          </div>
        </div>

        <h2 className="slider-title">Featured Videos</h2>
        <div className="single-video-display">
          <div className="video-item" onClick={() => handleVideoClick(currentVideoIndex)}>
            <iframe 
              ref={(el) => (videoRefs.current[currentVideoIndex] = el)}
              src={videos[currentVideoIndex]}
              title={`YouTube video player ${currentVideoIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
