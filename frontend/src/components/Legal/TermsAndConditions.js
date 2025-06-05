import React, { useState } from 'react';
import './Legal.css';
import LanguageSwitcher from './LanguageSwitcher';

const TermsAndConditions = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Terms and Conditions",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
        },
        {
          title: "2. Use License",
          content: "Permission is granted to temporarily access the materials (information or software) on our website for personal, non-commercial transitory viewing only."
        },
        {
          title: "3. Services and Payments",
          content: "Our vastu consultation services are subject to the following terms:",
          list: [
            "All payments are processed securely through Razorpay",
            "Prices are subject to change without notice",
            "We reserve the right to refuse service to anyone",
            "Appointments are subject to availability"
          ]
        },
        {
          title: "4. User Responsibilities",
          content: "You agree to:",
          list: [
            "Provide accurate and complete information",
            "Maintain the security of your account",
            "Not use our services for any illegal purposes",
            "Not interfere with the proper working of the website"
          ]
        },
        {
          title: "5. Intellectual Property",
          content: "All content on this website, including text, graphics, logos, and images, is the property of our company and is protected by copyright laws."
        },
        {
          title: "6. Limitation of Liability",
          content: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
        },
        {
          title: "7. Changes to Terms",
          content: "We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the bottom of this page."
        },
        {
          title: "8. Governing Law",
          content: "These terms shall be governed by and construed in accordance with the laws of India."
        },
        {
          title: "9. Contact Information",
          content: "For any questions about these Terms and Conditions, please contact us at:",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
        }
      ]
    },
    hi: {
      title: "नियम और शर्तें",
      sections: [
        {
          title: "1. नियमों की स्वीकृति",
          content: "इस वेबसाइट का उपयोग करके, आप इस समझौते के नियमों और प्रावधानों से बंधे होने के लिए सहमत होते हैं।"
        },
        {
          title: "2. उपयोग लाइसेंस",
          content: "व्यक्तिगत, गैर-वाणिज्यिक अस्थायी देखने के लिए हमारी वेबसाइट पर सामग्री (जानकारी या सॉफ्टवेयर) तक पहुंचने की अनुमति दी जाती है।"
        },
        {
          title: "3. सेवाएं और भुगतान",
          content: "हमारी वास्तु परामर्श सेवाएं निम्नलिखित नियमों के अधीन हैं:",
          list: [
            "सभी भुगतान Razorpay के माध्यम से सुरक्षित रूप से संसाधित किए जाते हैं",
            "मूल्य बिना किसी सूचना के बदल सकते हैं",
            "हम किसी को भी सेवा देने से इनकार करने का अधिकार सुरक्षित रखते हैं",
            "नियुक्तियां उपलब्धता के अधीन हैं"
          ]
        },
        {
          title: "4. उपयोगकर्ता जिम्मेदारियां",
          content: "आप सहमत हैं:",
          list: [
            "सटीक और पूर्ण जानकारी प्रदान करने के लिए",
            "अपने खाते की सुरक्षा बनाए रखने के लिए",
            "किसी भी अवैध उद्देश्यों के लिए हमारी सेवाओं का उपयोग न करने के लिए",
            "वेबसाइट के उचित कामकाज में हस्तक्षेप न करने के लिए"
          ]
        },
        {
          title: "5. बौद्धिक संपदा",
          content: "इस वेबसाइट पर सभी सामग्री, जिसमें पाठ, ग्राफिक्स, लोगो और छवियां शामिल हैं, हमारी कंपनी की संपत्ति है और कॉपीराइट कानूनों द्वारा संरक्षित है।"
        },
        {
          title: "6. देयता की सीमा",
          content: "हमारी सेवाओं के उपयोग से होने वाले किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक नुकसान के लिए हम जिम्मेदार नहीं होंगे।"
        },
        {
          title: "7. नियमों में परिवर्तन",
          content: "हम किसी भी समय इन नियमों को संशोधित करने का अधिकार सुरक्षित रखते हैं। हम इस पृष्ठ के नीचे तिथि अपडेट करके उपयोगकर्ताओं को किसी भी परिवर्तन के बारे में सूचित करेंगे।"
        },
        {
          title: "8. शासी कानून",
          content: "ये नियम भारत के कानूनों के अनुसार शासित और व्याख्या किए जाएंगे।"
        },
        {
          title: "9. संपर्क जानकारी",
          content: "इन नियमों और शर्तों के बारे में किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करें:",
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

export default TermsAndConditions; 