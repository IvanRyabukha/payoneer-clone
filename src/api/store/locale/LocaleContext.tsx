import React, { createContext, useState, useContext } from 'react';
import { ILanguage, flags, languages, defaultLanguage } from './data/languages.data';

type LocaleContextType = {
  language: ILanguage;
  setLanguage: (lang: ILanguage) => void;
  languages: typeof languages;
  flags: typeof flags;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<ILanguage>(defaultLanguage);

  return (
    <LocaleContext.Provider value={{ language, setLanguage, languages, flags }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if(!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }

  return context;
};