import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import Select from 'react-select';
import ArticleService from '../../services/ArticleService';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import { healthSystemTopicsTreeData } from './HSETreeData';

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

class EligibilityForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      article: "",
      generalFocus: false
    }

    this.Article = ArticleService({ fetch: this.props.fetch });
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

  handleTreeClick = (selectedKeys) => {
    this.setState({
      ...this.state,
      selectedKeys
    }, () => console.log(this.state))
  }

  componentDidMount() {
    const { shortId } = this.props.match.params;

    this.Article.get(shortId)
      .then(res => {
        if (res.success) {
          this.setState({
            article: res.data
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

  renderTreeSection = (sectionTreeData, handleTreeClick, checkedKeyState) => {
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
            {this.renderTreeNodes(sectionTreeData)}
          </Tree>
        </div>
      </React.Fragment>
    );
  }

  renderTreeNodes = (data) => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode 
          title={item.title} 
          key={item.key} 
          dataRef={item} 
          disableCheckbox={false}
        >
          {this.renderTreeNodes(item.children, false)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} disableCheckbox={false} />;
  })

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
              <h6>Health Systems Topic</h6>
              {
                this.renderTreeSection(
                  healthSystemTopicsTreeData, 
                  this.handleTreeClick, 
                  this.state.selectedKeys, 
                  false
                )
              }
              <button
                type="submit"
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

export default withRouter(withAuth(EligibilityForm));