import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../../../Layout/ContentWrapper';
//import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Tree } from 'antd';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Input,
} from 'reactstrap';

// React Select
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'antd/dist/antd.css';

import * as actions from '../../../../actions';

import {
  healthSystemTopicsTreeData,
  canadianAreasTreeData,
  domainsTreeData,
  lmicFocusTreeData,
  provinceFocusTreeData,
  themeTreeData,
  populationTreeData,
  ontarioPriorityAreasTreeData,
  canadaHealthSystemSubtype,
  ontarioHealthSubtype,
  intergovernmentalOrganizationSubtype

} from '../../HSEEligibilityFilterTrees';

const { TreeNode } = Tree;

const QUESTION_TYPE = [
  { value: 'many', label: 'Many' },
  { value: 'effectiveness', label: 'Effectiveness' },
  { value: 'notEffectiveness', label: 'Not effectiveness' },
  { value: 'costEffectivenessBenefitUtilityAnalysisOrDescriptionsOfCosts', label: 'Cost-efectiveness/benefit/utility analysis or description of costs' },
  { value: 'description', label: 'Description' }
]

const STATES = [
  { value: 'newArticle', label: 'New Article' },
  { value: 'dataEntryComplete', label: 'Data Entry Complete' },
  { value: 'live', label: 'Live' },
  { value: 'deleted', label: 'Deleted' }
]


class FilterArticleInput extends Component {

  state = {

    selectedOption: '',
    showTitle: true,
    showRelevance: true,
    //documentType: false,
    showGeneralArticleInformation: false,
    showEligibility: false,
    showHealthSystemsTopics: false,
    showCanadianAreas: false,
    showDomains: false,
    showLMICFocus: false,
    showProvinceFocus: false,
    showTheme: false,
    showPopulation: false,
    showOntarioPriorityArea: false,
    showTarget: false,
    showOntarioFocus: false,
    showArticle: false,

    showIntergovernmentalSubtype: false,
    showOntarioHealthSubtype: false,
    showCanadaHealthSystemSubtype: false,

    showArticleAssessment: false,

    showSubtype: false,

    edit: false,

    relevanceValue: '',
    documentType: '',
    questionType: '',
    generalFocus: '',

    subtypes: [],

    checkedKeysHST: [],
    checkedKeysCA: [],
    checkedDomain: [],
    checkedLMIC: [],
    checkedProvince: [],
    checkedTheme: [],
    checkedPopulation: [],
    checkedOPA: [],
    checkedCHSDT: [],
    checkedOHSDT: [],
    checkedIOHSDT: [],

    assessingAndAssignmentStatus: '',
    deletedRemovalReason: ''
  };

