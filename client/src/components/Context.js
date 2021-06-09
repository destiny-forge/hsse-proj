import React from 'react';
import { SiteConsumer } from './SiteContext';
import { LanguageConsumer } from './LanguageContext';
import { PageConsumer } from './PageContext';
import { LayerConsumer } from './LayerContext';

const Context = (BaseComponent) => (props) =>
  (
    <SiteConsumer>
      {({ site }) => (
        <LanguageConsumer>
          {({ t, language }) => (
            <PageConsumer>
              {({ sPage }) => (
                <LayerConsumer>
                  {({ toggleLayer }) => (
                    <BaseComponent
                      {...props}
                      t={t}
                      setPage={sPage}
                      site={site}
                      language={language}
                      toggleLayer={toggleLayer}
                    />
                  )}
                </LayerConsumer>
              )}
            </PageConsumer>
          )}
        </LanguageConsumer>
      )}
    </SiteConsumer>
  );

export default Context;
