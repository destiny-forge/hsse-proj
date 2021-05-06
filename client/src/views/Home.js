import Header from '../components/Header';
import Search from '../components/Search';
import GuidedQuestions from '../components/GuidedQuestions';
import Footer from '../components/Footer';
import Context from '../components/Context';

const Home = ({ site, t }) => {
  const className = `${site} home layered-navigation`;
  return (
    <div className={className}>
      <div id="page-content">
        <Header />
        <div class="home-page">
          <div class="home-page-header">
            <h1>{t('site_name')}</h1>
            <p class="intro">{t('home_page.intro')}</p>
            <p class="intro">{t('home_page.intro2')}</p>
            <Search onSearch={(result) => console.log(result)} />
          </div>
        </div>
        <GuidedQuestions />
        <Footer />
      </div>
    </div>
  );
};

export default Context(Home);
