import React, { Component } from 'react';
import AuthService from '../services/AuthService';

export default function withAuth(AuthComponent) {
  // TODO Update the URL with the actual backend URL
  const Auth = new AuthService(process.env.REACT_APP_BACKEND_SERVER);

  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null
      };
    }

    componentDidMount() {
      const { history } = this.props;

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
      const { user } = this.state;

      const { history } = this.props;

      if (this.state.user) {
        return (
          <AuthComponent history={history} user={user} fetch={Auth.fetch} />
        );
      } else {
        return null;
      }
    }
  };
}
