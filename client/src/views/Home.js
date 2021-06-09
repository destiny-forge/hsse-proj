import SearchBar from '../components/SearchBar';
import GuidedQuestions from '../components/GuidedQuestions';
import Context from '../components/Context';
import { useEffect } from 'react';
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
  );
};

export default Context(Home);
