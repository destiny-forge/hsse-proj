import React, { Component } from 'react';
import AuthService from './AuthService';

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentDidMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/');
  }

  handleChange(e) {
    const { 
      name,
      value
    } = e.target;
    
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const {
      username,
      password
    } = this.state;

    this.Auth.login(username, password)
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(err => {
        alert(err);
      })
  }
  
  render() {
    return (
      <div className="d-flex flex-column flex">
        <div className="navbar light bg pos-rlt box-shadow">
          <div className="mx-auto">
            <a href="index.html" className="navbar-brand">
              <span className="hidden-folded d-inline">
                <img src="../assets/images/mcmaster-logo.png" alt="." className="logo-login" />
              </span>
            </a>
          </div>
        </div>
        <div id="content-body">
          <div className="py-5 text-center w-100">
            <div className="mx-auto w-xxl w-auto-xs">
              <div className="px-3">
                <div className="my-3 text-lg">Sign in</div>
                  <form name="form">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="password" required />
                    </div>
                    <div className="mb-3">
                      <label className="md-check">
                        <input type="checkbox" />
                        <i className="primary"></i> Keep me signed in
                      </label>
                    </div>
                    <button type="submit" className="btn primary">Sign in</button>
                  </form>
                  <div className="my-4">
                    <a href="" className="text-primary _600">Forgot password?</a>
                  </div>
                  <div>
                    Do not have an account?
                    <a href="" className="text-primary _600">Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;