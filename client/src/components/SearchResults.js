import { result } from 'underscore';
import Context from './Context';

const SearchResults = ({ t, results = [] }) => {
  return (
    <div className="result-box">
      <div className="result-box-header">
        <div className="sort-order">
          <span className="sort-order-label">
            {t('search_page.sort_order.sorted_by')}&nbsp;
          </span>
          <select className="sort-order-control">
            <option value="relevance">
              {t('search_page.sort_order.relevance')}
            </option>
            <option value="most_recent">
              {t('search_page.sort_order.most_recent')}
            </option>
            <option value="highest_quality">
              {t('search_page.sort_order.highest_quality')}
            </option>
          </select>
        </div>
      </div>
      <div className="result-box-count">
        {results.length} {t('search_page.result_box.results')}
      </div>
      <ol className="selectable-list result-list">
        {results.map(result, (i) => {
          <li className="selectable-item result-item">
            <header className="result-item-header">
              <div className="result-item-header-left">
                <span className="result-item-number">{i}.</span>
                <div className="field result-item-published">
                  <span className="field-name">
                    {t('search_page.result_item.year')}:
                  </span>
                  <span className="field-value"></span>
                </div>
                <div className="field result-item-quality">
                  <span className="field-name">
                    {t('search_page.result_item.quality')}:
                  </span>
                  <span className="field-value"></span>
                </div>
                <div className="result-item-header-right action"></div>
              </div>
            </header>
            <section className="result-item-description">
              <h2 className="result-item-title">
                <a>{result.title}</a>
              </h2>
              <div className="result-item-categories"></div>
            </section>
          </li>;
        })}
      </ol>
    </div>
  );
};

export default Context(SearchResults);
