import React from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import withAuth from '../withAuth';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import ArticleService from '../../services/ArticleService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { hse, sse } from '../Eligibility/data';
import { abstracts, summaries } from './data/';
import EditLinkTable from '../../components/atoms/EditLinkTable';
import EligibilityService from '../../services/EligibilityService';
import TreeView from '../../components/molecules/TreeView';
import _ from 'lodash';

const STATUSES = [
  { value: 'Data Entry Complete', label: 'Data Entry Complete' },
  { value: 'Live', label: 'Live' },
  { value: 'Deleted', label: 'Deleted' },
];

const REF_TYPES = [
  { value: 'Journal', label: 'Journal' },
  { value: 'Book (Whole)', label: 'Book (Whole)' },
  { value: 'Book (Chapter)', label: 'Book (Chapter)' },
];

const AMSTAR_SOURCES = [
  {
    label: 'No rating tool available for this type of document',
    value: 'No rating tool available for this type of document',
  },
  { label: 'Not yet available', value: 'Not yet available' },
  {
    label: 'See the user-friendly summary',
    value: 'See the user-friendly summary',
  },
  {
    label: 'AMSTAR rating from McMaster Health Forum',
    value: 'AMSTAR rating from McMaster Health Forum',
  },
  {
    label: 'AMSTAR rating from Program in Policy Decision-making',
    value: 'AMSTAR rating from Program in Policy Decision-making',
  },
  {
    label: 'AMSTAR rating from www.rxforchange.ca',
    value: 'AMSTAR rating from www.rxforchange.ca',
  },
];

const AMSTAR_NUMERATORS = [...Array(12)].map((_, i) => {
  return { label: i, value: i };
});
const AMSTAR_DENOMINATORS = [...Array(8)].map((_, i) => {
  return { label: i + 4, value: i + 4 };
});

const ISSUES = [...Array(11)].map((_, i) => {
  const text = `issue ${i}`;
  return { label: text, value: text };
});

const currentYear = new Date().getFullYear();
const ISSUE_YEARS = [...Array(currentYear - 1995)].map((_, i) => {
  const year = `${currentYear - i}`;
  return { label: year, value: year };
});

const languages = { en: '', fr: '' };

