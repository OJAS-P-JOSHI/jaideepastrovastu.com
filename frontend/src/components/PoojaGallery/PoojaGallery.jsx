// src/components/PoojaGallery/PoojaGallery.jsx
import React, { useState } from 'react';
import './PoojaGallery.css';
import { UilSearchPlus } from '@iconscout/react-unicons';
import { useSpring, animated } from 'react-spring';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from '../../img1/1.jpg';
import image2 from '../../img1/2.jpg';
import image3 from '../../img1/3.jpg';
import image4 from '../../img1/4.jpg';
import image5 from '../../img1/5.jpg';
import image6 from '../../img1/6.jpg';
import image7 from '../../img1/7.jpg';
import image8 from '../../img1/8.jpg';
import image9 from '../../img1/9.jpg';
import image10 from '../../img1/10.jpg';
import image11 from '../../img1/11.jpg';
import image12 from '../../img1/12.jpg';
import image13 from '../../img1/13.jpg';
import image14 from '../../img1/14.jpg';
import image15 from '../../img1/15.jpg';
import image16 from '../../img1/16.jpg';
import image17 from '../../img1/17.jpg';
import image18 from '../../img1/18.jpg';
import image19 from '../../img1/19.jpg';
import image20 from '../../img1/20.jpg';
import image21 from '../../img1/21.jpg';
import image22 from '../../img1/22.jpg';
import image23 from '../../img1/23.jpg';
import image24 from '../../img1/24.jpg';

import articleImage1 from '../../publish img/1.jpg';
import articleImage2 from '../../publish img/2.jpg';
import articleImage3 from '../../publish img/3.jpg';
import articleImage4 from '../../publish img/4.jpg';
import articleImage5 from '../../publish img/5.jpg';
import articleImage6 from '../../publish img/6.jpg';
import articleImage7 from '../../publish img/7.jpg';
import articleImage8 from '../../publish img/8.jpg';
import articleImage9 from '../../publish img/9.jpg';
import articleImage10 from '../../publish img/10.jpg';
import articleImage11 from '../../publish img/11.jpg';

const PoojaGallery = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21, image22, image23, image24
  ];

  const articleImages = [
    articleImage1, articleImage2, articleImage3, articleImage4, articleImage5,
    articleImage6, articleImage7, articleImage8, articleImage9, articleImage10,
    articleImage11
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryType, setGalleryType] = useState('pooja'); // Add state to track gallery type

  const handleImageClick = (index, type) => {
    setPhotoIndex(index);
    setGalleryType(type);
    setIsOpen(true);
  };

  const displayedImages = galleryType === 'pooja' ? images : articleImages;

  return (
    <div className="pooja-gallery">
      <h1>Pooja Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(index, 'pooja')} />
        ))}
      </div>

      <h1>My Articles in Newspapers</h1>
      <Swiper spaceBetween={30} slidesPerView={3} navigation pagination={{ clickable: true }} className="articles-swiper">
        {articleImages.map((image, index) => (
          <SwiperSlide key={index}>
            <GalleryItem image={image} index={index} onClick={() => handleImageClick(index, 'article')} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Lightbox
          mainSrc={displayedImages[photoIndex]}
          nextSrc={displayedImages[(photoIndex + 1) % displayedImages.length]}
          prevSrc={displayedImages[(photoIndex + displayedImages.length - 1) % displayedImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + displayedImages.length - 1) % displayedImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % displayedImages.length)}
        />
      )}
    </div>
  );
};

const GalleryItem = ({ image, index, onClick }) => {
  const props = useSpring({
    from: { transform: 'scale(1)', opacity: 0 },
    to: { transform: 'scale(1.1)', opacity: 1 },
    config: { duration: 300 },
    reset: true
  });

  return (
    <animated.div style={props} className="gallery-item" onClick={onClick}>
      <img src={image} alt={`Item ${index + 1}`} />
      <div className="overlay">
        <UilSearchPlus size="40" className="icon" />
      </div>
    </animated.div>
  );
};

export default PoojaGallery;
