import React, { useState } from 'react';
import './Legal.css';
import LanguageSwitcher from './LanguageSwitcher';

const RefundPolicy = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Refund Policy",
      sections: [
        {
          title: "1. Overview",
          content: "This Refund Policy outlines the terms and conditions for refunds of our vastu consultation services."
        },
        {
          title: "2. Cancellation and Refund Terms",
          content: "Our refund policy is as follows:",
          list: [
            "Cancellations made 48 hours or more before the scheduled appointment: Full refund",
            "Cancellations made 24-48 hours before the scheduled appointment: 50% refund",
            "Cancellations made less than 24 hours before the scheduled appointment: No refund"
          ]
        },
        {
          title: "3. Refund Process",
          content: "The refund process is as follows:",
          list: [
            "Submit a refund request through our contact form or email",
            "Include your booking reference number and reason for cancellation",
            "Refunds will be processed within 7-10 business days",
            "Refunds will be issued to the original payment method used"
          ]
        },
        {
          title: "4. Non-Refundable Services",
          content: "The following services are non-refundable:",
          list: [
            "Completed vastu consultations",
            "Digital products and materials",
            "Special event bookings"
          ]
        },
        {
          title: "5. Force Majeure",
          content: "In case of circumstances beyond our control (natural disasters, government actions, etc.), we reserve the right to reschedule appointments or offer alternative solutions."
        },
        {
          title: "6. Contact Information",
          content: "For refund requests or questions about our refund policy, please contact us at:",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
        }
      ]
    },
    hi: {
      title: "धनवापसी नीति",
      sections: [
        {
          title: "1. अवलोकन",
          content: "यह धनवापसी नीति हमारी वास्तु परामर्श सेवाओं के लिए धनवापसी की शर्तों और नियमों को रेखांकित करती है।"
        },
        {
          title: "2. रद्दीकरण और धनवापसी की शर्तें",
          content: "हमारी धनवापसी नीति इस प्रकार है:",
          list: [
            "निर्धारित नियुक्ति से 48 घंटे या उससे पहले रद्दीकरण: पूर्ण धनवापसी",
            "निर्धारित नियुक्ति से 24-48 घंटे पहले रद्दीकरण: 50% धनवापसी",
            "निर्धारित नियुक्ति से 24 घंटे से कम समय पहले रद्दीकरण: कोई धनवापसी नहीं"
          ]
        },
        {
          title: "3. धनवापसी प्रक्रिया",
          content: "धनवापसी प्रक्रिया इस प्रकार है:",
          list: [
            "हमारे संपर्क फॉर्म या ईमेल के माध्यम से धनवापसी अनुरोध जमा करें",
            "अपना बुकिंग संदर्भ संख्या और रद्दीकरण का कारण शामिल करें",
            "धनवापसी 7-10 व्यावसायिक दिनों के भीतर संसाधित की जाएगी",
            "धनवापसी मूल भुगतान विधि में जारी की जाएगी"
          ]
        },
        {
          title: "4. गैर-धनवापसी योग्य सेवाएं",
          content: "निम्नलिखित सेवाएं गैर-धनवापसी योग्य हैं:",
          list: [
            "पूर्ण वास्तु परामर्श",
            "डिजिटल उत्पाद और सामग्री",
            "विशेष कार्यक्रम बुकिंग"
          ]
        },
        {
          title: "5. फोर्स मेजर",
          content: "हमारे नियंत्रण से बाहर की परिस्थितियों (प्राकृतिक आपदाएं, सरकारी कार्रवाइयां, आदि) के मामले में, हम नियुक्तियों को पुनर्निर्धारित करने या वैकल्पिक समाधान प्रदान करने का अधिकार सुरक्षित रखते हैं।"
        },
        {
          title: "6. संपर्क जानकारी",
          content: "धनवापसी अनुरोधों या हमारी धनवापसी नीति के बारे में प्रश्नों के लिए, कृपया हमसे संपर्क करें:",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
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
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
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

export default RefundPolicy; 