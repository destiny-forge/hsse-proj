import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Accounts/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Accounts/Signup';
import ArticleCreate from './components/Articles/ArticleCreate';
import ArticleList from './components/Articles/ArticleList';
import SignupSuccess from './components/Accounts/SignupSuccess';
import ConfirmEmail from './components/Accounts/ConfirmEmail';
import ForgotPassword from './components/Accounts/ForgotPassword';
import PasswordReset from './components/Accounts/PasswordReset';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/account/reset/:token" component={PasswordReset} />
          <Route path="/signup-success" component={SignupSuccess} />
          <Route path="/account/confirm/:token" component={ConfirmEmail} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/article" component={ArticleCreate} />
          <Route path="/articles" component={ArticleList} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
