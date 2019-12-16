import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Datetime from 'react-datetime';

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
  state = {
    selectedSourceOption: '',
    selectedLanguageOption: LANGUAGES[0],
    languages: [],
    articleSources: [],
    files: [],
    file: null,
    harvestDate: new Date()
  }

  onFileChange(event) {
    this.setState({ file: event.target.files[0] });
  }

  onDateChange(event) {
    this.setState({ harvestDate: event._d })
  }

  handleChangeSourceSelect = (selectedSourceOption) => {
    this.setState({ selectedSourceOption });
  }

  handleChangeLanguageSelect = (selectedLanguageOption) => {
    this.setState({ selectedLanguageOption });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { submitHSEBatchFile, history } = this.props;
    // TODO - this doesn't do anything, this will need to be fixed
    submitHSEBatchFile(this.state, history);
  }

  renderUploadField = ({ input: { value, ...input } }) => {
    return <input
      name="batchfileupload"
      className="form-control"
      value={value === '' && value}
      type="file"
      data-input="false"
      data-btnclass="btn btn-info"
      data-text="UPLOAD"
      data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"
      onChange={this.onFileChange.bind(this)}
      accept="text/plain"
      {...input}
    />
  }

  adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  FileInput = ({ input: { value: omitValue, onChange, onBlur, ...inputProps }, meta: omitMeta, ...props }) => {
    return (
      <input
        onChange={this.onFileChange.bind(this)}
        type="file"
        {...props.input}
        {...props}
      />
    );
  };

  handleChangeSelect = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  onDrop = files => this.setState({ files: files[0] })

  createImageItem = (file, index) => (
    <Col md={3} key={index}>
      <img className="img-fluid mb-2" src={file.preview} alt="Item" />
    </Col>
  )

  render() {
    const {
      selectedLanguageOption,
      selectedSourceOption
    } = this.state;

    const languageValue = selectedLanguageOption && selectedLanguageOption.value;
    const SourceValue = selectedSourceOption && selectedSourceOption.value;

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>Batch Upload</h2>
            <small>Drag and drop multiple files to upload</small>
          </div>
          <div className="box-body">
            <form>
              <button
                type="submit"
                className="btn primary"
                onClick={this.submit}>
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(BatchUpload));