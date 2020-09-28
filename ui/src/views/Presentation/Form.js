import React from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import withAuth from '../withAuth';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import ArticleService from '../../services/ArticleService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { hse, sse } from '../Eligibility/data';

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

class PresentationForm extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.types = this.types.filter((type) => type.value.indexOf('No,') !== 0);
    this.questionTypes =
      type === 'hse' ? hse.questionTypes : sse.questionTypes || [];

    this.state = {
      articleId: null,
      status: null,
      liveDate: 'N/A',
      generalFocus: false,
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    //this.Monthly = MonthlyService({fetch: this.props.fetch });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { shortId } = this.props.match.params;
    const { user } = this.props;

    //let filters = Object.assign({}, this.state.filters);
    //const categories = Object.keys(this.treeData);

    this.Article.get(shortId).then((res) => {
      if (res.data != null) {
        const { status } = res.data;

        this.setState({
          article: res.data,
          loaded: true,
          status: status == 'created' ? 'Data Entry Complete' : status,
        });
      }
    });
  }

  handleDocumentType = (docType) => {
    this.handleChange('selectedDocumentType', docType);
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    const { article, _id, type, loaded, errors } = this.state;
    return (
      <div className="padding">
        <div className="box">
          <div className="box-body">
            <fieldset>
              <legend>General Information</legend>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref ID</label>
                <div className="col-sm-10"></div>
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
                      (opt) => opt.value === this.state.refType
                    )}
                    name="refType"
                    onChange={(opt) => this.handleDocumentType(opt.value)}
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
                      (opt) => opt.value === this.state.selectedDocumentType
                    )}
                    name="selectedDocumentType"
                    onChange={(opt) => this.handleDocumentType(opt.value)}
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
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows="5" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Authors</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows="5" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Author Email</label>
                <div className="col-sm-10">
                  <input name="authorEmail" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pub Date</label>
                <div className="col-sm-10">
                  <input name="pubDate" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Citation (EN)</label>
                <div className="col-sm-10">
                  <textarea
                    name="citationEN"
                    className="form-control"
                    rows="5"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Citation (FR)</label>
                <div className="col-sm-10">
                  <textarea
                    name="citationFR"
                    className="form-control"
                    rows="5"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Keywords</label>
                <div className="col-sm-10">text keywords...</div>
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
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Journal</label>
                <div className="col-sm-10">
                  <input name="journal" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Volume</label>
                <div className="col-sm-10">
                  <input name="volume" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Issue</label>
                <div className="col-sm-10">
                  <input name="issue" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Start Page</label>
                <div className="col-sm-10">
                  <input name="startPage" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">End Page</label>
                <div className="col-sm-10">
                  <input name="endPage" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Editors</label>
                <div className="col-sm-10">
                  <textarea name="editors" className="form-control" rows="5" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pub Place</label>
                <div className="col-sm-10">
                  <input name="pubPlace" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Publisher</label>
                <div className="col-sm-10">
                  <input name="publisher" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Abstract</label>
                <div className="col-sm-10">
                  <textarea name="abstract" className="form-control" rows="5" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  Unique ID (DOI)
                </label>
                <div className="col-sm-10">
                  <input name="uidDOI" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">AMSTAR</label>
                <div className="col-sm-10">
                  <div>
                    <Select
                      value={''}
                      name="amstarSource"
                      onChange={() => {}}
                      options={[]}
                      isSearchable
                      isRequired
                    />
                  </div>
                  <div>
                    Score:{' '}
                    <Select
                      value={''}
                      name="amstarNumerator"
                      onChange={() => {}}
                      options={[]}
                      isSearchable
                      isRequired
                    />{' '}
                    of{' '}
                    <Select
                      value={''}
                      name="amstarDenominator"
                      onChange={() => {}}
                      options={[]}
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
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Cochrane?</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={this.state.cochrane}
                      type="checkbox"
                      className="form-check-input"
                      name="cochrane"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Cochrane
                  </label>
                  <Select
                    value={''}
                    name="cochraneIssue"
                    onChange={() => {}}
                    options={[]}
                    isSearchable
                    isRequired
                  />{' '}
                  <Select
                    value={''}
                    name="cochraneYear"
                    onChange={() => {}}
                    options={[]}
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
                      checked={this.state.generalFocus}
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
                      checked={this.state.generalFocus}
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
                      checked={this.state.generalFocus}
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
            <fieldset>
              <legend>Hyperlinks</legend>
              <div>Link to Free Full-text (Test Link)</div>
              <div>[input field goes here]</div>
            </fieldset>
            <fieldset>
              <legend>Scientific Abstracts</legend>
              <table>
                <thead>
                  <th>Link Name</th>
                  <th>Link URL</th>
                </thead>
                <tbody>
                  <tr>
                    <td>PubMed</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Cochrane Library</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Publisher</td>
                    <td>http:///</td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
            <fieldset>
              <legend>User Friendly Summaries</legend>
              <table>
                <thead>
                  <th>
                    Australasian Cochrane Centre Policy Liaison Initiative
                  </th>
                  <th>Link URL</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Cochrane Library (plain language summaries)</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Database of Review of Effects</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Effective Health Care Research Programme Consortium</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Health-Evidence.ca</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Health Knowledge Network</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>International Initiative for Impact Evaluation</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Reproductive Health Library</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Rx for Change</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>SUPPORT</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>European Observatory on Health Systems and Policies</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>SHARE</td>
                    <td>http:///</td>
                  </tr>
                  <tr>
                    <td>Evidence for Equity (E4E)</td>
                    <td>http:///</td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
            <fieldset>
              <legend>Countries / Included Studies</legend>
              Simply embed the existing component :)
            </fieldset>
            <fieldset>
              ... The filters treeview categories rendered here
            </fieldset>
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(PresentationForm));
