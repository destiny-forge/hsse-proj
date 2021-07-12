import _ from 'underscore';
import Context from './Context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserSavedSearches = ({ t, lang, user, only_subscribed }) => {
  const [subs, setSubs] = useState([]);
  const [selected, setSelected] = useState([]);
  const [all, setAll] = useState(false);

  useEffect(() => {
    // get the user subs
  }, []);

  const select = (e, index) => {
    e.preventDefault();
    let items = selected;
    if (e.target.checked) {
      items = items.filter((item) => item !== index);
    } else {
      items = [...selected, index];
    }
    setSelected(items);
  };

  const selectAllToggle = (e) => {
    e.preventDefault();
    const indexes = subs.map((_sub, index) => index);
    setAll(!all);
    setSelected(indexes);
  };

  return (
    <div className="saved-search-list">
      <div className="saved-search-list-header">
        <ul className="saved-search-list-actions list-actions list-inline">
          <li className="action">
            <label>
              <span>{t('select_all')}</span>
              <div className={`checkbox${all ? ' checkbox-checked' : ''}`}>
                <input
                  type="checkbox"
                  name="search_to_delete"
                  onClick={selectAllToggle}
                />
              </div>
            </label>
          </li>
        </ul>
      </div>
      <ol className="selectable-list saved-search-list-content list">
        {subs
          .filter((sub) => (only_subscribed === true && sub.subscribed) || true)
          .map((sub) => {
            return (
              <li className="selectable-item saved-search-item list-item">
                <div className="saved-search-item-header clearfix">
                  <h2>
                    <a
                      rel="alternate"
                      hreflang="en"
                      href={`/search?q=${sub.query}`}
                    >
                      {sub.query}
                    </a>
                  </h2>
                  <label className="saved-search-select action">
                    <span>{t('select')}</span>
                    <div class="checkbox">
                      <input type="checkbox" />
                    </div>
                  </label>
                </div>
                <div className="saved-search-keywords">
                  <span className="saved-search-keywords-label">
                    {t('saved_search_page.keywords')}:
                  </span>
                  <span className="saved-search-keywords-value">
                    {sub.query}
                  </span>
                </div>
                <label className="saved-search-control">
                  <span>{t('saved_search_page.subscribe')}</span>
                  <div
                    className={`react-toggle${sub.subscribed} ? ' react-toggle-checked':''`}
                  >
                    <div className="react-toggle-track">
                      <div className="react-toggle-track-check">
                        <svg width="14" height="11" viewBox="0 0 14 11">
                          <title>switch-check</title>
                          <path
                            d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
                            fill="#fff"
                          ></path>
                        </svg>
                      </div>
                      <div className="react-toggle-track-x">
                        <svg width="10" height="10" viewBox="0 0 10 10">
                          <title>switch-x</title>
                          <path
                            d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
                            fill="#fff"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="react-toggle-thumb"></div>
                    <input
                      class="react-toggle-screenreader-only"
                      type="checkbox"
                    />
                  </div>
                </label>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Context(UserSavedSearches);
