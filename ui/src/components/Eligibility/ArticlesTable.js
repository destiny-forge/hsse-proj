import React from 'react';
import Modal from './Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArticleService from '../../services/ArticleService';
import Assignment from './Assignment';

class ArticlesTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      showJunior: false,
      showSenior: false 
    }
    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  showModal = (type) => {
    console.log(type);
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
      console.log("assignment object ", assignment);
      assignment.user = {
        _id: user.id,
        email: user.email
      }
      this.Article.assign(assignment).then(res => {
        this.notifyDone();
        console.log("articles ", this.props.articles);
        console.log("articles count ", this.props.articles.length);
        this.props.history.replace("/hse");
      })
      .catch(err => {
        console.log(err);
      });
    }
    ;
    this.setState({ 
      [`show${this.toTitleCase(type)}`]: false 
    });
  }

  render() {
    const { user } = this.props;

    return (
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th style={{ width: "20px" }}>
                  <label className="ui-check m-0">
                    <input type="checkbox" />
                    <i></i>
                  </label>
                </th>
                <th>Title</th>
                <th>Journal</th>
                <th>Junior Appraiser</th>
                <th>Senior Appraiser</th>
                <th>Authors</th>
                <th>Source</th>
                <th>Complicated</th>
                <th>Lost</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.articles && this.props.articles.map(article => (
                  <tr key={Math.random()}>
                    <td>
                      <label className="ui-check m-0">
                        <input type="checkbox" name="post[]" />
                        <i className="dark-white"></i>
                      </label>
                    </td>
                    <td>{article.title}</td>
                    <td>{article.journal}</td>
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
                    <td>{article.authors}</td>
                    <td>{article.source}</td>
                    <td>
                      {
                        article.complicated
                          ? <i className="fa fa-check text-success d-none"></i>
                          : <i className="fa fa-times text-danger d-inline"></i>
                      }
                    </td>
                    <td>
                      {
                        article.lost
                          ? <i className="fa fa-check text-success d-none"></i>
                          : <i className="fa fa-times text-danger d-inline"></i>
                      }
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

export default ArticlesTable;