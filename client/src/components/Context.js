import React from 'react';
import { SiteConsumer } from './SiteContext';
import { LanguageConsumer } from './LanguageContext';

const Context = (BaseComponent) => (props) => (
  <SiteConsumer>
    {({ site }) => (
      <LanguageConsumer>
        {({ t, language }) => (
          <BaseComponent {...props} site={site} t={t} language={language} />
        )}
      </LanguageConsumer>
    )}
  </SiteConsumer>
);

export default Context;
