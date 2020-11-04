import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import withAuth from '../withAuth';

import validate from './validate';
import { hse, sse } from '../Eligibility/data';
import { abstracts, summaries } from './data/';

import ArticleService from '../../services/ArticleService';
import EditLinkTable from '../../components/atoms/EditLinkTable';
import EligibilityService from '../../services/EligibilityService';
import TreeView from '../../components/molecules/TreeView';
import CountryLinks from '../../components/molecules/CountryLinks';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import 'react-toastify/dist/ReactToastify.min.css';
import PDFUploadLinks from '../../components/atoms/PDFUploadLinks';

const STATUSES = [
  { value: 'New Article', label: 'New Article' },
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
  const text = `Issue ${i + 1}`;
  return { label: text, value: i + 1 };
});

const currentYear = new Date().getFullYear();
const ISSUE_YEARS = [...Array(currentYear - 1995)].map((_, i) => {
  const year = `${currentYear - i}`;
  return { label: year, value: parseInt(year) };
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
      type,
      loaded: false,
      article: null,
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Eligibility = EligibilityService({ fetch: this.props.fetch });
    this.handleLinkUpdate = this.handleLinkUpdate.bind(this);
    this.handlePDFLinks = this.handlePDFLinks.bind(this);
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
        this.setState({
          article,
          filtersArray: article.filters || [],
          initialLinks: article.countryLinks || {},
          loaded: true,
        });
      }
    });
  }

  handleDayMonthYear = (e) => {
    const { name, value } = e.target;
    let lastLitSearch = this.state.article.lastLitSearch;
    if (typeof lastLitSearch !== 'object' || lastLitSearch === null) {
      lastLitSearch = {};
    }
    lastLitSearch = {
      ...lastLitSearch,
      [name]: parseInt(value),
    };
    this.handleChange('lastLitSearch', lastLitSearch);
  };

  handleChange = (field, value) => {
    this.setState({
      article: {
        ...this.state.article,
        [field]: value,
      },
    });
  };

  handleTextChange = (e) => {
    const { name, value } = e.target;
    this.handleChange(name, value);
  };

  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    this.handleChange(name, checked);
  };

  handleProducerChange = (field, value) => {
    let producer = {
      ...this.state.article.producer,
      [field]: value,
    };
    this.handleChange('producer', producer);
  };

  handleProducerCheckbox = (e) => {
    const { name, checked } = e.target;
    let producer = {
      ...this.state.article.producer,
      [name]: checked,
    };
    this.handleChange('producer', producer);
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

  handleLinkChange = (countryLinks) => {
    this.handleChange('countryLinks', countryLinks);
  };

  handlePDFLinks = (pdfLinks) => {
    this.handleChange('pdfLinks', pdfLinks);
  };

  handleTreeChange(selectedItems) {
    let filters = [];
    Object.keys(selectedItems).forEach((key) => {
      selectedItems[key].forEach((k) => {
        filters.push(k);
      });
    });
    this.handleChange('filters', filters);
  }

  handleSave = (e) => {
    e.preventDefault();
    const { type, article } = this.state;

    const formData = this.cleanData({
      ...article,
    });

    validate(formData)
      .then(() => {
        this.setState({ valid: true, errors: {} });

        this.Article.create(formData)
          .then((res) => {
            this.props.history.replace(`/${type}/presentation`);
            this.notifyDone();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((errors) => this.setState({ errors, valid: false }));
  };

  buildCitation = (language) => {
    //book|chapter = Authors. Title. Editors. Pub place, Publishers, Pub date: Start page-End page
    //journal|article = Authors. Title. Journal. Pub date; Volume (Issue): Start page-End page.
    const {
      referenceType,
      authors,
      title,
      journal,
      editors,
      pubPlace,
      publisher,
      ePubDate,
      volume,
      issue,
      startPage,
      endPage,
      citations,
    } = this.state.article;

    const bookCitation = `${authors || '[authors]'}. ${title || '[title]'}. ${
      editors || '[editors]'
    }. ${pubPlace || '[pubPlace]'}, ${publisher || '[publisher]'}, ${
      ePubDate || '[ePubDate]'
    }; ${startPage || '[startPage]'}-${endPage || '[endPage]'}.`;

    const journalCitation = `${authors || '[authors]'}. ${
      title || '[title]'
    }. ${journal || '[journal]'}. ${ePubDate || '[ePubDate]'}; ${
      volume || '[volume]'
    } (${issue || '[issue]'}): ${startPage || '[startPage]'}-${
      endPage || '[endPage]'
    }.`;

    const newCitations = {
      ...citations,
      [language]: referenceType === 'Journal' ? journalCitation : bookCitation,
    };
    this.handleChange('citations', newCitations);
  };

  cleanData(article) {
    const fieldsToOmit = [
      'stages',
      'batchId',
      'batchName',
      'shortId',
      'lost',
      'published',
    ];
    return _.omit(article, fieldsToOmit);
  }

  notifyDone = () => toast.success('Presentation details successfully saved!');

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
                    isDisabled={true}
                  />
                  Note: Currently disabled until monthly update is implemented.
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live Date</label>
                <div className="col-sm-4">{}</div>
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
                    name="title"
                    onChange={this.handleTextChange}
                    value={article.title}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Notes</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="notes"
                    onChange={this.handleTextChange}
                    value={article.notes}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Authors</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="authors"
                    onChange={this.handleTextChange}
                    value={article.authors}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pub Date</label>
                <div className="col-sm-10">
                  <input
                    name="ePubDate"
                    className="form-control"
                    value={article.ePubDate}
                    onChange={this.handleTextChange}
                  />
                </div>
              </div>

              {article.referenceType === 'Journal' && (
                <React.Fragment>
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
                </React.Fragment>
              )}

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

              {article.referenceType === 'Book (Chapter)' ||
                (article.referenceType === 'Book (Whole)' && (
                  <React.Fragment>
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
                      <label className="col-sm-2 col-form-label">
                        Pub Place
                      </label>
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
                      <label className="col-sm-2 col-form-label">
                        Publisher
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="publisher"
                          className="form-control"
                          value={article.publisher}
                          onChange={this.handleTextChange}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Citation (EN)
                  <button onClick={() => this.buildCitation('en')}>
                    build
                  </button>
                </label>
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

              {article.documentType !== 'Systematic reviews being planned' && (
                <React.Fragment>
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
                    <label className="col-sm-2 col-form-label">
                      MeSH Terms
                    </label>
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
                </React.Fragment>
              )}

              {(article.documentType === 'Overviews of systematic reviews' ||
                article.documentType === 'Systematic reviews of effects' ||
                article.documentType ===
                  'Systematic reviews addressing other questions') && (
                <React.Fragment>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">AMSTAR</label>
                    <div className="col-sm-3">
                      <div>
                        <Select
                          value={AMSTAR_SOURCES.filter(
                            (opt) => opt.value === article.rating
                          )}
                          name="rating"
                          placeholder="Select Rating Source"
                          onChange={(opt) =>
                            this.handleChange('rating', opt.value)
                          }
                          options={AMSTAR_SOURCES}
                          isSearchable
                          isRequired
                        />
                      </div>
                    </div>

                    <label className="col-sm-1 col-form-label">Score: </label>
                    <div className="col-sm-2">
                      <Select
                        value={AMSTAR_NUMERATORS.filter(
                          (opt) => opt.value === article.amstarNumerator
                        )}
                        name="amstarNumerator"
                        placeholder="Select Numerator"
                        onChange={(opt) =>
                          this.handleChange('amstarNumerator', opt.value)
                        }
                        options={AMSTAR_NUMERATORS}
                        isSearchable
                        isRequired
                      />
                    </div>
                    <label className="col-sm-1 col-form-label">of </label>
                    <div className="col-sm-2">
                      <Select
                        value={AMSTAR_DENOMINATORS.filter(
                          (opt) => opt.value === article.amstarDenominator
                        )}
                        name="amstarDenominator"
                        placeholder="Select Denominator"
                        onChange={(opt) =>
                          this.handleChange('amstarDenominator', opt.value)
                        }
                        options={AMSTAR_DENOMINATORS}
                        isSearchable
                        isRequired
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Last Lit Search
                    </label>
                    <div className="col-sm-2">
                      <input
                        name="year"
                        type="number"
                        className="form-control"
                        value={_.get(article.lastLitSearch, 'year', '')}
                        onChange={this.handleDayMonthYear}
                        placeholder="yyyy"
                      />
                    </div>
                    <div className="col-sm-2">
                      <input
                        name="month"
                        type="number"
                        className="form-control"
                        value={_.get(article.lastLitSearch, 'month', '')}
                        onChange={this.handleDayMonthYear}
                        placeholder="MM"
                        min="1"
                        max="12"
                      />
                    </div>
                    <div className="col-sm-2">
                      <input
                        name="day"
                        type="number"
                        className="form-control"
                        value={_.get(article.lastLitSearch, 'day', '')}
                        onChange={this.handleDayMonthYear}
                        placeholder="dd"
                        min="1"
                        max="31"
                      />
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
                          name="isHotDocs"
                          onChange={this.handleCheckbox}
                        />{' '}
                        Check this box if this record is a 'hot doc'
                      </label>
                    </div>
                  </div>
                </React.Fragment>
              )}

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
                <label className="col-sm-2 col-form-label">Producer?</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={_.get(article, 'producer.cochrane', false)}
                      type="checkbox"
                      className="form-check-input"
                      name="cochrane"
                      onChange={this.handleProducerCheckbox}
                    />{' '}
                    Cochrane
                  </label>
                  <br />
                  <label className="form-check-label">
                    <input
                      checked={_.get(article, 'producer.campbell', false)}
                      type="checkbox"
                      className="form-check-input"
                      name="campbell"
                      onChange={this.handleProducerCheckbox}
                    />{' '}
                    Cambell Library
                  </label>
                  <div className="form-group row sub-form-group">
                    <div className="col-sm-3">
                      <Select
                        value={ISSUES.filter(
                          (opt) =>
                            opt.value === _.get(article, 'producer.issue', null)
                        )}
                        name="issue"
                        placeholder="Select Issue"
                        onChange={(opt) =>
                          this.handleProducerChange('issue', opt.value)
                        }
                        options={ISSUES}
                        isSearchable
                        isRequired
                        isDisabled={
                          !_.get(article, 'producer.cochrane', false) &&
                          !_.get(article, 'producer.campbell', false)
                        }
                      />
                    </div>
                    <div className="col-sm-3">
                      <Select
                        value={ISSUE_YEARS.filter(
                          (opt) =>
                            opt.value === _.get(article, 'producer.year', null)
                        )}
                        name="year"
                        placeholder="Select Year"
                        onChange={(opt) =>
                          this.handleProducerChange('year', opt.value)
                        }
                        options={ISSUE_YEARS}
                        isSearchable
                        isRequired
                        isDisabled={
                          !_.get(article, 'producer.cochrane', false) &&
                          !_.get(article, 'producer.campbell', false)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            {article.documentType !== 'Systematic reviews being planned' && (
              <React.Fragment>
                <PDFUploadLinks
                  title="PDF Links"
                  type={article.type}
                  items={article.pdfLinks || {}}
                  onUpdate={this.handlePDFLinks}
                  svcFetch={this.props.fetch}
                />

                <EditLinkTable
                  title="Full-text report"
                  field="hyperlinks"
                  items={Object.assign(languages, article.hyperlinks)}
                  onUpdate={this.handleLinkUpdate}
                  isTestable={true}
                />
              </React.Fragment>
            )}

            {article.documentType !== 'Systematic reviews being planned' &&
              article.documentType !== 'Systematic reviews in progress' && (
                <React.Fragment>
                  <EditLinkTable
                    title="Scientific Abstracts"
                    field="abstracts"
                    items={Object.assign(abstracts, article.abstracts)}
                    onUpdate={this.handleLinkUpdate}
                    isTestable={true}
                  />

                  <EditLinkTable
                    title="User Friendly Summaries"
                    field="summaries"
                    items={Object.assign(summaries, article.summaries)}
                    onUpdate={this.handleLinkUpdate}
                    isTestable={true}
                  />
                </React.Fragment>
              )}

            <fieldset>
              <legend>Countries / Included Studies</legend>
              <CountryLinks
                initialLinks={this.state.initialLinks}
                onChange={this.handleLinkChange}
              />
            </fieldset>

            <TreeView
              tree={this.tree}
              selectedItems={this.state.filtersArray}
              onChange={this.handleTreeChange}
            />

            <fieldset>
              <legend>Article Status</legend>
              <div className="form-group row">
                <div className="col-sm-6">
                  <Select
                    value={STATUSES.filter(
                      (opt) => opt.value === article.status
                    )}
                    name="status"
                    onChange={(opt) => this.handleChange('status', opt.value)}
                    options={STATUSES}
                    isSearchable
                  />
                  <br />
                  <div>
                    If an article is deleted, please enter the reason for
                    removal (in case its removal is questioned later):
                    <textarea
                      name="deletedReason"
                      value={article.deletedReason}
                      className="form-control"
                      rows="5"
                      onChange={this.handleTextChange}
                      disabled={article.status !== 'Deleted'}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li>
                      <b>New article</b> - New, still having content added, not
                      visible in searches
                    </li>
                    <li>
                      <b>Data entry complete</b> - All required content has been
                      added, still not visible in searches
                    </li>
                    <li>
                      <b>Live</b> - Available for searching/alerting Deleted =
                      Removed from the system, not visible in searches
                    </li>
                  </ul>
                </div>
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
