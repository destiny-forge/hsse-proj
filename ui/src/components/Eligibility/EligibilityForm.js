import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import Select from 'react-select';
import ArticleService from '../../services/ArticleService';

const DOCUMENT_TYPES = [
  { value: 'Evidence briefs for policy', label: 'Evidence briefs for policy' },
  { value: 'Overviews of systematic reviews', label: 'Overviews of systematic reviews' },
  { value: 'Systematic reviews addressing other questions', label: 'Systematic reviews addressing other questions' },
  { value: 'Systematic reviews in progress', label: 'Systematic reviews in progress' },
  { value: 'Systematic reviews being planned', label: 'Systematic reviews being planned' },
  { value: 'Economic evaluations and costing studies', label: 'Economic evaluations and costing studies' },
  { value: 'Health reform descriptions', label: 'Health reform descriptions' },
  { value: 'Health system descriptions', label: 'Health system descriptions' },
  { value: 'Intergovernmental organizations’ health systems documents', label: 'Intergovernmental organizations’ health systems documents' },
  { value: 'Canada’s health systems documents', label: 'Canada’s health systems documents' },
  { value: 'Ontario’s health system documents', label: 'Ontario’s health system documents' },
  { value: 'No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.', label: 'NO, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.' },
];

class EligibilityForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      article: ""
    }

    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  componentDidMount() {
    this.Article.list('hse', 'eligibility', 'pending_assignment')
      .then(res => {
        if (res.success) {
          console.log("res ", res.data);
        }
      })
      .catch(err => {
        console.log(err);
      })  
  }

  render() {
  
    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>Title</h2>
            <small>Ref Id</small>
          </div>
          <div className="box-body">
            <form>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="title">Title</label>
                  Title 1
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="authors">Authors</label>
                  Author 1
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Document type</label>
                <div className="col-sm-10">
                  <Select
                    value="selectedDocumentType"
                    name="selectedDocumentType"
                    options={DOCUMENT_TYPES}
                    isSearchable
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn primary">
                Add Article
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(EligibilityForm));