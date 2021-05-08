import React, { useState, useEffect } from 'react';
import SearchService from '../services/SearchService';
import Context from './Context';

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .trim();
};

const DocumentTypeArticles = ({ language, latest }) => {
  let types = latest.document_Types_Articles || [];
  return types.map((type) => {
    const key = type.DocumentTypeId;
    const title = type[`DocumentTypeName${language.toUpperCase()}`];
    const articles = type.document_Types_Articles;
    return articles.length > 0 ? (
      <React.Fragment>
        <h2 className="documentType" key={key}>
          {title}
        </h2>
        <ArticleList language={language} articles={articles} />
      </React.Fragment>
    ) : null;
  });
};

const ProgramServiceArticles = ({ language, latest }) => {
  let types = latest.program_Services_Articles || [];
  return types.map((type) => {
    const key = type.DomainID;
    const title = type[`DomainName${language.toUpperCase()}`];
    const articles = type.program_Services_Articles;
    return articles.length > 0 ? (
      <React.Fragment>
        <h2 className="domain" key={key}>
          {title}
        </h2>
        <ArticleList language={language} articles={articles} />
      </React.Fragment>
    ) : null;
  });
};

const ArticlesByCategory = ({ site, language, latest }) => {
  let Component = DocumentTypeArticles;
  switch (site) {
    case 'hse':
      Component = DocumentTypeArticles;
      break;
    case 'sse':
      Component = ProgramServiceArticles;
      break;
    case 'cvd':
      Component = DocumentTypeArticles;
      break;
  }
  return <Component language={language} latest={latest} />;
};

const ArticleList = ({ language, articles }) => {
  return (
    <ul className="selectable-list-latest result-list-latest">
      {articles.map((article) => {
        const title = article[`Title${language.toUpperCase()}`];
        let href = `/articles/${article.ArticleId}-${slugify(
          title
        )}?source=latest_content`;
        return (
          <li
            key={article.ArticleId}
            className="selectable-item result-latest-item"
          >
            <h2 className="result-item-title">
              <a href={href}>
                <span>{title}</span>
              </a>
            </h2>
          </li>
        );
      })}
    </ul>
  );
};

const LatestArticles = ({ site, t, language }) => {
  const [latest, setLatest] = useState({});

  useEffect(() => {
    const search = SearchService();
    const results = search.latest(site, language);
    console.log(results);
    setLatest(results);
    // search.latest(site, language).then((result) => {
    //   console.log(result);
    //   setLatest(result);
    // });
  }, [site, language]);

  const title = () => {
    let blurb = t('latest_content_page.blurb_title');
    return `${blurb} ${t(`months.${latest.month}`)} ${latest.year}`;
  };

  return Object.entries(latest).length === 0 ? (
    <div></div>
  ) : (
    <div className="latest-content-page">
      <h1>{title()}</h1>
      <span dangerouslySetInnerHTML={{ __html: latest.hot_Docs_Content1 }} />
      <ArticleList language={language} articles={latest.hot_Docs_Articles} />
      <span dangerouslySetInnerHTML={{ __html: latest.hot_Docs_Content2 }} />
      <ArticlesByCategory site={site} language={language} latest={latest} />
    </div>
  );
};

export default Context(LatestArticles);
