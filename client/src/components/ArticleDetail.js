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
      {items.map((item) => {
        return (
          <li key={item.key} className="region-item">
            <span className="region-item-title">{item.key}:</span>
            <ul className="article-author-list">
              {item.value.links.map((author, i) => (
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
      {items.map((item) => {
        return (
          <li key={item.key} className="country-item">
            <span>{item.key}</span>
            <span>({item.value.count})</span>
          </li>
        );
      })}
    </ul>
  );
};

const NestedList = (list, listName, itemName) => {
  let result = [];

  if (list === null || list.length === 0) {
    return null;
  }

  list.forEach((item, i) => {
    result.push(
      <li key={`${itemName}-item-${i}`} className={`${itemName}-item`}>
        {item.title}
      </li>
    );
    if (item[listName] && item[listName].length > 0) {
      result.push(
        <li key={`${itemName}-item-nested-${i}`} className={`${itemName}-item`}>
          <ul>{NestedList(item[listName], listName, itemName)}</ul>
        </li>
      );
    }
  });

  return result;
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

            <ArticleField visible={article.priority_area_visible}>
              <h2>{article.label_priority_areas}</h2>
              <ul>
                {NestedList(
                  article.priority_areas,
                  'priority_areas',
                  'priority_area'
                ) || t('articles_page.no_priority_areas')}
              </ul>
            </ArticleField>
          </div>

          <div className="section">
            <ArticleField>
              <h2>{article.label_domains}</h2>
              <ul>
                {NestedList(article.filters, 'domains', 'domain') ||
                  t('articles_page.no_domains')}
              </ul>
            </ArticleField>

            <ArticleField>
              <h2>{article.label_social_system_topics}</h2>
              <ul>
                {NestedList(article.topics, 'topics', 'topic') ||
                  t('articles_page.no_topics')}
              </ul>
            </ArticleField>
          </div>

          <div className="section">
            <ArticleField visible={article.theme_visible}>
              <h2>{article.label_themes}</h2>
              <ul>
                {NestedList(article.themes, 'themes', 'theme') ||
                  t('articles_page.no_themes')}
              </ul>
            </ArticleField>

            {/*
          <ArticleField visible={article.country_groupings_visible}>
            <h2>{article.label_country_groupings}</h2>
            {@ifNotEmpty @renderCountries(article.country_groupings), @t('no_country_groupings')}
          </ArticleField>

          <ArticleField visible={article.who_region_visible}>
            <h2>{article.label_who_regions}</h2>
            {@ifNotEmpty @joinList(_.compact(_.pluck(article.who_regions, 'title'))), @t('no_who_regions')}
          </ArticleField>

          <ArticleField visible={article.lmic_focus_visible}>
            <h2>{article.label_lmic_focus}</h2>
            <div className="article-item-lmic-focus">
              {@ifNotEmpty @joinList(_.compact(_.pluck(article.lmic_focus, 'title'))), @t('no_lmic_focus')}
            </div>
            </ArticleField>
            */}

            <ArticleField visible={article.country_focus_visible}>
              <h2>{article.label_country_focus}</h2>
              {article.country_focus || t('no_country_focus')}
            </ArticleField>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Context(ArticleDetail);
