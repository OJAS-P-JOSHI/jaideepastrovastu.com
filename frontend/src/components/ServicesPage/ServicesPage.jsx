import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";
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

const services = [
  { name: "कालसर्प शांति पूजन", image: image1 },
  { name: "चांडाल योग शांति", image: image2 },
  { name: "अंगारक योग शांति", image: image3 },
  { name: "ग्रहण योग शान्ति", image: image4 },
  { name: "नक्षत्र दोष शांति", image: image5 },
  { name: "योग दोष शांति", image: image6 },
  { name: "करण दोष शांति", image: image7 },
  { name: "मंगल शांति पूजन", image: image8 },
  { name: "नवग्रह शांति पूजन", image: image9 },
  { name: "सभी दोष निवारण शांति जप सहित", image: image10 },
  { name: "कुंम्भ विवाह और अर्क विवाह पूर्ण विधान", image: image11 },
  { name: "पितृ दोष शांति विधान", image: image12 },
  { name: "नारायण नागबली विधान", image: image13 },
  { name: "एक दिवसीय वास्तु पूजन", image: image14 },
  { name: "तीन दिवसीय वास्तु पूजन", image: image15 },
  { name: "नवचंडी महायज्ञ", image: image16 },
  { name: "महामृत्युंजय अनुष्ठान", image: image17 },
  { name: "बगुलामखी अनुष्ठान", image: image18 },
  { name: "ज्योतिष परामर्श", image: image19 },
  { name: "सभी प्रकार के मुहूर्त", image: image20 },
  { name: "जन्मपत्रिका विवेचना", image: image21 },
  { name: "गुण एवं कुंडली मिलान", image: image22 },
  { name: "जन्म पत्रिका निर्माण", image: image23 },
  { name: "भवन वास्तु निरीक्षण", image: image24 },
  { name: "भूमिगतजल परीक्षण", image: image25 },
  { name: "वास्तु अनुरूप भवन नक्शे निर्माण", image: image26 },
  { name: "सम्पुटित नवचंडी महायज्ञ", image: image27 },
  { name: "शतचंडी महायज्ञ", image: image28 },
  { name: "लघुरुद्र अनुष्ठान", image: image29 },
  { name: "अतिरुद्र अनुष्ठान", image: image30 },
  { name: "महारुद्र अनुष्ठान", image: image31 },
  { name: "प्राणप्रतिष्ठा महायज्ञ", image: image32 },
  { name: "मूर्तिप्राण प्रतिष्ठा महायज्ञ", image: image33 },
  { name: "पत्रिका एव राशि अनुसार रत्न धारण", image: image34 },
  { name: "बिना तोड़ फोड़ के वास्तुदोष का सुधार", image: image35 },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleQuickContact = () => {
    navigate("/contact-now");
  };

  return (
    <div className="services-container-wrapper">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <div className="service-info">
                <div className="service-details">
                  <h2>{service.name}</h2>
                </div>
                <button className="quick-contact" onClick={handleQuickContact}>
                  Contact Now
                </button>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
