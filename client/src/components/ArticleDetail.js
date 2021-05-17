import React, { useState, useEffect } from 'react';
import ArticleService from '../services/ArticleService';
import Context from './Context';

const ArticleDetail = ({ id, site, language, t }) => {
  const [article, setArticle] = useState({});

  useEffect(async () => {
    const result = await ArticleService().get(id, site, language);
    console.log(result);
    setArticle(result);
  }, [id, site, language]);

  return (
    <div className="article-page">
      <div className="article-item">
        <h1>{article.title}</h1>
        <div className="article-item-body">
          <div className="section">
            <div className="article-field">
              <h2>{article.documentType}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context(ArticleDetail);
