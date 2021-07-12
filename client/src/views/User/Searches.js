import Context from '../../components/Context';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import AuthService from '../../services/AuthService';
import UserSavedSearches from '../../components/UserSavedSearches';
import UserCuratedSearches from '../../components/UserCuratedSearches';

const UserSearchView = ({ t, setPage, user }) => {
  const [subscribed, setSubscribed] = useState(false);

  const Auth = new AuthService();
  setPage('saved_search');

  useEffect(() => {
    if (!Auth.loggedIn()) {
      document.location = window.location.origin;
    }
  });

  const toggle = (e) => {
    e.preventDefault();
    setSubscribed(!subscribed);
  };

  return (
    <div id="page-content">
      <Helmet>
        <title>
          {t('saved_search_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <div className="saved-search-page">
        <div className="saved-searches">
          <div className="saved-search-header clearfix">
            <h1>{t('saved_search_page.title')}</h1>
            <label className="saved-search-subscribed-only action">
              <span>{t('saved_search_page.subscribed_only')}</span>
              <div class={`checkbox${subscribed ? ' checkbox-checked' : ''}`}>
                <input type="checkbox" checked={subscribed} onClick={toggle} />
              </div>
            </label>
          </div>

          <UserSavedSearches only_subscribed={subscribed} />
          <div className="curated-searches">
            <h1>{t('saved_search_page.curated_searches')}</h1>
            <UserCuratedSearches only_subscribed={subscribed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context(UserSearchView);
