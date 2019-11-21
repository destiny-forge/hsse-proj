import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  // TODO Update the URL with the actual backend URL
  const Auth = new AuthService('http://localhost:5001');

  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null
      };
    }

    componentWillMount() {
      const {
        history
      } = this.props;

      if (!Auth.loggedIn()) { 
        history.replace('/login');
      } else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile
          });
        } catch (err) {
          Auth.logout();
          history.replace('/login');
        }
      }
    }

    render() {
      const {
        user
      } = this.state;

      const {
        history
      } = this.props;

      if (this.state.user) {
        return (
          <AuthComponent 
            history={history} 
            user={user} 
          />
        )
      } else {
        return null;
      }
    }
  };
}
