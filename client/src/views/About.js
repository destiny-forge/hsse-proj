import Context from '../components/Context';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const About = ({ site }) => {
  const className = `${site} app about layered-navigation`;
  return (
    <div className={className}>
      <Helmet>
        <title>About | {t('site_name')}</title>
      </Helmet>
      <div className="layered-navigation-content">
        <Header />
        <div id="page-content">
          <Markdown page="about" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Context(About);
