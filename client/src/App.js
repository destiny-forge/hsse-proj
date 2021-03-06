import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Profile from './views/Profile';
import UserArticleView from './views/User/Articles';
import UserSearchView from './views/User/Searches';

import { SiteProvider, SiteConsumer } from './components/SiteContext';
import { PageProvider, PageConsumer } from './components/PageContext';
import { UserProvider } from './components/UserContext';

import {
  LanguageProvider,
  LanguageConsumer,
} from './components/LanguageContext';
import { GuidedSearchProvider } from './components/GuidedSearchContext';
import { LayerProvider, LayerConsumer } from './components/LayerContext';
import { Helmet } from 'react-helmet';
import Layer from './components/Layer';
import LayerGroup from './components/LayerGroup';
import HelpMenu from './components/HelpMenu';
import AccountMenu from './components/AccountMenu';

import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageChooser } from './components/LanguageContext';
import SignupMenu from './components/SignupMenu';
import LoginMenu from './components/LoginMenu';

const App = () => {
  return (
    <SiteProvider>
      <SiteConsumer>
        {({ site }) => (
          <LanguageProvider site={site}>
            <LanguageConsumer>
              {({ t }) => (
                <PageProvider>
                  <UserProvider>
                    <Helmet>
                      <title>{t('site_name')}</title>
                    </Helmet>
                    <PageConsumer>
                      {({ page }) => (
                        <GuidedSearchProvider>
                          <Router>
                            <LayerProvider page={page} site={site}>
                              <LayerGroup>
                                <Layer
                                  name="help"
                                  title={t('menus.help.title')}
                                >
                                  <HelpMenu />
                                </Layer>
                                <Layer
                                  name="main"
                                  title={t('menus.main.title')}
                                >
                                  <MainMenu />
                                </Layer>
                                <Layer
                                  name="languages"
                                  title={t('menus.languages.title')}
                                >
                                  <LayerConsumer>
                                    {({ dismissAll }) => (
                                      <LanguageChooser
                                        site={site}
                                        isVisible={true}
                                        onDismissMenu={dismissAll}
                                      />
                                    )}
                                  </LayerConsumer>
                                </Layer>
                                <Layer
                                  name="signup"
                                  title={t('menus.signup.title')}
                                >
                                  <SignupMenu />
                                </Layer>
                                <Layer
                                  name="login"
                                  title={t('menus.login.title')}
                                >
                                  <LoginMenu />
                                </Layer>
                                <Layer
                                  name="account"
                                  title={t('menus.login.profile')}
                                >
                                  <AccountMenu />
                                </Layer>
                              </LayerGroup>
                              <LayerConsumer>
                                {({ toggleLayer }) => (
                                  <>
                                    <Header onShowMenu={toggleLayer} />
                                    <ToastContainer position="top-center" />
                                  </>
                                )}
                              </LayerConsumer>
                              <ScrollToTop />
                              <Switch>
                                <Route exact path="/" component={Home} />
                                <Route
                                  exact
                                  path="/search"
                                  component={Search}
                                />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/terms" component={Terms} />
                                <Route
                                  exact
                                  path="/signup"
                                  component={Signup}
                                />
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
                                <Route
                                  exact
                                  path="/profile"
                                  component={Profile}
                                />

                                <Route
                                  exact
                                  path="/user/articles"
                                  component={UserArticleView}
                                />
                                <Route
                                  exact
                                  path="/user/searches"
                                  component={UserSearchView}
                                />
                              </Switch>
                              <Footer />
                            </LayerProvider>
                          </Router>
                        </GuidedSearchProvider>
                      )}
                    </PageConsumer>
                  </UserProvider>
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
