import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleService from '../services/ArticleService';
import Context from './Context';
import _ from 'underscore';

const ArticleField = ({ visible = true, children }) => {
  return visible ? <div className="article-field">{children}</div> : null;
};

const get = (field, value) => {
  return _.isUndefined(field) || _.isNull(field) || _.isEmpty(field)
    ? value
    : field;
};

const CountryAuthorLinks = ({ items, language }) => {
  if (items.length === 0) {
    return <div></div>;
  }
  return (
    <ul className="article-item-region-list">
      {Object.keys(items).map((key) => {
        return (
          <li key={key} className="region-item">
            <span className="region-item-title">{key}:</span>
            <ul className="article-author-list">
              {items[key].links.map((author, i) => (
                <li key={`author-item-${i}`} className="author-item">
                  <a
                    rel="alternate"
                    hrefLang={language}
                    href={author.url}
                    target="_blank"
                  >
                    {author.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

const CountryLinks = ({ items, t }) => {
  if (items.length === 0) {
    return <div>{t('no_studies_conducted_in')}</div>;
  }
  return (
    <ul className="article-item-countries">
      {Object.keys(items).map((key) => {
        return (
          <li key={key} className="country-item">
            <span>{key}</span>
            <span>({items[key].count})</span>
          </li>
        );
      })}
    </ul>
  );
};

const ArticleDetail = ({ id, site, language, t }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await ArticleService().get(id, site, language);
      console.log(result);
      setArticle(result);
    };
    fetchData();
  }, [id, site, language]);

  return article !== null ? (
    <div className="article-page">
      <div className="article-item">
        <h1>{article.title}</h1>
        <div className="article-item-body">
          <div className="section">
            <ArticleField>
              <h2>{article.label_document_type}</h2>
              <ul className="article-item-document-type">
                <li>{article.documentType}</li>
              </ul>
            </ArticleField>

            <ArticleField visible={article.year_published_visible}>
              <h2>{article.label_year_published}</h2>
              {article.published}
            </ArticleField>

            <ArticleField
              visible={article.last_year_literature_searched_visible}
            >
              <h2>{article.label_last_year_literature_searched}</h2>
              {_.get(
                article.lastLitSearch,
                'year',
                t('articles_page.no_last_year_literature_searched')
              )}
            </ArticleField>

            <ArticleField visible={article.quality_rating_visible}>
              <h2>{article.label_quality_rating}</h2>
              {article.quality} ({article.quality_note})
            </ArticleField>

            <ArticleField
              visible={
                article.countries_in_which_studies_were_conducted_visible
              }
            >
              <h2>{article.label_studies_conducted_in}</h2>
              <CountryLinks items={article.countryLinks} t={t} />
              <CountryAuthorLinks
                items={article.countryLinks}
                language={language}
              />
            </ArticleField>

            <ArticleField>
              <h2>{article.label_abstract}</h2>
              <p>{get(article.abstract, t('articles_page.no_topics'))}</p>
            </ArticleField>

            <ArticleField visible={article.related_documents_visible}>
              <Link
                className="btn btn-primary"
                to={{
                  pathname: '/search',
                  related_article_id: article.id,
                }}
              >
                {t('articles_page.related_documents')}
              </Link>
            </ArticleField>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Context(ArticleDetail);
