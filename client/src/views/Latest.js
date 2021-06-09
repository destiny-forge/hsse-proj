import Context from '../components/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestArticles from '../components/LatestArticles';
import { Helmet } from 'react-helmet';
import { Fragment, useEffect } from 'react';

const Latest = ({ t, setPage }) => {
  useEffect(() => {
    setPage('latest_content');
  });

  return (
    <Fragment>
      <Helmet>
        <title>
          {t('latest_content_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <Header />
      <div id="page-content">
        <LatestArticles />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Context(Latest);
