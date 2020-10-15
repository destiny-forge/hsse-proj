import React, { useState } from 'react';
import Select from 'react-select';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabic' },
  { value: 'cn', label: 'Chinese' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'pt', label: 'Portugese' },
];

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('en');
  const updateLanguage = (lang) => setLanguage(lang);
  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

const LanguageChooser = () => {
  return (
    <LanguageConsumer>
      {({ language, updateLanguage }) => (
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
