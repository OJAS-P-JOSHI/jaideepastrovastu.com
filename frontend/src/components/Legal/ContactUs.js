import React, { useState } from 'react';
import './Legal.css';
import LanguageSwitcher from './LanguageSwitcher';

const ContactUs = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Contact Us",
      sections: [
        {
          title: "Get in Touch",
          content: "For any queries, support, or feedback regarding our vastu consultation services, please contact us using the details below.",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
        },
        {
          title: "Business Hours",
          content: "Monday to Saturday: 10:00 AM – 7:00 PM\nSunday: Closed"
        }
      ]
    },
    hi: {
      title: "संपर्क करें",
      sections: [
        {
          title: "संपर्क में रहें",
          content: "हमारी वास्तु परामर्श सेवाओं से संबंधित किसी भी प्रश्न, सहायता या प्रतिक्रिया के लिए, कृपया नीचे दिए गए विवरण का उपयोग करके हमसे संपर्क करें।",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
        },
        {
          title: "व्यावसायिक समय",
          content: "सोमवार से शनिवार: सुबह 10:00 – शाम 7:00\nरविवार: बंद"
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
            <p>
              {section.content.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            {section.contact && (
              <>
                <p>Email: {section.contact.email}</p>
                <p>Phone: {section.contact.phone}</p>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
