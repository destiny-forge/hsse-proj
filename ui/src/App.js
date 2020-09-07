import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './views/Accounts/Login';
import Dashboard from './views/Dashboard';
import Signup from './views/Accounts/Signup';
import ArticleCreate from './views/Articles/ArticleCreate';
import SignupSuccess from './views/Accounts/SignupSuccess';
import ConfirmEmail from './views/Accounts/ConfirmEmail';
import ForgotPassword from './views/Accounts/ForgotPassword';
import PasswordReset from './views/Accounts/PasswordReset';
import BatchUpload from './views/Articles/BatchUpload';
import Notes from './views/Articles/Notes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import TabView from './views/TabView';
import EligibilityForm from './views/Eligibility/EligibilityForm';
import Articles from './views/Articles/Articles';
import EligibilityConflicts from './views/Eligibility/Conflicts';
import AppraisalConflicts from './views/QualityAppraisal/Conflicts';
import AppraisalForm from './views/QualityAppraisal/AppraisalForm';
//import Appraisals from './views/QualityAppraisal/Appraisals';

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
          <Route
            path="/conflicts/:type/eligibility/:shortId"
            component={EligibilityConflicts}
          />
          <Route
            path="/conflicts/:type/appraisals/:shortId"
            component={AppraisalConflicts}
          />
          <Route path="/:type/eligibility" component={TabView} />
          <Route path="/:type/appraisals" component={TabView} />

          <Route
            path="/eligibility/:type/:shortId"
            component={EligibilityForm}
          />
          <Route path="/appraisals/:type/:shortId" component={AppraisalForm} />
          <Route path="/batch/articles/:stage/:shortId" component={Articles} />

          <Route path="/upload" component={BatchUpload} />
          <Route path="/notes" component={Notes} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
