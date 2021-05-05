import React, { useState } from 'react';
import { debounce, delay } from 'underscore';
import Autosuggest from 'react-autosuggest';

import SearchService from '../services/SearchService';
import Button from '../components/Button';

const Search = ({ onSearch }) => {
  const Search = SearchService();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [count, setCount] = useState(0);

  const fetchSuggestions = ({ value }) => {
    Search.suggestions(value)
      .then((res) => {
        console.log(res);
        if (res.success) {
          setSuggestions(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (_event, { newValue }) => {
    setQuery(newValue);
  };

  const renderSuggestion = (suggestion, input) => {
    const index = suggestion.query.toLowerCase().indexOf(input.toLowerCase());

    let suggestionCount = '';
    if (suggestion.count)
      suggestionCount = (
        <span className="suggestion-count">({suggestion.count})</span>
      );

    if (index >= 0) {
      const start = suggestion.query.slice(0, index);
      const match = suggestion.query.slice(index, index + input.length);
      const end = suggestion.query.slice(index + input.length);
      return (
        <span>
          {start}
          <strong>{match}</strong>
          {end}
          {suggestionCount}
        </span>
      );
    } else {
      return (
        <span>
          {suggestion.query}
          {suggestionCount}
        </span>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query });
  };

  const dismissKeyboard = () => document.activeElement.blur();
  const getSuggestionValue = (suggestion) => {
    console.log(suggestion);
    return suggestion.query;
  };

  const clearInput = () => {
    setQuery('');
    setSuggestions([]);
    dismissKeyboard();
    onSearch('');
  };

  return (
    <div className="search-box">
      <form action="#" onSubmit={handleSubmit} className="search-bar">
        <div className="react-autosuggest">
          <Autosuggest
            key={'autosuggest-#{count}'}
            suggestions={suggestions}
            onSuggestionsFetchRequested={debounce(fetchSuggestions, 200)}
            onSuggestionsClearRequested={clearInput}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: '',
              value: query,
              onChange,
              id: 'search',
              ref: 'search',
            }}
            cache={false}
          />
          <Button className="btn-clear" onClick={clearInput}>
            &#x00D7;
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
