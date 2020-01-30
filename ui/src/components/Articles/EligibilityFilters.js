import React, { Component } from 'react';
import ArticleService from '../../services/ArticleService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';

class EligibilityFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  componentDidMount() {
    this.Article.eligibilityFilters()
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
    // const { articles } = this.state;

    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h3>Assessing Eligibility & Assigning Filters</h3>
          </div>
          <div className="table-responsive">
            <table className="table table-striped b-t">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Source</th>
                  <th>Harvest Date</th>
                  <th>Other Filterer</th>
                  <th>Article Id</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Language</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                    <tr key={Math.random()}>
                      <td>LOW</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                      <td>Todo</td>
                    </tr>
              </tbody>
            </table>
          </div>
          <footer className="light lt p-2">
            <div className="row">
              <div className="col-sm-4">
                <small className="text-muted py-2 d-block text-center">
                  showing 1-4 of items
                </small>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(EligibilityFilters));