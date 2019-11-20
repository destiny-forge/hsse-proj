import React, { Component } from 'react';
import './Login.css';
import AuthService from './AuthService';

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentWillMount() {
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
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="Username."
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;