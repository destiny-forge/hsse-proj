import _ from 'lodash';
import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import Select from 'react-select';
import ArticleService from '../../services/ArticleService';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import EligibilityService from '../../services/EligibilityService';
import {
  treeData,
} from '../Eligibility/HSETreeData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const { TreeNode } = Tree;

const DOCUMENT_TYPES = [
  { value: 'Evidence briefs for policy', label: 'Evidence briefs for policy' },
  { value: 'Overviews of systematic reviews', label: 'Overviews of systematic reviews' },
  { value: 'Systematic reviews addressing other questions', label: 'Systematic reviews addressing other questions' },
  { value: 'Systematic reviews in progress', label: 'Systematic reviews in progress' },
  { value: 'Systematic reviews being planned', label: 'Systematic reviews being planned' },
  { value: 'Economic evaluations and costing studies', label: 'Economic evaluations and costing studies' },
  { value: 'Health reform descriptions', label: 'Health reform descriptions' },
  { value: 'Health system descriptions', label: 'Health system descriptions' },
  { value: 'Intergovernmental organizations’ health systems documents', label: 'Intergovernmental organizations’ health systems documents' },
  { value: 'Canada’s health systems documents', label: 'Canada’s health systems documents' },
  { value: 'Ontario’s health system documents', label: 'Ontario’s health system documents' },
  { value: 'No, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.', label: 'NO, after reviewing the document types and eligibility criteria, this record is not eligible for inclusions in HSE.' },
];

const STATUSES = [
  { value: 'New Article', label: 'New Article' },
  { value: 'Data Entry Complete', label: 'Data Entry Complete' },
  { value: 'Live', label: 'Live' },
  { value: 'Delete', label: 'Delete' },
]

