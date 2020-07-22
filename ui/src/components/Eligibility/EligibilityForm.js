import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router';
import Select from 'react-select';
import { Tree } from 'antd';
import { toast } from 'react-toastify';
import withAuth from '../withAuth';
import ArticleService from '../../services/ArticleService';
import EligibilityService from '../../services/EligibilityService';
import { hse, sse } from './data';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.min.css';

const { TreeNode } = Tree;

const STATUSES = [
  { value: 'New Article', label: 'New Article' },
  { value: 'Data Entry Complete', label: 'Data Entry Complete' },
  { value: 'Live', label: 'Live' },
  { value: 'Delete', label: 'Delete' },
];

class EligibilityForm extends React.Component {
  constructor(props) {
    super(props);
    const { type } = this.props.match.params;

    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.treeData = type === 'hse' ? hse.tree : sse.tree;

    this.state = {
      _id: null,
      article: '',
      generalFocus: false,
      type: 'hse',
      currentFilterState: this.getKeyArray(this.treeData),
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Eligibility = EligibilityService({ fetch: this.props.fetch });
  }

  getKeyArray = (tree) => {
    const filterState = {};
    const keys = Object.keys(tree);
    keys.forEach((key) => {
      filterState[key] = [];
    });
    return filterState;
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleCheckbox = (e) => {
    const { checked, name } = e.target;

    this.setState({
      [name]: checked,
    });
  };

  handleTreeClick = (selectedKeys, evt) => {
    let newState = Object.assign({}, this.state.currentFilterState);
    newState[evt.node.props.name] = selectedKeys;
    this.setState({
      currentFilterState: newState,
    });
  };

  flatten(tree) {
    let keys = [];
    tree.map((item) => {
      //console.log(item);
      keys.push(item.key);
      if (item.hasOwnProperty('children')) {
        keys = keys.concat(this.flatten(item.children));
      }
    });
    return keys;
  }

  componentDidMount() {
    const { shortId } = this.props.match.params;
    const { user } = this.props;

    let newState = Object.assign({}, this.state.currentFilterState);
    const categories = Object.keys(this.treeData);

    this.Article.get(shortId)
      .then((res) => {
        if (res.success) {
          this.setState({
            article: res.data,
          });

          this.Eligibility.get(shortId, user.id).then((result) => {
            const eligibility = result.data;
            //console.log(eligibility);
            if (!_.isNull(eligibility)) {
              for (const category of categories) {
                const keys = this.flatten(this.treeData[category].items);
                keys.forEach((key) => {
                  if (eligibility.filters.indexOf(key) >= 0) {
                    newState[category].push(key);
                  }
                });
              }

              this.setState({
                _id: eligibility._id,
                generalFocus: eligibility.generalFocus,
                selectedStatus: eligibility.selectedStatus,
                selectedDocumentType: eligibility.documentType,
                currentFilterState: newState,
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  renderTreeSection = (key) => {
    const subTree = this.treeData[key].items;
    const checkedKeyState = this.state.currentFilterState[key];
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
            onCheck={this.handleTreeClick}
            checkedKeys={checkedKeyState}
          >
            {this.renderTreeNodes(subTree, key)}
          </Tree>
        </div>
      </React.Fragment>
    );
  };

  renderTreeNodes = (data, name) =>
    data.map((item) => {
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
    });

  notifyDone = () => toast.success('Eligibility successfully saved!');

  getAssignmentRole(user, article) {
    const { eligibility } = article.stages;
    let juniorAssigned = false;
    if (!_.isUndefined(eligibility['junior'])) {
      juniorAssigned = eligibility.junior.email === user.email;
    }
    return juniorAssigned ? 'junior' : 'senior';
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      currentFilterState,
      article,
      type,
      generalFocus,
      selectedDocumentType,
      selectedStatus,
    } = this.state;

    const { user } = this.props;

    let formData = {
      type: type,
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      generalFocus: generalFocus,
      role: this.getAssignmentRole(user, article),
      documentType: selectedDocumentType,
      selectedStatus: selectedStatus,
      filters: [],
    };

    if (this.state._id != null) {
      formData._id = this.state._id;
    }

    Object.keys(currentFilterState).forEach((key) => {
      currentFilterState[key].map((k) => {
        formData.filters.push(k);
      });
    });

    this.Eligibility.create(formData)
      .then((res) => {
        this.props.history.replace(`/batch/articles/${article.batchId}`);
        this.notifyDone();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <div className="col-sm-10">{article.shortId}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live date</label>
                <div className="col-sm-10">N/A</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Document type</label>
                <div className="col-sm-4">
                  <Select
                    value={this.types.filter(
                      (opt) => opt.value === this.state.selectedDocumentType
                    )}
                    name="selectedDocumentType"
                    onChange={(opt) =>
                      this.handleChange('selectedDocumentType', opt.value)
                    }
                    options={this.types}
                    isSearchable
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  General focus?
                </label>
                <div className="col-sm-10">
                  <label className="form-check-label">
                    <input
                      checked={this.state.generalFocus}
                      type="checkbox"
                      className="form-check-input"
                      name="generalFocus"
                      onChange={this.handleCheckbox}
                    />{' '}
                    Yes, this article has a general focus (review definition and
                    code accordingly, nothing that the default is set to
                    specific)
                  </label>
                </div>
              </div>

              {Object.keys(this.treeData).map((key) => (
                <>
                  <div className="box-divider pt-2 mb-3"></div>
                  <h6>{this.treeData[key].title}</h6>
                  {this.renderTreeSection(key)}
                </>
              ))}

              <div className="box-divider pt-2 mb-3"></div>
              <h6>Assessment and Assignment Status</h6>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-4">
                  <Select
                    value={STATUSES.filter(
                      (opt) => opt.value === this.state.selectedStatus
                    )}
                    name="selectedStatus"
                    onChange={(opt) =>
                      this.handleChange('selectedStatus', opt.value)
                    }
                    options={STATUSES}
                    isSearchable
                  />
                </div>
                <ul>
                  <li>
                    <b>New article</b> = New, still having content added, not
                    visible in searches
                  </li>
                  <li>
                    <b>Data entry complete</b> = All required content has been
                    added, still not visible in searches
                  </li>
                  <li>
                    <b>Live</b> = Available for searching/alerting
                  </li>
                  <li>
                    <b>Deleted</b> = Removed from the system, not visible in
                    searches
                  </li>
                </ul>
              </div>
              {this.state.selectedStatus &&
                this.state.selectedStatus.value === 'Delete' && (
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Please enter the reason for removal (in case its removal
                      is questioned later):
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        rows="5"
                        name="deleteReason"
                        value={this.state.deleteReason}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                  </div>
                )}
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn primary"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(EligibilityForm));
