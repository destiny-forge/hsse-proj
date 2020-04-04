import _ from 'lodash';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import DatePicker from 'react-datepicker';
import BatchService from '../../services/BatchService';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from 'react-router';
import {
  HSE_ARTICLE_SOURCES,
  SSE_ARTICLE_SOURCES,
  HSE_DOCUMENT_TYPES,
  SSE_DOCUMENT_TYPES,
  LANGUAGES
} from "./lib/options";

class BatchUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchName: '',
      harvestDate: Date.now(),
      selectedArticleSource: null,
      selectedLanguage: null,
      documentType: null,
      complete: false,
      redirect: false,
      path: null,
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

    const {
      fileUrl,
      selectedArticleSource,
      documentType,
      selectedLanguage,
      harvestDate,
      complete,
      batchName
    } = this.state;
    
    const upload = {
      type: this.state.article.type,
      fileUrl: fileUrl,
      source: selectedArticleSource.value,
      referenceType: documentType.value,
      language: selectedLanguage.value,
      harvested: harvestDate,
      name: batchName
    }

    if (complete) {
      this.Batch.create(upload)
        .then(res => {
          if (res.success) {
            if (selectedArticleSource.value === 'referrals') {
              this.setState({
                redirect: true,
                path: '/notes',
                articles: res.data
              });  
            } else {
              this.setState({
                redirect: true,
                path: `/${this.state.article.type}`,
                articles: res.data
              });  
            }
            
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  change = e => {
    const { name, value } = e.target;

    this.setState({
      article: { ...this.state.article, [name]: value }
    });
  };

  handleChangeStatus = ({ file, meta: { name } }, status) => {
    if (status === 'done') {
      this.Batch.signedUrl({
        type: this.state.article.type
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
    if (!_.isUndefined(field.target) && field.target.name === 'batchName') {
      const { name, value } = field.target;
      this.setState({
        [name]: value
      })
    } else {
      this.setState({
        [field]: value,
      });
    }
  }

  render() {
    const {
      selectedArticleSource,
      documentType,
      selectedLanguage,
      redirect,
      path,
      articles
    } = this.state;

    if (redirect) {
      return (<Redirect to={{ pathname: path, state: { articles } }} />)
    } else {
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
                  <div className="col-md-2">
                    <label htmlFor="source" className="d-block">
                      Type
                  </label>
                    <select
                      name="type"
                      className="custom-select"
                      onChange={this.change}
                      required
                    >
                      <option value="">
                        Please select
                    </option>
                      <option value="hse">
                        HSE
                    </option>
                      <option value="sse">
                        SSE
                    </option>
                    </select>
                  </div>
                </div>
                <div className="form-group form-row">
                  <div className="col-md-6">
                    <label htmlFor="published">Batch Name</label>
                    <input 
                      type="text"
                      value={this.state.batchName}
                      name="batchName"
                      className="form-control"
                      placeholder='Batch name'
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group form-row">
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="d-block">
                      Please choose a document type for the batch you want to upload.
                    </label>
                    <Select
                      value={documentType}
                      onChange={(value) => this.handleChange('documentType', value)}
                      options={
                        this.state.article &&
                          this.state.article.type === 'sse'
                          ? SSE_DOCUMENT_TYPES
                          : HSE_DOCUMENT_TYPES
                      }
                      isSearchable
                    />
                  </div>
                </div>
                <div className="form-group form-row">
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="d-block">
                      Article Source
                    </label>
                    <Select
                      value={selectedArticleSource}
                      onChange={(value) => this.handleChange('selectedArticleSource', value)}
                      options={
                        this.state.article && 
                        this.state.article.type === 'sse'
                          ? SSE_ARTICLE_SOURCES
                          : HSE_ARTICLE_SOURCES
                      }
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
}

export default withRouter(withAuth(BatchUpload));
