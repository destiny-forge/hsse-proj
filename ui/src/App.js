import React, { Component } from 'react';
import { Switch } from 'react-router';
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
import AppraisalForm from './views/QualityAppraisal/Form';
import AppraisalList from './views/QualityAppraisal/List';
import StudyForm from './views/Studies/Form';
import StudyList from './views/Studies/List';
import PresentationDetails from './views/Presentation/Details';
import PresentationForm from './views/Presentation/Form';
import TranslatingDetails from './views/Translating/Details';
import { LanguageProvider } from './components/molecules/Language';
import PrioritizingList from './views/Prioritizing/List';
import EmailManager from './views/EmailManager/Form';

class App extends Component {
  render() {
    return (
      <LanguageProvider>
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
          <Switch>
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

            <Route
              path="/:type/presentation/:shortId"
              component={PresentationForm}
            />

            <Route path="/:type/eligibility" component={TabView} />
            <Route path="/:type/appraisals" component={TabView} />
            <Route path="/:type/studies" component={TabView} />
            <Route path="/:type/presentation" component={PresentationDetails} />
            <Route path="/:type/translating" component={TranslatingDetails} />
            <Route path="/:type/prioritizing" component={PrioritizingList} />

            <Route
              path="/eligibility/:type/:shortId"
              component={EligibilityForm}
            />
            <Route
              path="/appraisals/:type/:shortId"
              component={AppraisalForm}
            />
            <Route path="/studies/:type/:shortId" component={StudyForm} />
            <Route
              path="/batch/articles/studies/:shortId"
              component={StudyList}
            />
            <Route
              path="/batch/articles/appraisals/:shortId"
              component={AppraisalList}
            />
            <Route
              path="/batch/articles/:stage/:shortId"
              component={Articles}
            />
            <Route path="/upload" component={BatchUpload} />
            <Route path="/notes" component={Notes} />
            <Route path="/email-manager" component={EmailManager} />
          </Switch>
        </Router>
      </LanguageProvider>
    );
  }
}

export default App;
