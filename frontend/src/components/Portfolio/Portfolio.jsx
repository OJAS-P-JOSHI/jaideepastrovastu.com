import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/swiper-bundle.css';

const Portfolio = () => {
  const videos = [
    "https://www.youtube.com/embed/aUOWOhT5JrE?si=iJbdiQ7lwWLhFhou",
    "https://www.youtube.com/embed/-x0Seh0fzwM?si=xw2-qtCcwkP6xsCV",
    "https://www.youtube.com/embed/4ApSaC4arN8?si=GJRoeZjo-alyfiMq",
    "https://www.youtube.com/embed/NmByKa0OyNQ?si=AQU1mIFhRJHn7y3j",
    "https://www.youtube.com/embed/E3PypfnX5Ks?si=2zPHaFv2aIdnHVI0",
    "https://www.youtube.com/embed/PkPXLmnKyKI?si=H0ipM7O1TBqe4QIa"
  ];

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
            <h1 className="title">Astrology: Your Guide To Life's Journey & Path To Success!</h1>
            <p className="description">
              We believe astrology is pure science, and we aim to create such a social impact of the organization on you that science and astrology through its resources of the astrology chart, kundali, etc.
              As we dive into our 50th year, we strive to build a community where we are a part of your daily routine right from our astrology by date of birth, name, time, palm reading, and face reading, to all other online astrology, numerology, palmistry services.
            </p>
            <h2 className="subtitle">50+ Years Of Legacy With Horoscope, Kundali, And Predictions</h2>
          </div>
        </div>

        <h2 className="slider-title">Featured Videos</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          grabCursor={true}
          className="portfolio-slider"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="video-item">
                <iframe 
                  src={video}
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="click-here-label">Click Here To Watch Video</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
