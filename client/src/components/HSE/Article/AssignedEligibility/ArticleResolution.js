import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../../../Layout/ContentWrapper';
import { Tree } from 'antd';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Input
} from 'reactstrap';

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

const STATES = [
  { value: 'new-article', label: 'New Article', className: 'State-ACT' },
  { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
  { value: 'live', label: 'Live', className: 'State-Vic' },
  { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
];

class ArticleResolution extends Component {

  state = {
    fetchedArticle: false,
    currentFilterState: {
      selectedOption: '',
      showTitle: true,
      showRelevance: true,
      documentType: false,
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
      showIntergovernmentalOrganizationHealthSystemDocument: false,
      showOntarianHealthSystemDocument: false,
      showCanadianHealthSystemDocument: false,
      showCanadaHealthSystemDocument: false,
      showArticleAssessment: false,

      relevanceValue: '',

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
      checkedIOHSDT: []

    },
    otherFilterState: {
      selectedOption: '',


      showTitle: true,
      showRelevance: true,
      documentType: false,
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
      showIntergovernmentalOrganizationHealthSystemDocument: false,
      showOntarianHealthSystemDocument: false,
      showCanadianHealthSystemDocument: false,
      showCanadaHealthSystemDocument: false,
      showArticleAssessment: false,

      relevanceValue: '',

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
      checkedIOHSDT: []

    }
  };

  componentDidMount() {

    const { history } = this.props;
    const { articleId } = this.props.match.params;

    this.props.fetchHSEAssignedEligibilityFiltersArticle(articleId, history).then(res => {
      // console.log(res);
      if (res.eligibilityFiltersJuniorInput && res.eligibilityFiltersJuniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._eligibilityFiltersJunior)) {
        this.setState({ currentFilterState: res.eligibilityFiltersJuniorInput.hseState.inputValues, otherFilterState: res.eligibilityFiltersSeniorInput.hseState.inputValues, fetchedArticle: true });

      } else if (res.eligibilityFiltersSeniorInput && res.eligibilityFiltersSeniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._eligibilityFiltersSenior)) {
        this.setState({ currentFilterState: res.eligibilityFiltersSeniorInput.hseState.inputValues, otherFilterState: res.eligibilityFiltersJuniorInput.hseState.inputValues, fetchedArticle: true });
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

  isJuniorFilter() {

    if (this.props.currentArticle && this.props.currentUser) {
      console.log(`inside isJuniorFilter`);
      console.log(`currentUser: ${this.props.currentUser._id}, _eligibilityFiltersJunior: ${this.props.currentArticle._eligibilityFiltersJunior}`);
      return this.props.currentUser === this.props.currentArticle._eligibilityFiltersJunior;
    }

  }

  isSeniorFilter() {
    if (this.props.currentArticle && this.props.currentUser) {
      console.log(`inside isSeniorFilter`);
      console.log(`currentUser: ${this.props.currentUser}, _eligibilityFiltersSenior: ${this.props.currentArticle._eligibilityFiltersSenior}`);
      return this.props.currentUser === this.props.currentArticle._eligibilityFiltersSenior;
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

  onCheck = (checkedKeys) => {
    // TODO: THIS NEEDS FIXING!!
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onCheckHST = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedKeysHST = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckHSTOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedKeysHST = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckCA = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedKeysCA = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckCAOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedKeysCA = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckDomain = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedDomain = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckDomainOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedDomain = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckLMIC = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedLMIC = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckLMICOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedLMIC = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckProvince = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedProvince = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckProvinceOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedProvince = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckTheme = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedTheme = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckThemeOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedTheme = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckPopulation = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedPopulation = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckPopulationOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedPopulation = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckOPA = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedOPA = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckOPAOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedOPA = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckCHSDT = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedCHSDT = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckCHSDTOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedCHSDT = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckOHSDT = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedOHSDT = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckOHSDTOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedOHSDT = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onCheckIOHSDT = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState.checkedIOHSDT = checkedKeys;
    this.setState({ currentFilterState: newCurrentFilterState });
  }

  onCheckIOHSDTOther = (checkedKeys, event) => {
    // TODO: THIS NEEDS FIXING!!
    let newOtherFilterState = Object.assign({}, this.state.otherFilterState);
    newOtherFilterState.checkedIOHSDT = checkedKeys;
    this.setState({ otherFilterState: newOtherFilterState });
  }

  onSelect = (selectedKeys, info) => {
    // TODO: THIS NEEDS FIXING!!
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

  toggleSection = (section) => {
    // TODO: THIS NEEDS FIXING!!
    this.setState({
      section: !this.state[section]
    })
  }

  showSection = (section) => {
    // TODO: THIS NEEDS FIXING!!
    this.setState({
      section
    })
  }

  handleRelevanceChange = (event) => {
    // TODO: THIS NEEDS FIXING
    if (event.target.value === 'Yes') {
      this.setState({
        relevanceValue: event.target.value,
        showEligibility: true
      });/*
            this.setState({
                showEligibility: true
            });*/
    } else {

    }
  }

  save = () => {
    const { currentArticle } = this.props;

    if (currentArticle.eligibilityFiltersJuniorInput && currentArticle.eligibilityFiltersJuniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === currentArticle._eligibilityFiltersJunior)) {
      this.setState({ currentFilterState: currentArticle.eligibilityFiltersJuniorInput.hseState.inputValues, otherFilterState: currentArticle.eligibilityFiltersSeniorInput.hseState.inputValues });

    } else if (currentArticle.eligibilityFiltersSeniorInput && currentArticle.eligibilityFiltersSeniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === currentArticle._eligibilityFiltersSenior)) {
      this.setState({ currentFilterState: currentArticle.eligibilityFiltersSeniorInput.hseState.inputValues, otherFilterState: currentArticle.eligibilityFiltersJuniorInput.hseState.inputValues });
    }
    this.props.assignHSEAssignedEligibilityFiltersArticleEditComplete(this.props.match.params.articleId, this.state.currentFilterState, this.props.history);
  }

  cancel = () => {
    this.props.history.push('/hse/assignedeligibilityfiltersarticlequeue')
  }

  handleGeneralEligibility = (event) => {
    switch (event.target.value) {
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
        });
        break;
      case "intergovernmentalOrganizationsHealthSystemsDocuments":
        this.setState({

        });
        break;
      case "CanadasHealthSystemsDocuments":
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
          "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclutions in HSE.":
      */
    }
  }

  renderRelevance = (relevance) => {
    if (relevance)
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
                  <Input type="radio" name="a" value="No" onChange={this.handleRelevanceChange} />
                  <span className="fa fa-circle"></span>{" "}No</label>
              </div>
            </div>
          </FormGroup>
        </fieldset>
      );
  }

  renderGeneralArticleInformation = (generalInfo) => {
    if (generalInfo)
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
                    <Input type="checkbox" defaultValue="" />

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
                  <Input type="radio" name="a" value="evidenceBriefsForPolicy" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Evidence briefs for policy
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="overviewsOfSystematicReviews" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="systematicReviewsAddressingOtherQuestions" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="systematicReviewsInProgress" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Systematic reviews in progress
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="systematicReviewsBeingPlanned" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Systematic reviews being planned
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="economicEvaluationsAndCostingStudies" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Economic evaluations and costing studies
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="healthReformDescriptions" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Health reform descriptions
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="healthSystemDescriptions" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Health system descriptions
                    </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="option2" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Intergovernmental organizations' health systems documents
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="option2" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Canada's health systems documents
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="option2" onChange={this.handleGeneralEligibility} />
                  <span className="fa fa-circle"></span>{" "}Ontario's health system documents
                  </label>
              </div>
              <div className="c-radio">
                <label>
                  <Input type="radio" name="a" value="option2" />
                  <span className="fa fa-circle"></span>{" "}NO. After reviewing the docuement types and eligibility criteria, this record is not eligible for inclutions in HSE.
                  </label>
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

  renderTreeNodes = (data, disableCheckbox) => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item} disableCheckbox={disableCheckbox}>
          {this.renderTreeNodes(item.children, disableCheckbox)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} disableCheckbox={disableCheckbox} />;
  })

  renderTreeSection = (sectionTitle, sectionTreeData, sectionStatus, showLine, checkedEvent, checkedKeyState, disableCheckbox) => {
    if (sectionStatus) {
      return (
        <fieldset>
          <legend className="offset-md-1">{sectionTitle}</legend>
          <br />

          <FormGroup row>
            <label className="col-md-1 offset-md-1 col-form-label"></label>
            <div className="col-md-10">
              <Tree
                showLine={showLine}
                checkable
                defaultExpandAll={true}
                onExpand={this.onExpand}
                autoExpandParent={true}
                onCheck={checkedEvent}
                checkedKeys={checkedKeyState}
                onSelect={this.onSelect}
              // selectedKeys={this.state.selectedKeys}
              >
                {this.renderTreeNodes(sectionTreeData, disableCheckbox)}
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
    if (show)
      return (
        <fieldset className="col-md-10 offset-md-1">
          <legend>Assessment and Assignment Status</legend>
          <br />
          <div className="form-group row mb">
            <label className="col-md-6 col-form-label">
              <Col md={12} style={{ paddingLeft: 0 }}>
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
            <Col md={6}>
              <label className="col-md-12 col-form-label">
                <p>
                  If an article is deleted, please enter the reason for removal (in case its removal is questioned later):
              </p>
              </label>
              <div className="col-md-12">
                <Input type="textarea" disabled="" />
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
    // FIXME: this.state.fetchedArticle never returns anything, checked on staging as well
    if (!this.state.fetchedArticle)
      return <div>Loading...</div>
    //console.log(`currentArticle: ${this.props.currentArticle}`);

    // used for react select
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    // this.setState({ eligibilityFilterModel: this.getInputValues() });

    // console.log(this.state.eligibilityFilterModel);

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
                <div><h3>Inputs</h3></div>
                <div>Article Id: {this.props.match.params.articleId} </div>
                <div>Title: {(this.props.currentArticle) && this.props.currentArticle.title} </div>
              </div>
              </CardHeader>
              <hr className="my-4" />
              <CardBody>
                <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

                  {this.state.fetchedArticle && this.renderGeneralArticleInformation(this.state.currentFilterState.showGeneralArticleInformation)}

                  {this.state.fetchedArticle && this.renderRelevance(this.state.currentFilterState.showRelevance)}

                  {this.state.fetchedArticle && this.renderEligibility(this.state.currentFilterState.showEligibility)}

                  {this.state.fetchedArticle && this.renderDocumentType(this.state.currentFilterState.documentType)}

                  {this.state.fetchedArticle && this.renderTreeSection("Health System Topics", healthSystemTopicsTreeData, this.state.currentFilterState.showHealthSystemsTopics, false, this.onCheckHST, this.state.currentFilterState.checkedKeysHST, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Canadian Areas", canadianAreasTreeData, this.state.currentFilterState.showCanadianAreas, false, this.onCheckCA, this.state.currentFilterState.checkedKeysCA, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Domains", domainsTreeData, this.state.currentFilterState.showDomains, true, this.onCheckDomain, this.state.currentFilterState.checkedDomain, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("LMIC Focus", lmicFocusTreeData, this.state.currentFilterState.showLMICFocus, false, this.onCheckLMIC, this.state.currentFilterState.checkedLMIC, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Province Focus", provinceFocusTreeData, this.state.currentFilterState.showProvinceFocus, false, this.onCheckProvince, this.state.currentFilterState.checkedProvince, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Theme", themeTreeData, this.state.currentFilterState.showTheme, false, this.onCheckTheme, this.state.currentFilterState.checkedTheme, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Population", populationTreeData, this.state.currentFilterState.showPopulation, false, this.onCheckPopulation, this.state.currentFilterState.checkedPopulation, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Ontario priority areas", ontarioPriorityAreasTreeData, this.state.currentFilterState.showOntarioPriorityArea, false, this.onCheckOPA, this.state.currentFilterState.checkedOPA, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Canadian health system document type", canadaHealthSystemSubtype, this.state.currentFilterState.showCanadianHealthSystemDocument, false, this.onCheckCHSDT, this.state.currentFilterState.checkedCHSDT, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Ontarian health system document type", ontarioHealthSubtype, this.state.currentFilterState.showOntarianHealthSystemDocument, false, this.onCheckOHSDT, this.state.currentFilterState.checkedOHSDT, false)}

                  {this.state.fetchedArticle && this.renderTreeSection("Intergovernmental organization health system document type", intergovernmentalOrganizationSubtype, this.state.currentFilterState.showIntergovernmentalOrganizationHealthSystemDocument, false, this.onCheckIOHSDT, this.state.currentFilterState.checkedIOHSDT, false)}

                  {this.state.fetchedArticle && this.renderArticleAssessmentSection(value, this.state.currentFilterState.showArticleAssessment)}
                </form>
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
                <div>Article Id: {this.props.match.params.articleId} </div>
                <div>Title: {(this.props.currentArticle) && this.props.currentArticle.title} </div>
              </div>
              </CardHeader>
              <hr className="my-4" />
              <CardBody>
                <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

                  {this.renderGeneralArticleInformation(this.state.otherFilterState.showGeneralArticleInformation)}

                  {this.renderRelevance(this.state.otherFilterState.showRelevance)}

                  {this.renderEligibility(this.state.otherFilterState.showEligibility)}

                  {this.renderDocumentType(this.state.otherFilterState.documentType)}

                  {this.renderTreeSection("Health System Topics", healthSystemTopicsTreeData, this.state.otherFilterState.showHealthSystemsTopics, false, this.onCheckHSTOther, this.state.otherFilterState.checkedKeysHST, true)}

                  {this.renderTreeSection("Canadian Areas", canadianAreasTreeData, this.state.otherFilterState.showCanadianAreas, false, this.onCheckCAOther, this.state.otherFilterState.checkedKeysCA, true)}

                  {this.renderTreeSection("Domains", domainsTreeData, this.state.otherFilterState.showDomains, true, this.onCheckDomainOther, this.state.otherFilterState.checkedDomain, true)}

                  {this.renderTreeSection("LMIC Focus", lmicFocusTreeData, this.state.otherFilterState.showLMICFocus, false, this.onCheckLMICOther, this.state.otherFilterState.checkedLMIC, true)}

                  {this.renderTreeSection("Province Focus", provinceFocusTreeData, this.state.otherFilterState.showProvinceFocus, false, this.onCheckProvinceOther, this.state.otherFilterState.checkedProvince, true)}

                  {this.renderTreeSection("Theme", themeTreeData, this.state.otherFilterState.showTheme, false, this.onCheckThemeOther, this.state.otherFilterState.checkedTheme, true)}

                  {this.renderTreeSection("Population", populationTreeData, this.state.otherFilterState.showPopulation, false, this.onCheckPopulationOther, this.state.otherFilterState.checkedPopulation, true)}

                  {this.renderTreeSection("Ontario priority areas", ontarioPriorityAreasTreeData, this.state.otherFilterState.showOntarioPriorityArea, false, this.onCheckOPAOther, this.state.otherFilterState.checkedOPA, true)}

                  {this.renderTreeSection("Canadian health system document type", canadaHealthSystemSubtype, this.state.otherFilterState.showCanadianHealthSystemDocument, false, this.onCheckCHSDTOther, this.state.otherFilterState.checkedCHSDT, true)}

                  {this.renderTreeSection("Ontarian health system document type", ontarioHealthSubtype, this.state.otherFilterState.showOntarianHealthSystemDocument, false, this.onCheckOHSDTOther, this.state.otherFilterState.checkedOHSDT, true)}

                  {this.renderTreeSection("Intergovernmental organization health system document type", intergovernmentalOrganizationSubtype, this.state.otherFilterState.showIntergovernmentalOrganizationHealthSystemDocument, false, this.onCheckIOHSDTOther, this.state.otherFilterState.checkedIOHSDT, true)}

                  {this.renderArticleAssessmentSection(value, this.state.otherFilterState.showArticleAssessment)}


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

function mapStateToProps({ hseAssignedEligibilityFiltersArticleQueue, auth }) {
  return {
    currentUser: auth.currentUser,
    errorMessage: hseAssignedEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
    currentArticle: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticleFetch
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'eligibilityFilterResolution'
  }))(ArticleResolution);
