import _ from 'lodash';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArticleService from '../../services/ArticleService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };
    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  notifyDone = () => toast.success('Assignment created successfully.');

  showEmail = (article, type) => {
    const { eligibility } = article.stages;
    if (!_.isUndefined(eligibility[type])) {
      return eligibility[type].email;
    }
  };

  componentDidMount() {
    const { shortId } = this.props.match.params;

    this.Article.getArticlesByBatch(shortId)
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

  assignment = (type, articleId) => {
    const { user } = this.props;
    const { shortId } = this.props.match.params;

    const assignment = {
      articleId,
      stage: 'eligibility',
      type,
    };

    assignment.user = {
      _id: user.id,
      email: user.email,
    };

    this.Article.assign(assignment)
      .then((res) => {
        if (res.success) {
          this.notifyDone();
          this.Article.getArticlesByBatch(shortId)
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

  render() {
    return (
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th>Article Id</th>
                <th>Title</th>
                <th>Authors</th>
                <th>My Status</th>
                <th>Junior Appraiser</th>
                <th>Senior Appraiser</th>
                <th>Article Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.articles &&
                this.state.articles.map((article) => (
                  <tr key={Math.random()}>
                    <td>{article._id}</td>
                    <td>{article.title}</td>
                    <td>{article.authors}</td>
                    <td>TBD</td>
                    <td>
                      {this.showEmail(article, 'junior') || (
                        <button
                          className="md-btn md-flat mb-2 w-xs text-success"
                          onClick={() => {
                            if (
                              window.confirm(
                                'Are you sure you want to assign this article to your assigned quality appraisals list?'
                              )
                            )
                              this.assignment('junior', article._id);
                          }}
                        >
                          Assign
                        </button>
                      )}
                    </td>
                    <td>
                      {this.showEmail(article, 'senior') || (
                        <button
                          className="md-btn md-flat mb-2 w-xs text-success"
                          onClick={() => {
                            if (
                              window.confirm(
                                'Are you sure you want to assign this article to your assigned quality appraisals list?'
                              )
                            )
                              this.assignment('senior', article._id);
                          }}
                        >
                          Assign
                        </button>
                      )}
                    </td>
                    <td>
                      <Link to={`/conflicts/${article.shortId}`}>
                        Resolve Conflicts
                      </Link>
                    </td>
                    <td>
                      <Link to={`/eligibility/${article.shortId}`}>Code</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Articles));
