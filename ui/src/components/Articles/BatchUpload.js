import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader'
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import DatePicker from 'react-datepicker';

const ARTICLE_SOURCES = [
  { value: 'referrals', label: 'Referrals' },
  { value: 'handSearches', label: 'Hand Searches' },
  { value: 'cochrane', label: 'Cochrane' },
  { value: 'plusSR', label: 'PLUS SR' },
  { value: 'pubMedSR', label: 'PubMed SR' },
  { value: 'lilacsSREE', label: 'LILACS SR & EE' },
  { value: 'plusEE', label: 'PLUS EE' },
  { value: 'pubMedEE', label: 'PubMed EE' },
  { value: 'healthSystemHealthReformDescriptions', label: 'Health System and Health Reform Descriptions' },
  { value: 'other', label: 'Other' }
]

const LANGUAGES = [
  { value: 'english', label: 'English' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'russian', label: 'Russian' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'other', label: 'Other' }
]

class BatchUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      harvestDate: Date.now()
    }
  }

  onDrop(files) {
    console.log("files ", files);
  }

  handleHarvestDate = date => {
    this.setState({
      harvestDate: date
    });
  };

  handleSubmit(files, allFiles) {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove());
  }

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  }

  render() {
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
                  <label htmlFor="inputState" className="d-block">Article Source</label>
                  <select id="inputState" className="custom-select w-100">
                    <option defaultValue="selected">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col-md-6">
                  <label htmlFor="inputState" className="d-block">Languages</label>
                  <select id="inputState" className="custom-select w-100">
                    <option defaultValue="selected">Choose...</option>
                    <option>...</option>
                  </select>
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
              <div className="dropzone white b-a b-3x b-dashed b-primary p-a rounded p-5 text-center">
                <Dropzone
                  maxFiles={1}
                  onChangeStatus={this.handleChangeStatus}
                  onSubmit={this.handleSubmit}
                  styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(BatchUpload));