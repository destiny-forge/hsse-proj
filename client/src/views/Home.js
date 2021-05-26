import Header from '../components/Header';
import Search from '../components/Search';
import GuidedQuestions from '../components/GuidedQuestions';
import Footer from '../components/Footer';
import Context from '../components/Context';

const Home = ({ site, t }) => {
  const className = `${site} home layered-navigation`;
  return (
    <div className={className}>
      <div className="layered-navigation-content">
        <Header />
        <div id="page-content">
          <div className="home-page">
            <div className="home-page-header">
              <h1>{t('site_name')}</h1>
              <p className="intro">{t('home_page.intro')}</p>
              <p className="intro2">{t('home_page.intro2')}</p>
              <Search onSearch={(result) => console.log(result)} />
            </div>
            <GuidedQuestions />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Context(Home);
