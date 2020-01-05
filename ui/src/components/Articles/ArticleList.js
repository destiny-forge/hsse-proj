import React, { Component } from 'react';
import ArticleService from '../../services/ArticleService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  componentDidMount() {
    console.log("are we mouned?");
    this.Article.list('sse') // default to sse for now
      .then(res => {
        if (res.success) {
          this.setState({
            articles: res.data,
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { articles } = this.state;
    
    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h3>SSE Articles</h3>
          </div>
          <div className="p-2">
            <div className="row">
              <div className="col-sm-5">
                <select className="custom-select w-sm d-inline v-middle">
                  <option value="0">Bulk action</option>
                  <option value="1">Delete selected</option>
                  <option value="2">Bulk edit</option>
                  <option value="3">Export</option>
                </select>
                <button className="btn white">Apply</button>
              </div>
              <div className="col-sm-4">
              </div>
              <div className="col-sm-3">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button className="btn white" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
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
                  <th>Authors</th>
                  <th>Source</th>
                  <th>Complicated</th>
                  <th>Lost</th>
                </tr>
              </thead>
              <tbody>
              {
                articles && articles.map(article => (
                  <tr key={Math.random()}>
                    <td>
                      <label className="ui-check m-0">
                        <input type="checkbox" name="post[]" />
                        <i className="dark-white"></i>
                      </label>
                    </td>
                    <td>{article.title}</td>
                    <td>{article.journal}</td>
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
          <footer className="light lt p-2">
            <div className="row">
              <div className="col-sm-4 d-block-sm">
                <select className="custom-select w-sm d-inline v-middle">
                  <option value="0">Bulk action</option>
                  <option value="1">Delete selected</option>
                  <option value="2">Bulk edit</option>
                  <option value="3">Export</option>
                </select>
                <button className="btn white">Apply</button>
              </div>
              <div className="col-sm-4">
                <small className="text-muted py-2 d-block text-center">
                  showing 1-4 of {articles && articles.length} items
                </small>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(List));