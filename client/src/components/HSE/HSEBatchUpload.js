import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
//import Dropzone from 'react-dropzone';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Datetime from 'react-datetime';

import * as actions from '../../actions';

const ARTICLE_SOURCES = [
    {value: 'referrals', label: 'Referrals'},
    {value: 'handSearches', label: 'Hand Searches'},
    {value: 'cochrane', label: 'Cochrane'},
    {value: 'plusSR', label: 'PLUS SR'},
    {value: 'pubMedSR', label: 'PubMed SR'},
    {value: 'lilacsSREE', label: 'LILACS SR & EE'},
    {value: 'plusEE', label: 'PLUS EE'},
    {value: 'pubMedEE', label: 'PubMed EE'},
    {value: 'healthSystemHealthReformDescriptions', label: 'Health System and Health Reform Descriptions'},
    {value: 'other', label: 'Other'}
]

const LANGUAGES = [
    {value: 'english', label: 'English'},
    {value: 'arabic', label: 'Arabic'},
    {value: 'chinese', label: 'Chinese'},
    {value: 'french', label: 'French'},
    {value: 'portuguese', label: 'Portuguese'},
    {value: 'russian', label: 'Russian'},
    {value: 'spanish', label: 'Spanish'},
    {value: 'other', label: 'Other'}
]

class HSEBatchUpload extends Component {

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

/*
    onLanguageChange(event) {
        this.setState({ file: event.target.files[0] })
    }

    onArticleSourceChange(event) {
        this.setState({ file: event.target.files[0] })
    }

    onHarvestDateChange(event) {
        this.setState({ file: event.target.files[0] })
    }
*/
    handleChangeSourceSelect = (selectedSourceOption) => {
        this.setState({ selectedSourceOption });
        //console.log(`Selected: ${selectedSourceOption.label}`);
    }

    handleChangeLanguageSelect = (selectedLanguageOption) => {
        this.setState({ selectedLanguageOption });
        //console.log(`Selected: ${selectedLanguageOption.label}`);
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { submitHSEBatchFile, history } = this.props;

        submitHSEBatchFile(this.state, history);

        //console.log(this.state);
        
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
                //onChange={adaptFileEventToValue(onChange)}
                //onBlur={adaptFileEventToValue(onBlur)}
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
            <img className="img-fluid mb-2" src={file.preview} alt="Item"/>
        </Col>
    )

    render() {

        const { selectedLanguageOption } = this.state;
        const languageValue = selectedLanguageOption && selectedLanguageOption.value;

        const { selectedSourceOption } = this.state;
        const SourceValue = selectedSourceOption && selectedSourceOption.value;

        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Batch File Upload
                      <small>Health Systems Evidence</small>
                   </div>
                </div>
{/*                
                <Container className="container-md">
                    <p className="text-center">HSE Batch Upload Dropzone<br/><small>Drag&apos;n&apos;Drop a hse batch file to upload.</small><br/><small className="spr">Testing content</small><small><a href="http://www.dropzonejs.com/" rel="noopener noreferrer" target="_blank"> test link</a></small></p>
                    <Dropzone className="card p-3" ref="dropzone" onDrop={this.onDrop} >
                        <div className="text-center box-placeholder m-0">Files can either be dropped here, or clicked to select to be uploaded.</div>
                        <div className="mt-3">
                            {this.state.files.length > 0 ?
                                <Row>{allFiles.map(this.createImageItem)}</Row>
                                :
                                <div><small>Testing</small></div>
                            }
                        </div>
                    </Dropzone>
 
                    <h5>Upload a batch file</h5>
                    
                    <div className="mb-3">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <input 
                                className="form-control " 
                                type="file" data-input="false" 
                                data-btnclass="btn btn-info" 
                                data-text="UPLOAD" 
                                data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"
                                onChange={this.onFileChange.bind(this)}
                                accept="text/plain"
                            />
                        </form>
                    </div>

                </Container>
*/}
                <Row>
                    <div className="col-md-12">
                        <form onSubmit={this.onSubmit.bind(this)} name="formDemo">
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>
                                    <div className="card-title">HSE Article Upload</div>
                                </CardHeader>
                                <CardBody>
                                    <legend className="mb-4">Batchfile Options</legend>
        
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">File</label>
                                            <Col md={ 6 }>
                                                <Field
                                                    name="batchfileupload" 
                                                    type="file"
                                                    component={this.FileInput}
                                                    className="form-control" 
                                                />
                                                <span className="invalid-feedback">Field must be an integer</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>

                                     <fieldset>
                                        <div className="form-group row mb">
                                            <label className="col-md-2 col-form-label mb">Languages</label>
                                            <Col md={ 6 }>
                                                <Select
                                                    name="languages"
                                                    value={languageValue}
                                                    onChange={this.handleChangeLanguageSelect}
                                                    options={LANGUAGES}
                                                />
                                            </Col>
                                        </div>
                                    </fieldset>

                                   <fieldset>
                                        <div className="form-group row mb">
                                            <label className="col-md-2 col-form-label mb">Article Source</label>
                                            <Col md={ 6 }>
                                            <Select
                                                name="articleSources"
                                                value={SourceValue}
                                                onChange={this.handleChangeSourceSelect}
                                                options={ARTICLE_SOURCES}
                                            />
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row mb">
                                            <label className="col-md-2 col-form-label mb">Harvest Date</label>
                                            <Col md={ 6 }>
                                                <Datetime 
                                                    dateFormat="YYYY-MM-DD" 
                                                    timeFormat={false} 
                                                    inputProps={{className: 'form-control'}}
                                                    onChange={this.onDateChange.bind(this)}
                                                    defaultValue=""
                                                />
                                            </Col>
                                        </div>
                                    </fieldset>
                                                                               
                                </CardBody>
                                <CardFooter className="text-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </CardFooter>
                            </Card>
                            { /* END card */ }
                        </form>
                    </div>
                </Row>
            </ContentWrapper>
            );
    }

}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'hsebatchfileupload'
    })) (HSEBatchUpload);


    