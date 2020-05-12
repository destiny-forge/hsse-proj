import _ from 'lodash';
import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import ArticleService from '../../services/ArticleService';
import { toast } from 'react-toastify';
import Radio from './Radio';
import 'react-toastify/dist/ReactToastify.min.css';

class QualityAppraisalForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: 'hse',
      article: '',
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
      question11: '',

    };

    this.handleChange = this.handleChange.bind(this);

    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  handleChange(e) {
    const {
      name,
      value,
    } = e.target;

    console.log(name, value);

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    const { shortId } = this.props.match.params;

    this.Article.get(shortId)
      .then(res => {
        if (res.success) {
          this.setState({
            article: res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  notifyDone = () => toast.success("Eligibility completed!");

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      article,
      type,
    } = this.state;

    const { user } = this.props;

    let formData = {
      type: type,
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
    };

    console.log(formData);
  }

  render() {
    const { 
      article,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
      question11,
     } = this.state;

    const answers = ["Yes", "No", "Can't Answer", "Not Applicable"]
    
    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>{article.title}</h2>
            <small>Ref Id: {article.shortId}</small>
          </div>
          <div className="box-body">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-block mt-3">
                    <label>
                      <b>1. Was an 'a priori' design provided? </b><br/>
                      <em className="cap">
                        The research question and inclusion criteria should be established before the conduct of the 
                        review. Note: Need to refer to a protocol, ethics approval, or pre-determined/a priori 
                        published research objectives to score a "yes."
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question1"
                        handleChange={this.handleChange}
                        value={question1}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>2. Was there duplicate study selection and data extraction? </b><br />
                      <em className="cap">
                        There should be at least two independent data extractors and a consensus procedure for disagreements 
                        should be in place. Note: 2 people do study selection, 2 people do data extraction, consensus process 
                        or one person checks the other’s work.
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question2"
                        handleChange={this.handleChange}
                        value={question2}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>3. Was a comprehensive literature search performed?  </b><br />
                      <em className="cap">
                        At least two electronic sources should be searched. The report must include years and databases used 
                        (e.g., Central, EMBASE, and MEDLINE). Key words and/or MESH terms must be stated and where feasible the 
                        search strategy should be provided. All searches should be supplemented by consulting current contents, 
                        reviews, textbooks, specialized registers, or experts in the particular field of study, and by reviewing 
                        the references in the studies found. Note: If at least 2 sources + one supplementary strategy used, 
                        select “yes” (Cochrane register/Central counts as 2 sources; a grey literature search counts as supplementary).
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question3"
                        handleChange={this.handleChange}
                        value={question3}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(QualityAppraisalForm));