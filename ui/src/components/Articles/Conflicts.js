import _ from 'lodash';
import React from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import Select from 'react-select';
import ArticleService from '../../services/ArticleService';
import EligibilityService from '../../services/EligibilityService';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
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

    const keyArray = this.getKeyArray(this.treeData);

    this.state = {
      expanded: {},
      type: type,
      article: '',
      topics: Object.keys(this.treeData),
      left: {
        eligibility: '',
        selected: keyArray,
      },
      right: {
        eligibility: '',
        selected: keyArray,
      },
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Eligibility = EligibilityService({ fetch: this.props.fetch });
  }

  getKeyArray = (tree) => {
    let filterState = {};
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
    const { type, article, left } = this.state;
    const { eligibility } = left;
    const key = evt.node.props.name;

    let newState = Object.assign({}, left);
    newState.selected[key] = selectedKeys;

    let allKeys = [];
    Object.keys(newState.selected).forEach((key) => {
      allKeys = allKeys.concat(newState.selected[key]);
    });

    let formData = {
      _id: eligibility._id,
      articleId: article._id,
      userId: user.id,
      type: type,
      filters: allKeys,
    };

    this.Eligibility.create(formData)
      .then((_res) => {
        this.setState({ left: newState }, this.compare);
        this.notifySuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  flatten(tree) {
    let keys = [];
    tree.forEach((item) => {
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
          article: result.data,
          articleId: article._id,
          type: article.type,
        });

        this.Eligibility.compare(article._id)
          .then((res) => {
            if (res.success) {
              conflicts = res.data.map((conflict) => {
                return conflict.path[1] || conflict.path[0];
              });

              this.setExpandedNodes(conflicts);

              this.setState({ conflicts });

              const { junior, senior } = article.stages.eligibility;
              const theirId = junior._id === user.id ? senior._id : junior._id;

              this.getEligibility(shortId, user.id, 'left');
              this.getEligibility(shortId, theirId, 'right');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  setExpandedNodes(conflicts) {
    const expanded = {};
    Object.keys(this.treeData).forEach((key) => {
      expanded[key] = this.getExpandedNodes(
        this.treeData[key].items,
        conflicts
      );
    });
    this.setState({ expanded });
  }

  getExpandedNodes(items, conflicts, parent) {
    let nodes = [];
    items.forEach((item) => {
      if (_.includes(conflicts, item.key)) {
        if (!_.isUndefined(parent)) {
          if (!_.includes(nodes, parent)) {
            nodes.push(parent);
          }
        } else {
          nodes.push(item.key);
        }
      }
      if (_.has(item, 'children')) {
        nodes = nodes.concat(
          this.getExpandedNodes(item.children, conflicts, item.key)
        );
      }
    });
    return nodes;
  }

  getEligibility(shortId, userId, side) {
    this.Eligibility.get(shortId, userId).then((result) => {
      const eligibility = result.data;
      const filters = this.getEligibilityFilterState(eligibility);
      let newState = Object.assign({}, this.state[side]);
      newState.selected = filters;

      let state = {
        [side]: {
          ...newState,
          eligibility,
        },
      };

      this.setState(state);
    });
  }

  getEligibilityFilterState(eligibility) {
    let filters = this.getKeyArray(this.treeData);
    for (const topic of this.state.topics) {
      const keys = this.flatten(this.treeData[topic].items);
      keys.forEach((key) => {
        eligibility.filters.forEach((filter) => {
          if (filter === key) {
            filters[topic].push(filter);
          }
        });
      });
    }
    return filters;
  }

  componentDidMount() {
    this.compare();
  }

  onExpand = (key, expandedKeys) => {
    const expanded = Object.assign({}, this.state.expanded);
    expanded[key] = expandedKeys;
    this.setState({
      expanded,
    });
  };

  renderTreeSection = (key, side) => {
    const subTree = this.treeData[key].items;
    const checkedKeyState = this.state[side].selected[key];
    const expandedKeys = this.state.expanded[key] || [];
    return (
      <React.Fragment>
        <div className="col-md-10">
          <Tree
            checkable
            showLine={true}
            defaultExpandAll={false}
            autoExpandParent={true}
            onExpand={(expandedKeys) => this.onExpand(key, expandedKeys)}
            onCheck={this.handleTreeClick}
            checkedKeys={checkedKeyState}
            expandedKeys={expandedKeys}
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
        if (_.includes(this.state.conflicts, item.key)) {
          style = { background: '#FFBABA' };
        } else {
          style = { background: '#90ee90' };
        }
      }

      const isCheckboxDisabled = side === 'right' ? true : false;

      if (item.children) {
        return (
          <TreeNode
            name={item.name}
            title={<span style={style}>{item.title}</span>}
            key={item.key}
            dataRef={item}
            disableCheckbox={isCheckboxDisabled}
          >
            {this.renderTreeNodes(item.children, key, side)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          {...item}
          title={<span style={style}>{item.title}</span>}
          disableCheckbox={isCheckboxDisabled}
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

    const { type, left, article } = this.state;
    const { eligibility } = left;
    const { user } = this.props;

    let formData = {
      userId: user.id,
      articleId: article._id,
      shortArticleId: article.shortId,
      type: type,
      documentType: eligibility.type,
      generalFocus: eligibility.focus,
      filters: [],
    };

    Object.keys(left.selected).forEach((key) => {
      left.selected[key].forEach((k) => {
        formData.filters.push(k);
      });
    });

    console.log(formData);

    // We need to call the resolve function of the Conflict
    //

    // this.Eligibility.create(formData)
    //   .then((res) => {
    //     this.props.history.replace(`/${type}`);
    //     this.notifyDone();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    const { article, left, right } = this.state;
    if (!left.eligibility) {
      return null;
    }

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

              <div className="box-divider pt-2 mb-3"></div>
              <div className="row">
                <div className="col-sm-6">
                  <h2>Mine</h2>
                  <div className="box-divider pt-2 mb-3"></div>
                  <div className="form-group">
                    <label>Document type</label>
                    <Select
                      value={this.types.filter(
                        (opt) => opt.value === left.eligibility.type
                      )}
                      name="selectedDocumentType"
                      onChange={(value) =>
                        this.handleChange('selectedDocumentType', value)
                      }
                      options={this.types}
                      isSearchable
                    />
                  </div>
                  <div className="form-group">
                    <label>General focus?</label>
                    <label
                      style={{ fontWeight: 'normal', padding: '0px 20px' }}
                    >
                      <input
                        checked={left.eligibility.generalFocus}
                        type="checkbox"
                        className="form-check-input"
                        name="generalFocus"
                        onChange={this.handleCheckbox}
                      />{' '}
                      Yes, this article has a general focus (review definition
                      and code accordingly, nothing that the default is set to
                      specific)
                    </label>
                  </div>
                  {Object.keys(this.treeData).map((key) => (
                    <div key={key}>
                      <div className="box-divider pt-2 mb-3"></div>
                      <h6>{this.treeData[key].title}</h6>
                      {this.renderTreeSection(key, 'left')}
                    </div>
                  ))}
                </div>
                <div className="col-sm-6">
                  <h2>Theirs</h2>
                  <div className="box-divider pt-2 mb-3"></div>
                  <div className="form-group">
                    <label>Document type</label>
                    <Select
                      value={this.types.filter(
                        (opt) => opt.value === right.eligibility.focus
                      )}
                      name="selectedDocumentType"
                      options={this.types}
                      isDisabled={true}
                    />
                  </div>
                  <div className="form-group">
                    <label>General focus?</label>
                    <label
                      style={{ fontWeight: 'normal', padding: '0px 20px' }}
                    >
                      <input
                        checked={right.eligibility.focus}
                        type="checkbox"
                        className="form-check-input"
                        name="generalFocus"
                        disabled={true}
                      />{' '}
                      Yes, this article has a general focus (review definition
                      and code accordingly, nothing that the default is set to
                      specific)
                    </label>
                  </div>
                  {Object.keys(this.treeData).map((key) => (
                    <div key={key}>
                      <div className="box-divider pt-2 mb-3"></div>
                      <h6>{this.treeData[key].title}</h6>
                      {this.renderTreeSection(key, 'right')}
                    </div>
                  ))}
                </div>
              </div>
              <div className="box-divider pt-2 mb-3"></div>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn primary"
                disabled={this.state.conflicts.length > 0}
              >
                Resolve Conflicts
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Conflicts));
