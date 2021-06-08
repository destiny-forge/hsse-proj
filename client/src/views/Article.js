import { useParams } from 'react-router-dom';
import Context from '../components/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleDetail from '../components/ArticleDetail';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';

const Article = ({ t, setPage }) => {
  setPage('latest_content');
  const { id } = useParams();
  return (
    <Fragment>
      <Helmet>
        <title>
          {t('latest_content_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <Header />
      <div id="page-content">
        <ArticleDetail id={id} />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Context(Article);
