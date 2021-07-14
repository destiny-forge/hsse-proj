import Context from './Context';
import { useState, useEffect } from 'react';

const ProfileSavedSearches = ({ t }) => {
  const [showOnlySubscribed, setShowOnlySubscribed] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // call the Subscriptions api to return subs
    // We also need to return curated searches???
  });

  const edit = (index, isSubscribed) => {
    let subs = subscriptions;
    subs[index].subscribed = isSubscribed;
    setSubscriptions(subs);
  };

  const toggle = (e) => {
    setShowOnlySubscribed(e.target.checked);
  };

  return (
    <div className="saved-searches">
      <div className="saved-search-header clearfix">
        <h1>{t('saved_search_page.title')}</h1>
        <label class="saved-search-subscribed-only action">
          <span>{t('saved_search_page.subscribed_only')}</span>
          <div
            class={`checkbox ${showOnlySubscribed ? 'checkbox-checked' : ''}`}
          >
            <input type="checkbox" onClick={toggle} />
          </div>
        </label>
      </div>
      <div className="saved-search-list">
        <ol className="saved-search-list-content list">
          <li>{t('saved_search_page.no_saved_searches')}</li>
        </ol>
      </div>
    </div>
  );
};

export default Context(ProfileSavedSearches);
