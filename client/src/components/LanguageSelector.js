import React, { useState } from 'react';
import Select from 'react-select';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const LANGUAGES = [
  { value: 'cn', label: '中文' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'pt', label: 'Português' },
  //{ value: 'ar', label: 'Arabic' },
];

const LanguageProvider = (props) => {
  let ts = getTranslations('en');
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(ts);
  const updateLanguage = (lang) => {
    setLanguage(lang);
    ts = getTranslations('en');
    setTranslations(ts);
  };
  const getTranslations = async (lang) => {
    return await import(`../i18n/hse/${lang}.js`);
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, updateLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

const LanguageChooser = () => {
  return (
    <LanguageConsumer>
      {({ language, translations, updateLanguage }) => (
        <Select
          value={LANGUAGES.filter((opt) => opt.value === language)}
          onChange={(opt) => updateLanguage(opt.value)}
          options={LANGUAGES}
          isSearchable
        />
      )}
    </LanguageConsumer>
  );
};

export { LanguageProvider, LanguageConsumer, LanguageChooser };
