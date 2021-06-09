import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GuidedQuestions from '../components/GuidedQuestions';
import Footer from '../components/Footer';
import Context from '../components/Context';
import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = ({ t, setPage }) => {
  let history = useHistory();

  useEffect(() => {
    setPage('home');
  });

  const search = (query) => {
    history.push({
      pathname: '/search',
      search: `?q=${query}`,
    });
  };

  return (
    <Fragment>
      <Header />
      <div id="page-content">
        <div className="home-page">
          <div className="home-page-header">
            <h1>{t('site_name')}</h1>
            <p className="intro">{t('home_page.intro')}</p>
            <p className="intro2">{t('home_page.intro2')}</p>
            <SearchBar onSearch={search} />
          </div>
          <GuidedQuestions />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Context(Home);
