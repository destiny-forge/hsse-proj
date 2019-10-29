import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../Layout/ContentWrapper';
//import { Tree } from 'antd';
import {
    //Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    //FormGroup,
    //Input,
} from 'reactstrap';

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

class HSEAssignedQualityAppraisalsResolution extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        qualityAppraisalsModel: {},


        relevanceValue: ''
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchHSEAssignedQualityAppraisalsArticle(articleId, history);

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
            console.log(`currentUser: ${this.props.currentUser._id}, _qualityAppraisalsJunior: ${this.props.currentArticle._qualityAppraisaslsJunior}`);
            return this.props.currentUser === this.props.currentArticle._qualityAppraisalsJunior;
        }
            
    }

    isSeniorAppraiser() {
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isSeniorAppraiser`);
            console.log(`currentUser: ${this.props.currentUser._id}, _qualityAppraisalsSenior: ${this.props.currentArticle._qualityAppraisalsSenior}`);
            return this.props.currentUser === this.props.currentArticle._qualityAppraisalsSenior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorAppraiser()) {
            console.log(`isJuniorAppraiser`);
            this.setState({ qualityAppraisalsModel: this.props.currentArticle.qualityAppraisalsJuniorInput });

        } else if(this.isSeniorAppraiser()) {

            console.log(`isSeniorAppraiser`);
            this.setState({ qualityAppraisalsModel: this.props.currentArticle.qualityAppraisalsSeniorInput });

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

        // this.setState({ qualityAppraisalsModel: this.getInputValues() });

        console.log(this.state.eligibilityFilterModel);

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Quality Appraisals Articles
                        <small>Article Input Page</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                {/* START Current User's */}
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Appraiser Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}> 
                        </form>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex d-flex align-items-center">
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-warning">Cancel</button>{' '}
                                <button type="submit" className="btn btn-info">Save</button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                </div>
                <div className="col-xl-6">
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Other Appraisers Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

                            


                            
                        </form>
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
        form: 'hseQualityAppraisalsInput'
    })) (HSEAssignedQualityAppraisalsResolution);
