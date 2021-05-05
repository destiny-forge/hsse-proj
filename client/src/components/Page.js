import React from 'react';
import { SiteConsumer } from '../components/SiteContext';
import { LanguageConsumer } from '../components/LanguageContext';

const Page = (BaseComponent) => (props) => (
  <SiteConsumer>
    {({ site }) => (
      <LanguageConsumer>
        {({ t }) => <BaseComponent {...props} site={site} t={t} />}
      </LanguageConsumer>
    )}
  </SiteConsumer>
);

export default Page;
