import React from 'react';
import { withRouter } from 'react-router';
import withAuth from '../withAuth';
import Select from 'react-select';

import _ from 'lodash';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ArticleService from '../../services/ArticleService';
import StudyService from '../../services/StudyService';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import { countries } from './data/countries';

import validate from './validate';
import validateLink from './validateLink';

const STATUSES = [
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Complete', label: 'Complete' },
];

class StudyForm extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.state = {
      _id: null,
      type,
      article: '',
      status: 'In Progress',
      notInEnglish: false,
      noFreeFullText: false,
      largeReview: false,
      countriesNotReported: false,
      countryNotFocus: false,
      country: 0,
      count: '',
      focus: false,
      countryLinks: {},
      errors: {},
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Study = StudyService({ fetch: this.props.fetch });
  }

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleTextChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckbox = (e) => {
    const { checked, name } = e.target;

    this.setState({
      [name]: checked,
    });
  };

  handleAddCountry = (e) => {
    e.preventDefault();
    const { country, count, focus, countryLinks } = this.state;
    let { label, value } = _.find(countries, { value: country });

    if (label in countryLinks) {
      alert('Cannot add the same country twice');
      return;
    }

    let updated = _.clone(countryLinks);
    updated[label] = {
      id: value,
      count,
      focus,
      links: [],
    };

    this.setState({
      countryLinks: updated,
      country: 0,
      focus: false,
    });
  };

  handleToggleFocus = (key) => {
    const { countryLinks } = this.state;
    let updated = _.clone(countryLinks);
    let entry = updated[key];
    entry.focus = !entry.focus;
    this.setState({ countryLinks: updated });
  };

  handleRemoveCountry = (key) => {
    let confirmed = window.confirm(
      'Are you sure you want to remove this country and links?'
    );
    if (!confirmed) {
      return;
    }
    const { countryLinks } = this.state;
    let updated = _.clone(countryLinks);
    delete updated[key];
    this.setState({ countryLinks: updated });
  };

  handleLinkEdit = (key, field, value) => {
    const { countryLinks } = this.state;
    const updated = _.clone(countryLinks);
    const country = updated[key];
    _.set(country, `link.${field}`, value);

    validateLink(country.link)
      .then(() => {
        country.errors = {};
        country.valid = true;
        this.setState({ countryLinks: updated });
      })
      .catch((errors) => {
        country.errors = errors;
        country.valid = false;
        this.setState({ countryLinks: updated });
      });
  };

  handleLinkAdd = (key) => {
    const { countryLinks } = this.state;
    const updated = _.clone(countryLinks);
    const country = updated[key];
    const { name, url } = country.link;

    country.links.push({ name, url });
    country.link = {};
    country.valid = false;

    this.setState({
      countryLinks: updated,
    });
  };

  handleLinkRemove = (key, name) => {
    let confirmed = window.confirm(
      'Are you sure you want to remove this link?'
    );
    if (!confirmed) {
      return;
    }
    const { countryLinks } = this.state;
    const updated = _.clone(countryLinks);
    const country = updated[key];
    country.links = country.links.filter((link) => link.name !== name);
    this.setState({
      countryLinks: updated,
    });
  };

  componentDidMount() {
    const { shortId } = this.props.match.params;
    const { user } = this.props;

    this.Article.get(shortId)
      .then((res) => {
        if (res.success) {
          this.setState({
            article: res.data,
          });
        }

        this.Study.get(shortId, user.id).then((result) => {
          if (!_.isNull(result.data)) {
            const {
              _id,
              notInEnglish,
              noFreeFullText,
              largeReview,
              countriesNotReported,
              countryNotFocus,
              status,
              countryLinks,
            } = result.data;
            this.setState({
              _id,
              notInEnglish,
              noFreeFullText,
              largeReview,
              countriesNotReported,
              countryNotFocus,
              status,
              countryLinks,
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  notifyDone = () => toast.success('Study saved successfully.');

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      article,
      type,
      status,
      _id,
      notInEnglish,
      noFreeFullText,
      largeReview,
      countriesNotReported,
      countryNotFocus,
      countryLinks,
    } = this.state;
    const { user } = this.props;

    let formData = {
      type: type,
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      status,
      notInEnglish,
      noFreeFullText,
      countriesNotReported,
      countryNotFocus,
      largeReview,
      countryLinks,
      complicated: notInEnglish || noFreeFullText || largeReview,
    };

    if (_id != null) {
      formData._id = _id;
    }

    validate(formData)
      .then(() => {
        this.setState({ valid: true, errors: {} });

        this.Study.create(formData)
          .then((res) => {
            this.props.history.replace(
              `/batch/articles/studies/${article.batchId}`
            );
            this.notifyDone();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((errors) => this.setState({ errors, valid: false }));
  };

  render() {
    const {
      article,
      notInEnglish,
      noFreeFullText,
      largeReview,
      countriesNotReported,
      countryNotFocus,
      country,
      focus,
      countryLinks,
      errors,
    } = this.state;

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>{article.title}</h2>
            <small>Ref Id: {article.shortId}</small>
          </div>
          <div className="box-body">
            <fieldset>
              <legend>Complicated reviews</legend>
              <div className="pl10">
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={notInEnglish}
                      type="checkbox"
                      className="form-check-input"
                      name="notInEnglish"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Not in English
                  </label>
                </div>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={noFreeFullText}
                      type="checkbox"
                      className="form-check-input"
                      name="noFreeFullText"
                      onChange={this.handleCheckbox}
                    />{' '}
                    No free full text
                  </label>
                </div>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={largeReview}
                      type="checkbox"
                      className="form-check-input"
                      name="largeReview"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Large review
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Countries / Included Studies</legend>
              <div>
                Countries in which studies were conducted or that are the focus
                of the document
                <div className="pl10">
                  <div className="col-sm-10">
                    <label className="form-check-label">
                      <input
                        checked={countriesNotReported}
                        type="checkbox"
                        className="form-check-input"
                        name="countriesNotReported"
                        onChange={this.handleCheckbox}
                      />{' '}
                      Countries were not reported in detail
                    </label>
                  </div>
                  <div className="col-sm-10">
                    <label className="form-check-label">
                      <input
                        checked={countryNotFocus}
                        type="checkbox"
                        className="form-check-input"
                        name="countryNotFocus"
                        onChange={this.handleCheckbox}
                      />{' '}
                      This document does not have a specific country focus
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

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
                        onChange={(opt) =>
                          this.handleChange('country', opt.value)
                        }
                        options={countries}
                        isSearchable
                      />
                    </td>
                    <td style={{ width: '20%' }}>
                      <input
                        type="text"
                        className="form-control"
                        name="count"
                        onChange={this.handleTextChange}
                        placeholder="Enter count"
                        required
                      />
                    </td>
                    <td style={{ width: '20%' }}>
                      <input
                        checked={focus}
                        type="checkbox"
                        name="focus"
                        onChange={this.handleCheckbox}
                      />
                    </td>
                    <td style={{ width: '20%' }}>
                      <button
                        type="submit"
                        onClick={this.handleAddCountry}
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

            {Object.keys(countryLinks).map((key) => {
              const country = countryLinks[key];
              return (
                <div className="box" key={key}>
                  <div className="box-header primary">
                    <h2>
                      {key} ({country.count},{' '}
                      {country.focus ? (
                        <i className="fa fa-check text-success d-inline"></i>
                      ) : (
                        <i className="fa fa-times text-danger d-inline"></i>
                      )}{' '}
                      focus)
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
                            onClick={() => this.handleToggleFocus(key)}
                          >
                            Toggle focus
                          </div>
                          <div
                            className="dropdown-item"
                            onClick={() => this.handleRemoveCountry(key)}
                          >
                            Remove country and links
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
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
                              onClick={() =>
                                this.handleLinkRemove(key, link.name)
                              }
                            ></i>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="linkName"
                            value={_.get(country, 'link.name', '')}
                            onChange={(e) =>
                              this.handleLinkEdit(key, 'name', e.target.value)
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
                            value={_.get(country, 'link.url', '')}
                            onChange={(e) =>
                              this.handleLinkEdit(key, 'url', e.target.value)
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
                            onClick={() => this.handleLinkAdd(key)}
                            className="btn primary"
                            disabled={!country.valid}
                          >
                            Add link
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}

            <fieldset>
              <legend>Linking Status</legend>
              <form>
                <div className="form-group row">
                  <div className="col-sm-4">
                    <Select
                      value={STATUSES.filter(
                        (opt) => opt.value === this.state.status
                      )}
                      name="status"
                      onChange={(opt) => this.handleChange('status', opt.value)}
                      options={STATUSES}
                      isSearchable
                    />
                  </div>
                </div>
              </form>
            </fieldset>
            {Object.keys(errors).length > 0 && (
              <fieldset>
                <legend style={{ color: 'red' }}>
                  Missing Required Fields
                </legend>
                <div>Please complete all required fields and re-submit.</div>
                <div className="box-body">
                  {Object.keys(errors).map((key) => (
                    <div key={key}>
                      <ErrorMessage errors={errors} field={key} />
                    </div>
                  ))}
                </div>
              </fieldset>
            )}
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(StudyForm));
