import _ from 'lodash';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArticleService from '../../services/ArticleService';
import ArticleList from './ArticleList';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    const { stage } = this.props.match.params;

    this.state = {
      articles: [],
      stage,
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.assign = this.assign.bind(this);
  }

  notifyDone() {
    toast.success('Assignment created successfully.');
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { shortId, stage } = this.props.match.params;

    this.Article.getArticlesByBatch(shortId, stage)
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

  assign = (role, articleId, articleStage) => {
    const { user } = this.props;
    const { shortId, stage } = this.props.match.params;

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
          this.Article.getArticlesByBatch(shortId, stage)
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
    const { user } = this.props;
    const { stage, articles } = this.state;

    return (
      <ArticleList
        stage={stage}
        articles={articles}
        user={user}
        assign={this.assign}
      />
    );
  }
}

export default withRouter(withAuth(Articles));
