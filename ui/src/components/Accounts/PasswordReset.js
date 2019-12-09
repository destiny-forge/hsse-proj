import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      passwordConfirmation: "",
      token: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentDidMount() {
    const { token } = this.props.match.params;
    this.setState({
      token
    })
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
      passwordConfirmation,
      token
    } = this.state;
    
    // TODO: check for token, check for password matching state
    this.Auth.passwordReset(token, passwordConfirmation)
      .then(res => {
        console.log("response ", res);
        if (res.success) {
          // handle
        }
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
                <div className="my-3 text-lg">Password reset</div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password Confirmation"
                      name="passwordConfirmation"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn primary"> Sign Up</button>
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