import React from 'react';
import Modal from '../Eligibility/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArticleService from '../../services/ArticleService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Assignment from './Assignment';

class Articles extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      showJunior: false,
      showSenior: false 
    }
    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  showModal = (type) => {
    this.setState({
      [`show${type}`]: true
    });
  }

  toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  notifyDone = () => toast.success("Assignment created successfully.");

  hideModal = (user, stage, articleId, type) => {
    if (user && stage && articleId && type) {
      const assignment = {
        articleId,
        stage,
        type,
      };

      assignment.user = {
        _id: user.id,
        email: user.email
      }
      this.Article.assign(assignment).then(res => {
        console.log("res ", res);
      
        this.notifyDone();

        // TODO: component did mount hook is grabbing the articles and setting articles in state. 
        // Problem is when an assignment is made it should update the state on component did update 
        // but we have a few states here to track and I am reusing a lot of components so will need
        // to refetch the articles in order to reload state instead of reload. This will work for now.
        setTimeout(function () { window.location.reload(); }, 1500);

      })
        .catch(err => {
          console.log(err);
        });
    };
    this.setState({
      [`show${this.toTitleCase(type)}`]: false
    });
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
    const { user } = this.props;
    
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
              {
                this.state.articles && this.state.articles.map(article => (
                  <tr key={Math.random()}>
                    <td>{article._id}</td>
                    <td>{article.title}</td>
                    <td>{article.authors}</td>
                    <td>TBD</td>
                    <td>
                      <Modal
                        show={this.state.showJunior}
                        handleClose={this.hideModal}
                        user={user}
                        stage='eligibility'
                        articleId={article._id}
                        type={'junior'}
                      />
                      <Assignment
                        type="junior"
                        showModal={this.showModal}
                        toTitleCase={this.toTitleCase}
                        article={article}
                      />
                    </td>
                    <td>
                      <Modal
                        show={this.state.showSenior}
                        handleClose={this.hideModal}
                        user={user}
                        stage='eligibility'
                        articleId={article._id}
                        type={'senior'}
                      />
                      <Assignment
                        type="senior"
                        showModal={this.showModal}
                        toTitleCase={this.toTitleCase}
                        article={article}
                      />
                    </td>
                    <td>
                      <Link to={`/conflicts/${article.shortId}`}>
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