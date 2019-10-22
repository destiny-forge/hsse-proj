import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../Layout/ContentWrapper';
import { Tree } from 'antd';
import {
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Input,} from 'reactstrap';

// React Select
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'antd/dist/antd.css';

import * as actions from '../../actions';
/*
import {
    healthSystemTopicsTreeData,
    canadianAreasTreeData,
    domainsTreeData,
    lmicFocusTreeData,
    provinceFocusTreeData,
    themeTreeData,
    populationTreeData,
    ontarioPriorityAreasTreeData,
    canadaHealthSystemDocumentTypeData,
    ontarioHealthDocumentTypeData,
    intergovernmentalOrganizationHealthSystemDocumentTypeData

} from './SSEEligibilityFilterTrees';
*/
const { TreeNode } = Tree;

const STATES = [
    { value: 'new-article', label: 'New Article', className: 'State-ACT' },
    { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
    { value: 'live', label: 'Live', className: 'State-Vic' },
    { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
]

class SSEAssignedEligibilityFilterResolution extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        eligibilityFilterModel: {},

        showTitle: true,
        showRelevance: false,
        documentType: false,
        showGeneralArticleInformation: false,
        showEligibility: false,
        showHealthSystemsTopics: true,
        showCanadianAreas: true,
        showDomains: true,
        showLMICFocus: true,
        showProvinceFocus: true,
        showTheme: true,
        showPopulation: true,
        showOntarioPriorityArea: true,
        showTarget: true,
        showOntarioFocus: true,
        showArticle: false,
        showIntergovernmentalOrganizationHealthSystemDocument: false,
        showOntarianHealthSystemDocument: false,
        showCanadianHealthSystemDocument: false,
        showCanadaHealthSystemDocument: false,
        showArticleAssessment: false,


        relevanceValue: ''
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchSSEAssignedEligibilityFiltersArticle(articleId, history);

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

    isJuniorFilter() {
        
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isJuniorFilter`);
            console.log(`currentUser: ${this.props.currentUser._id}, _eligibilityFilterJunior: ${this.props.currentArticle._eligibilityFilterJunior}`);
            return this.props.currentUser === this.props.currentArticle._eligibilityFilterJunior;
        }
            
    }

    isSeniorFilter() {
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isSeniorFilter`);
            console.log(`currentUser: ${this.props.currentUser}, _eligibilityFilterSenior: ${this.props.currentArticle._eligibilityFilterSenior}`);
            return this.props.currentUser === this.props.currentArticle._eligibilityFilterSenior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorFilter()) {
            console.log(`isJuniorFilter`);
            this.setState({ eligibilityFilterModel: { test: '' }/*this.props.currentArticle.eligibilityFilterJuniorInput*/ });

        } else if(this.isSeniorFilter()) {

            console.log(`isSeniorFilter`);
            this.setState({ eligibilityFilterModel: this.props.currentArticle.eligibilityFilterSeniorInput });

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
    
    handleRelevanceChange = (event) => {
        if(event.target.value === 'Yes') {
            this.setState({
                relevanceValue: event.target.value,
                showEligibility: true
            });/*
            this.setState({
                showEligibility: true
            });*/
        }
        
    }

    
/*

    { this.renderTreeSection("Canadian health system document type", canadaHealthSystemDocumentTypeData, this.state.showCanadianHealthSystemDocument, false )}

    { this.renderTreeSection("Ontarian health system document type", ontarioHealthDocumentTypeData, this.state.showOntarianHealthSystemDocument, false)}

    { this.renderTreeSection("Intergovernmental organization health system document type", intergovernmentalOrganizationHealthSystemDocumentTypeData, this.state.showIntergovernmentalOrganizationHealthSystemDocument, false)}

*/

    handleGeneralEligibility = (event) => {
        switch(event.target.value) {
            case 'evidenceBriefsForPolicy': case 'overviewsOfSystematicReviews': 
            case 'systematicReviewsAddressingOtherQuestions': case 'systematicReviewsInProgress':
            case 'systematicReviewsBeingPlanned': case 'economicEvaluationsAndCostingStudies':
            case 'healthReformDescriptions': case 'healthSystemDescriptions':
                this.setState({
                    showHealthSystemsTopics: true,
                    showCanadianAreas: true,
                    showDomains: true,
                    showLMICFocus: true,
                    showProvinceFocus: true,
                    showTheme: true,
                    showPopulation: true,
                    showOntarioPriorityArea: true,
                    showArticleAssessment: true,


                    showRelevance: false,
                    showEligibility: false
                    //show
                });
                break;
            case "intergovernmentalOrganizationsHealthSystemsDocuments":
                this.setState({

                });
                break;
            case  "CanadasHealthSystemsDocuments":
                this.setState({

                });
                break;
            case "ontariosHealthSystemDocuments":
                this.setState({

                });
                break;
            default:
                this.setState({

                });
                break;
            /*    
                "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclutions in SSE.":
            */
        }
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

    renderEligibility = (eligibility) => {
        if(eligibility)
          return (
              <fieldset>
                  <legend className="offset-md-1">Eligibility</legend>
                    <br />
                  <FormGroup row>
                      <label className="col-md-2 col-form-label"></label>
                      <div className="col-md-10">
                          <div>
                              <p>Does the document meet the eligibility creteria for one of the SSE document types listed below (review eligibility criteria and choose one)?</p>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="evidenceBriefsForPolicy" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Evidence briefs for policy</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="overviewsOfSystematicReviews" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="systematicReviewsAddressingOtherQuestions" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="systematicReviewsInProgress" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Systematic reviews in progress</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="systematicReviewsBeingPlanned" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Systematic reviews being planned</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="economicEvaluationsAndCostingStudies" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Economic evaluations and costing studies</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="healthReformDescriptions" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Health reform descriptions</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="healthSystemDescriptions" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Health system descriptions</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="option2" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Intergovernmental organizations' health systems documents</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="option2" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Canada's health systems documents</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="option2" onChange={this.handleGeneralEligibility}/>
                                  <span className="fa fa-circle"></span>{" "}Ontario's health system documents</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" value="option2" />
                                  <span className="fa fa-circle"></span>{" "}NO. After reviewing the docuement types and eligibility criteria, this record is not eligible for inclutions in SSE.</label>
                          </div>
                         
                      </div>
                  </FormGroup>
              </fieldset>
          );
    }

      renderDocumentType = (showSection) => {
          if(showSection)
            return (
                <fieldset>
                    <legend className="offset-md-1">Document Type</legend>
                        <br />
                    <FormGroup row>
                        <label className="col-md-2 col-form-label"></label>
                        <div className="col-md-10">
                            <div className="checkbox c-checkbox">
                                <label>
                                    <Input type="checkbox" defaultValue=""/>
                                    <span className="fa fa-check"></span>Option one</label>
                            </div>
                            <div className="checkbox c-checkbox">
                                <label>
                                    <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                    <span className="fa fa-check"></span>Option two defaultChecke</label>
                            </div>
                            <div className="checkbox c-checkbox">
                                <label>
                                    <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                    <span className="fa fa-check"></span>Option three defaultChecke and disabled</label>
                            </div>
                            <div className="checkbox c-checkbox">
                                <label>
                                    <Input type="checkbox" disabled="" defaultValue=""/>
                                    <span className="fa fa-check"></span>Option four disabled</label>
                            </div>
                            <div className="c-radio">
                                <label>
                                    <Input type="radio" name="a" defaultValue="option1"/>
                                    <span className="fa fa-circle"></span>Option one</label>
                            </div>
                            <div className="c-radio">
                                <label>
                                    <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                    <span className="fa fa-circle"></span>Option two defaultChecke</label>
                            </div>
                            <div className="c-radio">
                                <label>
                                    <Input type="radio" defaultValue="option2" defaultChecked="" disabled=""/>
                                    <span className="fa fa-circle"></span>Option three defaultChecke and disabled</label>
                            </div>
                            <div className="c-radio">
                                <label>
                                    <Input type="radio" name="a" disabled=""/>
                                    <span className="fa fa-circle"></span>Option four disabled</label>
                            </div>
                        </div>
                    </FormGroup>
                </fieldset>
            );
      }
    
      renderTreeNodes = data => data.map((item) => {
        if (item.children) {
          return (
            <TreeNode title={item.title} key={item.key} dataRef={item}>
              {this.renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode {...item} />;
      })
    
    renderTreeSection = (sectionTitle, sectionTreeData, sectionStatus, showLine) => {
        if(sectionStatus) {
            return (
                <fieldset>
                    <legend className="offset-md-1">{ sectionTitle }</legend>
                    <br />
    
                    <FormGroup row>
                        <label className="col-md-1 offset-md-1 col-form-label"></label>
                        <div className="col-md-10">
                            <Tree
                                showLine={showLine}
                                checkable
                                defaultExpandAll={ true }
                                onExpand={this.onExpand}
                                autoExpandParent={true}
                                onCheck={this.onCheck}
                                // checkedKeys={true}
                                onSelect={this.onSelect}
                                // selectedKeys={this.state.selectedKeys}
                            >
                                {this.renderTreeNodes(sectionTreeData)}
                            </Tree>
                        </div>
                    </FormGroup>
                    <br />
                    <br />
                </fieldset>
            );
        } else {
            return (<div></div>);
        }
    }

    renderArticleAssessmentSection = (value, show) => {
        if(show)
            return(
                <fieldset className="col-md-10 offset-md-1">
                    <legend>Assessment and Assignment Status</legend>
                    <br />
                    <div className="form-group row mb">
                    <label className="col-md-6 col-form-label">
                    <Col md={ 12 } style={{ paddingLeft: 0 }}>
                            <Select
                                name="select-name"
                                value={value}
                                onChange={this.handleChangeSelect}
                                options={STATES}
                            />
                            <br />
                        </Col>
                    <p>New article = New, still having content added, not visible in searches</p>

                    <p>Data entry complete = All required content has been added, still not visible in searches</p>

                    <p>Live = Available for searching/alerting</p>

                    <p>Deleted = Removed from the system, not visible in searches</p>

                    </label>
                        <Col md={ 6 }>
                                <label className="col-md-12 col-form-label">
                                    <p>
                                    If an article is deleted, please enter the reason for removal (in case its removal is questioned later):
                                    </p>
                                </label>
                                <div className="col-md-12">
                                    <Input type="textarea"  disabled=""/>
                                </div>
                        </Col>
                    </div>
                    <br />
                    <br />
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
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        // this.setState({ eligibilityFilterModel: this.getInputValues() });

        console.log(this.state.eligibilityFilterModel);

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Assessing Eligibility and Assigning Filters Articles
                        <small>Article Input Page</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                {/* START Current User's */}
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Filterer Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

                            { this.renderGeneralArticleInformation(this.state.showGeneralArticleInformation) }

                            { this.renderRelevance(this.state.showRelevance) }

                            { this.renderEligibility(this.state.showEligibility) }

                            { this.renderDocumentType(this.state.documentType) }
                                                   
{/*                            { this.renderTreeSection("Health System Topics", healthSystemTopicsTreeData, this.state.showHealthSystemsTopics, false) }

                            { this.renderTreeSection("Canadian Areas", canadianAreasTreeData, this.state.showCanadianAreas, false) }

                            { this.renderTreeSection("Domains", domainsTreeData, this.state.showDomains, true) }

                            { this.renderTreeSection("LMIC Focus", lmicFocusTreeData, this.state.showLMICFocus, false) }

                            { this.renderTreeSection("Province Focus", provinceFocusTreeData, this.state.showProvinceFocus, false) }

                            { this.renderTreeSection("Theme", themeTreeData, this.state.showTheme, false) }

                            { this.renderTreeSection("Population", populationTreeData, this.state.showPopulation, false) }

                            { this.renderTreeSection("Ontario priority areas", ontarioPriorityAreasTreeData, this.state.showOntarioPriorityArea)}

                            { this.renderTreeSection("Canadian health system document type", canadaHealthSystemDocumentTypeData, this.state.showCanadianHealthSystemDocument, false )}

                            { this.renderTreeSection("Ontarian health system document type", ontarioHealthDocumentTypeData, this.state.showOntarianHealthSystemDocument, false)}

                            { this.renderTreeSection("Intergovernmental organization health system document type", intergovernmentalOrganizationHealthSystemDocumentTypeData, this.state.showIntergovernmentalOrganizationHealthSystemDocument, false)}
        */}
                            { this.renderArticleAssessmentSection(value, this.state.showArticleAssessment) }


                            
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
                            <div><h3>Other Filterer Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

                            { this.renderGeneralArticleInformation(this.state.showGeneralArticleInformation) }

                            { this.renderRelevance(this.state.showRelevance) }

                            { this.renderEligibility(this.state.showEligibility) }

                            { this.renderDocumentType(this.state.documentType) }
{/*                                                   
                            { this.renderTreeSection("Health System Topics", healthSystemTopicsTreeData, this.state.showHealthSystemsTopics, false) }

                            { this.renderTreeSection("Canadian Areas", canadianAreasTreeData, this.state.showCanadianAreas, false) }

                            { this.renderTreeSection("Domains", domainsTreeData, this.state.showDomains, true) }

                            { this.renderTreeSection("LMIC Focus", lmicFocusTreeData, this.state.showLMICFocus, false) }

                            { this.renderTreeSection("Province Focus", provinceFocusTreeData, this.state.showProvinceFocus, false) }

                            { this.renderTreeSection("Theme", themeTreeData, this.state.showTheme, false) }

                            { this.renderTreeSection("Population", populationTreeData, this.state.showPopulation, false) }

                            { this.renderTreeSection("Ontario priority areas", ontarioPriorityAreasTreeData, this.state.showOntarioPriorityArea)}

                            { this.renderTreeSection("Canadian health system document type", canadaHealthSystemDocumentTypeData, this.state.showCanadianHealthSystemDocument, false )}

                            { this.renderTreeSection("Ontarian health system document type", ontarioHealthDocumentTypeData, this.state.showOntarianHealthSystemDocument, false)}

                            { this.renderTreeSection("Intergovernmental organization health system document type", intergovernmentalOrganizationHealthSystemDocumentTypeData, this.state.showIntergovernmentalOrganizationHealthSystemDocument, false)}
*/}
                            { this.renderArticleAssessmentSection(value, this.state.showArticleAssessment) }


                            
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

// export default SSEAssignedEligibilityFilterArticleInput;

function mapStateToProps({ sseAssignedEligibilityFiltersArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: sseAssignedEligibilityFiltersArticleQueue.ssePendingEligibilityFiltersArticleErrorMessage,
        currentArticle: sseAssignedEligibilityFiltersArticleQueue.sseAssignedEligibilityFiltersArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'eligibilityFilterInput'
    })) (SSEAssignedEligibilityFilterResolution);
