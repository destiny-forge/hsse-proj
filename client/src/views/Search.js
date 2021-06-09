import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchTips from '../components/SearchTips';
import GuidedQuestions from '../components/GuidedQuestions';
import Footer from '../components/Footer';
import Context from '../components/Context';
import FilterMenu from '../components/FilterMenu';
import SearchResults from '../components/SearchResults';
import SearchService from '../services/SearchService';

const Search = ({ site, language, setPage, toggleLayer }) => {
  setPage('search');
  let { applied_filters } = useParams();
  const initial_filters = (applied_filters && applied_filters.split(',')) || [];
  const Search = SearchService();
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState(initial_filters);

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
    <Fragment>
      <Header />
      <div id="page-content">
        <div className="search-page">
          <SearchBar onSearch={suggest} />
          <SearchTips filters={filters} onShowMenu={toggleLayer} />
          <GuidedQuestions isCollapsed={true} />
          <FilterMenu filters={filters} results={results} search={search} />
          <SearchResults results={results} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Context(Search);
