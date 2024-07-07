import React, { useState } from 'react';
import './PoojaGallery.css';
import { UilSearchPlus } from '@iconscout/react-unicons';
import { useSpring, animated } from 'react-spring';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Import images from img1
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
import image25 from '../../img1/25.jpg';
import image26 from '../../img1/26.jpg';
import image27 from '../../img1/27.jpg';
import image28 from '../../img1/28.jpg';
import image29 from '../../img1/29.jpg';
import image30 from '../../img1/30.jpg';
import image31 from '../../img1/31.jpg';
import image32 from '../../img1/32.jpg';
import image33 from '../../img1/33.jpg';
import image34 from '../../img1/34.jpg';
import image35 from '../../img1/35.jpg';
import image36 from '../../img1/36.jpg';
import image37 from '../../img1/37.jpg';
import image38 from '../../img1/38.jpg';
import image39 from '../../img1/39.jpg';
import image40 from '../../img1/40.jpg';
import image41 from '../../img1/41.jpg';
import image42 from '../../img1/42.jpg';
import image43 from '../../img1/43.jpg';
import image44 from '../../img1/44.jpg';
import image45 from '../../img1/45.jpg';
import image46 from '../../img1/46.jpg';
import image47 from '../../img1/47.jpg';
import image48 from '../../img1/48.jpg';
import image49 from '../../img1/49.jpg';
import image50 from '../../img1/50.jpg';
import image51 from '../../img1/51.jpg';
import image52 from '../../img1/52.jpg';
import image53 from '../../img1/53.jpg';
import image54 from '../../img1/54.jpg';
import image55 from '../../img1/55.jpg';
import image56 from '../../img1/56.jpg';
import image57 from '../../img1/57.jpg';
import image58 from '../../img1/58.jpg';
import image59 from '../../img1/59.jpg';
import image60 from '../../img1/60.jpg';
import image61 from '../../img1/61.jpg';
import image62 from '../../img1/62.jpg';
import image63 from '../../img1/63.jpg';
import image64 from '../../img1/64.jpg';
import image65 from '../../img1/65.jpg';
import image66 from '../../img1/66.jpg';
import image67 from '../../img1/67.jpg';
import image68 from '../../img1/68.jpg';
import image69 from '../../img1/69.jpg';
import image70 from '../../img1/70.jpg';
import image71 from '../../img1/71.jpg';
import image72 from '../../img1/72.jpg';
import image73 from '../../img1/73.jpg';
import image74 from '../../img1/74.jpg';
import image75 from '../../img1/75.jpg';

// Import images from publish img
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
import articleImage12 from '../../publish img/12.jpg';
import articleImage13 from '../../publish img/13.jpg';
import articleImage14 from '../../publish img/14.jpg';
import articleImage15 from '../../publish img/15.jpg';
import articleImage16 from '../../publish img/16.jpg';
import articleImage17 from '../../publish img/17.jpg';
import articleImage18 from '../../publish img/18.jpg';
import articleImage19 from '../../publish img/19.jpg';
import articleImage20 from '../../publish img/20.jpg';
import articleImage21 from '../../publish img/21.jpg';
import articleImage22 from '../../publish img/22.jpg';
import articleImage23 from '../../publish img/23.jpg';
import articleImage24 from '../../publish img/24.jpg';

