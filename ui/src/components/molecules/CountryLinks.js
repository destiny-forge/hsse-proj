import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import CountryCountFocus from './CountryCountFocus';
import ErrorMessage from '../atoms/ErrorMessage';
import { countries } from '../../data/countries';
import validateLink from '../../utils/validation/validateLink';
import _ from 'lodash';

const CountryLinks = ({ initialLinks, onChange }) => {
  const [links, setLinks] = useState({});
  const [country, setCountry] = useState(0);
  const [focus, setFocus] = useState(false);
  const [count, setCount] = useState(0);

  const linkName = React.createRef();
  const linkURL = React.createRef();

  useEffect(() => {
    setLinks(initialLinks);
    onChange(initialLinks);
  }, [initialLinks, onChange]);

  const handleFocusChange = (e) => {
    setFocus(e.target.checked);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  const handleAddCountry = (e) => {
    e.preventDefault();
    let { label, value } = _.find(countries, { value: country });

    if (label in links) {
      alert('Cannot add the same country twice');
      return;
    }

    let updated = _.clone(links);
    updated[label] = {
      id: value,
      count,
      focus,
      links: [],
    };

    setLinks(updated);
    setCountry(0);
    setFocus(false);
    onChange(updated);
  };

  const handleToggleFocus = (key) => {
    let updated = _.clone(links);
    let entry = updated[key];
    entry.focus = !entry.focus;
    setLinks(updated);
    onChange(updated);
  };

  const handleRemoveCountry = (key) => {
    let confirmed = window.confirm(
      'Are you sure you want to remove this country and links?'
    );
    if (!confirmed) {
      return;
    }
    let updated = _.clone(links);
    delete updated[key];
    setLinks(updated);
    onChange(updated);
  };

  const handleLinkEdit = (key, field, value) => {
    const updated = _.clone(links);
    const country = updated[key];
    _.set(country, `link.${field}`, value);

    validateLink(country.link)
      .then(() => {
        country.errors = {};
        country.valid = true;
        setLinks(updated);
        onChange(updated);
      })
      .catch((errors) => {
        country.errors = errors;
        country.valid = false;
        setLinks(updated);
        onChange(updated);
      });
  };

  const handleLinkAdd = (key) => {
    const updated = _.clone(links);
    const country = updated[key];
    const { name, url } = country.link;

    country.links.push({ name, url });
    country.link = {};
    country.valid = false;
    setLinks(updated);
    onChange(updated);
    linkURL.current.value = '';
    linkName.current.value = '';
  };

  const handleLinkRemove = (key, name) => {
    let confirmed = window.confirm(
      'Are you sure you want to remove this link?'
    );
    if (!confirmed) {
      return;
    }
    const updated = _.clone(links);
    const country = updated[key];
    country.links = country.links.filter((link) => link.name !== name);
    setLinks(updated);
    onChange(updated);
  };

  const showEdit = (country) => {
    if (country.count === '') {
      return true;
    }

    const plus = country.count.indexOf('+') >= 0;
    const strCount = country.count.replace('+', '');
    const count = parseInt(strCount);

    if (isNaN(count) || plus) {
      return true;
    }

    return !(country.links.length === count);
  };

  return (
    <React.Fragment>
      <div className="box">
        <div className="box-header d-flex">
          <h3>Add Countries</h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
              <th>Is a focus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '40%' }}>
                <Select
                  value={countries.filter((opt) => opt.value === country)}
                  name="status"
                  onChange={(opt) => handleCountryChange(opt.value)}
                  options={countries}
                  isSearchable
                />
              </td>
              <td style={{ width: '20%' }}>
                <input
                  type="text"
                  className="form-control"
                  name="count"
                  onChange={handleCountChange}
                  placeholder="Enter count"
                  required
                />
              </td>
              <td style={{ width: '20%' }}>
                <input
                  checked={focus}
                  type="checkbox"
                  name="focus"
                  onChange={handleFocusChange}
                />
              </td>
              <td style={{ width: '20%' }}>
                <button
                  type="submit"
                  onClick={handleAddCountry}
                  className="btn primary"
                  disabled={country.toString() === '0'}
                >
                  Add Country
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {Object.keys(links).map((key) => {
        const country = links[key];
        const showLinks = country.id > 0;
        return (
          <div className="box" key={key}>
            <div className="box-header primary">
              <h2>
                {key}
                <CountryCountFocus
                  count={country.count}
                  text="focus"
                  disabled={!showLinks}
                  checked={country.focus}
                />
              </h2>
            </div>
            <div className="box-tool">
              <ul className="nav nav-xs">
                <li className="nav-item dropdown">
                  <div className="nav-link" data-toggle="dropdown">
                    <i className="fa fa-fw fa-ellipsis-v"></i>
                  </div>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div
                      className="dropdown-item"
                      onClick={() => handleToggleFocus(key)}
                    >
                      Toggle focus
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => handleRemoveCountry(key)}
                    >
                      Remove country and links
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {showLinks && (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {country.links.map((link, i) => (
                    <tr key={i}>
                      <td>{link.name}</td>
                      <td>{link.url}</td>
                      <td>
                        <i
                          className="fa fa-times text-danger d-inline clickable"
                          onClick={() => handleLinkRemove(key, link.name)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                  {showEdit(country) && (
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="linkName"
                          ref={linkName}
                          onChange={(e) =>
                            handleLinkEdit(key, 'name', e.target.value)
                          }
                          placeholder="Enter name"
                          required
                        />
                        <ErrorMessage
                          errors={country.errors || {}}
                          field="name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="linkURL"
                          ref={linkURL}
                          onChange={(e) =>
                            handleLinkEdit(key, 'url', e.target.value)
                          }
                          placeholder="Enter url"
                          required
                        />
                        <ErrorMessage
                          errors={country.errors || {}}
                          field="url"
                        />
                      </td>
                      <td>
                        <button
                          type="submit"
                          onClick={() => handleLinkAdd(key)}
                          className="btn primary"
                          disabled={!country.valid}
                        >
                          Add link
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CountryLinks;
