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
import BatchUpload from './components/Articles/BatchUpload';
import Notes from './components/Articles/Notes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
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
          <Route path="/sse/articles" component={ArticleList} />
          <Route path="/upload" component={BatchUpload} />
          <Route path="/notes" component={Notes} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
