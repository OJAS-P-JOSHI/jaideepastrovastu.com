import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const videos = [
    "https://www.youtube.com/embed/7EIz0pmk9bU?si=N2NIZ24jua6rQ3pb&modestbranding=1&controls=0&showinfo=0",
    "https://www.youtube.com/embed/F2wdFJQcWnU?si=H33hDB4_5KCotElZ&modestbranding=1&controls=0&showinfo=0",
    "https://www.youtube.com/embed/5dRS_W5j4NY?si=NhBeTvlleWRd7TiO&modestbranding=1&controls=0&showinfo=0",
    "https://www.youtube.com/embed/L4jOEYhkhyo?si=OdfM8TjZoTEl-zou&modestbranding=1&controls=0&showinfo=0"
  ];

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : ""}`} id="portfolio">
      {/* heading */}
      <span style={{color: darkMode ? 'var(--dark-text)' : ''}}>Recent Projects</span>
      <span style={{color: darkMode ? 'var(--dark-highlight)' : ''}}>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
        className="portfolio-slider"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <iframe 
                src={video}
                title={`YouTube video player ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="click-here-label">Click Here To Watch Video</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
