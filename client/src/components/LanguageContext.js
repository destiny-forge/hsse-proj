import React, { useState, useEffect } from 'react';
import { get } from 'underscore';

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

const LanguageProvider = ({ site, children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  const getTranslations = (lang) => {
    let url = `/i18n/${site}/${lang}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((results) => {
        const flattened = flatten(results);
        console.log(flattened);
        setTranslations(flattened);
      });
  };

  const t = (key) => get(translations, key) || '';

  const flatten = (data) => {
    var result = {};
    function recurse(cur, prop) {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      } else if (Array.isArray(cur)) {
        for (var i = 0, l = cur.length; i < l; i++)
          recurse(cur[i], prop + '[' + i + ']');
        if (l == 0) result[prop] = [];
      } else {
        var isEmpty = true;
        for (var p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? prop + '.' + p : p);
        }
        if (isEmpty && prop) result[prop] = {};
      }
    }
    recurse(data, '');
    return result;
  };

  useEffect(() => {
    //@TODO check to see if they have a cookie before setting to 'en' by defaut
    getTranslations(language);
  }, []);

  const updateLanguage = (lang) => {
    setLanguage(lang);
    getTranslations(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageChooser = () => {
  return (
    <LanguageConsumer>
      {({ language, t, updateLanguage }) => (
        <div>
          <a class="desktop-menu-link menu-item-text" href="#">
            Select language
          </a>
          <ul className="languages-menu menu-list">
            {LANGUAGES.map((l) => {
              let is_active = l.value == language;
              return (
                <li className="menu-item">
                  <a
                    className="menu-item-text"
                    href="#"
                    onClick={() => updateLanguage(l.value)}
                  >
                    {l.label}
                  </a>
                  {is_active && <i className="checkmark" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </LanguageConsumer>
  );
};

export { LanguageProvider, LanguageConsumer, LanguageChooser };
