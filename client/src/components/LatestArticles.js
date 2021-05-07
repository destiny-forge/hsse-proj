import { useState, useEffect } from 'react';
import SearchService from '../services/SearchService';
import Context from './Context';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .trim();
};

const ArticleList = ({ language, articles }) => {
  return (
    <ul class="selectable-list-latest result-list-latest">
      {articles.map((article) => {
        const title = article[`title${language.toUpperCase()}`];
        let href = `/articles/${article.id}-${slugify(
          title
        )}?source=latest_content`;
        return (
          <li class="selectable-item result-latest-item">
            <h2 class="result-item-title">
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
    SearchService()
      .latest(site, language)
      .then((result) => {
        setLatest(result);
      });
  }, [site, language]);

  const title = () => {
    let blurb = t('latest_content_page.blurb_title');
    return `${blurb} ${t(latest.month)} ${t(latest.year)}`;
  };

  return latest === {} ? (
    <div></div>
  ) : (
    <div className="latest-content-page">
      <h1>{title()}</h1>
      <span dangerouslySetInnerHTML={{ __html: latest.hot_Docs_Content1 }} />
      <ArticleList language={language} articles={latest.hot_Docs_Articles} />
      <span dangerouslySetInnerHTML={{ __html: latest.hot_Docs_Content2 }} />
    </div>
  );
};

export default Context(LatestArticles);
