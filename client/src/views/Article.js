import { useParams } from 'react-router-dom';
import Context from '../components/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleDetail from '../components/ArticleDetail';
import { Helmet } from 'react-helmet';

const Article = ({ site, t }) => {
  const { id } = useParams();
  return (
    <div className={`${site} app latest_content layered-navigation`}>
      <div className="layered-navigation-content">
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
      </div>
    </div>
  );
};

export default Context(Article);
