import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../Layout/ContentWrapper';
//import { Tree } from 'antd';
import {
  //  Col,
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


//const { TreeNode } = Tree;
/*
const STATES = [
    { value: 'new-article', label: 'New Article', className: 'State-ACT' },
    { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
    { value: 'live', label: 'Live', className: 'State-Vic' },
    { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
]
*/
class HSEAssignedPresentationDetailsArticleInput extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        presentationDetailsModel: {},       

    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchHSEAssignedPresentationDetailsArticle(articleId, history);

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
            return this.props.currentUser === this.props.currentArticle._lpresentationDetailsinkingStudiesJunior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorDetailer()) {
            this.setState({ presentationDetailsModel: { test: '' }/*this.props.currentArticle.presentationDetailsJuniorInput*/ });

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
    
    
    renderRelevance = (relevance) => {
        if(relevance)
        return (
            <fieldset>
                <legend className="offset-md-1">Relevance</legend>
                <FormGroup row>
                    <label className="col-md-2 col-form-label"></label>
                    <div className="col-md-10">
                        <div>
                            <p>Is this title relevant to health systems governance, financial or delivery arrangements (or implementation strategies)?</p>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" value="Yes" onChange={this.handleRelevanceChange} />
                                <span className="fa fa-circle"></span>{" "}Yes</label>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" value="No" onChange={this.handleRelevanceChange}/>
                                <span className="fa fa-circle"></span>{" "}No</label>
                        </div>
                    </div>
                </FormGroup>
            </fieldset>
        );
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

    render() {
        console.log(`currentArticle: ${this.props.currentArticle}`);
        console.log(this.props.currentUser);

        this.getInputValues();

        // used for react select
        //const { selectedOption } = this.state;
        //const value = selectedOption && selectedOption.value;

        // this.setState({ presentationDetailsModel: this.getInputValues() });

        console.log(this.state.presentationDetailsModel);

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
                            <div><h3>Detailer Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>
                        <fieldset>
                                <FormGroup row>
                                    <label className="col-md-2 col-form-label">Inline checkboxes and Radios</label>
                                    <div className="col-md-10">
                                        <FormGroup check inline>
                                          <Label check>
                                            <Input type="checkbox" /> Some input
                                          </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Label check>
                                             <Input type="checkbox" /> Some other input
                                          </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Label check>
                                            <Input type="radio" name="inlineradio" /> Some input
                                          </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                          <Label check>
                                             <Input type="radio" name="inlineradio" /> Some other input
                                          </Label>
                                        </FormGroup>
                                    </div>
                                </FormGroup>
                            </fieldset>
                            


                            
                        </form>
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

function mapStateToProps({ hseAssignedPresentationDetailsArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: hseAssignedPresentationDetailsArticleQueue.hsePendingPresentationDetailsArticleErrorMessage,
        currentArticle: hseAssignedPresentationDetailsArticleQueue.hseAssignedPresentationDetailsArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'presentationDetailsInput'
    })) (HSEAssignedPresentationDetailsArticleInput);
