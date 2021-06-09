import Context from '../components/Context';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Fragment, useEffect } from 'react';

const About = ({ t, setPage }) => {
  useEffect(() => {
    setPage('about');
  });

  return (
    <Fragment>
      <Helmet>
        <title>About | {t('site_name')}</title>
      </Helmet>
      <Header />
      <div id="page-content">
        <Markdown page="about" />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Context(About);
