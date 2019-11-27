import React, { Component } from 'react';
import withAuth from './withAuth';
import AuthService from '../services/AuthService';
import { withRouter } from 'react-router';

const Auth = new AuthService();

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h3>Table with elements</h3>
            <button type="button" onClick={this.handleLogout}>Logout</button>
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
                  <th style={{width: "20px"}}>
                    <label className="ui-check m-0">
                      <input type="checkbox" />
                      <i></i>
                    </label>
                  </th>
                  <th>Project</th>
                  <th>Task</th>
                  <th>Date</th>
                  <th style={{width: "50px"}}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label className="ui-check m-0">
                      <input type="checkbox" name="post[]" />
                      <i className="dark-white"></i>
                    </label>
                  </td>
                  <td>Idrawfast</td>
                  <td>4c</td>
                  <td>Jul 7, 2013</td>
                  <td>
                    <a href="#" className="active" data-toggle-class>
                      <i className="fa fa-check text-success d-none"></i>
                      <i className="fa fa-times text-danger d-inline"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="ui-check m-0">
                      <input type="checkbox" name="post[]" />
                      <i className="dark-white"></i>
                    </label>
                  </td>
                  <td>Avatar system</td>
                  <td>15c</td>
                  <td>Jul 2, 2013</td>
                  <td>
                    <a href="#" className="active" data-toggle-class>
                      <i className="fa fa-check text-success d-none"></i>
                      <i className="fa fa-times text-danger d-inline"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="ui-check m-0">
                      <input type="checkbox" name="post[]" />
                      <i className="dark-white"></i>
                    </label>
                  </td>
                  <td>Videodown</td>
                  <td>4c</td>
                  <td>Jul 1, 2013</td>
                  <td>
                    <a href="#" className="active" data-toggle-class>
                      <i className="fa fa-check text-success d-none"></i>
                      <i className="fa fa-times text-danger d-inline"></i>
                    </a>
                  </td>
                </tr>
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
                <small className="text-muted py-2 d-block text-center">showing 20-30 of 50 items</small>
              </div>
              <div className="col-sm-4">
                <ul className="pagination justify-content-sm-end m-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">4</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">5</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Dashboard));