import _ from 'lodash';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArticleService from '../../services/ArticleService';
import StudyService from '../../services/StudyService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AssignHeader } from '../../components/Assignment';
import perms from '../../utils/permissions';

class StudiesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      stage: 'studies',
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Study = StudyService({ fetch: this.props.fetch });
  }

  notifyDone = () => toast.success('Assignment created successfully.');

  showEmail = (stage, type) => {
    if (!_.isUndefined(stage[type])) {
      return stage[type].email;
    }
  };

  isAssigned = (stage) => {
    const { user } = this.props;
    let seniorAssigned = false;
    if (!_.isUndefined(stage['senior'])) {
      seniorAssigned = stage.senior.email === user.email;
    }
    return seniorAssigned;
  };

  componentDidMount() {
    const { shortId } = this.props.match.params;
    const { stage } = this.state;

    this.Study.listByBatch(shortId)
      .then((res) => {
        if (res.success) {
          this.setState({
            articles: res.data,
            stage,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  assign = (role, articleId) => {
    const { user } = this.props;
    const { shortId } = this.props.match.params;
    const { stage } = this.state;

    const assignment = {
      articleId,
      isFull: true,
      type: role,
      stage,
    };

    assignment.user = {
      _id: user.id,
      email: user.email,
    };

    this.Article.assign(assignment)
      .then((res) => {
        if (res.success) {
          this.notifyDone();
          this.Study.listByBatch(shortId)
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

    if (!perms.can_link(user)) {
      return null;
    }

    if (!this.isAssigned(stage) || status === 'Complete') {
      return null;
    }

    const code = `/${stageName}/${article.type}/${article.shortId}`;

    return <Link to={code}>Code</Link>;
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
                  <AssignHeader role="" stage={stage} />
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
                      {this.showEmail(article.stages[stage], 'senior') ||
                        (!this.isAssignedAs(article.stages[stage], 'junior') &&
                          perms.can_link(user) && (
                            <button
                              className="md-btn md-flat mb-2 w-xs text-success"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    'Are you sure you want to assign this article to your assigned linking studies list?'
                                  )
                                )
                                  this.assign('senior', article._id);
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

export default withRouter(withAuth(StudiesList));
