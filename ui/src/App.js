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
import SSE from './views/Eligibility/SSE';
import HSE from './views/Eligibility/HSE';
import EligibilityForm from './views/Eligibility/EligibilityForm';
import Articles from './views/Articles/Articles';
import Conflicts from './views/Articles/Conflicts';
import QualityAppraisalForm from './views/QualityAppraisal/QualityAppraisalForm';
import Appraisals from './views/QualityAppraisal/Appraisals';

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
          <Route path="/hse/eligibility" component={HSE} />
          <Route path="/sse/eligibility" component={SSE} />
          <Route
            path="/eligibility/:type/:shortId"
            component={EligibilityForm}
          />
          <Route
            path="/quality-appraisal/:shortId"
            component={QualityAppraisalForm}
          />
          <Route path="/:type/appraisals" component={Appraisals} />
          <Route path="/batch/articles/:stage/:shortId" component={Articles} />
          <Route path="/conflicts/:type/:shortId" component={Conflicts} />
          <Route path="/upload" component={BatchUpload} />
          <Route path="/notes" component={Notes} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
