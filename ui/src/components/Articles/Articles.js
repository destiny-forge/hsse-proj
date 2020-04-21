import React from 'react';
import ArticleService from '../../services/ArticleService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Articles extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  componentDidMount() {
    const {
      shortId
    } = this.props.match.params;

    this.Article.getArticlesByBatch(shortId)
      .then(res => {
        // console.log("res ", res);
        if (res.success) {
          this.setState({
            articles: res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log("articles", this.state.articles);
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
                <th>Article Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.articles && this.state.articles.map(article => (
                  <tr key={Math.random()}>
                    <td>{article.shortId}</td>
                    <td>{article.title}</td>
                    <td>{article.authors}</td>
                    <td>TBD</td>
                    <td>
                      <Link to={`/conflicts/${article._id}/${article.shortId}`}>
                        Resolve Conflicts
                      </Link>
                    </td>
                    <td>
                      <Link to={`/eligibility/${article.shortId}`}>
                        Code
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(Articles));