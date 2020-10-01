import _ from 'lodash';
import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import ArticleService from '../../services/ArticleService';
import AppraisalService from '../../services/AppraisalService';
import { hse, sse } from './data';
import { toast } from 'react-toastify';
import Radio from '../../components/atoms/Radio';
import 'react-toastify/dist/ReactToastify.min.css';

const ANSWERS = ['Yes', 'No', "Can't answer", 'Not applicable'];

class Conflicts extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;
    const questions = type === 'hse' ? hse.questions : sse.questions;

    this.state = {
      type: type,
      article: null,
      questions,
      left: {
        appraisal: '',
        questions,
      },
      right: {
        appraisal: '',
        questions,
      },
      conflicts: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Appraisal = AppraisalService({ fetch: this.props.fetch });
  }

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    this.updateAppraisal(name, checked);
  };

  handleQuestionChange(name, value) {
    let questions = _.clone(this.state.left.questions);
    let question = _.find(questions, { key: name });
    question.value = value;
    questions = questions.map((question) => {
      return { key: question.key, value: question.value };
    });
    this.updateAppraisal('questions', questions);
  }

  componentDidMount() {
    this.compare();
  }

  updateAppraisal(field, value) {
    const { user } = this.props;
    const { type, article, left } = this.state;

    let formData = {
      _id: left.appraisal._id,
      articleId: article._id,
      userId: user.id,
      type: type,
      [field]: value,
    };

    this.Appraisal.create(formData)
      .then((_res) => {
        this.compare();
        this.notifySuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  compare() {
    const { shortId } = this.props.match.params;
    const { user } = this.props;

    let conflicts = [];
    this.Article.get(shortId).then((result) => {
      if (result.success) {
        const article = result.data;

        this.setState({
          article,
        });

        this.Appraisal.compare(article._id)
          .then((res) => {
            if (res.success) {
              conflicts = res.data.map((conflict) => {
                return conflict.path[1] || conflict.path[0];
              });

              this.setState({ conflicts });

              const { junior, senior } = article.stages.appraisals;
              const theirId = junior._id === user.id ? senior._id : junior._id;

              this.getAppraisal(shortId, user.id, 'left');
              this.getAppraisal(shortId, theirId, 'right');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  getAppraisal(shortId, userId, side) {
    this.Appraisal.get(shortId, userId).then((result) => {
      const appraisal = result.data;
      const questions = this.getAppraisalQuestionState(appraisal);

      let state = {
        [side]: {
          appraisal,
          questions,
          notInEnglish: appraisal.notInEnglish,
          noFreeFullText: appraisal.noFreeFullText,
        },
      };

      this.setState(state);
    });
  }

  getAppraisalQuestionState(appraisal) {
    const questions = _.clone(appraisal.questions);
    return _.map(questions, (question) => {
      const { title, description } = _.find(this.state.questions, {
        key: question.key,
      });
      return _.assign(question, {
        title,
        description,
      });
    });
  }

  notifyDone = () => toast.success('Appraisal conflicts resolved!');
  notifySuccess = () => toast.success('Successfully saved!');

  getAssignmentRole(user, article) {
    const stage = article.stages.appraisals;
    let juniorAssigned = false;
    if (!_.isUndefined(stage['junior'])) {
      juniorAssigned = stage.junior.email === user.email;
    }
    return juniorAssigned ? 'junior' : 'senior';
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { article } = this.state;

    this.Appraisal.resolve(article._id).then((_result) => {
      this.notifyDone();
      this.props.history.replace(
        `/batch/articles/appraisals/${article.batchId}`
      );
    });
  };

  getConflictBG(key) {
    return _.includes(this.state.conflicts, key) ? '#FFBABA' : '#90ee90';
  }

  render() {
    const { article, left, right } = this.state;
    if (article == null || !left.appraisal) {
      return null;
    }

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>{article.title}</h2>
            <small>Ref Id: {article.shortId}</small>
          </div>
          <div className="box-body">
            <fieldset>
              <legend>Article</legend>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref id</label>
                <div className="col-sm-10">{article.shortId}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live date</label>
                <div className="col-sm-10">N/A</div>
              </div>
            </fieldset>

            <div className="row">
              <div className="col-sm-6">
                <h2>Mine</h2>
                <fieldset>
                  <legend>Complicated reviews</legend>
                  <div className="col-sm-10">
                    <label className="form-check-label">
                      <input
                        checked={left.notInEnglish}
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
                        checked={left.noFreeFullText}
                        type="checkbox"
                        className="form-check-input"
                        name="noFreeFullText"
                        onChange={this.handleCheckbox}
                      />{' '}
                      No free full text
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Questions</legend>
                  {left.questions.map((question, i) => (
                    <div key={i} className="row">
                      <div className="col-md-12">
                        <div className="form-block mt-3 mb-3">
                          <label>
                            <b>
                              {i + 1}. {question.title}
                            </b>
                            <br />
                            <em className="cap">{question.description}</em>
                          </label>
                          <div
                            className="btn-group-toggle"
                            data-toggle="buttons"
                          >
                            <Radio
                              name={question.key}
                              handleChange={this.handleQuestionChange}
                              value={question.value}
                              radioValues={ANSWERS}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </fieldset>
              </div>
              <div className="col-sm-6">
                <h2>Theirs</h2>
                <fieldset>
                  <legend>Complicated reviews</legend>
                  <div className="col-sm-10">
                    <label
                      className="form-check-label"
                      style={{ background: this.getConflictBG('notInEnglish') }}
                    >
                      <input
                        checked={right.notInEnglish}
                        type="checkbox"
                        className="form-check-input"
                        name="notInEnglish"
                        disabled={true}
                      />{' '}
                      Not in English
                    </label>
                  </div>
                  <div className="col-sm-10">
                    <label
                      className="form-check-label"
                      style={{
                        background: this.getConflictBG('noFreeFullText'),
                      }}
                    >
                      <input
                        checked={right.noFreeFullText}
                        type="checkbox"
                        className="form-check-input"
                        name="noFreeFullText"
                        disabled={true}
                      />{' '}
                      No free full text
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Questions</legend>
                  {right.questions.map((question, i) => (
                    <div key={i} className="row">
                      <div className="col-md-12">
                        <div className="form-block mt-3 mb-3">
                          <label
                            style={{
                              background: this.getConflictBG(question.key),
                            }}
                          >
                            <b>
                              {i + 1}. {question.title}
                            </b>
                            <br />
                            <em className="cap">{question.description}</em>
                          </label>
                          <div className="btn-group-toggle">
                            <Radio
                              name={question.key}
                              handleChange={() => {}}
                              value={question.value}
                              radioValues={ANSWERS}
                              disabled={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </fieldset>
              </div>
            </div>
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn primary"
              disabled={this.state.conflicts.length > 0}
            >
              Save
            </button>
            {this.state.conflicts.length > 0 && (
              <span
                style={{
                  color: 'red',
                  paddingLeft: 0,
                  paddingRight: '10px',
                  paddingBottom: 0,
                  fontWeight: 'bold',
                }}
              >
                &nbsp; * Conflicts must be resolved before you can save
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Conflicts));
