import _ from 'underscore';
import Context from './Context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify, ellipsis } from '../utils/text';

const UserSavedDocuments = ({ t, lang, user }) => {
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setArticles([]);
  }, []);

  const shortRating = (quality) => {
    return quality
      ? quality.match(/[0-9]{1,2}\/[0-9]{1,2}/)
      : t('result_item.not_available');
  };

  const download = (e) => {
    e.preventDefault();
  };

  const email = (e) => {
    e.preventDefault();
  };

  const remove = (e) => {
    e.preventDefault();
  };

  const select = (e, id) => {
    e.preventDefault();
    let items = selected;
    if (e.target.checked) {
      items = items.filter((item) => item !== id);
    } else {
      items = [...selected, id];
    }
    setSelected(items);
  };

  const getStudiesConductedIn = (studies_conducted_in) => {
    return studies_conducted_in.countries
      .map((c) => {
        let name = c.name_abbreviation;
        name = _.isEmpty(name) ? c.title : name;
        if (
          c.conducted_count &&
          c.conducted_count !== '0' &&
          c.conducted_count !== 'null'
        )
          name = `${name} (${c.conducted_count})`;
        return name;
      })
      .join('; ');
  };

  return (
    <div id="saved-articles-list-header">
      {selected.length > 0 ? (
        <div className="export-buttons fixed-footer">
          <a
            hreflang={lang}
            href="/export"
            className="button icon icon-export"
            onClick={download}
          >
            {t('saved_articles_page.export')}
          </a>
          <a
            hreflang="en"
            href="/email"
            className="button icon icon-email"
            onClick={email}
          >
            {t('saved_articles_page.email')}
          </a>
        </div>
      ) : null}
      <ul className="list-actions list-inline">
        {selected.length > 0 ? (
          <li class="action remove-selected">
            <a hreflang={lang} href="/remove" class="button" onClick={remove}>
              {t('remove_selected')}
            </a>
          </li>
        ) : null}
        {articles.length > 0 ? (
          <li className="action">
            <label></label>
            <div className="checkbox">
              <input type="checkbox" name="search_to_delete" />
            </div>
          </li>
        ) : null}
      </ul>
      <div className="selectable-list result-list">
        {articles.length === 0
          ? t('saved_articles_page.no_saved_articles')
          : articles.map((article, i) => {
              let href = `/articles/${article._id}-${slugify(article.title)}`;
              return (
                <li key={article._id} className="selectable-item result-item">
                  <header className="result-item-header">
                    <div className="result-item-header-left">
                      <span className="result-item-number">
                        <span>{i}</span>
                        <span>.</span>
                      </span>
                      <div className="field result-item-published">
                        <span className="field-name">
                          {t('result_item.year')}
                        </span>
                        <span class="field-value">
                          {article.year ||
                            t('articles_page.no_last_year_literature_searched')}
                        </span>
                      </div>
                      <div className="field result-item-quality">
                        <span className="field-name">
                          {t('result_item.quality')}
                        </span>
                        <span className="field-value">
                          {shortRating(article.quality)}
                        </span>
                      </div>
                    </div>
                    <div className="result-item-header-right action">
                      <label className="result-item-select">
                        <span>{t('select')}</span>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            onchange={(e) => select(e, article._id)}
                          />
                        </div>
                      </label>
                    </div>
                  </header>
                  <section className="result-item-description">
                    <h2 className="result-item-title">
                      <Link to={href}>{article.title}</Link>
                    </h2>
                    <div className="result-item-categories">
                      <span>
                        {article.category
                          ? article.category
                          : getStudiesConductedIn(article.studies_conducted_in)}
                      </span>
                    </div>
                    <span>{ellipsis(article.description)}</span>
                  </section>
                </li>
              );
            })}
      </div>
    </div>
  );
};

export default Context(UserSavedDocuments);
