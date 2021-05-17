import React, { useState, useEffect } from 'react';
import ArticleService from '../services/ArticleService';
import Context from './Context';

const ArticleDetail = ({ id, site, language, t }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticle = async (id, site, language) => {
      const Article = ArticleService();
      return await Article.get(id, site, language);
    };
    const result = getArticle(id, site, language);
    setArticle(result);
  }, [site]);

  return <div>{article.title}</div>;
};

export default Context(ArticleDetail);
