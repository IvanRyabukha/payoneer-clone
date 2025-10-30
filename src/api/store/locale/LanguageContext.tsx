import React, {createContext, useState, useContext } from 'react';
import { Language, flags, countries } from './data/language';

{/*TODO: Rename context to locale*/}
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
  const context = useContext(LanguageContext);
  if(!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};