import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import { Link } from 'react-router-dom'

class ConfirmEmail extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();

    this.state = {
      confirmed: false
    };
  }

  componentDidMount() {
    const {
      token
    } = this.props.match.params;

    if (!token) {
      return;
    }

    this.Auth.confirmEmail(token).then((res) => {
      if (res.success && res.data.confirmed) {
        this.setState({
          confirmed: true
        }, () => {
          setTimeout(() => {
            return this.props.history.replace("/login");
          }, 4000);
        })
      }
    }, (err) => {
      // TODO: Add error handler component
      console.log(err);
    });
  }

  render() {
    return (
      <React.Fragment>
      {
        this.state.confirmed &&
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
                <div className="mx-auto w-auto-xs">
                  <div className="px-3">

                    <div className="my-3 text-lg">You are not confirmed</div>
                    <p>You will be redirected to the login page.</p>
                    <p>If you are not redirected to the login page, <Link to="/login">click here</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default ConfirmEmail;