import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  Login,
  Signup,
  SignupSuccess,
  ConfirmEmail,
  ForgotPassword,
  PasswordReset,
} from './views/Accounts';

import Home from './views/Home';
import About from './views/About';
import Terms from './views/Terms';
import Latest from './views/Latest';
import { SiteProvider, SiteConsumer } from './components/SiteContext';
import { LanguageProvider } from './components/LanguageContext';
import { GuidedSearchProvider } from './components/GuidedSearchContext';
import { LanguageConsumer } from '../../admin/src/components/molecules/Language';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <SiteProvider>
      <SiteConsumer>
        {({ site }) => (
          <LanguageProvider site={site}>
            <LanguageConsumer>
              {({ t, language }) => (
                <GuidedSearchProvider>
                  <div id="app" className="App">
                    <Helmet>
                      <title>{t('site_name')}</title>
                    </Helmet>
                    <Router>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/terms" component={Terms} />
                        <Route exact path="/signup" component={Signup} />
                        <Route
                          exact
                          path="/signup-success"
                          component={SignupSuccess}
                        />
                        <Route
                          exact
                          path="/signup-confirm"
                          component={ConfirmEmail}
                        />
                        <Route exact path="/login" component={Login} />
                        <Route
                          exact
                          path="/forgot-password"
                          component={ForgotPassword}
                        />
                        <Route
                          exact
                          path="/latest-content"
                          component={Latest}
                        />
                      </Switch>
                    </Router>
                  </div>
                </GuidedSearchProvider>
              )}
            </LanguageConsumer>
          </LanguageProvider>
        )}
      </SiteConsumer>
    </SiteProvider>
  );
};

export default App;
