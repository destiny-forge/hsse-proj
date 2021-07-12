import _ from 'underscore';
import Context from './Context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserCuratedSearches = ({ t, lang, user, only_subscribed }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {});

  return (
    <div className="saved-search-list">
      <ol class="selectable-list saved-search-list-content list">
        <li class="selectable-item saved-search-item list-item">
          <div class="saved-search-item-header clearfix">
            <h2>
              <a
                rel="alternate"
                hreflang="en"
                href="/search?applied_filters=2_2383"
              >
                Creating policy frameworks to support accelerated investment in
                poverty eradication actions
              </a>
            </h2>
          </div>
          <div class="applied-filters-wrapper">
            <span class="saved-search-filters-label">Filters:</span>
            <ul class="applied-filters">
              <li class="applied-filter-item">
                <div class="applied-filter-item-content">
                  <span class="applied-filter-item-filters">1. No poverty</span>
                </div>
              </li>
            </ul>
          </div>
          <label class="saved-search-control">
            <span>Subscribe to search</span>
            <div class="react-toggle">
              <div class="react-toggle-track">
                <div class="react-toggle-track-check">
                  <svg width="14" height="11" viewBox="0 0 14 11">
                    <title>switch-check</title>
                    <path
                      d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <div class="react-toggle-track-x">
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <title>switch-x</title>
                    <path
                      d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="react-toggle-thumb"></div>
              <input class="react-toggle-screenreader-only" type="checkbox" />
            </div>
          </label>
        </li>
      </ol>
    </div>
  );
};

export default Context(UserCuratedSearches);
