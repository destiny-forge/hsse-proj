import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import DatePicker from 'react-datepicker';
import BatchService from '../../services/BatchService';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

const ARTICLE_SOURCES = [
  { value: 'referrals', label: 'Referrals' },
  { value: 'handSearches', label: 'Hand Searches' },
  { value: 'cochrane', label: 'Cochrane' },
  { value: 'plusSR', label: 'PLUS SR' },
  { value: 'pubMedSR', label: 'PubMed SR' },
  { value: 'lilacsSREE', label: 'LILACS SR & EE' },
  { value: 'plusEE', label: 'PLUS EE' },
  { value: 'pubMedEE', label: 'PubMed EE' },
  {
    value: 'healthSystemHealthReformDescriptions',
    label: 'Health System and Health Reform Descriptions'
  },
  { value: 'other', label: 'Other' }
];

const LANGUAGES = [
  { value: 'english', label: 'English' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'russian', label: 'Russian' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'other', label: 'Other' }
];

class BatchUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harvestDate: Date.now(),
      selectedArticleSource: null,
      selectedLanguage: null,
      complete: false
    };

    this.Batch = BatchService({ fetch: this.props.fetch });
  }

  handleHarvestDate = date => {
    this.setState({
      harvestDate: date
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    const upload = {
      type: 'sse',
      fileUrl: this.state.fileUrl,
      source: this.state.selectedArticleSource.value,
      language: this.state.selectedLanguage.value,
      harvested: this.state.harvestDate
    }

    if (this.state.complete) {
      this.Batch.create(upload);
      this.props.history.replace('/articles');
    }
  };

  handleChangeStatus = ({ file, meta: { name } }, status) => {
    if (status === 'done') {
      this.Batch.signedUrl({
        type: 'sse'
      })
      .then(res => {
        fetch(
          new Request(res.data.url, {
            method: 'PUT',
            body: file,
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          })
        ).then(res => {
          if (res.ok) {
            this.setState({
              fileUrl: res.url,
              complete: true
            })
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  render() {
    const {
      selectedArticleSource,
      selectedLanguage
    } = this.state;

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>Batch Upload</h2>
            <small>Drag and drop multiple files to upload</small>
          </div>
          <div className="box-body">
            <form>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="inputState" className="d-block">
                    Article Source
                  </label>
                  <Select
                    value={selectedArticleSource}
                    onChange={(value) => this.handleChange('selectedArticleSource', value)}
                    options={ARTICLE_SOURCES}
                    isSearchable
                  /> 
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="inputState" className="d-block">
                    Languages
                  </label>
                  <Select
                    value={selectedLanguage}
                    onChange={(value) => this.handleChange('selectedLanguage', value)}
                    options={LANGUAGES}
                    isSearchable
                  /> 
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="published">Harvest Date</label>
                  <DatePicker
                    className="form-control"
                    name="published"
                    selected={this.state.harvestDate}
                    onChange={this.handleHarvestDate}
                  />
                </div>
              </div>
              <div className="dropzone white b-a b-3x b-dashed b-primary p-a rounded p-5 text-center mb-3">
                <Dropzone
                  maxFiles={1}
                  onChangeStatus={this.handleChangeStatus}
                  onSubmit={this.handleSubmit}
                  styles={{ dropzone: { minHeight: 10, maxHeight: 30 } }}
                />
              </div>
              <button
                type="submit"
                disabled={!this.state.complete}
                className="btn primary"
                onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(BatchUpload));
