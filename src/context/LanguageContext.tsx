import React, {createContext, useState, useContext } from 'react';
import { Language, flags, countries } from '../data/language';

type LangugaeContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  countries: typeof countries;
  flags: typeof flags;
};

const LanguageContext = createContext<LangugaeContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(countries[0]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, countries, flags }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if(!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return ctx;
};