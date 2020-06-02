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

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>4. Was the status of publication (i.e. grey literature) not used as an inclusion criterion? </b><br />
                      <em className="cap">
                        The authors should state that they searched for reports regardless of their publication type. The authors 
                        should state whether or not they excluded any reports (from the systematic review), based on their publication 
                        status, language etc. Note: If review indicates that there was a search for “grey literature” or “unpublished 
                        literature,” indicate “yes.” SIGLE database, dissertations, conference proceedings, and trial registries 
                        are all considered grey for this purpose. If searching a source that contains both grey and non-grey, 
                        must specify that they were searching for grey/unpublished lit.
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question4"
                        handleChange={this.handleChange}
                        value={question4}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>5. Was a list of studies (included and excluded) provided? </b><br />
                      <em className="cap">
                        A list of included and excluded studies should be provided. 
                        Note: Acceptable if the excluded studies are referenced. If there is an electronic link to the list but the 
                        link is dead, select “no.”
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question5"
                        handleChange={this.handleChange}
                        value={question5}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>6. Were the characteristics of the included studies provided?</b><br />
                      <em className="cap">
                        In an aggregated form such as a table, data from the original studies should be provided on the 
                        participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed 
                        e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases 
                        should be reported. Note: Acceptable if not in table format as long as they are described as above.
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question6"
                        handleChange={this.handleChange}
                        value={question6}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>7. Was the scientific quality of the included studies assessed and documented?</b><br />
                      <em className="cap">
                        'A priori' methods of assessment should be provided (e.g., for effectiveness studies if the author(s) chose 
                        to include only randomized, double-blind, placebo controlled studies, or allocation concealment as inclusion 
                        criteria); for other types of studies alternative items will be relevant. Note: Can include use of a quality 
                        scoring tool or checklist, e.g., Jadad scale, risk of bias, sensitivity analysis, etc., or a description of 
                        quality items, with some kind of result for EACH study (“low” or “high” is fine, as long as it is clear which 
                        studies scored “low” and which scored “high”; a summary score/range for all studies is not acceptable).
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question7"
                        handleChange={this.handleChange}
                        value={question7}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>8. Was the scientific quality of the included studies used appropriately in formulating conclusions? </b><br />
                      <em className="cap">
                        The results of the methodological rigor and scientific quality should be considered in the analysis and the 
                        conclusions of the review, and explicitly stated in formulating recommendations. Note: Might say something 
                        such as “the results should be interpreted with caution due to poor quality of included studies.” Cannot score 
                        “yes” for this question if scored “no” for question 7.
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question8"
                        handleChange={this.handleChange}
                        value={question8}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>9. Were the methods used to combine the findings of studies appropriate? </b><br />
                      <em className="cap">
                        For the pooled results, a test should be done to ensure the studies were combinable, to assess their 
                        homogeneity (i.e., Chi-squared test for homogeneity, I2). If heterogeneity exists a random effects model 
                        should be used and/or the clinical appropriateness of combining should be taken into consideration (i.e., is 
                        it sensible to combine?). Note: Indicate “yes” if they mention or describe heter
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question9"
                        handleChange={this.handleChange}
                        value={question9}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3">
                    <label>
                      <b>10. Was the likelihood of publication bias assessed?</b><br />
                      <em className="cap">
                        An assessment of publication bias should include a combination of graphical aids (e.g., funnel plot, 
                        other available tests) and/or statistical tests (e.g., Egger regression test, Hedges-Olken). 
                        Note: If no test values or funnel plot included, score “no”. Score “yes” if mentions that publication bias 
                        could not be assessed because there were fewer than 10 included studies.
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question10"
                        handleChange={this.handleChange}
                        value={question10}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-block mt-3 pt-3 mb-3 pb-3">
                    <label>
                      <b>11. Was the conflict of interest included?</b><br />
                      <em className="cap">
                        Potential sources of support should be clearly acknowledged in both the systematic review and the 
                        included studies. Note: To get a “yes,” must indicate source of funding or support for the systematic 
                        review AND for each of the included studies.
                      </em>
                    </label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <Radio
                        name="question11"
                        handleChange={this.handleChange}
                        value={question11}
                        radioValues={answers}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
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