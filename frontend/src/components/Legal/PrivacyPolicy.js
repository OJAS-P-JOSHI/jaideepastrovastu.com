import React, { useState } from 'react';
import './Legal.css';
import LanguageSwitcher from './LanguageSwitcher';

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect information that you provide directly to us, including:",
          list: [
            "Name and contact information",
            "Payment information (processed securely through Razorpay)",
            "Communication preferences",
            "Information about your vastu consultations and services"
          ]
        },
        {
          title: "2. How We Use Your Information",
          content: "We use the information we collect to:",
          list: [
            "Provide and maintain our services",
            "Process your payments and transactions",
            "Send you important updates about our services",
            "Respond to your inquiries and provide customer support",
            "Improve our services and user experience"
          ]
        },
        {
          title: "3. Information Sharing",
          content: "We do not sell or rent your personal information to third parties. We may share your information with:",
          list: [
            "Payment processors (Razorpay) to process your payments",
            "Service providers who assist in our operations",
            "Legal authorities when required by law"
          ]
        },
        {
          title: "4. Data Security",
          content: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure."
        },
        {
          title: "5. Your Rights",
          content: "You have the right to:",
          list: [
            "Access your personal information",
            "Correct inaccurate information",
            "Request deletion of your information",
            "Opt-out of marketing communications"
          ]
        },
        {
          title: "6. Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at:",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
        },
        {
          title: "7. Updates to This Policy",
          content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
          lastUpdated: "Last updated:"
        }
      ]
    },
    hi: {
      title: "गोपनीयता नीति",
      sections: [
        {
          title: "1. जानकारी जो हम एकत्र करते हैं",
          content: "हम आपसे सीधे प्राप्त की गई जानकारी एकत्र करते हैं, जिसमें शामिल है:",
          list: [
            "नाम और संपर्क जानकारी",
            "भुगतान जानकारी (Razorpay के माध्यम से सुरक्षित रूप से संसाधित)",
            "संचार प्राथमिकताएं",
            "आपकी वास्तु परामर्श और सेवाओं के बारे में जानकारी"
          ]
        },
        {
          title: "2. हम आपकी जानकारी का उपयोग कैसे करते हैं",
          content: "हम एकत्र की गई जानकारी का उपयोग करते हैं:",
          list: [
            "हमारी सेवाएं प्रदान करने और बनाए रखने के लिए",
            "आपके भुगतान और लेनदेन को संसाधित करने के लिए",
            "हमारी सेवाओं के बारे में महत्वपूर्ण अपडेट भेजने के लिए",
            "आपके प्रश्नों का उत्तर देने और ग्राहक सहायता प्रदान करने के लिए",
            "हमारी सेवाओं और उपयोगकर्ता अनुभव में सुधार के लिए"
          ]
        },
        {
          title: "3. जानकारी साझा करना",
          content: "हम आपकी व्यक्तिगत जानकारी को तृतीय पक्षों को बेचते या किराए पर नहीं देते। हम आपकी जानकारी साझा कर सकते हैं:",
          list: [
            "भुगतान प्रोसेसर (Razorpay) आपके भुगतान को संसाधित करने के लिए",
            "सेवा प्रदाता जो हमारे संचालन में सहायता करते हैं",
            "कानूनी अधिकारियों के साथ जब कानून द्वारा आवश्यक हो"
          ]
        },
        {
          title: "4. डेटा सुरक्षा",
          content: "हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं। हालांकि, इंटरनेट पर प्रसारण का कोई भी तरीका 100% सुरक्षित नहीं है।"
        },
        {
          title: "5. आपके अधिकार",
          content: "आपको अधिकार है:",
          list: [
            "अपनी व्यक्तिगत जानकारी तक पहुंचने का",
            "गलत जानकारी को सही करने का",
            "अपनी जानकारी को हटाने का अनुरोध करने का",
            "मार्केटिंग संचार से बाहर निकलने का"
          ]
        },
        {
          title: "6. हमसे संपर्क करें",
          content: "यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:",
          contact: {
            email: "jaideepastrovastu@gmail.com",
            phone: "+91 9826190941"
          }
        },
        {
          title: "7. इस नीति में अपडेट",
          content: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी परिवर्तन के बारे में सूचित करेंगे।",
          lastUpdated: "अंतिम अपडेट:"
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
            {section.lastUpdated && (
              <p>{section.lastUpdated} {new Date().toLocaleDateString()}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy; 