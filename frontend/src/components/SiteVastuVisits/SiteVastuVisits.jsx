import React, { useState } from 'react';
import './SiteVastuVisits.css';
import { UilSearchPlus } from '@iconscout/react-unicons';
import { useSpring, animated } from 'react-spring';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import guru1 from '../../guruimg/1.jpg';
import guru2 from '../../guruimg/2.jpg';  
import guru3 from '../../guruimg/3.jpg';
import guru4 from '../../guruimg/4.jpg';
import guru5 from '../../guruimg/5.jpg';
import guru6 from '../../guruimg/6.jpg';

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
  const siteVastuImages = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  ];

  const myGurujiImages = [
    guru1, guru2, guru3, guru4, guru5, guru6
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (images, index) => {
    setPhotoIndex(index);
    setIsOpen(images === myGurujiImages ? 'myGuruji' : 'siteVastu');
  };

  return (
    <div>
      <div className="my-guruji">
        <h1>My Guruji</h1>
        <div className="gallery-grid">
          {myGurujiImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(myGurujiImages, index)} />
          ))}
        </div>
      </div>

      <div className="site-vastu-visits">
        <h1>Site Vastu Visits</h1>
        <div className="gallery-grid">
          {siteVastuImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(siteVastuImages, index)} />
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={isOpen === 'myGuruji' ? myGurujiImages[photoIndex] : siteVastuImages[photoIndex]}
          nextSrc={isOpen === 'myGuruji' ? myGurujiImages[(photoIndex + 1) % myGurujiImages.length] : siteVastuImages[(photoIndex + 1) % siteVastuImages.length]}
          prevSrc={isOpen === 'myGuruji' ? myGurujiImages[(photoIndex + myGurujiImages.length - 1) % myGurujiImages.length] : siteVastuImages[(photoIndex + siteVastuImages.length - 1) % siteVastuImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + (isOpen === 'myGuruji' ? myGurujiImages.length : siteVastuImages.length) - 1) % (isOpen === 'myGuruji' ? myGurujiImages.length : siteVastuImages.length))
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % (isOpen === 'myGuruji' ? myGurujiImages.length : siteVastuImages.length))
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
      <img src={image} alt={`Gallery ${index + 1}`} />
      <div className="overlay">
        <UilSearchPlus size="40" className="icon" />
      </div>
    </animated.div>
  );
};

export default SiteVastuVisits;
