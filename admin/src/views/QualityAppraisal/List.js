import _ from 'lodash';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AppraisalService from '../../services/AppraisalService';
import ArticleService from '../../services/ArticleService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AssignHeader } from '../../components/Assignment';
import perms from '../../utils/permissions';

class AppraisalList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      stage: 'appraisals',
    };

    this.Appraisal = AppraisalService({ fetch: this.props.fetch });
    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  notifyDone = () => toast.success('Assignment created successfully.');

  showEmail = (stage, type) => {
    if (!_.isUndefined(stage[type])) {
      return stage[type].email;
    }
  };

  isAssigned = (stage) => {
    const { user } = this.props;
    let juniorAssigned,
      seniorAssigned = false;
    if (!_.isUndefined(stage['junior'])) {
      juniorAssigned = stage.junior.email === user.email;
    }
    if (!_.isUndefined(stage['senior'])) {
      seniorAssigned = stage.senior.email === user.email;
    }
    return juniorAssigned || seniorAssigned;
  };

  componentDidMount() {
    const { shortId } = this.props.match.params;

    this.Appraisal.listByBatch(shortId)
      .then((res) => {
        if (res.success) {
          this.setState({
            articles: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  assign = (role, articleId, articleStage) => {
    const { user } = this.props;
    const { shortId } = this.props.match.params;
    const { stage } = this.state;

    const isFull =
      !_.isUndefined(articleStage['junior']) ||
      !_.isUndefined(articleStage['senior']);

    const assignment = {
      articleId,
      type: role,
      stage,
      isFull,
    };

    assignment.user = {
      _id: user.id,
      email: user.email,
    };

    this.Article.assign(assignment)
      .then((res) => {
        if (res.success) {
          this.notifyDone();
          this.Appraisal.listByBatch(shortId)
            .then((res) => {
              if (res.success) {
                this.setState({
                  articles: res.data,
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMyStatus(stage) {
    let status = '';
    if (this.isAssignedAs(stage, 'junior')) {
      status = stage.junior.status;
    }
    if (this.isAssignedAs(stage, 'senior')) {
      status = stage.senior.status;
    }
    return status;
  }

  getStatus(article, stage) {
    return article.stages[stage].status || '';
  }

  isAssignedAs(stage, role) {
    const { user } = this.props;
    return !_.isUndefined(stage[role]) && stage[role].email === user.email;
  }

  getAction(article, stageName) {
    const stage = article.stages[stageName];
    const { status } = stage;
    const { user } = this.props;

    if (!perms.can_appraise(user)) {
      return null;
    }

    if (!this.isAssigned(stage) || status === 'Data entry complete') {
      return null;
    }

    const code = `/${stageName}/${article.type}/${article.shortId}`;
    const resolve = `/conflicts/${article.type}/${stageName}/${article.shortId}`;

    return status === 'Discrepancy detected' ? (
      <Link to={resolve}>Resolve Conflicts</Link>
    ) : (
      <Link to={code}>Code</Link>
    );
  }

  render() {
    const { stage } = this.state;
    const { user } = this.props;
    return (
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th>Ref Id</th>
                <th>Title</th>
                <th>Authors</th>
                <th>
                  <AssignHeader role="Junior" stage={stage} />
                </th>
                <th>
                  <AssignHeader role="Senior" stage={stage} />
                </th>
                <th>My Status</th>
                <th>Article Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.articles &&
                this.state.articles.map((article) => (
                  <tr key={Math.random()}>
                    <td>{article.shortId}</td>
                    <td>{article.title}</td>
                    <td>{article.authors}</td>
                    <td>
                      {/*
                        <AssignAction
                          user={user}
                          stage={stage}
                          role="junior"
                          action={this.assign}
                        />
                      */}

                      {this.showEmail(article.stages[stage], 'junior') ||
                        (!this.isAssignedAs(article.stages[stage], 'senior') &&
                          perms.can_appraise_junior(user) && (
                            <button
                              className="md-btn md-flat mb-2 w-xs text-success"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    'Are you sure you want to assign this article to your assigned quality appraisals list?'
                                  )
                                )
                                  this.assign(
                                    'junior',
                                    article._id,
                                    article.stages[stage]
                                  );
                              }}
                            >
                              Assign
                            </button>
                          ))}
                    </td>
                    <td>
                      {this.showEmail(article.stages[stage], 'senior') ||
                        (!this.isAssignedAs(article.stages[stage], 'junior') &&
                          perms.can_appraise_senior(user) && (
                            <button
                              className="md-btn md-flat mb-2 w-xs text-success"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    'Are you sure you want to assign this article to your assigned quality appraisals list?'
                                  )
                                )
                                  this.assign(
                                    'senior',
                                    article._id,
                                    article.stages[stage]
                                  );
                              }}
                            >
                              Assign
                            </button>
                          ))}
                    </td>
                    <td>{this.getMyStatus(article.stages[stage])}</td>
                    <td>{this.getStatus(article, stage)}</td>
                    <td>{this.getAction(article, stage)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(AppraisalList));