class Conflicts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      article: "",
      generalFocus: false,
      type: 'hse',
      currentFilterState: {
        checkedKeysHST: [],
        checkedKeysCA: [],
        checkedDomain: [],
        checkedLMIC: [],
        checkedProvince: [],
        checkedTheme: [],
        checkedPopulation: [],
        checkedOPA: [],
      },
    }

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Eligibility = EligibilityService({ fetch: this.props.fetch });
  }

  handleChange = (field, value) => {
    this.setState({
      [field]: value
    });
  }

  handleCheckbox = (e) => {
    const {
      checked,
      name
    } = e.target;

    this.setState({
      [name]: checked
    })
  }

  handleTreeClick = (selectedKeys, evt) => {
    let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
    newCurrentFilterState[evt.node.props.name] = selectedKeys;
    this.setState({
      currentFilterState: newCurrentFilterState
    });
  }

  componentDidMount() {
    const { id, shortId } = this.props.match.params;
    const { user } = this.props;

    this.Article.compare(id)
      .then(res => {
        if (res.success) {
          console.log(res.data);
          this.setState({
            article: res.data
          });
          // grab any updated data for the filters if exists.
          this.Eligibility.get(shortId, user.id)
            .then(filterData => {
              const filters = filterData.data;
              const treeKeys = Object.keys(treeData);
              console.log(filters);
              console.log(treeKeys);
              for (const key of treeKeys) {
                treeData[key].map(k => {
                  if (!_.isNull(filters)) {
                    if (filters[k.key] === true) {
                      let newCurrentFilterState = Object.assign({}, this.state.currentFilterState);
                      newCurrentFilterState[key].push(k.key);

                      this.setState({
                        selectedDocumentType: filterData.data.documentType,
                        currentFilterState: newCurrentFilterState,
                      });
                    }
                  }
                })
              }
            })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  renderTreeSection = (sectionTreeData, handleTreeClick, checkedKeyState, name) => {

    return (
      <React.Fragment>
        <label className="col-md-1 offset-md-1 col-form-label"></label>
        <div className="col-md-10">
          <Tree
            checkable
            showLine={true}
            defaultExpandAll={false}
            autoExpandParent={true}
            onExpand={this.onExpand}
            onCheck={handleTreeClick}
            checkedKeys={checkedKeyState}
          >
            {this.renderTreeNodes(sectionTreeData, name)}
          </Tree>
        </div>
      </React.Fragment>
    );
  }

  renderTreeNodes = (data, name) => data.map((item) => {
    // Adds name to the object to be used int he handle click
    // so that we can set state properly.
    item.name = name;

    if (item.children) {
      return (
        <TreeNode
          name={item.name}
          title={item.title}
          key={item.key}
          dataRef={item}
          disableCheckbox={false}
        >
          {this.renderTreeNodes(item.children, name)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} disableCheckbox={false} />;
  })

  notifyDone = () => toast.success("Eligibility completed!");

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      currentFilterState,
      article,
      type,
      generalFocus,
      selectedDocumentType,
      selectedStatus
    } = this.state;

    const { user } = this.props;

    let formData = {
      type: type,
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      generalFocus: generalFocus,
      role: 'junior',
      documentType: selectedDocumentType.value,
      selectedStatus: selectedStatus.value
    };

    console.log(formData)

    Object.keys(currentFilterState).forEach((key, idx) => {
      currentFilterState[key].map(k => {
        formData[k] = true;
      });
    })

    this.Eligibility.create(formData)
      .then(res => {
        this.props.history.replace(`/${type}`);
        this.notifyDone();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { article } = this.state;

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>{article.title}</h2>
            <small>Ref Id: {article.shortId}</small>
          </div>
          <div className="box-body">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref id</label>
                <div className="col-sm-10">
                  {article.shortId}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live date</label>
                <div className="col-sm-10">
                  N/A
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Document type</label>
                <div className="col-sm-4">
                  <Select
                    value={this.state.selectedDocumentType}
                    name="selectedDocumentType"
                    onChange={(value) => this.handleChange('selectedDocumentType', value)}
                    options={DOCUMENT_TYPES}
                    isSearchable
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">General focus?</label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="generalFocus"
                      onChange={this.handleCheckbox}
                    /> Yes, this article has a general focus (review definition and code accordingly, nothing that the default is set to specific)
                  </label>
                </div>
              </div>
              <div className="box-divider pt-2 mb-3"></div>
              <div className="row">
              <div className="col-sm-6">
                <h2>Mine</h2>
                <h6>Health Systems Topic</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedKeysHST,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedKeysHST,
                    'checkedKeysHST'
                  )
                }
                <div className="box-divider pt-2 mb-3"></div>
                <h6>Canadian Areas</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedKeysCA,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedKeysCA,
                    'checkedKeysCA'
                  )
                }
                <div className="box-divider pt-2 mb-3"></div>
                <h6>Domains</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedDomain,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedDomain,
                    'checkedDomain'
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>LMIC Focus</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedLMIC,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedLMIC,
                    'checkedLMIC'
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Province Focus</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedProvince,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedProvince,
                    'checkedProvince',
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Theme</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedTheme,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedTheme,
                    'checkedTheme'
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Population</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedPopulation,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedPopulation,
                    'checkedPopulation',
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Ontario Priority Areas</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedOPA,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedOPA,
                    'checkedOPA'
                  )
                }
              </div>
              <div className="col-sm-6">
                <h2>Theirs</h2>
                <h6>Health Systems Topic</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedKeysHST,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedKeysHST,
                    'checkedKeysHST'
                  )
                }
                <div className="box-divider pt-2 mb-3"></div>
                <h6>Canadian Areas</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedKeysCA,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedKeysCA,
                    'checkedKeysCA'
                  )
                }
                <div className="box-divider pt-2 mb-3"></div>
                <h6>Domains</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedDomain,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedDomain,
                    'checkedDomain'
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>LMIC Focus</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedLMIC,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedLMIC,
                    'checkedLMIC'
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Province Focus</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedProvince,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedProvince,
                    'checkedProvince',
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Theme</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedTheme,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedTheme,
                    'checkedTheme'
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Population</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedPopulation,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedPopulation,
                    'checkedPopulation',
                  )
                }

                <div className="box-divider pt-2 mb-3"></div>
                <h6>Ontario Priority Areas</h6>
                {
                  this.renderTreeSection(
                    treeData.checkedOPA,
                    this.handleTreeClick,
                    this.state.currentFilterState.checkedOPA,
                    'checkedOPA'
                  )
                }
              </div>
              </div>
              <div className="box-divider pt-2 mb-3"></div>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(Conflicts));