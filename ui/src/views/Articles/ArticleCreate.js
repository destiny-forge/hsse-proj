import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import ArticleService from '../../services/ArticleService';
import validate from './validate';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePickerInput = ({ value, onClick }) => (
  <input className="form-control" onClick={onClick} value={value} />
);

class ArticleCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {
        title: '',
        authors: '',
        journal: '',
        type: '',
        source: 'Single article from referrals',
        published: new Date(),
      },
      errors: [],
    };

    this.change = this.change.bind(this);
    this.handlePublished = this.handlePublished.bind(this);
    this.submit = this.submit.bind(this);
    this.hasError = this.hasError.bind(this);

    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  change = (e) => {
    const { name, value } = e.target;

    this.setState({
      article: { ...this.state.article, [name]: value },
    });
  };

  handlePublished = (date) => {
    const published = new Date(date.getFullYear(), 0, 1);
    this.setState({
      article: { ...this.state.article, published },
    });
  };

  notifyDone = () => toast.success('Article created successfully.');

  submit = (e) => {
    e.preventDefault();
    const { article } = this.state;
    const { ok, errors } = validate(article);

    if (ok) {
      this.Article.create(article).then((res) => {
        this.setState({ errors: [] });
        this.props.history.replace(
          `/${this.state.article.type}/eligibility?t=${Date.now()}`
        );
        this.notifyDone();
      });
    } else {
      console.log(errors);
      this.setState({ errors });
    }
  };

  hasError = (field, value) => {
    return this.state.errors[field] === value;
  };

  render() {
    const { source, published } = this.state.article;

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>Add Single Article</h2>
            <small>Basic Article Information</small>
          </div>
          <div className="box-body">
            <form>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.change}
                    placeholder="Enter title"
                    required
                  />
                  {this.hasError('title', 'required') && (
                    <div className="alert alert-danger">Field is required</div>
                  )}
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="authors">Authors</label>
                  <input
                    type="text"
                    className="form-control"
                    name="authors"
                    onChange={this.change}
                    placeholder="Enter author(s)"
                    required
                  />
                  {this.hasError('authors', 'required') && (
                    <div className="alert alert-danger">Field is required</div>
                  )}
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-3">
                  <label htmlFor="source" className="d-block">
                    Type
                  </label>
                  <select
                    name="type"
                    className="custom-select"
                    onChange={this.change}
                    required
                  >
                    <option value="">Please select</option>
                    <option value="hse">HSE</option>
                    <option value="sse">SSE</option>
                  </select>
                  {this.hasError('type', 'required') && (
                    <div className="alert alert-danger">Field is required</div>
                  )}
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-3">
                  <label htmlFor="published">Published Year</label>
                  <DatePicker
                    name="year"
                    selected={published}
                    onChange={this.handlePublished}
                    showYearPicker
                    dateFormat="yyyy"
                    customInput={<CustomDatePickerInput />}
                  />
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="journal">Journal</label>
                  <input
                    type="text"
                    className="form-control"
                    name="journal"
                    onChange={this.change}
                    placeholder="Enter journal"
                    required
                  />
                  {this.hasError('journal', 'required') && (
                    <div className="alert alert-danger">Field is required</div>
                  )}
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="source" className="d-block">
                    Article Source
                  </label>
                  <select
                    name="source"
                    className="custom-select"
                    onChange={this.change}
                    required
                  >
                    <option value="Single article from referrals">
                      Single article from referrals
                    </option>
                    <option value="Single article from other sources">
                      Single article from other sources
                    </option>
                  </select>
                  {this.hasError('source', 'required') && (
                    <div className="alert alert-danger">Field is required</div>
                  )}
                </div>
              </div>
              {source === 'Single article from referrals' && (
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Notes</label>
                  <div className="col-sm-12">
                    <textarea
                      name="notes"
                      className="form-control"
                      onChange={this.change}
                      rows="5"
                    />
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="btn primary"
                onClick={this.submit}
              >
                Add Article
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(ArticleCreate));
