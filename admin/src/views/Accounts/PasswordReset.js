import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import { Link } from 'react-router-dom';

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordConfirmation: '',
      token: '',
      success: false,
      mismatch: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentDidMount() {
    const { token } = this.props.match.params;
    this.setState({
      token,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { passwordConfirmation, password, token } = this.state;

    if (passwordConfirmation !== password) {
      this.setState({
        mismatch: true,
        password: '',
        passwordConfirmation: '',
      });
    } else {
      this.Auth.passwordReset(token, passwordConfirmation)
        .then((res) => {
          if (res.success) {
            this.setState({
              success: true,
              password: '',
              passwordConfirmation: '',
            });
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  validate() {
    const { success, mismatch } = this.state;

    if (success) {
      return (
        <div className="alert alert-success">
          Password has been successfully updated.{' '}
          <Link to="/login">Login now.</Link>
        </div>
      );
    }
    if (mismatch) {
      return (
        <div className="alert alert-danger">
          Password's do not match. Please try again
        </div>
      );
    }
  }

  render() {
    const { password, passwordConfirmation } = this.state;
    return (
      <div className="d-flex flex-column flex">
        <div className="navbar light bg pos-rlt box-shadow">
          <div className="mx-auto">
            <Link to="/" className="navbar-brand">
              <span className="hidden-folded d-inline">
                <img
                  src="../assets/images/mcmaster-logo.png"
                  alt="."
                  className="logo-login"
                />
              </span>
            </Link>
          </div>
        </div>
        <div id="content-body">
          <div className="py-5 text-center w-100">
            <div className="mx-auto w-xxl w-auto-xs">
              <div className="px-3">
                {this.validate()}
                <div className="my-3 text-lg">Password reset</div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password Confirmation"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn primary">
                    {' '}
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordReset;
