import { useState, useEffect } from 'react';
import marked from 'marked';
import Context from '../components/Context';

const Markdown = ({ page, site, language }) => {
  const [content, setContent] = useState('');
  useEffect(() => {
    let url = `/i18n/${site}/${page}-${language}.md`;
    fetch(url)
      .then((res) => res.text())
      .then((results) => {
        setContent(results);
      });
  }, [page, site, language]);

  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />;
};

export default Context(Markdown);
