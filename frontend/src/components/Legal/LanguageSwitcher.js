import React from 'react';
import './Legal.css';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        English
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'hi' ? 'active' : ''}`}
        onClick={() => onLanguageChange('hi')}
      >
        हिंदी
      </button>
    </div>
  );
};

export default LanguageSwitcher; 