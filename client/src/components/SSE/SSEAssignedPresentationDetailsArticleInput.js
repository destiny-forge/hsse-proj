import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ContentWrapper from '../Layout/ContentWrapper';
//import { Tree } from 'antd';
import {
    //Col,
    Label,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Input,} from 'reactstrap';

// React Select
//import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'antd/dist/antd.css';

import * as actions from '../../actions';

import questionList from '../Common/QualityAppraisalsQuestions';

//const { TreeNode } = Tree;
/*
const STATES = [
    { value: 'new-article', label: 'New Article', className: 'State-ACT' },
    { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
    { value: 'live', label: 'Live', className: 'State-Vic' },
    { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
]
*/
class SSEAssignedPresentationDetailsArticleInput extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        presentationDetailerModel: {},


        relevanceValue: ''
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchSSEAssignedPresentationDetailsArticle(articleId, history);

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

    isJuniorDetailer() {
        
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isJuniorDetailer`);
            console.log(`currentUser: ${this.props.currentUser._id}, _presentationDetailsJunior: ${this.props.currentArticle._presentationDetailsJunior}`);
            return this.props.currentUser === this.props.currentArticle._presentationDetailsJunior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorDetailer()) {
            console.log(`isJuniorDetailer`);
            this.setState({ presentationDetailsModel: { test: '' }/*this.props.currentArticle.eligibilityFilterJuniorInput*/ });

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

    renderQuestions = () => {
        return (
            questionList.forEach(question => (
                <div>
                <h5>.</h5>
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
                </div>
            )
        ));
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
                                <h4>Ref ID: { this.props.match.params.articleId }</h4>
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
        console.log(`currentArticle: ${this.props.currentArticle}`);
        console.log(this.props.currentUser);

        this.getInputValues();

        // used for react select
        //const { selectedOption } = this.state;
        //const value = selectedOption && selectedOption.value;

        // this.setState({ presentationDetailerModel: this.getInputValues() });

        console.log(this.state.presentationDetailerModel);

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Presentation Details Articles
                        <small>Article Input Page</small>
                    </div>
                </div>
                {/* START card */}
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Filterer Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <label className="col-md-2 col-form-label"><h4>Complicated Reviews</h4></label>
                            <div className="col-md-10">
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

                               
                            </div>
                        </FormGroup>
                        </form>
                    </fieldset>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <label className="col-md-2 col-form-label"><h4>Questions</h4></label>
                            <div className="col-md-10">
                                <h5>.</h5>
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

                            </div>
                        </FormGroup>
                        </form>
                    </fieldset>
                    <fieldset>
                        <FormGroup row>
                            <label className="col-md-2 col-form-label"></label>
                            <div className="col-md-10">
                                <p>Testing</p>
                                { this.renderQuestions() }
                            </div>
                        </FormGroup>
                    </fieldset>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex align-items-center">
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-warning">Cancel</button>{' '}
                                <button type="submit" className="btn btn-info">Save</button>
                            </div>
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-success">Finish</button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                {/* END card */}
            </ContentWrapper>
            );
    }

}

function mapStateToProps({ sseAssignedPresentationDetailsArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: sseAssignedPresentationDetailsArticleQueue.ssePendingPresentationDetailsArticleErrorMessage,
        currentArticle: sseAssignedPresentationDetailsArticleQueue.sseAssignedPresentationDetailsArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'presentationDetailsInput'
    })) (SSEAssignedPresentationDetailsArticleInput);
