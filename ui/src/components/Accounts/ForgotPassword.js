import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      isReset: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
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
      email
    } = this.state;

    this.Auth.forgotPassword(email)
      .then(res => {
        if (res.success) {
          this.setState({
            isReset: true,
            email: ""
          });
        }
      })
      .catch(err => {
        alert(err);
      })
  }

  render() {
    const {
      isReset,
      email
    } = this.state;

    return (
      <div className="d-flex flex-column flex">
        <div className="navbar light bg pos-rlt box-shadow">
          <div className="mx-auto">
            <a href="/" className="navbar-brand">
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
                {
                  isReset && 
                  <div className="alert alert-primary">
                    Please check your email.
                  </div>
                }
                <div className="my-3 text-lg">Forgot password</div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn primary"
                  > Reset password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;