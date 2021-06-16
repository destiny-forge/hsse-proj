import React from 'react';
import { SiteConsumer } from './SiteContext';
import { LanguageConsumer } from './LanguageContext';
import { PageConsumer } from './PageContext';
import { LayerConsumer } from './LayerContext';
import { UserConsumer } from './UserContext';

const Context = (BaseComponent) => (props) =>
  (
    <SiteConsumer>
      {({ site }) => (
        <LanguageConsumer>
          {({ t, language }) => (
            <UserConsumer>
              {({ user, setUser }) => (
                <PageConsumer>
                  {({ sPage }) => (
                    <LayerConsumer>
                      {({ toggleLayer }) => (
                        <BaseComponent
                          {...props}
                          t={t}
                          user={user}
                          setUser={setUser}
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
            </UserConsumer>
          )}
        </LanguageConsumer>
      )}
    </SiteConsumer>
  );

export default Context;
