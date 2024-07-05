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
import image27 from '../../img1/27.jpg'; // Importing new images
import image28 from '../../img1/28.jpg';
import image29 from '../../img1/29.jpg';
import image30 from '../../img1/30.jpg';
import image31 from '../../img1/31.jpg';
import image32 from '../../img1/32.jpg'; // New image
import image33 from '../../img1/33.jpg'; // New image

const services = [
  { name: "कालसर्प शांति पूजन", price: "21000", image: image1 },
  { name: "चांडाल योग शांति", price: "21000", image: image2 },
  { name: "अंगारक योग शांति", price: "21000", image: image3 },
  { name: "ग्रहण योग शान्ति", price: "21000", image: image4 },
  { name: "नक्षत्र दोष शांति", price: "21000", image: image5 },
  { name: "योग दोष शांति", price: "21000", image: image6 },
  { name: "करण दोष शांति", price: "21000", image: image7 },
  { name: "मंगल शांति पूजन", price: "21000", image: image8 },
  { name: "नवग्रह शांति पूजन", price: "21000", image: image9 },
  { name: "सभी प्रकार के दोष निवारण शांति जप सहित", price: "35000", image: image10 },
  { name: "कुंम्भ विवाह और अर्क विवाह  पूर्ण विधान", price: "21000", image: image11 },
  { name: "एक दिवसीय वास्तु पूजन", price: "31000", image: image12 },
  { name: "तीन दिवसीय वास्तु पूजन", price: "51000", image: image13 },
  { name: "नवचंडी महायज्ञ", price: "51000", image: image14 },
  { name: "महामृत्युंजय अनुष्ठान", price: "55000", image: image15 },
  { name: "बगुलामखी अनुष्ठान", price: "55000", image: image16 },
  { name: "ज्योतिष परामर्श", price: "1100", image: image17 },
  { name: "सभी प्रकार के मुहूर्त", price: "1100", image: image18 },
  { name: "जन्मपत्रिका विवेचना", price: "1100", image: image19 },
  { name: "गुण एवं कुंडली मिलान", price: "2100", image: image20 },
  { name: "जन्म पत्रिका निर्माण", price: "2500", image: image21 },
  { name: "भवन वास्तु निरीक्षण", price: "11000", image: image22 },
  { name: "भूमिगतजल परीक्षण", price: "11000", image: image23 },
  { name: "वास्तु अनुरूप भवन नक्शे निर्माण", price: "21000", image: image24 },
  { name: "सम्पुटित नवचंडी महायज्ञ", price: "125000", image: image25 },
  { name: "शतचंडी महायज्ञ", price: "150000", image: image26 },
  { name: "लघुरुद्र अनुष्ठान", price: "51000", image: image27 },
  { name: "अतिरुद्र अनुष्ठान", price: "125000", image: image28 },
  { name: "महारुद्र अनुष्ठान", price: "225000", image: image29 },
  { name: "प्राणप्रतिष्ठा महायज्ञ", price: "125000", image: image30 },
  { name: "मूर्तिप्राण प्रतिष्ठा महायज्ञ", price: "250000", image: image31 },
  { name: "पत्रिका एव राशि अनुसार रत्न धारण", price: "21000", image: image32 }, // New service
  { name: "बिना तोड़ फोड़ के वास्तुदोष का सुधार", price: "21000", image: image33 }, // New service
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
                  <p>Price: {service.price} रु</p>
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
