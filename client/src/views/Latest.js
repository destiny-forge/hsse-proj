import Context from '../components/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestArticles from '../components/LatestArticles';

const Latest = ({ site }) => {
  return (
    <div className={`${site} app latest layered-navigation`}>
      <div className="layered-navigation-content">
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
