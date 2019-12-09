import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AuthService from './services/AuthService';
import withAuth from './components/withAuth';
import Dashboard from './components/Dashboard';

const Auth = new AuthService();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    Auth.logout();
    this.props.history.replace('/login');
  }

  render() {
    return (
      <React.Fragment>
        {Auth.loggedIn() && (
          <div className="app" id="app">
            <div
              id="aside"
              className="app-aside fade box-shadow-x nav-expand white"
              aria-hidden="true"
            >
              <div className="sidenav modal-dialog dk white">
                <div className="navbar lt">
                  <a href="/" className="navbar-brand">
                    <span className="hidden-folded d-inline">
                      <img
                        src="../assets/images/mcmaster-logo.png"
                        alt="."
                        className="logo"
                      />
                    </span>
                  </a>
                </div>
                <div className="flex hide-scroll">
                  <div className="scroll">
                    <div className="nav-border b-primary" data-nav>
                      <ul className="nav bg">
                        <li className="nav-header">
                          <div className="py-3">
                            <Link
                              to="/article"
                              className="btn btn-sm success theme-accent btn-block"
                            >
                              <i className="fa fa-fw fa-plus"></i>
                              <span className="hidden-folded d-inline">
                                New Article
                              </span>
                            </Link>
                          </div>
                          <span className="text-xs hidden-folded">Main</span>
                        </li>
                        <li>
                          <a href="/">
                            <span className="nav-icon">
                              <i className="fa fa-dashboard"></i>
                            </span>
                            <span className="nav-text">Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="/health-systems-assigned">
                            <span className="nav-icon">
                              <i className="fa fa-align-left"></i>
                            </span>
                            <span className="nav-text">HS Assigned</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <span className="nav-badge">
                              <b className="badge badge-sm badge-pill success">
                                6
                              </b>
                            </span>
                            <span className="nav-icon">
                              <i className="fa fa-envelope"></i>
                            </span>
                            <span className="nav-text">SS Assigned</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <span className="nav-icon">
                              <i className="fa fa-comment"></i>
                            </span>
                            <span className="nav-text">HS Pending</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <span className="nav-icon">
                              <i className="fa fa-phone-square"></i>
                            </span>
                            <span className="nav-text">SS Pending</span>
                          </a>
                        </li>
                        <li className="pb-2 hidden-folded"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="content" className="app-content box-shadow-0" role="main">
              <div
                className="content-header white  box-shadow-0"
                id="content-header"
              >
                <div className="navbar navbar-expand-lg">
                  <a
                    className="d-lg-none mx-2"
                    data-toggle="modal"
                    data-target="#aside"
                    href="!#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                    >
                      <path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z" />
                    </svg>
                  </a>
                  <div className="navbar-text nav-title flex" id="pageTitle">
                    Blank
                  </div>
                  <ul className="nav flex-row order-lg-2">
                    <li className="dropdown d-flex align-items-center">
                      <a
                        href="!#"
                        data-toggle="dropdown"
                        className="d-flex align-items-center"
                      >
                        <span className="avatar w-32">
                          <img src="../assets/images/a3.jpg" alt="..." />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right w pt-0 mt-2 animate fadeIn">
                        <a className="dropdown-item" href="#!">
                          <span>Profile</span>
                        </a>
                        <a className="dropdown-item" href="#!">
                          <span>Settings</span>
                        </a>
                        <a className="dropdown-item" href="#!">
                          <span className="float-right">
                            <span className="badge info">6</span>
                          </span>
                          <span>Inbox</span>
                        </a>
                        <a className="dropdown-item" href="app.message.html">
                          <span>Message</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="docs.html">
                          Need help?
                        </a>
                        <a
                          className="dropdown-item"
                          href="!#"
                          onClick={this.handleLogout}
                        >
                          Sign out
                        </a>
                      </div>
                    </li>
                    <li className="d-lg-none d-flex align-items-center">
                      <a
                        href="!#"
                        className="mx-2"
                        data-toggle="collapse"
                        data-target="#navbarToggler"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 512 512"
                        >
                          <path d="M64 144h384v32H64zM64 240h384v32H64zM64 336h384v32H64z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div
                    className="collapse navbar-collapse no-grow order-lg-1"
                    id="navbarToggler"
                  >
                    <form className="input-group m-2 my-lg-0">
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn no-border no-bg no-shadow"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        className="form-control no-border no-bg no-shadow"
                        placeholder="Search projects..."
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="content-main " id="content-main">
                <Dashboard />
              </div>

              <div className="content-footer white " id="content-footer">
                <div className="d-flex p-3">
                  <span className="text-sm text-muted flex">
                    &copy; Copyright. McMaster University
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withAuth(App);
