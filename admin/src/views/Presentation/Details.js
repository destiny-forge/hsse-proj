import React from 'react';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import ArticleService from '../../services/ArticleService';
import PresentationService from '../../services/PresentationService';
import Select from 'react-select';
import List from './List';
import { toast } from 'react-toastify';
import { hse, sse } from '../Eligibility/data';
import 'react-toastify/dist/ReactToastify.min.css';

class PresentationDetails extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;
    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.types = this.types.filter((type) => type.value.indexOf('No,') !== 0);

    this.state = {
      type,
      shortId: null,
      articles: [],
      filter: 'all',
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.loadEditForm = this.loadEditForm.bind(this);
    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Presentation = PresentationService({ fetch: this.props.fetch });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleRadio(filter) {
    const { type, documentType } = this.state;
    this.setState({ filter });
    this.searchByDocType(type, filter, documentType);
  }

  handleLoad() {
    const { shortId, type } = this.state;
    this.Article.get(type, shortId).then((res) => {
      if (res.data != null) {
        this.loadEditForm(shortId);
      } else {
        this.notifyNotFound();
      }
    });
  }

  loadEditForm(shortId) {
    const { type } = this.props.match.params;
    this.props.history.replace(`/${type}/presentation/${shortId}`);
  }

  handleDocType(documentType) {
    const { type, filter } = this.state;
    this.setState({ documentType });
    this.searchByDocType(type, filter, documentType);
  }

  searchByDocType(type, filter, documentType) {
    if (documentType != null) {
      this.Presentation.listByDocType(type, documentType, filter).then(
        (res) => {
          if (res.data != null) {
            const articles = res.data;
            this.setState({ articles });
          }
        }
      );
    }
  }

  searchByBatchDesc() {}

  notifyNotFound = () => toast.error('Article with Ref ID not found');

  render() {
    const { filter, articles } = this.state;
    return (
      <div className="padding">
        <div className="box">
          <div className="box-body">
            <div>
              Enter the Ref ID of the article you would like to edit
              <div className="form-group row">
                <div className="col-sm-4">
                  <input
                    name="shortId"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-2">
                  <button
                    type="submit"
                    onClick={this.handleLoad}
                    className="btn primary"
                  >
                    Edit Article
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-4">
                <Select
                  name="documentType"
                  placeholder="Select Document Type"
                  onChange={(opt) => this.handleDocType(opt.value)}
                  options={this.types}
                  isSearchable
                  isRequired
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="filterOptions"
                      value="all"
                      checked={filter === 'all'}
                      onChange={() => this.handleRadio('all')}
                    />{' '}
                    Show all articles
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="filterOptions"
                      value="only"
                      checked={filter === 'only'}
                      onChange={() => this.handleRadio('only')}
                    />{' '}
                    Show only articles needing data entry
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {articles && articles.length > 0 && (
          <div className="box">
            <div className="box-body">
              <List articles={articles} onEdit={this.loadEditForm} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(withAuth(PresentationDetails));
