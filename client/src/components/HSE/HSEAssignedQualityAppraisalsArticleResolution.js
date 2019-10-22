import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../Layout/ContentWrapper';
import {
    Label,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Input,} from 'reactstrap';

// React Select
import 'react-select/dist/react-select.css';

import 'antd/dist/antd.css';

import * as actions from '../../actions';

class HSEAssignedQualityAppraisalsArticleResolution extends Component {

    state = {

        fetchedArticle: false,

        currentAppraiserState: {
            selectedOption: '',

            notInEnglish: false,
            notFreeFullText: false,
    
            questionOne: '', 
            questionTwo: '',
            questionThree: '',
            questionFour: '',
            questionFive: '',
            questionSix: '',
            questionSeven: '',
            questionEight: '',
            questionNine: '',
            questionTen: '',

        },
        otherAppraiserState: {
            selectedOption: '',

            notInEnglish: false,
            notFreeFullText: false,
    
            questionOne: '', 
            questionTwo: '',
            questionThree: '',
            questionFour: '',
            questionFive: '',
            questionSix: '',
            questionSeven: '',
            questionEight: '',
            questionNine: '',
            questionTen: '',

        }
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;
        
        this.props.fetchHSEAssignedQualityAppraisalsArticle(articleId, history).then(res => {
            
            if(res.qualityAppraisalsJuniorInput && res.qualityAppraisalsJuniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._qualityAppraisalsJunior) ) {
                this.setState({ currentAppraiserState: res.qualityAppraisalsJuniorInput.hseState.inputValues, otherAppraiserState: res.qualityAppraisalsSeniorInput.hseState.inputValues, fetchedArticle: true });
                
            } else if (res.qualityAppraisalsSeniorInput && res.qualityAppraisalsSeniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._qualityAppraisalsSenior) ) {
                this.setState({ currentAppraiserState: res.qualityAppraisalsSeniorInput.hseState.inputValues, otherAppraiserState: res.qualityAppraisalsJuniorInput.hseState.inputValues, fetchedArticle: true });
            }
            
        });

    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    isJuniorAppraiser() {
        
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isJuniorAppraiser`);
            console.log(`currentUser: ${this.props.currentUser._id}, _qualityAppraisalsJunior: ${this.props.currentArticle._qualityAppraisalsJunior}`);
            return this.props.currentUser === this.props.currentArticle._qualityAppraisalsJunior;
        }
            
    }

    isSeniorAppraiser() {
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isSeniorFilter`);
            console.log(`currentUser: ${this.props.currentUser}, _qualityAppraisalsSenior: ${this.props.currentArticle._qualityAppraisalsSenior}`);
            return this.props.currentUser === this.props.currentArticle._qualityAppraisalsSenior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorAppraiser()) {
            console.log(`isJuniorFilter`);
            this.setState({ qualityAppraisalModel: { test: '' }/*this.props.currentArticle.qualityAppraisalsJuniorInput*/ });

        } else if(this.isSeniorAppraiser()) {

            console.log(`isSeniorFilter`);
            this.setState({ qualityAppraisalModel: this.props.currentArticle.qualityAppraisalsJuniorInput });

        }
    }

    // Functions
    onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
    }
    
    onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }

    
    
    onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    }

    toggleSection = (section) => {
        this.setState({
            section: !this.state[section]
        })
    }

    showSection = (section) => {
        this.setState({
            section
        })
    }
    
    onChange = (e) => {
        let newCurrentAppraiserState = Object.assign({}, this.state.currentAppraiserState);
        newCurrentAppraiserState[e.target.name] = e.target.value;
        this.setState({
            currentAppraiserState: newCurrentAppraiserState
        });
        // this.props.form.setFieldsValue({radio:e.target.value})
        console.log(`${e.target.name}:${e.target.value}`)
        // save state
    }

    onOtherChange = (e) => {
        let newOtherAppraiserState = Object.assign({}, this.state.otherAppraiserState);
        newOtherAppraiserState[e.target.name] = e.target.value;
        this.setState({
            otherAppraiserState: newOtherAppraiserState
        });
        // this.props.form.setFieldsValue({radio:e.target.value})
        console.log(`${e.target.name}:${e.target.value}`)
        // save state
    }

    save = () => {

        //let currentState = {};

        const { currentArticle } = this.props;

        if (currentArticle.qualityAppraisalsJuniorInput && currentArticle.qualityAppraisalsJuniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === currentArticle._qualityAppraisalsJunior) ) {
            this.setState({ currentAppraiserState: currentArticle.qualityAppraisalsJuniorInput.hseState.inputValues, otherAppraiserState: currentArticle.qualityAppraisalsSeniorInput.hseState.inputValues });
            
        } else if (currentArticle.qualityAppraisalsSeniorInput && currentArticle.qualityAppraisalsSeniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === currentArticle._qualityAppraisalsSenior) ) {
            this.setState({ currentAppraiserState: currentArticle.qualityAppraisalsSeniorInput.hseState.inputValues, otherAppraiserState: currentArticle.qualityAppraisalsJuniorInput.hseState.inputValues });
        }
        this.props.assignHSEAssignedQualityAppraisalsArticleEditComplete(this.props.match.params.articleId, this.state.currentAppraiserState, this.props.history);
    }                                                                    

    cancel = () => {
        this.props.history.push('/hse/assignedqualityappraisalsarticlequeue')
    }

    renderGeneralArticleInformation = (generalInfo) => {
        if(generalInfo)
            return (
                <fieldset>
                    <legend className="offset-md-1">General article information</legend>
                    <br />
                    <FormGroup row>
                        <label className="col-md-2 col-form-label"></label>
                        <div className="col-md-10">
                            <div>
                                <h4>Ref ID: </h4>
                            </div>
                            <div>
                                <h4>Live date: </h4>
                            </div>
                            <div>
                                <h4>Document type: </h4>
                            </div>
                            <div>
                                <h4>Question type: </h4>
                            </div>
                            <div>
                                
                                <div className="checkbox c-checkbox">
                                    <h4>General focus?</h4>
                                    <p>{" "}</p>
                                    <label>
                                    <Input type="checkbox" defaultValue=""/>
                                        
                                        <span className="fa fa-check"></span>{" "}Yes, this article has a general docus (review definition and code accordingly, nothing that the default is set to specific)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </FormGroup>
                    {/** <hr className="my-4"/> **/}
              </fieldset>
            );
    }

      
    


    setStateDocumentType = (documentType) => {
        
        switch(documentType) {

            case 'som': 
                this.setState({ documentType: '' });
                break;
            case 'ontario': 
                this.setState({ documentType: '' })
                break;
            case 'government':
                this.setState({ documentType: '' });
                break;
            default: 
                this.setState({ documentType: 'general' });
                break;
        }
    }

    render() {

        if(!this.props.currentArticle) {
            return <div>Loading...</div>
        }
        //console.log(`currentArticle: ${this.props.currentArticle}`);

        // used for react select
        //const { selectedOption } = this.state;
        //const value = selectedOption && selectedOption.value;

        // this.setState({ eligibilityFilterModel: this.getInputValues() });

        // console.log(this.state.eligibilityFilterModel);

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Quality Appraisals
                        <small>Resolution Page</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                {/* START Current User's */}
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: { (this.props.currentArticle) && this.props.currentArticle.title } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                            <div className="col-md-10">
                                <legend>Complicated Reviews</legend>
                                <fieldset></fieldset>
                                <FormGroup >
                                    
                                        <br />
                                        <FormGroup check inline>
                                            <Label check>
                                            <Input type="checkbox" /> Not in English
                                            </Label>
                                        </FormGroup>
                                        <br />
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" /> No free full-text
                                            </Label>
                                        </FormGroup>
                                        <br />
                                        <br />
                                        <Link to="">Save as Complicated review</Link>
                                    
                                </FormGroup>
                            </div>
                        </form>
                    </fieldset>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        
                            <div className="col-md-10">
                                <legend>Questions</legend>
                                <fieldset></fieldset>
                                <p>1. Was an 'a priori' design provided? The research question and inclusion criteria should be established before the conduct of the review.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="yes" checked={this.state.currentAppraiserState.questionOne === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="no" checked={this.state.currentAppraiserState.questionOne === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="can't answer" checked={this.state.currentAppraiserState.questionOne === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="not applicable" checked={this.state.currentAppraiserState.questionOne === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>2. Was there duplicate study selection and data extraction? There should be at least two independent data extractors and a consensus procedure for disagreements should be in place.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="yes" checked={this.state.currentAppraiserState.questionTwo === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="no" checked={this.state.currentAppraiserState.questionTwo === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="can't answer" checked={this.state.currentAppraiserState.questionTwo === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="not applicable" checked={this.state.currentAppraiserState.questionTwo === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>3. Was a comprehensive literature search performed? At least two electronic sources should be searched. The report must include years and databases used (e.g., Central, EMBASE, and MEDLINE). Key words and/or MESH terms must be stated and where feasible the search strategy should be provided. All searches should be supplemented by consulting current contents, reviews, textbooks, specialized registers, or experts in the particular field of study, and by reviewing the references in the studies found.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="yes" checked={this.state.currentAppraiserState.questionThree === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="no" checked={this.state.currentAppraiserState.questionThree === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="can't answer" checked={this.state.currentAppraiserState.questionThree === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="not applicable" checked={this.state.currentAppraiserState.questionThree === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>4. Was the status of publication (i.e. grey literature) not used as an inclusion criterion? The authors should state that they searched for reports regardless of their publication type. The authors should state whether or not they excluded any reports (from the systematic review), based on their publication status, language etc.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="yes" checked={this.state.currentAppraiserState.questionFour === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="no" checked={this.state.currentAppraiserState.questionFour === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="can't answer" checked={this.state.currentAppraiserState.questionFour === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="not applicable" checked={this.state.currentAppraiserState.questionFour === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>5. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="yes" checked={this.state.currentAppraiserState.questionFive === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="no" checked={this.state.currentAppraiserState.questionFive === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="can't answer" checked={this.state.currentAppraiserState.questionFive === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="not applicable" checked={this.state.currentAppraiserState.questionFive === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>6. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="yes" checked={this.state.currentAppraiserState.questionSix === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="no" checked={this.state.currentAppraiserState.questionSix === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="can't answer" checked={this.state.currentAppraiserState.questionSix === "can't answer"} onChange={this.onChange}/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="not applicable" checked={this.state.currentAppraiserState.questionSix === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>7.Was the scientific quality of the included studies assessed and documented? 'A priori' methods of assessment should be provided (e.g., for effectiveness studies if the author(s) chose to include only randomized, double-blind, placebo controlled studies, or allocation concealment as inclusion criteria); for other types of studies alternative items will be relevant.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="yes" checked={this.state.currentAppraiserState.questionSeven === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="no" checked={this.state.currentAppraiserState.questionSeven === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="can't answer" checked={this.state.currentAppraiserState.questionSeven === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="not applicable" checked={this.state.currentAppraiserState.questionSeven === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>8. Was the scientific quality of the included studies used appropriately in formulating conclusions? The results of the methodological rigor and scientific quality should be considered in the analysis and the conclusions of the review, and explicitly stated in formulating recommendations.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="yes" checked={this.state.currentAppraiserState.questionEight === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="no" checked={this.state.currentAppraiserState.questionEight === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="can't answer" checked={this.state.currentAppraiserState.questionEight === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="not applicable" checked={this.state.currentAppraiserState.questionEight === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>9. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="yes" checked={this.state.currentAppraiserState.questionNine === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="no" checked={this.state.currentAppraiserState.questionNine === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="can't answer" checked={this.state.currentAppraiserState.questionNine === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="not applicable" checked={this.state.currentAppraiserState.questionNine === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>10. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="yes" checked={this.state.currentAppraiserState.questionTen === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="no" checked={this.state.currentAppraiserState.questionTen === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="can't answer" checked={this.state.currentAppraiserState.questionTen === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="not applicable" checked={this.state.currentAppraiserState.questionTen === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>

                                <br />
                                <br />
                                <Link to="">Save as Complicated review</Link>

                            </div>
                        
                        </form>
                    </fieldset>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex d-flex align-items-center">
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-warning" onClick={this.cancel}>Cancel</button>{' '}
                                <button type="submit" className="btn btn-info" onClick={this.save}>Save</button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                </div>
                <div className="col-xl-6">
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Other Filterer's Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: { (this.props.currentArticle) && this.props.currentArticle.title } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                            <div className="col-md-10">
                                <legend>Complicated Reviews</legend>
                                <fieldset></fieldset>
                                <FormGroup >
                                    
                                        <br />
                                        <FormGroup check inline>
                                            <Label check>
                                            <Input type="checkbox" /> Not in English
                                            </Label>
                                        </FormGroup>
                                        <br />
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" /> No free full-text
                                            </Label>
                                        </FormGroup>
                                        <br />
                                        <br />
                                        <Link to="">Save as Complicated review</Link>
                                    
                                </FormGroup>
                            </div>
                        </form>
                    </fieldset>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        
                            <div className="col-md-10">
                                <legend>Questions</legend>
                                <fieldset></fieldset>
                                <p>1. Was an 'a priori' design provided? The research question and inclusion criteria should be established before the conduct of the review.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="yes" checked={this.state.otherAppraiserState.questionOne === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="no" checked={this.state.otherAppraiserState.questionOne === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="can't answer" checked={this.state.otherAppraiserState.questionOne === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="not applicable" checked={this.state.otherAppraiserState.questionOne === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>2. Was there duplicate study selection and data extraction? There should be at least two independent data extractors and a consensus procedure for disagreements should be in place.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="yes" checked={this.state.otherAppraiserState.questionTwo === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="no" checked={this.state.otherAppraiserState.questionTwo === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="can't answer" checked={this.state.otherAppraiserState.questionTwo === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="not applicable" checked={this.state.otherAppraiserState.questionTwo === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>3. Was a comprehensive literature search performed? At least two electronic sources should be searched. The report must include years and databases used (e.g., Central, EMBASE, and MEDLINE). Key words and/or MESH terms must be stated and where feasible the search strategy should be provided. All searches should be supplemented by consulting current contents, reviews, textbooks, specialized registers, or experts in the particular field of study, and by reviewing the references in the studies found.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="yes" checked={this.state.otherAppraiserState.questionThree === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="no" checked={this.state.otherAppraiserState.questionThree === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="can't answer" checked={this.state.otherAppraiserState.questionThree === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="not applicable" checked={this.state.otherAppraiserState.questionThree === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>4. Was the status of publication (i.e. grey literature) not used as an inclusion criterion? The authors should state that they searched for reports regardless of their publication type. The authors should state whether or not they excluded any reports (from the systematic review), based on their publication status, language etc.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="yes" checked={this.state.otherAppraiserState.questionFour === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="no" checked={this.state.otherAppraiserState.questionFour === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="can't answer" checked={this.state.otherAppraiserState.questionFour === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="not applicable" checked={this.state.otherAppraiserState.questionFour === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>5. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="yes" checked={this.state.otherAppraiserState.questionFive === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="no" checked={this.state.otherAppraiserState.questionFive === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="can't answer" checked={this.state.otherAppraiserState.questionFive === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="not applicable" checked={this.state.otherAppraiserState.questionFive === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>6. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="yes" checked={this.state.otherAppraiserState.questionSix === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="no" checked={this.state.otherAppraiserState.questionSix === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="can't answer" checked={this.state.otherAppraiserState.questionSix === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="not applicable" checked={this.state.otherAppraiserState.questionSix === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>7.Was the scientific quality of the included studies assessed and documented? 'A priori' methods of assessment should be provided (e.g., for effectiveness studies if the author(s) chose to include only randomized, double-blind, placebo controlled studies, or allocation concealment as inclusion criteria); for other types of studies alternative items will be relevant.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="yes" checked={this.state.otherAppraiserState.questionSeven === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="no" checked={this.state.otherAppraiserState.questionSeven === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="can't answer" checked={this.state.otherAppraiserState.questionSeven === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="not applicable" checked={this.state.otherAppraiserState.questionSeven === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>8. Was the scientific quality of the included studies used appropriately in formulating conclusions? The results of the methodological rigor and scientific quality should be considered in the analysis and the conclusions of the review, and explicitly stated in formulating recommendations.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="yes" checked={this.state.otherAppraiserState.questionEight === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="no" checked={this.state.otherAppraiserState.questionEight === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="can't answer" checked={this.state.otherAppraiserState.questionEight === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="not applicable" checked={this.state.otherAppraiserState.questionEight === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>9. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="yes" checked={this.state.otherAppraiserState.questionNine === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="no" checked={this.state.otherAppraiserState.questionNine === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="can't answer" checked={this.state.otherAppraiserState.questionNine === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="not applicable" checked={this.state.otherAppraiserState.questionNine === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>10. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="yes" checked={this.state.otherAppraiserState.questionTen === 'yes'} onChange={this.onOtherChange} disabled/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="no" checked={this.state.otherAppraiserState.questionTen === 'no'} onChange={this.onOtherChange} disabled/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="can't answer" checked={this.state.otherAppraiserState.questionTen === "can't answer"} onChange={this.onOtherChange} disabled/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="not applicable" checked={this.state.otherAppraiserState.questionTen === 'not applicable'} onChange={this.onOtherChange} disabled/> Not applicable
                                    </Label>
                                </FormGroup>

                                <br />
                                <br />
                                <Link to="">Save as Complicated review</Link>

                            </div>
                        
                        </form>
                    </fieldset>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex align-items-center">
                        {/*    <div className="ml-auto">
                                <button type="submit" className="btn btn-warning">Cancel</button>{' '}
                                <button type="submit" className="btn btn-info">Save</button>
                            </div> 
                        */}
                        </div>
                    </CardFooter>
                </Card>
                </div>
                </div>
                {/* END card */}
            </ContentWrapper>
            );
    }

}

function mapStateToProps({ hseAssignedQualityAppraisalsArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: hseAssignedQualityAppraisalsArticleQueue.hsePendingQualityAppraisalsArticleErrorMessage,
        currentArticle: hseAssignedQualityAppraisalsArticleQueue.hseAssignedQualityAppraisalsArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'qualityAppraisalResolution'
    })) (HSEAssignedQualityAppraisalsArticleResolution);
