import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('tr');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('language');
      if (savedLang === 'tr' || savedLang === 'en') {
        setLanguageState(savedLang);
      }
    } catch {
      // safe fallback
    }
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch {
      // safe fallback
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'tr' ? 'en' : 'tr';
    setLanguage(nextLang);
    return nextLang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isEn: language === 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
