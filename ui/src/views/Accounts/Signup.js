import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      passwordConfirmation: ""
    };

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
      email,
      passwordConfirmation
    } = this.state;
    
    this.Auth.register(email, passwordConfirmation)
      .then(res => {
        if (res.success) {
          this.props.history.replace('/signup-success');  
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
                <div className="my-3 text-lg">Sign up</div>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <input 
                      type="email"
                      className="form-control" 
                      placeholder="Email" 
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
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
                  <div className="mb-3 text-sm">
                    <span className="text-muted"> By clicking Sign Up, I agree to the</span>
                    <a href="/terms"> Terms of service</a>
                    <span className="text-muted"> and</span>
                    <a href="/privacy"> Policy Privacy.</a>
                  </div>
                  <button type="submit" className="btn primary"> Sign Up</button>
                </form>
                <div className="py-4 text-center">
                  <div>Already have an account?
                    <a href="/login" className="text-primary _600"> Sign in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;