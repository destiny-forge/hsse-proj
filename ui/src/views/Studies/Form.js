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

import CountryLinks from '../../components/molecules/CountryLinks';

import validate from './validate';

const STATUSES = [
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Data Entry Complete', label: 'Data Entry Complete' },
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

  handleLinkChange = (countryLinks) => {
    this.setState({ countryLinks });
  };

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
        const data = this.cleanFormData(formData);

        this.Study.create(data)
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

  cleanFormData = (formData) => {
    for (let country in formData.countryLinks) {
      const item = formData.countryLinks[country];
      delete item.link;
      delete item.errors;
      delete item.valid;
    }
    return formData;
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

            <CountryLinks
              initialLinks={this.state.countryLinks}
              onChange={this.handleLinkChange}
            />

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
