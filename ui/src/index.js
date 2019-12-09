import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Accounts/Login'
import Dashboard from './components/Dashboard';
import Signup from './components/Accounts/Signup';
import SignupSuccess from './components/Accounts/SignupSuccess';
import ConfirmEmail from './components/Accounts/ConfirmEmail';
import ForgotPassword from './components/Accounts/ForgotPassword';
import Assigned from './components/HealthSystemsAssigned/Assigned';
import PasswordReset from './components/Accounts/PasswordReset';

ReactDOM.render(
  <Router>
      <Route exact path='/' component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/account/reset/:token" component={PasswordReset} />
      <Route path="/signup-success" component={SignupSuccess} />
      <Route path="/account/confirm/:token" component={ConfirmEmail} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/health-systems-assigned" component={Assigned} />
  </Router>,
  document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
