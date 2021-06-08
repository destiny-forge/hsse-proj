import React from 'react';
import { SiteConsumer } from './SiteContext';
import { LanguageConsumer } from './LanguageContext';
import { PageConsumer } from './PageContext';

const Context = (BaseComponent) => (props) =>
  (
    <SiteConsumer>
      {({ site }) => (
        <LanguageConsumer>
          {({ t, language }) => (
            <PageConsumer>
              {({ sPage }) => (
                <BaseComponent
                  {...props}
                  setPage={sPage}
                  site={site}
                  t={t}
                  language={language}
                />
              )}
            </PageConsumer>
          )}
        </LanguageConsumer>
      )}
    </SiteConsumer>
  );

export default Context;
