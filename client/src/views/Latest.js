import Context from '../components/Context';
import LatestArticles from '../components/LatestArticles';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const Latest = ({ t, setPage }) => {
  useEffect(() => {
    setPage('latest_content');
  });

  return (
    <div id="page-content">
      <LatestArticles />
      <Helmet>
        <title>
          {t('latest_content_page.title')} | {t('site_name')}
        </title>
      </Helmet>
    </div>
  );
};

export default Context(Latest);
