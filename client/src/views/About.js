import Context from '../components/Context';
import Markdown from '../components/Markdown';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const About = ({ t, setPage }) => {
  useEffect(() => {
    setPage('about');
  });

  return (
    <div id="page-content">
      <Helmet>
        <title>About | {t('site_name')}</title>
      </Helmet>
      <Markdown page="about" />
    </div>
  );
};

export default Context(About);
