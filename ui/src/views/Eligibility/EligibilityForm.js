import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router';
import Select from 'react-select';
import { toast } from 'react-toastify';
import withAuth from '../withAuth';
import ArticleService from '../../services/ArticleService';
import EligibilityService from '../../services/EligibilityService';
import { hse, sse } from './data';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import 'react-toastify/dist/ReactToastify.min.css';
import validate from './validate';
import TreeView from '../../components/molecules/TreeView';

const STATUSES = [
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Data Entry Complete', label: 'Data Entry Complete' },
];

class EligibilityForm extends React.Component {
  constructor(props) {
    super(props);
    const { type } = this.props.match.params;

    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.questionTypes =
      type === 'hse' ? hse.questionTypes : sse.questionTypes || [];
    this.tree = type === 'hse' ? hse.tree : sse.tree;

    this.state = {
      loaded: false,
      _id: null,
      type: type,
      article: '',
      generalFocus: false,
      selectedStatus: 'In Progress',
      eligible: true,
      errors: {},
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Eligibility = EligibilityService({ fetch: this.props.fetch });
    this.handleTreeChange = this.handleTreeChange.bind(this);
  }

  handleDocumentType = (docType) => {
    this.handleChange('selectedDocumentType', docType);
    this.setStatusAndEligibility(docType);
  };

  setStatusAndEligibility = (docType) => {
    const eligible = docType.indexOf('not eligible') === -1;
    const selectedStatus = !eligible
      ? 'Data Entry Complete'
      : this.state.selectedStatus;
    this.setState({ eligible, selectedStatus });
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleCheckbox = (e) => {
    const { checked, name } = e.target;

    this.setState({
      [name]: checked,
    });
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { shortId } = this.props.match.params;
    const { user } = this.props;

    this.Article.get(shortId)
      .then((res) => {
        if (res.success) {
          this.setState({
            article: res.data,
            loaded: true,
          });

          this.Eligibility.get(shortId, user.id).then((result) => {
            const eligibility = result.data;
            if (!_.isNull(eligibility)) {
              this.setState({
                _id: eligibility._id,
                generalFocus: eligibility.generalFocus,
                questionType: eligibility.questionType,
                selectedStatus: eligibility.selectedStatus,
                selectedDocumentType: eligibility.documentType,
                relevant: eligibility.relevant,
                filtersArray: eligibility.filters,
              });

              this.setStatusAndEligibility(eligibility.documentType || '');
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  notifyDone = () => toast.success('Eligibility successfully saved!');

  getAssignmentRole(user, article) {
    const { eligibility } = article.stages;
    let juniorAssigned = false;
    if (!_.isUndefined(eligibility['junior'])) {
      juniorAssigned = eligibility.junior.email === user.email;
    }
    return juniorAssigned ? 'junior' : 'senior';
  }

  handleTreeChange(selectedItems) {
    this.setState({ filters: selectedItems });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props;

    const {
      filters,
      article,
      type,
      generalFocus,
      selectedDocumentType,
      questionType,
      selectedStatus,
    } = this.state;

    let formData = {
      type: type,
      action: 'coding',
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      generalFocus: generalFocus,
      questionType: questionType,
      role: this.getAssignmentRole(user, article),
      documentType: selectedDocumentType,
      selectedStatus: selectedStatus,
      filters: [],
    };

    if (this.state._id != null) {
      formData._id = this.state._id;
    }

    Object.keys(filters).forEach((key) => {
      filters[key].forEach((k) => {
        formData.filters.push(k);
      });
    });

    validate(formData, filters)
      .then(() => {
        this.setState({ valid: true, errors: {} });

        this.Eligibility.create(formData)
          .then((res) => {
            this.props.history.replace(
              `/batch/articles/eligibility/${article.batchId}`
            );
            this.notifyDone();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((errors) => this.setState({ errors, valid: false }));
  };

  updateRelevance(event) {
    event.persist();
    const { name, checked } = event.target;
    const relevant = name === 'yesRelevant' ? checked : !checked;
    const { user } = this.props;
    const { article, type, _id } = this.state;
    const data = {
      articleId: article._id,
      userId: user.id,
      role: this.getAssignmentRole(user, article),
      type: type,
      action: 'coding',
      relevant: relevant,
      selectedStatus: !relevant ? 'Data Entry Complete' : 'In Progress',
      generalFocus: false,
      completed: !relevant,
    };
    if (_id !== null) {
      data._id = _id;
    }
    this.Eligibility.create(data).then((res) => {
      if (!relevant) {
        this.props.history.replace(
          `/batch/articles/eligibility/${article.batchId}`
        );
        this.notifyDone();
      } else {
        this.getData();
      }
    });
  }

  render() {
    const {
      article,
      _id,
      type,
      eligible,
      relevant,
      loaded,
      errors,
    } = this.state;

    if (!loaded) {
      return null;
    }

    if (!_id || (_id && !relevant)) {
      let q1 =
        type === 'hse'
          ? 'Is the document relevant to health system governance, financial or delivery arrangements (or implementation strategies)?'
          : 'Is the document relevant to social systems program and service areas?';
      return (
        <div className="padding">
          <div className="box">
            <div className="box-header">
              <h2>{article.title}</h2>
              <small>Ref Id: {article.shortId}</small>
            </div>
            <div className="box-body">
              <fieldset>
                <legend>Relevance</legend>
                <label>{q1}</label>
                <br />
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="yesRelevant"
                    value="yes"
                    checked={_id && relevant}
                    onChange={(e) => this.updateRelevance(e)}
                  />{' '}
                  Yes &nbsp;
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="notRelevant"
                    value="no"
                    checked={_id && !relevant}
                    onChange={(e) => this.updateRelevance(e)}
                  />{' '}
                  No
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="padding">
          <div className="box">
            <div className="box-header">
              <h2>{article.title}</h2>
              <small>Ref Id: {article.shortId}</small>
            </div>
            <div className="box-body">
              <fieldset>
                <legend>General Information</legend>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Ref id</label>
                  <div className="col-sm-10">{article.shortId}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Live date</label>
                  <div className="col-sm-10">N/A</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Document type
                  </label>
                  <div className="col-sm-4">
                    <Select
                      value={this.types.filter(
                        (opt) => opt.value === this.state.selectedDocumentType
                      )}
                      name="selectedDocumentType"
                      onChange={(opt) => this.handleDocumentType(opt.value)}
                      options={this.types}
                      isSearchable
                      isRequired
                    />
                  </div>
                  <div className="col-sm-4">
                    <ErrorMessage errors={errors} field="documentType" />
                  </div>
                </div>
                {eligible && (
                  <div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Question type
                      </label>
                      <div className="col-sm-4">
                        <Select
                          value={this.questionTypes.filter(
                            (opt) => opt.value === this.state.questionType
                          )}
                          name="questionType"
                          onChange={(opt) =>
                            this.handleChange('questionType', opt.value)
                          }
                          options={this.questionTypes}
                          isSearchable
                        />
                      </div>
                      <div className="col-sm-4">
                        <ErrorMessage errors={errors} field="questionType" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        General focus?
                      </label>
                      <div className="col-sm-10">
                        <label className="form-check-label">
                          <input
                            checked={this.state.generalFocus}
                            type="checkbox"
                            className="form-check-input"
                            name="generalFocus"
                            onChange={this.handleCheckbox}
                          />{' '}
                          Yes, this article has a general focus (review
                          definition and code accordingly, noting that the
                          default is set to specific)
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </fieldset>

              {eligible && (
                <TreeView
                  tree={this.tree}
                  selectedItems={this.state.filtersArray}
                  onChange={this.handleTreeChange}
                />
              )}

              <fieldset>
                <legend>Coding Status</legend>
                <form>
                  <div className="form-group row">
                    <div className="col-sm-4">
                      <Select
                        value={STATUSES.filter(
                          (opt) => opt.value === this.state.selectedStatus
                        )}
                        name="selectedStatus"
                        onChange={(opt) =>
                          this.handleChange('selectedStatus', opt.value)
                        }
                        options={STATUSES}
                        isSearchable
                        isDisabled={!eligible}
                      />
                    </div>
                    <ul>
                      <li>
                        <b>In Progress</b> = Still having content added, not
                        visible in searches
                      </li>
                      <li>
                        <b>Data Entry Complete</b> = All required content has
                        been added, still not visible in searches
                      </li>
                    </ul>
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
}

export default withRouter(withAuth(EligibilityForm));
