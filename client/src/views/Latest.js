import Context from '../components/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestArticles from '../components/LatestArticles';
import { Helmet } from 'react-helmet';

const Latest = ({ site, t }) => {
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
          <LatestArticles />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Context(Latest);
