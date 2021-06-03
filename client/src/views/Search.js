import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GuidedQuestions from '../components/GuidedQuestions';
import Footer from '../components/Footer';
import Context from '../components/Context';
import FilterMenu from '../components/FilterMenu';
import SearchService from '../services/SearchService';

const Search = ({ site, language, t }) => {
  let { applied_filters } = useParams();
  const initial_filters = (applied_filters && applied_filters.split(',')) || [];
  const Search = SearchService();
  const [results, setResults] = useState();
  const [filters, setFilters] = useState(initial_filters);
  const className = `${site} search layered-navigation`;

  const suggest = (result) => {
    console.log(result);
    // may need to process filters list here
    setFilters(result);
    search(result);
  };

  const search = (filters) => {
    Search.search(filters, site, language)
      .then((res) => {
        console.log(res);
        if (res.success) {
          setResults(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="app" className={className}>
      <div className="layered-navigation-content">
        <Header />
        <div id="page-content">
          <div className="search-page">
            <SearchBar onSearch={suggest} />
            <GuidedQuestions isCollapsed={true} />
            <FilterMenu filters={filters} results={results} search={search} />
            <div className="result-box"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Context(Search);
