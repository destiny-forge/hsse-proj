import { useRef, React } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import Article from './views/Article';
import Search from './views/Search';

import { SiteProvider, SiteConsumer } from './components/SiteContext';
import { PageProvider, PageConsumer } from './components/PageContext';
import {
  LanguageProvider,
  LanguageConsumer,
} from './components/LanguageContext';
import { GuidedSearchProvider } from './components/GuidedSearchContext';
import LayeredNavigation from './components/LayeredNavigation';
import { Helmet } from 'react-helmet';
import Layer from './components/Layer';
import LayerGroup from './components/LayerGroup';
import HelpMenu from './components/HelpMenu';

const Layers = ({ t }) => {
  return (
    <LayerGroup>
      <Layer name="help" title={t('menus.help.title')}>
        <HelpMenu />
      </Layer>
    </LayerGroup>
  );
};

const App = () => {
  const layeredNavigation = useRef(null);
  return (
    <SiteProvider>
      <SiteConsumer>
        {({ site }) => (
          <LanguageProvider site={site}>
            <LanguageConsumer>
              {({ t }) => (
                <PageProvider>
                  <PageConsumer>
                    {({ page }) => (
                      <GuidedSearchProvider>
                        <LayeredNavigation
                          ref={layeredNavigation}
                          className=""
                          id="app"
                          page={page}
                          site={site}
                        >
                          <Layers t={t} />
                          <Helmet>
                            <title>{t('site_name')}</title>
                          </Helmet>
                          <Router>
                            <ScrollToTop />
                            <Switch>
                              <Route exact path="/" component={Home} />
                              <Route exact path="/search" component={Search} />
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
                              <Route
                                exact
                                path="/articles/:id-:ignore"
                                component={Article}
                              />
                            </Switch>
                          </Router>
                        </LayeredNavigation>
                      </GuidedSearchProvider>
                    )}
                  </PageConsumer>
                </PageProvider>
              )}
            </LanguageConsumer>
          </LanguageProvider>
        )}
      </SiteConsumer>
    </SiteProvider>
  );
};

export default App;
