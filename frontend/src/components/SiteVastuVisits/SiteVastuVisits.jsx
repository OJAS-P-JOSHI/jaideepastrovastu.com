import React, { useState } from 'react';
import './SiteVastuVisits.css';
import { UilSearchPlus } from '@iconscout/react-unicons';
import { useSpring, animated } from 'react-spring';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Import images from siteVastu
import image1 from '../../siteVastu/1.jpg';
import image2 from '../../siteVastu/2.jpg';
import image3 from '../../siteVastu/3.jpg';
import image4 from '../../siteVastu/4.jpg';
import image5 from '../../siteVastu/5.jpg';
import image6 from '../../siteVastu/6.jpg';
import image7 from '../../siteVastu/7.jpg';
import image8 from '../../siteVastu/8.jpg';
import image9 from '../../siteVastu/9.jpg';
import image10 from '../../siteVastu/10.jpg';

const SiteVastuVisits = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="site-vastu-visits">
      <h1>Site Vastu Visits</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(index)} />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
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
      <img src={image} alt={`Site Vastu ${index + 1}`} />
      <div className="overlay">
        <UilSearchPlus size="40" className="icon" />
      </div>
    </animated.div>
  );
};

export default SiteVastuVisits;
