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
import Radio from '../../components/atoms/Radio';
import 'react-toastify/dist/ReactToastify.min.css';

const { TreeNode } = Tree;

class Conflicts extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.types = type === 'hse' ? hse.types : sse.types || [];
    this.questionTypes =
      type === 'hse' ? hse.questionTypes : sse.questionTypes || [];
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
    this.updateRelevance = this.updateRelevance.bind(this);
  }

  getKeyArray = (tree) => {
    let filterState = {};
    const keys = Object.keys(tree);
    keys.forEach((key) => {
      filterState[key] = [];
    });
    return filterState;
  };

  handleChange = (field, opt) => {
    this.updateEligibility(field, opt.value);
  };

  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    this.updateEligibility(name, checked);
  };

  handleTreeClick = (selectedKeys, evt) => {
    const key = evt.node.props.name;
    const { left } = this.state;

    let newState = Object.assign({}, left);
    newState.selected[key] = selectedKeys;

    let allKeys = [];
    Object.keys(newState.selected).forEach((key) => {
      allKeys = allKeys.concat(newState.selected[key]);
    });

    this.updateEligibility('filters', allKeys);
  };

  updateRelevance(name, value) {
    this.updateEligibility(name, value === 'Yes' ? true : false);
  }

  updateEligibility(field, value) {
    const { user } = this.props;
    const { type, article, left } = this.state;

    let formData = {
      _id: left.eligibility._id,
      articleId: article._id,
      userId: user.id,
      type: type,
      action: 'resolving',
      [field]: value,
    };

    this.Eligibility.create(formData)
      .then((_res) => {
        this.compare();
        this.notifySuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    const hasChildren = _.has(subTree[0], 'children');
    const checkedKeyState = this.state[side].selected[key];
    const expandedKeys = this.state.expanded[key] || [];
    return (
      <Tree
        checkable
        showLine={hasChildren}
        defaultExpandAll={false}
        autoExpandParent={true}
        onExpand={(expandedKeys) => this.onExpand(key, expandedKeys)}
        onCheck={this.handleTreeClick}
        checkedKeys={checkedKeyState}
        expandedKeys={expandedKeys}
      >
        {this.renderTreeNodes(subTree, key, side)}
      </Tree>
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

  notifyDone = () => toast.success('Eligibility conflicts resolved!');
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
    const { article } = this.state;

    this.Eligibility.resolve(article._id).then((result) => {
      this.notifyDone();
      this.props.history.replace(
        `/batch/articles/eligibility/${article.batchId}`
      );
    });
  };

  getConflictBG(key) {
    return _.includes(this.state.conflicts, key) ? '#FFBABA' : '#90ee90';
  }

  render() {
    const { article, left, right, type } = this.state;
    if (!left.eligibility) {
      return null;
    }

    let q1 =
      type === 'hse'
        ? 'Is the document relevant to health system governance, financial or delivery arrangements (or implementation strategies)?'
        : 'Is the document relevant to social systems program and service areas?';

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h2>{article.title}</h2>
            <small>Ref Id: {article.shortId}</small>
          </div>
          <div className="box-body">
            <fieldset>
              <legend>Article</legend>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ref id</label>
                <div className="col-sm-10">{article.shortId}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Live date</label>
                <div className="col-sm-10">N/A</div>
              </div>
            </fieldset>

            <div className="row">
              <div className="col-sm-6">
                <h2>Mine</h2>
                <fieldset>
                  <legend>Relevance</legend>
                  <div className="form-group">
                    {left.eligibility.relevant}
                    <label>{q1}</label>
                    <br />

                    <Radio
                      name="relevant"
                      handleChange={this.updateRelevance}
                      value={left.eligibility.relevant ? 'Yes' : 'No'}
                      radioValues={['Yes', 'No']}
                    />
                  </div>
                </fieldset>
                {left.eligibility.relevant && right.eligibility.relevant && (
                  <React.Fragment>
                    <fieldset>
                      <legend>General Information</legend>
                      <div className="form-group">
                        <label>Document type</label>
                        <Select
                          value={this.types.filter(
                            (opt) => opt.value === left.eligibility.documentType
                          )}
                          name="documentType"
                          onChange={(value) =>
                            this.handleChange('documentType', value)
                          }
                          options={this.types}
                          isSearchable
                        />
                      </div>
                      <div className="form-group">
                        <label>Question type</label>
                        <Select
                          value={this.questionTypes.filter(
                            (opt) => opt.value === left.eligibility.questionType
                          )}
                          name="documentType"
                          onChange={(value) =>
                            this.handleChange('questionType', value)
                          }
                          options={this.questionTypes}
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
                          Yes, this article has a general focus (review
                          definition and code accordingly, nothing that the
                          default is set to specific)
                        </label>
                      </div>
                    </fieldset>

                    {Object.keys(this.treeData).map((key) => (
                      <fieldset key={key}>
                        <legend>{this.treeData[key].title}</legend>
                        {this.renderTreeSection(key, 'left')}
                      </fieldset>
                    ))}
                  </React.Fragment>
                )}
              </div>
              <div className="col-sm-6">
                <h2>Theirs</h2>
                <fieldset>
                  <legend>Relevance</legend>
                  <div className="form-group">
                    <label
                      style={{
                        background: this.getConflictBG('relevant'),
                      }}
                    >
                      {q1}
                    </label>
                    <br />
                    <Radio
                      name="relevant"
                      handleChange={() => {}}
                      value={right.eligibility.relevant ? 'Yes' : 'No'}
                      radioValues={['Yes', 'No']}
                      disabled="true"
                    />
                  </div>
                </fieldset>
                {left.eligibility.relevant && right.eligibility.relevant && (
                  <React.Fragment>
                    <fieldset>
                      <legend>General Information</legend>
                      <div className="form-group">
                        <label
                          style={{
                            background: this.getConflictBG('documentType'),
                          }}
                        >
                          Document type
                        </label>
                        <Select
                          value={this.types.filter(
                            (opt) =>
                              opt.value === right.eligibility.documentType
                          )}
                          name="documentType"
                          options={this.types}
                          isDisabled={true}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          style={{
                            background: this.getConflictBG('questionType'),
                          }}
                        >
                          Question type
                        </label>
                        <Select
                          value={this.questionTypes.filter(
                            (opt) =>
                              opt.value === right.eligibility.questionType
                          )}
                          name="documentType"
                          options={this.questionTypes}
                          isDisabled={true}
                          isSearchable
                        />
                      </div>
                      <div className="form-group">
                        <label>General focus?</label>
                        <label
                          style={{
                            fontWeight: 'normal',
                            padding: '0px 20px',
                          }}
                        >
                          <input
                            checked={right.eligibility.generalFocus}
                            type="checkbox"
                            className="form-check-input"
                            name="generalFocus"
                            disabled={true}
                          />{' '}
                          <div
                            style={{
                              background: this.getConflictBG('generalFocus'),
                            }}
                          >
                            Yes, this article has a general focus (review
                            definition and code accordingly, nothing that the
                            default is set to specific)
                          </div>
                        </label>
                      </div>
                    </fieldset>
                    {Object.keys(this.treeData).map((key) => (
                      <fieldset key={key}>
                        <legend>{this.treeData[key].title}</legend>
                        {this.renderTreeSection(key, 'right')}
                      </fieldset>
                    ))}
                  </React.Fragment>
                )}
              </div>
            </div>
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn primary"
              disabled={this.state.conflicts.length > 0}
            >
              Save
            </button>
            {this.state.conflicts.length > 0 && (
              <span
                style={{
                  color: 'red',
                  paddingLeft: 0,
                  paddingRight: '10px',
                  paddingBottom: 0,
                  fontWeight: 'bold',
                }}
              >
                &nbsp; * Conflicts must be resolved before you can save
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Conflicts));
