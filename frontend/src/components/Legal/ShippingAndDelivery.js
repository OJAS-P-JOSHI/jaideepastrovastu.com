import React, { useState } from 'react';
import './Legal.css';
import LanguageSwitcher from './LanguageSwitcher';

const ShippingAndDelivery = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Shipping and Delivery",
      sections: [
        {
          title: "1. Service Delivery",
          content: "All vastu consultation services are delivered online or via scheduled appointments. No physical products are shipped."
        },
        {
          title: "2. Appointment Scheduling",
          content: "After successful payment, you will receive a confirmation email or call to schedule your consultation."
        },
        {
          title: "3. Delivery Timeline",
          content: "Consultations are typically scheduled within 2-5 business days after payment, subject to availability."
        },
        {
          title: "4. Contact for Delivery Issues",
          content: "If you have not received your consultation details within the expected timeframe, please contact us."
        }
      ]
    },
    hi: {
      title: "शिपिंग और डिलीवरी",
      sections: [
        {
          title: "1. सेवा डिलीवरी",
          content: "सभी वास्तु परामर्श सेवाएं ऑनलाइन या निर्धारित नियुक्तियों के माध्यम से प्रदान की जाती हैं। कोई भौतिक उत्पाद नहीं भेजा जाता।"
        },
        {
          title: "2. नियुक्ति अनुसूची",
          content: "सफल भुगतान के बाद, आपको अपनी परामर्श के लिए पुष्टि ईमेल या कॉल प्राप्त होगा।"
        },
        {
          title: "3. डिलीवरी समयसीमा",
          content: "भुगतान के बाद आमतौर पर 2-5 कार्यदिवसों के भीतर परामर्श निर्धारित की जाती है, उपलब्धता के अनुसार।"
        },
        {
          title: "4. डिलीवरी समस्याओं के लिए संपर्क करें",
          content: "यदि आपको अपेक्षित समय में परामर्श विवरण प्राप्त नहीं हुआ है, तो कृपया हमसे संपर्क करें।"
        }
      ]
    }
  };

  return (
    <div className="legal-container">
      <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
      <h1>{content[language].title}</h1>
      <div className="legal-content">
        {content[language].sections.map((section, index) => (
          <section key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ShippingAndDelivery;
