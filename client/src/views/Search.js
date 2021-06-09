import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchTips from '../components/SearchTips';
import GuidedQuestions from '../components/GuidedQuestions';
import Context from '../components/Context';
import FilterMenu from '../components/FilterMenu';
import SearchResults from '../components/SearchResults';
import SearchService from '../services/SearchService';

const Search = ({ site, language, setPage, toggleLayer }) => {
  let { applied_filters } = useParams();
  const initial_filters = (applied_filters && applied_filters.split(',')) || [];
  const Search = SearchService();
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState(initial_filters);
  const [pageNumber, setPageNumber] = useState(1);
  const [sort, setSort] = useState('relevance');

  useEffect(() => {
    setPage('search');

    // we may want to perform a search on initial load
    // so it's important that we can grab the values from
    // the querystring if they are passed from the home page
  });

  const search = (q) => {
    Search.search({
      query: q,
      filters,
      sort,
      page: pageNumber,
      site,
      language,
    })
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
    <div id="page-content">
      <div className="search-page">
        <SearchBar onSearch={search} />
        <SearchTips filters={filters} onShowMenu={toggleLayer} />
        <GuidedQuestions isCollapsed={true} />
        <FilterMenu
          filters={filters}
          results={results}
          onFilterChange={setFilters}
        />
        <SearchResults
          results={results}
          onSort={setSort}
          onPage={setPageNumber}
        />
      </div>
    </div>
  );
};

export default Context(Search);