class PresentationForm extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.tree = type === 'hse' ? hse.tree : sse.tree;
    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.types = this.types.filter((type) => type.value.indexOf('No,') !== 0);
    this.questionTypes =
      type === 'hse' ? hse.questionTypes : sse.questionTypes || [];

    this.state = {
      loaded: false,
      article: null,
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Eligibility = EligibilityService({ fetch: this.props.fetch });
    this.handleLinkUpdate = this.handleLinkUpdate.bind(this);
    this.handleTreeChange = this.handleTreeChange.bind(this);
    //this.Monthly = MonthlyService({fetch: this.props.fetch });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { shortId } = this.props.match.params;

    this.Article.get(shortId).then((res) => {
      if (res.data != null) {
        const article = res.data;
        const filtersArray = _.get(
          article.stages.eligibility,
          'data.filters',
          []
        );
        this.setState({
          article,
          filtersArray,
          loaded: true,
        });
      }
    });
  }

  handleChange = (field, value) => {
    this.setState({
      article: {
        ...this.state.article,
        [field]: value,
      },
    });
  };

  handleDocumentType = (docType) => {
    this.handleChange('selectedDocumentType', docType);
  };

  handleTextChange = (e) => {
    const { name, value } = e.target;
    this.handleChange(name, value);
  };

  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    this.handleChange(name, checked);
  };

  handleCitationChange = (e) => {
    const { name, value } = e.target;
    let language = name.split('-')[1];

    let citations = {
      ...this.state.article.citations,
      [language]: value,
    };
    this.handleChange('citations', citations);
  };

  handleLinkUpdate(field, key, value) {
    let links = {
      ...this.state.article[field],
      [key]: value,
    };
    this.handleChange(field, links);
  }

  handleTreeChange(selectedItems) {
    this.setState({ filters: selectedItems });
  }

  handleSave = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { article, loaded, errors } = this.state;
    if (!loaded) {
      return null;
    }
    return (
      <div className="padding">
        <div className="box">
          <div className="box-body">
            <fieldset>
              <legend>General Information</legend>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref ID</label>
                <div className="col-sm-10">{article.shortId}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Update Date</label>
                <div className="col-sm-10">
                  <Select
                    value={''}
                    name="monthlyUpdate"
                    onChange={() => {}}
                    options={[]}
                    isSearchable
                    isRequired
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live Date</label>
                <div className="col-sm-4">
                  {/*<Select
                    value={this.types.filter(
                      (opt) => opt.value === this.state.selectedDocumentType
                    )}
                    name="selectedDocumentType"
                    onChange={(opt) => this.handleDocumentType(opt.value)}
                    options={this.types}
                    isSearchable
                    isRequired
                  />*/}
                </div>
                <div className="col-sm-4"></div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref Type</label>
                <div className="col-sm-10">
                  <Select
                    value={REF_TYPES.filter(
                      (opt) => opt.value === article.referenceType
                    )}
                    name="referenceType"
                    onChange={(opt) =>
                      this.handleChange('referenceType', opt.value)
                    }
                    options={REF_TYPES}
                    isSearchable
                    isRequired
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Document Type</label>
                <div className="col-sm-10">
                  <Select
                    value={this.types.filter(
                      (opt) => opt.value === article.documentType
                    )}
                    name="documentType"
                    onChange={(opt) =>
                      this.handleChange('documentType', opt.value)
                    }
                    options={this.types}
                    isSearchable
                    isRequired
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Question Type</label>
                <div className="col-sm-10">
                  <Select
                    value={this.questionTypes.filter(
                      (opt) => opt.value === article.questionType
                    )}
                    name="questionType"
                    onChange={(opt) =>
                      this.handleChange('questionType', opt.value)
                    }
                    options={this.questionTypes}
                    isSearchable
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    onChange={this.handleTextChange}
                    value={article.title}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Authors</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    onChange={this.handleTextChange}
                    value={article.authors}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Author Email</label>
                <div className="col-sm-10">
                  <input
                    name="authorEmail"
                    className="form-control"
                    value={article.authorAddress}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pub Date</label>
                <div className="col-sm-10">
                  <input
                    name="pubDate"
                    className="form-control"
                    text={article.ePubDate}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Citation (EN)</label>
                <div className="col-sm-10">
                  <textarea
                    name="citation-en"
                    className="form-control"
                    rows="5"
                    onChange={this.handleCitationChange}
                    value={(article.citations && article.citations['en']) || ''}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Citation (FR)</label>
                <div className="col-sm-10">
                  <textarea
                    name="citation-fr"
                    className="form-control"
                    rows="5"
                    onChange={this.handleCitationChange}
                    value={(article.citations && article.citations['fr']) || ''}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Keywords</label>
                <div className="col-sm-10">{article.keywords}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Custom Keywords
                </label>
                <div className="col-sm-10">
                  <textarea
                    name="customKeywords"
                    className="form-control"
                    rows="5"
                    onChange={this.handleTextChange}
                    value={article.customKeywords}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Journal</label>
                <div className="col-sm-10">
                  <input
                    name="journal"
                    className="form-control"
                    value={article.journal}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Volume</label>
                <div className="col-sm-10">
                  <input
                    name="volume"
                    className="form-control"
                    value={article.volume}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Issue</label>
                <div className="col-sm-10">
                  <input
                    name="issue"
                    className="form-control"
                    value={article.issue}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Start Page</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    name="startPage"
                    className="form-control"
                    value={article.startPage}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">End Page</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    name="endPage"
                    className="form-control"
                    value={article.endPage}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Editors</label>
                <div className="col-sm-10">
                  <textarea
                    name="editors"
                    className="form-control"
                    rows="5"
                    onChange={this.handleTextChange}
                    value={article.editors}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pub Place</label>
                <div className="col-sm-10">
                  <input
                    name="pubPlace"
                    className="form-control"
                    value={article.pubPlace}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Publisher</label>
                <div className="col-sm-10">
                  <input
                    name="publisher"
                    className="form-control"
                    value={article.publisher}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Abstract</label>
                <div className="col-sm-10">
                  <textarea
                    name="abstract"
                    className="form-control"
                    rows="5"
                    onChange={this.handleTextChange}
                    value={article.abstract}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Unique ID (DOI)
                </label>
                <div className="col-sm-10">
                  <input
                    name="DOI"
                    className="form-control"
                    value={article.DOI}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">AMSTAR</label>
                <div className="col-sm-10">
                  <div>
                    <Select
                      value={AMSTAR_SOURCES.filter(
                        (opt) => opt.value === article.amstarSource
                      )}
                      name="amstarSource"
                      onChange={() => {}}
                      options={AMSTAR_SOURCES}
                      isSearchable
                      isRequired
                    />
                  </div>
                  <div>
                    Score:{' '}
                    <Select
                      value={AMSTAR_NUMERATORS.filter(
                        (opt) => opt.value === article.amstarNumerator
                      )}
                      name="amstarNumerator"
                      onChange={() => {}}
                      options={AMSTAR_NUMERATORS}
                      isSearchable
                      isRequired
                    />{' '}
                    of{' '}
                    <Select
                      value={AMSTAR_DENOMINATORS.filter(
                        (opt) => opt.value === article.amstarDenominator
                      )}
                      name="amstarDenominator"
                      onChange={() => {}}
                      options={AMSTAR_DENOMINATORS}
                      isSearchable
                      isRequired
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">MeSH Terms</label>
                <div className="col-sm-10">
                  <textarea
                    name="meshTerms"
                    className="form-control"
                    rows="5"
                    onChange={this.handleTextChange}
                    value={article.meshTerms}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Last Lit Search
                </label>
                <div className="col-sm-10">
                  <DatePicker
                    className="form-control"
                    name="lastLitDate"
                    selected={this.state.lastLitDate}
                    onChange={this.handleDatePicker}
                    value={article.lastLitDate}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Cochrane?</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={article.isCochrane}
                      type="checkbox"
                      className="form-check-input"
                      name="cochrane"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Cochrane
                  </label>
                  <Select
                    value={ISSUES.filter(
                      (opt) => opt.value === article.cochraneIssue
                    )}
                    name="cochraneIssue"
                    onChange={() => {}}
                    options={ISSUES}
                    isSearchable
                    isRequired
                  />{' '}
                  <Select
                    value={ISSUE_YEARS.filter(
                      (opt) => opt.value === article.cochraneYear
                    )}
                    name="cochraneYear"
                    onChange={() => {}}
                    options={ISSUE_YEARS}
                    isSearchable
                    isRequired
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">EPOC Review?</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={article.isEpocReview}
                      type="checkbox"
                      className="form-check-input"
                      name="epocReview"
                      onChange={this.handleCheckbox}
                    />{' '}
                    EPOC Review
                  </label>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">General</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={article.generalFocus}
                      type="checkbox"
                      className="form-check-input"
                      name="generalFocus"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Check this box if record should be marked as General (versus
                    the default of Specific)
                  </label>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Hot Docs?</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={article.isHotDocs}
                      type="checkbox"
                      className="form-check-input"
                      name="hotDoc"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Check this box if this record is a 'hot doc'
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>PDF Text</legend>
              <div>
                Note: Let's make this it's own component - also add
                multi-language support
              </div>
              <div>Upload PDF [Choose File] No file chosen [Upload]</div>
              <div>
                PDF Text | The current PDF text is 147492 characters long
              </div>
            </fieldset>

            <EditLinkTable
              title="Hyperlinks"
              field="hyperlinks"
              items={Object.assign(languages, article.hyperlinks)}
              onUpdate={this.handleLinkUpdate}
              isTestable={true}
            />

            <EditLinkTable
              title="Scientific Abstracts"
              field="abstracts"
              items={Object.assign(abstracts, article.abstracts)}
              onUpdate={this.handleLinkUpdate}
            />

            <EditLinkTable
              title="User Friendly Summaries"
              field="summaries"
              items={Object.assign(summaries, article.summaries)}
              onUpdate={this.handleLinkUpdate}
            />

            <fieldset>
              <legend>Countries / Included Studies</legend>
              Simply embed the existing component :)
            </fieldset>

            <TreeView
              tree={this.tree}
              selectedItems={this.state.filtersArray}
              onChange={this.handleTreeChange}
            />

            <fieldset>
              <legend>Information for evidence briefs</legend>
              Note: I don't think this fieldset is even required - refer to the
              document
            </fieldset>
            <fieldset>
              <legend>Article Status</legend>
              <Select
                value={STATUSES.filter(
                  (opt) => opt.value === this.state.status
                )}
                name="status"
                onChange={(opt) =>
                  this.handleChange('selectedStatus', opt.value)
                }
                options={STATUSES}
                isSearchable
              />
              New article = New, still having content added, not visible in
              searches Data entry complete = All required content has been
              added, still not visible in searches Live = Available for
              searching/alerting Deleted = Removed from the system, not visible
              in searches
              <div>
                If an article is deleted, please enter the reason for removal
                (in case its removal is questioned later):
                <textarea
                  name="deletedReason"
                  className="form-control"
                  rows="5"
                />
              </div>
            </fieldset>
            <button
              type="submit"
              onClick={this.handleSave}
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

export default withRouter(withAuth(PresentationForm));
