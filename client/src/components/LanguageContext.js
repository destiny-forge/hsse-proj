import React, { useState, useEffect } from 'react';
import { get } from 'underscore';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const LANGUAGES = {
  hse: [
    { value: 'cn', label: '中文' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'pt', label: 'Português' },
    //{ value: 'ar', label: 'Arabic' },
  ],
  sse: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
  ],
  cvd: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
  ],
};

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
    <LanguageContext.Provider value={{ language, t, site, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageChooser = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <LanguageConsumer>
      {({ language, t, site, updateLanguage }) => (
        <div>
          <a
            class="desktop-menu-link menu-item-text"
            onMouseOver={toggle}
            onMouseOut={toggle}
            href="#"
          >
            {t('main_menu.select_language')}
            <ul
              className="languages-menu menu-list"
              style={{
                display: visible ? 'block' : 'none',
                visibility: visible ? 'visible' : 'hidden',
              }}
            >
              {LANGUAGES[site].map((l) => {
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
          </a>
        </div>
      )}
    </LanguageConsumer>
  );
};

export { LanguageProvider, LanguageConsumer, LanguageChooser };
