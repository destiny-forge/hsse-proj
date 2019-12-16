import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader'
import withAuth from '../withAuth';
import { withRouter } from 'react-router';

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
      files: []
    }
  }

  onDrop(files) {
    console.log("files ", files);
  }

  handleSubmit(files, allFiles) {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove());
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
              <div className="dropzone white b-a b-3x b-dashed b-primary p-a rounded p-5 text-center">
              <Dropzone onDrop={this.onDrop.bind(this)} multiple onSubmit={this.handleSubmit}> 
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                    </div>
                  )}
                </Dropzone>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(BatchUpload));