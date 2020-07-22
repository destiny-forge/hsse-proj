import _ from 'lodash';
import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import Select from 'react-select';
import ArticleService from '../../services/ArticleService';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import EligibilityService from '../../services/EligibilityService';
import { hse, sse } from '../Eligibility/data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const { TreeNode } = Tree;

class Conflicts extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.treeData = type === 'hse' ? hse.tree : sse.tree;

    const keys = this.getKeyArray(this.treeData);

    this.state = {
      eligibilityId: null,
      article: '',
      generalFocus: false,
      type: type,
      categories: Object.keys(this.treeData),
      left: keys,
      right: keys,
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
    const { user } = this.props;

    const { articleId, eligibilityId, type } = this.state;

    let newState = Object.assign({}, this.state.left);
    newState[evt.node.props.name] = selectedKeys;

    let formData = {
      _id: eligibilityId,
      articleId: articleId,
      userId: user.id,
      type: type,
      filters: selectedKeys,
    };

    this.Eligibility.create(formData)
      .then((_res) => {
        this.setState({
          left: newState,
        });
        this.notifySuccess();
      })
      .catch((err) => {
        console.log(err);
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

  compare() {
    const { shortId } = this.props.match.params;
    const { user } = this.props;

    let conflicts = [];
    this.Article.get(shortId).then((result) => {
      if (result.success) {
        const article = result.data;

        this.setState({
          articleId: article._id,
          type: article.type,
        });

        this.Article.compare(article._id)
          .then((res) => {
            if (res.success) {
              conflicts = res.data.map((conflict) => {
                return conflict.path[1];
              });
              const { junior, senior } = article.stages.eligibility;
              const theirId = junior._id === user.id ? senior._id : junior._id;

              this.getEligibility(shortId, user.id, 'left', conflicts);
              this.getEligibility(shortId, theirId, 'right', conflicts);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  getEligibility(shortId, userId, side, conflicts) {
    this.Eligibility.get(shortId, userId).then((result) => {
      const eligibility = result.data;
      //console.log(eligibility);
      if (!_.isNull(eligibility)) {
        let newState = Object.assign({}, this.state[side]);
        for (const category of this.state.categories) {
          const keys = this.flatten(this.treeData[category].items);
          keys.forEach((key) => {
            if (eligibility.filters.indexOf(key) >= 0) {
              newState[category].push(key);
            }
          });
        }

        let state = {
          selectedDocumentType: eligibility.documentType,
          [side]: newState,
        };

        if (side === 'left') {
          state = Object.assign(state, {
            generalFocus: eligibility.generalFocus,
            eligibilityId: eligibility._id,
            conflicts,
          });
        }

        this.setState(state);
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.left) !== JSON.stringify(prevState.left)) {
      this.compare();
    }
  }

  componentDidMount() {
    this.compare();
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  renderTreeSection = (key, side) => {
    const subTree = this.treeData[key].items;
    const checkedKeyState = this.state[side][key];
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
            {this.renderTreeNodes(subTree, key, side)}
          </Tree>
        </div>
      </React.Fragment>
    );
  };

  renderTreeNodes = (data, key, side) => {
    const isTheirs = side === 'right';
    return data.map((item) => {
      item.name = key;
      let style;
      if (isTheirs) {
        style = _.includes(this.state.conflicts, item.key)
          ? { background: '#FFBABA' }
          : { background: '#90ee90' };
      }

      if (item.children) {
        return (
          <TreeNode
            name={item.name}
            title={<span style={style}>{item.title}</span>}
            key={item.key}
            dataRef={item}
            disableCheckbox={side === 'right'}
          >
            {this.renderTreeNodes(item.children, key, side)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          {...item}
          title={<span style={style}>{item.title}</span>}
          disableCheckbox={side}
        />
      );
    });
  };

  notifyDone = () => toast.success('Eligibility completed!');
  notifySuccess = () => toast.success('Successfully saved!');

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
      left,
      article,
      type,
      generalFocus,
      selectedDocumentType,
      //selectedStatus,
    } = this.state;

    const { user } = this.props;

    let formData = {
      type: type,
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      generalFocus: generalFocus,
      documentType: selectedDocumentType.value,
      filters: [],
      //selectedStatus: selectedStatus.value,
    };

    Object.keys(left).forEach((key) => {
      left[key].map((k) => {
        formData.filters.push(k);
      });
    });

    this.Eligibility.create(formData)
      .then((res) => {
        this.props.history.replace(`/${type}`);
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
                    onChange={(value) =>
                      this.handleChange('selectedDocumentType', value)
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
              <div className="box-divider pt-2 mb-3"></div>
              <div className="row">
                <div className="col-sm-6">
                  <h2>Mine</h2>
                  {Object.keys(this.treeData).map((key) => (
                    <>
                      <div className="box-divider pt-2 mb-3"></div>
                      <h6>{this.treeData[key].title}</h6>
                      {this.renderTreeSection(key, 'left')}
                    </>
                  ))}
                </div>
                <div className="col-sm-6">
                  <h2>Theirs</h2>
                  {Object.keys(this.treeData).map((key) => (
                    <>
                      <div className="box-divider pt-2 mb-3"></div>
                      <h6>{this.treeData[key].title}</h6>
                      {this.renderTreeSection(key, 'right')}
                    </>
                  ))}
                </div>
              </div>
              <div className="box-divider pt-2 mb-3"></div>
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

export default withRouter(withAuth(Conflicts));