// Import images from imggem
import gemImage1 from '../../imggem/1.jpg';
import gemImage2 from '../../imggem/2.jpg';
import gemImage3 from '../../imggem/3.jpg';
import gemImage4 from '../../imggem/4.jpg';
import gemImage5 from '../../imggem/5.jpg';
import gemImage6 from '../../imggem/6.jpg';
import gemImage7 from '../../imggem/7.jpg';
import gemImage8 from '../../imggem/8.jpg';
import gemImage9 from '../../imggem/9.jpg';
import gemImage10 from '../../imggem/10.jpg';
import gemImage11 from '../../imggem/11.jpg';
import gemImage12 from '../../imggem/12.jpg';
import gemImage13 from '../../imggem/13.jpg';
import gemImage14 from '../../imggem/14.jpg';
import gemImage15 from '../../imggem/15.jpg';
import gemImage16 from '../../imggem/16.jpg';
import gemImage17 from '../../imggem/17.jpg';
import gemImage18 from '../../imggem/18.jpg';
import gemImage19 from '../../imggem/19.jpg';
import gemImage20 from '../../imggem/20.jpg';
import gemImage21 from '../../imggem/21.jpg';
import gemImage22 from '../../imggem/22.jpg';
import gemImage23 from '../../imggem/23.jpg';
import gemImage24 from '../../imggem/24.jpg';
import gemImage25 from '../../imggem/25.jpg';
import gemImage26 from '../../imggem/26.jpg';
import gemImage27 from '../../imggem/27.jpg';
import gemImage28 from '../../imggem/28.jpg';
import gemImage29 from '../../imggem/29.jpg';
import gemImage30 from '../../imggem/30.jpg';

// Import images from friendimg
import friendImage1 from '../../friendimg/1.jpg';
import friendImage2 from '../../friendimg/2.jpg';
import friendImage3 from '../../friendimg/3.jpg';
import friendImage4 from '../../friendimg/4.jpg';
import friendImage5 from '../../friendimg/5.jpg';
import friendImage6 from '../../friendimg/6.jpg';
import friendImage7 from '../../friendimg/7.jpg';
import friendImage8 from '../../friendimg/8.jpg';
import friendImage9 from '../../friendimg/9.jpg';
import friendImage10 from '../../friendimg/10.jpg';
import friendImage11 from '../../friendimg/11.jpg';
import friendImage12 from '../../friendimg/12.jpg';


const PoojaGallery = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
    image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,
    image41, image42, image43, image44, image45, image46, image47, image48, image49, image50,
    image51, image52, image53, image54, image55, image56, image57, image58, image59, image60,
    image61, image62, image63, image64, image65, image66, image67, image68, image69, image70,
    image71, image72, image73, image74, image75
  ];

  const articleImages = [
    articleImage24, articleImage23, articleImage22, articleImage21, articleImage20,
    articleImage19, articleImage18, articleImage17, articleImage16, articleImage15,
    articleImage14, articleImage13, articleImage12, articleImage11, articleImage10,
    articleImage9, articleImage8, articleImage7, articleImage6, articleImage5,
    articleImage4, articleImage3, articleImage2, articleImage1
  ];

  const gemImages = [
    gemImage1, gemImage2, gemImage3, gemImage4, gemImage5, gemImage6, gemImage7, gemImage8,
    gemImage9, gemImage10, gemImage11, gemImage12, gemImage13, gemImage14, gemImage15,
    gemImage16, gemImage17, gemImage18, gemImage19, gemImage20, gemImage21, gemImage22,
    gemImage23, gemImage24, gemImage25, gemImage26, gemImage27, gemImage28, gemImage29,
    gemImage30
  ];

  const friendImages = [
    friendImage1, friendImage2, friendImage3, friendImage4, friendImage5, friendImage6,
    friendImage7, friendImage8, friendImage9, friendImage10, friendImage11, friendImage12
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryType, setGalleryType] = useState('pooja'); // Track gallery type

  const handleImageClick = (index, type) => {
    setPhotoIndex(index);
    setGalleryType(type);
    setIsOpen(true);
  };

  const displayedImages = galleryType === 'pooja' ? images : galleryType === 'article' ? articleImages : galleryType === 'gem' ? gemImages : friendImages;

  return (
    <div className="pooja-gallery">
      <h1>Pooja Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(index, 'pooja')} />
        ))}
      </div>

      <h1>Quality Gemstones</h1>
      <div className="gallery">
        {gemImages.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(index, 'gem')} />
        ))}
      </div>

      <h1>My Articles in Newspapers</h1>
      <div className="gallery articles-gallery">
        {articleImages.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(index, 'article')} />
        ))}
      </div>

      <h1>Friends and Well Known People</h1>
      <div className="gallery">
        {friendImages.map((image, index) => (
          <GalleryItem key={index} image={image} index={index} onClick={() => handleImageClick(index, 'friend')} />
        ))}
      </div>

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