  componentDidMount() {

    const { history } = this.props;
    const { articleId } = this.props.match.params;

    this.props.fetchHSEAssignedEligibilityFiltersArticle(articleId, history).then(res => {
      console.log(res);
      if (res.eligibilityFiltersJuniorInput && res.eligibilityFiltersJuniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._eligibilityFiltersJunior)) {
        this.setState(res.eligibilityFiltersJuniorInput.hseState.inputValues)

      } else if (res.eligibilityFiltersSeniorInput && res.eligibilityFiltersSeniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._eligibilityFiltersSenior)) {
        this.setState(res.eligibilityFiltersSeniorInput.hseState.inputValues)
      }

    });

  }

  handleLiveDateSelection = (liveDate) => {
    this.setState({ liveDate })
  }

  handleDocumentType = (documentType) => {
    this.setState({ documentType })
  }

  handleQuestionType = (event) => {
    this.setState({ questionType: event.value })
    console.log(this.state.questionType)
  }

  handleAssessmentAssignmentStatus = (event) => {
    console.log(event)
    this.setState({ assessingAndAssignmentStatus: event.value })
  }

  handleDeletedRemovalReason = (event) => {
    this.setState({ deletedRemovalReason: event.target.value })
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

    if (this.props.currentArticle && this.props.currentUser) {
      console.log(`inside isJuniorFilter`);
      console.log(`currentUser: ${this.props.currentUser._id}, _eligibilityFilterJunior: ${this.props.currentArticle._eligibilityFilterJunior}`);
      return this.props.currentUser === this.props.currentArticle._eligibilityFilterJunior;
    }

  }

  isSeniorFilter() {
    if (this.props.currentArticle && this.props.currentUser) {
      console.log(`inside isSeniorFilter`);
      console.log(`currentUser: ${this.props.currentUser}, _eligibilityFilterSenior: ${this.props.currentArticle._eligibilityFilterSenior}`);
      return this.props.currentUser === this.props.currentArticle._eligibilityFilterSenior;
    }

  }

  getInputValues() {

    if (this.isJuniorFilter()) {
      console.log(`isJuniorFilter`);
      this.setState({ eligibilityFilterModel: { test: '' }/*this.props.currentArticle.eligibilityFilterJuniorInput*/ });

    } else if (this.isSeniorFilter()) {

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

  onCheck = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedKeys });
  }

  onCheckHST = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedKeysHST: checkedKeys });
  }

  onCheckCA = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedKeysCA: checkedKeys });
  }

  onCheckDomain = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedDomain: checkedKeys });
  }

  onCheckLMIC = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedLMIC: checkedKeys });
  }

  onCheckProvince = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedProvince: checkedKeys });
  }

  onCheckTheme = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedTheme: checkedKeys });
  }

  onCheckPopulation = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedPopulation: checkedKeys });
  }

  onCheckOPA = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedOPA: checkedKeys });
  }

  onCheckCHSDT = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedCHSDT: checkedKeys });
  }

  onCheckOHSDT = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedOHSDT: checkedKeys });
  }

  onCheckIOHSDT = (checkedKeys, event) => {
    console.log('onCheck', checkedKeys, event);
    this.setState({ checkedIOHSDT: checkedKeys });
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
    if (event.target.value === 'Yes') {
      this.setState({
        relevanceValue: event.target.value,
        showEligibility: true,
        showRelevance: true
      });
      console.log(event.target.value);
      //this.finish();
      /*
      this.setState({
          showEligibility: true
      });*/
    } else if (event.target.value === 'No') {
      console.log(event.target.value);
      this.setState({
        relevanceValue: event.target.value,
        showEligibility: false,
        showRelevance: true
      });
    }
  }

  continue = () => {
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
      showGeneralArticleInformation: true,

      showIntergovernmentalSystemSubtype: false,
      showCanadaHealthSystemSubtype: false,
      showOntarioHealthSystemSubtype: false,

      showRelevance: false,
      showEligibility: false,
      edit: false
    });
  }

  edit = () => {
    this.setState({

      selectedOption: '',

      edit: true,

      showTitle: true,
      showRelevance: true,
      //documentType: false,
      showGeneralArticleInformation: false,
      showEligibility: true,
      showHealthSystemsTopics: false,
      showCanadianAreas: false,
      showDomains: false,
      showLMICFocus: false,
      showProvinceFocus: false,
      showTheme: false,
      showPopulation: false,
      showOntarioPriorityArea: false,
      showTarget: false,
      showOntarioFocus: false,
      showArticle: false,

      showIntergovernmentalSubtype: false,
      showOntarioHealthSubtype: false,
      showCanadaHealthSystemSubtype: false,

      showArticleAssessment: false,

      showSubtype: false,
    });

    switch (this.state.documentType) {
      case "Intergovernmental organizations' health systems documents":
        this.setState({
          showIntergovernmentalSystemSubtype: true
        });
        break;
      case "Canada's health systems documents":
        this.setState({
          showCanadaHealthSystemSubtype: true
        });
        break;
      case "Ontario's health system documents":
        this.setState({
          showOntarioHealthSystemSubtype: true
        });
        break;
      default:
        break;
      /*    
          "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclutions in HSE.":
      */

    }
  }

  save = () => {
    this.setState({ edit: false })
    this.props.assignHSEAssignedEligibilityFiltersArticleEdit(this.props.match.params.articleId, this.state, this.props.history);
  }

  cancel = () => {
    this.setState({ edit: false })
    this.props.history.push('/hse/assignedeligibilityfiltersarticlequeue')
  }

  finish = () => {
    this.setState({ edit: false })
    this.props.assignHSEAssignedEligibilityFiltersArticleEditComplete(this.props.match.params.articleId, this.state, this.props.history);
  }

  lostQueue = () => {
    this.setstate({ documentType: 'No' })
  }

  handleGeneralEligibility = (event) => {
    switch (event.target.value) {
      case 'Evidence briefs for policy':
      case 'Overviews of systematic reviews':
      case 'Systematic reviews addressing other questions': case 'Systematic reviews in progress':
      case 'Systematic reviews being planned': case 'Economic evaluations and costing studies':
      case 'Health reform descriptions': case 'Health system descriptions':
        this.setState({

          documentType: event.target.value,

          showHealthSystemsTopics: true,
          showCanadianAreas: true,
          showDomains: true,
          showLMICFocus: true,
          showProvinceFocus: true,
          showTheme: true,
          showPopulation: true,
          showOntarioPriorityArea: true,
          showArticleAssessment: true,
          showGeneralArticleInformation: true,

          showIntergovernmentalSystemSubtype: false,
          showCanadaHealthSystemSubtype: false,
          showOntarioHealthSystemSubtype: false,

          showRelevance: false,
          showEligibility: false

        });
        break;
      case "Intergovernmental organizations' health systems documents":
        this.setState({
          documentType: event.target.value,

          showIntergovernmentalSystemSubtype: true,
          showCanadaHealthSystemSubtype: false,
          showOntarioHealthSystemSubtype: false,
          edit: true
        });
        break;
      case "Canada's health systems documents":
        this.setState({
          documentType: event.target.value,

          showCanadaHealthSystemSubtype: true,
          showIntergovernmentalSystemSubtype: false,
          showOntarioHealthSystemSubtype: false,
          edit: true
        });
        break;
      case "Ontario's health system documents":
        this.setState({
          documentType: event.target.value,

          showOntarioHealthSystemSubtype: true,
          showIntergovernmentalSystemSubtype: false,
          showCanadaHealthSystemSubtype: false,
          edit: true
        });
        break;
      default:
        this.setState({

        });
        break;
      /*    
          "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclutions in HSE.":
      */

    }
  }

  handleGeneralFocus = (event) => {
    this.setState({ generalFocus: !this.state.generalFocus })
  }

  handleLostQueue = (event) => {

    this.cancel();
  }

  renderRelevance = (relevance) => {
    if (relevance) {
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
                  <Input type="radio" name="relevance" value="Yes" onChange={this.handleRelevanceChange} checked={this.state.relevanceValue === "Yes"} />
                  <span className="fa fa-check"></span>{" "}Yes</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="relevance" value="No" onChange={this.handleRelevanceChange} checked={this.state.relevanceValue === "No"} />
                  <span className="fa fa-check"></span>{" "}No</label>
              </div>
            </div>
          </FormGroup>
        </fieldset>
      );
    }
  }

  renderGeneralArticleInformation = (generalInfo) => {
    if (generalInfo)
      return (
        <fieldset>
          <legend >General Article Information</legend>
          <br />
          <button onClick={this.edit}>Edit</button>
          <br />
          <FormGroup row >
            <span className="col-md-2 col-form-label"></span>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-2">
                  <strong>Ref ID:</strong>
                </div>
                <div className="col-md-4">
                  {/* this.props.match.params.articleId */}
                  {this.props.currentArticle && this.props.currentArticle.articleIdShort}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <strong>Live Date: </strong>
                </div>
                <div className="col-xl-4">
                  N/A
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <strong>Document type: </strong>
                </div>
                <div className="col-xl-5">
                  {(this.props.currentArticle && this.props.currentArticle.documentType) || this.state.documentType}
                  {}
                </div>
              </div>
              <br />
              {(this.props.currentArticle && this.props.currentArticle.documentType) || this.renderSubtype(this.state.documentType)}
              <br />
              <div className="row">
                <div className="col-md-2">
                  <strong>Question type: </strong>
                </div>
                <div className="col-xl-6">
                  <Select
                    value={this.state.questionType}
                    name="questionType"
                    onChange={this.handleQuestionType}
                    options={QUESTION_TYPE}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <strong>General focus?</strong>
                </div>
                <div className="col-xl-6">
                  <label>
                    <Input type="checkbox" defaultValue="" checked={this.state.generalFocus} onChange={this.handleGeneralFocus} />
                    {" "}Yes, this article has a general focus (review definition and code accordingly, nothing that the default is set to specific)
                  </label>
                </div>
              </div>
            </div>
          </FormGroup>
        </fieldset>
      );
  }

  renderSubtype = (documentType) => {
    switch (documentType) {
      case "Intergovernmental organizations' health systems documents":
        return (
          <div className="row">
            <div className="col-md-2">
              <strong>Subtypes: </strong>
            </div>
            <div className="col-xl-4">
              <ul>
                {this.state.checkedIOHSDT.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        );
      case "Canada's health systems documents":
        return (
          <div className="row">
            <div className="col-md-2">
              <strong>Subtypes: </strong>
            </div>
            <div className="col-xl-4">
              <ul>
                {this.state.checkedCHSDT.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        );
      case "Ontario's health system documents":
        return (
          <div className="row">
            <div className="col-md-2">
              <strong>Subtypes: </strong>
            </div>
            <div className="col-xl-4">
              <ul>
                {this.state.checkedOHSDT.forEach(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        );
      default:
        return (<div></div>)
    }
  }

  renderEligibility = (eligibility) => {
    if (eligibility)
      return (
        <fieldset>
          <legend className="offset-md-1">Eligibility</legend>
          <br />
          <FormGroup row>
            <label className="col-md-2 col-form-label"></label>
            <div className="col-md-10">
              <div>
                <p>Does the document meet the eligibility creteria for one of the HSE document types listed below (review eligibility criteria and choose one)?</p>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Evidence briefs for policy" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Evidence briefs for policy"} />
                  <span className="fa fa-circle"></span>{" "}Evidence briefs for policy</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Overviews of systematic reviews" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Overviews of systematic reviews"} />
                  <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Systematic reviews addressing other questions" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Systematic reviews addressing other questions"} />
                  <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Systematic reviews in progress" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Systematic reviews in progress"} />
                  <span className="fa fa-circle"></span>{" "}Systematic reviews in progress</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Systematic reviews being planned" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Systematic reviews being planned"} />
                  <span className="fa fa-circle"></span>{" "}Systematic reviews being planned</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Economic evaluations and costing studies" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Economic evaluations and costing studies"} />
                  <span className="fa fa-circle"></span>{" "}Economic evaluations and costing studies</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Health reform descriptions" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Health reform descriptions"} />
                  <span className="fa fa-circle"></span>{" "}Health reform descriptions</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Health system descriptions" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Health system descriptions"} />
                  <span className="fa fa-circle"></span>{" "}Health system descriptions</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Intergovernmental organizations' health systems documents" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Intergovernmental organizations' health systems documents"} />
                  <span className="fa fa-circle"></span>{" "}Intergovernmental organizations' health systems documents</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Canada's health systems documents" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Canada's health systems documents"} />
                  <span className="fa fa-circle"></span>{" "}Canada's health systems documents</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="Ontario's health system documents" name="documentType" onChange={this.handleGeneralEligibility} checked={this.state.documentType === "Ontario's health system documents"} />
                  <span className="fa fa-circle"></span>{" "}Ontario's health system documents</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" value="No" name="documentType" onChange={this.handleLostQueue} checked={this.state.documentType === 'No'} />
                  <span className="fa fa-circle"></span>{" "}NO. After reviewing the docuement types and eligibility criteria, this record is not eligible for inclutions in HSE.</label>
              </div>

            </div>
          </FormGroup>
        </fieldset>
      );
  }

  renderCanadianHealthSubtypeSection = () => {
    return (
      <fieldset>
        <legend className="offset-md-1">Canadian health system document type</legend>
        <br />
        <FormGroup row>
          <label className="col-md-2 col-form-label"></label>
          <div className="col-md-10">
            <div>
              <p>What type of Canadian health system documents is this record(reivew eligibility criteria and choose one or more)?</p>
            </div>
            <div className="c-radio">
              <label>
                <Input type="checkbox" defaultValue="" />
                <span className="fa fa-check"></span>Option one</label>
            </div>
            <div className="c-radio">
              <label>
                <Input type="radio" name="Overviews of systematic reviews" value="overviewsOfSystematicReviews" onChange={this.handleGeneralEligibility} />
                <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews</label>
            </div>
            <div className="c-radio">
              <label>
                <Input type="radio" name="Systematic reviews addressing other questions" value="systematicReviewsAddressingOtherQuestions" onChange={this.handleGeneralEligibility} />
                <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions</label>
            </div>


          </div>
        </FormGroup>
      </fieldset>
    );
  }

  renderOntariosHealthSubtypeSection = () => {
    return (
      <fieldset>
        <legend className="offset-md-1">{}</legend>
        <br />
        <FormGroup row>
          <label className="col-md-2 col-form-label"></label>
          <div className="col-md-10">
            <div>
              <p>What type of Intergovernmental organizztion health system documents is this record(reivew eligibility criteria and shoose one or more)?</p>
            </div>
            <div className="c-radio">
              <label>
                <Input type="checkbox" defaultValue="" />
                <span className="fa fa-check"></span>Option one</label>
            </div>
            <div className="c-radio">
              <label>
                <Input type="radio" name="Overviews of systematic reviews" value="overviewsOfSystematicReviews" onChange={this.handleGeneralEligibility} />
                <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews</label>
            </div>
            <div className="c-radio">
              <label>
                <Input type="radio" name="Systematic reviews addressing other questions" value="systematicReviewsAddressingOtherQuestions" onChange={this.handleGeneralEligibility} />
                <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions</label>
            </div>
          </div>
        </FormGroup>
      </fieldset>
    );
  }

  renderIntergovernmentalSubtypeSection = () => {
    return (
      <fieldset>
        <legend className="offset-md-1">Intergovernmental organization health system document type</legend>
        <br />
        <FormGroup row>
          <label className="col-md-2 col-form-label"></label>
          <div className="col-md-10">
            <div>
              <p>What type of Intergovernmental organizztion health system documents is this record(reivew eligibility criteria and shoose one or more)?</p>
            </div>
            <div className="c-radio">
              <label>
                <Input type="checkbox" defaultValue="" />
                <span className="fa fa-check"></span>Option one</label>
            </div>
            <div className="c-radio">
              <label>
                <Input type="radio" name="Overviews of systematic reviews" value="overviewsOfSystematicReviews" onChange={this.handleGeneralEligibility} />
                <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews</label>
            </div>
            <div className="c-radio">
              <label>
                <Input type="radio" name="Systematic reviews addressing other questions" value="systematicReviewsAddressingOtherQuestions" onChange={this.handleGeneralEligibility} />
                <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions</label>
            </div>


          </div>
        </FormGroup>
      </fieldset>
    );
  }

  renderIntergovernmentalSubtypeSection = (needed, subtype) => {
    return (
      <fieldset>
        <legend className="offset-md-1">{subtype}</legend>
        <br />
        <FormGroup row>
          <label className="col-md-2 col-form-label"></label>
          <div className="col-md-10">
            <div>
              <p>What type of Intergovernmental organizztion health system documents is this record(reivew eligibility criteria and shoose one or more)?</p>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Health and health system data</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Health expenditure review</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Health system research priorities</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Situation analysis</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Jurisdiction review</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Performance review</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>External evaluation</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Literature review</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Framework</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Toolkit</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Optional framing</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Guidance</label>
            </div>
            <div className="checkbox c-checkbox">
              <label>
                <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                <span className="fa fa-check"></span>Citizen/patien input</label>
            </div>
          </div>
        </FormGroup>
      </fieldset>
    );
  }

  renderDocumentType = (showSection) => {
    if (showSection)
      return (
        <fieldset>
          <legend className="offset-md-1">Document Type</legend>
          <br />
          <FormGroup row>
            <label className="col-md-2 col-form-label"></label>
            <div className="col-md-10">
              <div className="checkbox c-checkbox">
                <label>
                  <Input type="checkbox" defaultValue="" />
                  <span className="fa fa-check"></span>Option one</label>
              </div>
              <div className="checkbox c-checkbox">
                <label>
                  <Input type="checkbox" defaultChecked="" defaultValue="" />
                  <span className="fa fa-check"></span>Option two defaultChecke</label>
              </div>
              <div className="checkbox c-checkbox">
                <label>
                  <Input type="checkbox" defaultChecked="" disabled="" defaultValue="" />
                  <span className="fa fa-check"></span>Option three defaultChecke and disabled</label>
              </div>
              <div className="checkbox c-checkbox">
                <label>
                  <Input type="checkbox" disabled="" defaultValue="" />
                  <span className="fa fa-check"></span>Option four disabled</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" defaultValue="option1" />
                  <span className="fa fa-circle"></span>Option one</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" defaultValue="option2" defaultChecked="" />
                  <span className="fa fa-circle"></span>Option two defaultChecke</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" defaultValue="option2" defaultChecked="" disabled="" />
                  <span className="fa fa-circle"></span>Option three defaultChecke and disabled</label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" disabled="" />
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

  renderTreeSection = (sectionTitle, sectionTreeData, sectionStatus, showLine, checkedEvent, checkedKeyState, showLink) => {
    if (sectionStatus) {
      return (
        <fieldset>
          <legend >{sectionTitle}</legend>
          <br />

          <FormGroup row>
            <label className="col-md-1 offset-md-1 col-form-label"></label>
            <div className="col-md-10">
              <Tree
                showLine={showLine}
                checkable
                onExpand={this.onExpand}
                autoExpandParent={true}
                onCheck={checkedEvent}
                checkedKeys={checkedKeyState}
                onSelect={this.onSelect}
              >
                {this.renderTreeNodes(sectionTreeData)}
              </Tree>
            </div>
          </FormGroup>
          <br />
          <br />
          {
            (false) &&
            (
              <div>
                <Button color="link" onClick={this.continue} ><h4>Continue</h4></Button>
                <br />
                <br />
              </div>
            )
          }
        </fieldset>
      );
    } else {
      return (<div></div>);
    }
  }

  renderArticleAssessmentSection = (show) => {
    if (show)
      return (
        <fieldset>
          {/*<fieldset className="col-md-10 offset-md-1">*/}
          <legend >Assessment and Assignment Status</legend>
          <br />
          <div className="form-group row mb">
            <label className="col-md-6 col-form-label">
              <Col md={12} style={{ paddingLeft: 0 }}>
                <Select
                  name="select-name"
                  value={this.state.assessingAndAssignmentStatus}
                  onChange={this.handleAssessmentAssignmentStatus}
                  options={STATES}
                />
                <br />
              </Col>
              <p>New article = New, still having content added, not visible in searches</p>

              <p>Data entry complete = All required content has been added, still not visible in searches</p>

              <p>Live = Available for searching/alerting</p>

              <p>Deleted = Removed from the system, not visible in searches</p>

            </label>
            <Col md={6}>
              <label className="col-md-12 col-form-label">
                <p>
                  If an article is deleted, please enter the reason for removal (in case its removal is questioned later):
                                    </p>
              </label>
              <div className="col-md-12">
                <Input name="deletedRemovalReason" value={this.state.deletedRemovalReason} type="textarea" disabled="" onChange={this.handleDeletedRemovalReason} />
              </div>
            </Col>
          </div>
          <br />
          <br />
        </fieldset>
      );
  }

  setStateDocumentType = (documentType) => {

    switch (documentType) {

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

    return (
      <ContentWrapper>
        <div className="content-heading">
          <div>Assessing Eligibility and Assigning Filters Articles
                        <small>Article Input Page</small>
          </div>
        </div>
        {/* START card */}
        <Card className="card-default">
          <CardHeader><div  >
            <div><h3>Filterer Inputs</h3></div>
            <div><strong>Article Id:</strong> {this.props.currentArticle && this.props.currentArticle.articleIdShort} </div>
            <div><strong>Title:</strong> {(this.props.currentArticle) && this.props.currentArticle.title} </div>
          </div>
          </CardHeader>
          <hr className="my-4" />
          <CardBody>
            <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

              {this.renderGeneralArticleInformation(this.state.showGeneralArticleInformation)}

              {this.renderRelevance(this.state.showRelevance)}

              {this.renderEligibility(this.state.showEligibility)}

              { /*this.renderDocumentType(this.state.documentType) */}

              {this.renderTreeSection("Health System Topics", healthSystemTopicsTreeData, this.state.showHealthSystemsTopics, false, this.onCheckHST, this.state.checkedKeysHST)}

              {this.renderTreeSection("Canadian Areas", canadianAreasTreeData, this.state.showCanadianAreas, false, this.onCheckCA, this.state.checkedKeysCA)}

              {this.renderTreeSection("Domains", domainsTreeData, this.state.showDomains, false, this.onCheckDomain, this.state.checkedDomain)}

              {this.renderTreeSection("LMIC Focus", lmicFocusTreeData, this.state.showLMICFocus, false, this.onCheckLMIC, this.state.checkedLMIC)}

              {this.renderTreeSection("Province Focus", provinceFocusTreeData, this.state.showProvinceFocus, false, this.onCheckProvince, this.state.checkedProvince)}

              {this.renderTreeSection("Theme", themeTreeData, this.state.showTheme, false, this.onCheckTheme, this.state.checkedTheme)}

              {this.renderTreeSection("Population", populationTreeData, this.state.showPopulation, false, this.onCheckPopulation, this.state.checkedPopulation)}

              {this.renderTreeSection("Ontario priority areas", ontarioPriorityAreasTreeData, this.state.showOntarioPriorityArea, false, this.onCheckOPA, this.state.checkedOPA)}

              {this.renderTreeSection("Canadian health system document type", canadaHealthSystemSubtype, this.state.showCanadaHealthSystemSubtype, false, this.onCheckCHSDT, this.state.checkedCHSDT, true)}

              {this.renderTreeSection("Ontarian health system document type", ontarioHealthSubtype, this.state.showOntarioHealthSystemSubtype, false, this.onCheckOHSDT, this.state.checkedOHSDT, true)}

              {this.renderTreeSection("Intergovernmental organization health system document type", intergovernmentalOrganizationSubtype, this.state.showIntergovernmentalSystemSubtype, false, this.onCheckIOHSDT, this.state.checkedIOHSDT, true)}

              {this.renderArticleAssessmentSection(this.state.showArticleAssessment)}

              {this.state.edit && <Button color="link" onClick={this.continue} ><h4>Continue</h4></Button>}

            </form>
          </CardBody>
          <CardFooter>
            <div className="d-flex align-items-center">
              <div className="ml-auto">
                <button type="submit" className="btn btn-warning" onClick={this.cancel} >Cancel</button>{' '}
                <button type="submit" className="btn btn-info" onClick={this.save}>Save </button>
              </div>
              <div className="ml-auto">
                <button type="submit" className="btn btn-success" onClick={this.finish}>Finish</button>
              </div>
            </div>
          </CardFooter>
        </Card>
        {/* END card */}
      </ContentWrapper>
    );
  }

}

// export default FilterArticleInput;

function mapStateToProps({ hseAssignedEligibilityFiltersArticleQueue, auth }) {
  //console.log(hseAssignedEligibilityFiltersArticleQueue);
  return {
    currentUser: auth.currentUser,
    errorMessage: hseAssignedEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
    currentArticle: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticleFetch
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'hseEligibilityFilterInput'
  }))(FilterArticleInput);
