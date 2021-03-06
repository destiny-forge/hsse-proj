import React from 'react';
import { withRouter } from 'react-router';
import withAuth from '../withAuth';
import Select from 'react-select';

import _ from 'lodash';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ArticleService from '../../services/ArticleService';
import AppraisalService from '../../services/AppraisalService';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import Radio from '../../components/atoms/Radio';
import { hse, sse } from './data';

import validate from './validate';

const STATUSES = [
  { value: 'In progress', label: 'In progress' },
  { value: 'Data entry complete', label: 'Data entry complete' },
];

const ANSWERS = ['Yes', 'No', "Can't answer", 'Not applicable'];

class AppraisalForm extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;
    const questions = type === 'hse' ? hse.questions : sse.questions;

    this.state = {
      _id: null,
      article: '',
      status: 'In progress',
      notInEnglish: false,
      noFreeFullText: false,
      type,
      questions,
      errors: {},
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
    const { checked, name } = e.target;

    this.setState({
      [name]: checked,
    });
  };

  handleQuestionChange(name, value) {
    const questions = _.clone(this.state.questions);
    let question = _.find(questions, { key: name });
    question.value = value;

    this.setState({
      questions,
    });
  }

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

        this.Appraisal.get(shortId, user.id).then((result) => {
          const appraisal = result.data;
          if (!_.isNull(appraisal)) {
            const questions = _.clone(this.state.questions);

            appraisal.questions.forEach((q) => {
              const question = _.find(questions, { key: q.key });
              question.value = q.value;
            });

            this.setState({
              _id: appraisal._id,
              notInEnglish: appraisal.notInEnglish,
              noFreeFullText: appraisal.noFreeFullText,
              status: appraisal.status,
              questions,
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* code duplication here and EligibilityForm.js */
  getAssignmentRole(user, article) {
    const { eligibility } = article.stages;
    let juniorAssigned = false;
    if (!_.isUndefined(eligibility['junior'])) {
      juniorAssigned = eligibility.junior.email === user.email;
    }
    return juniorAssigned ? 'junior' : 'senior';
  }

  notifyDone = () => toast.success('Appraisal completed!');

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      article,
      type,
      status,
      _id,
      notInEnglish,
      noFreeFullText,
    } = this.state;
    const { user } = this.props;

    const questions = this.state.questions.map((q) => {
      return {
        key: q.key,
        value: q.value,
      };
    });

    let formData = {
      type: type,
      action: 'coding',
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      role: this.getAssignmentRole(user, article),
      questions,
      status,
      notInEnglish,
      noFreeFullText,
      complicated: notInEnglish || noFreeFullText,
    };

    if (_id != null) {
      formData._id = _id;
    }

    validate(formData)
      .then(() => {
        this.setState({ valid: true, errors: {} });

        this.Appraisal.create(formData)
          .then((res) => {
            this.props.history.replace(
              `/batch/articles/appraisals/${article.batchId}`
            );
            window.location.reload();
            this.notifyDone();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((errors) => this.setState({ errors, valid: false }));
  };

  render() {
    const { article, questions, errors } = this.state;

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
              <div className="col-sm-10">
                <label className="form-check-label">
                  <input
                    checked={this.state.notInEnglish}
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
                    checked={this.state.noFreeFullText}
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
              {questions.map((question, i) => (
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
                      <div className="btn-group-toggle" data-toggle="buttons">
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

            <fieldset>
              <legend>AMSTAR Status</legend>
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

export default withRouter(withAuth(AppraisalForm));
