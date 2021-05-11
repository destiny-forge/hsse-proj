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
import UserManager from './views/UserManager';

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
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/login" component={Login} />
            <Route path="/admin/signup" component={Signup} />
            <Route path="/admin/forgot-password" component={ForgotPassword} />
            <Route
              path="/admin/account/reset/:token"
              component={PasswordReset}
            />
            <Route path="/admin/signup-success" component={SignupSuccess} />
            <Route
              path="/admin/account/confirm/:token"
              component={ConfirmEmail}
            />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/article" component={ArticleCreate} />
            <Route
              path="/admin/conflicts/:type/eligibility/:shortId"
              component={EligibilityConflicts}
            />
            <Route
              path="/admin/conflicts/:type/appraisals/:shortId"
              component={AppraisalConflicts}
            />

            <Route
              path="/admin/:type/presentation/:shortId"
              component={PresentationForm}
            />

            <Route path="/admin/:type/eligibility" component={TabView} />
            <Route path="/admin/:type/appraisals" component={TabView} />
            <Route path="/admin/:type/studies" component={TabView} />
            <Route
              path="/admin/:type/presentation"
              component={PresentationDetails}
            />
            <Route
              path="/admin/:type/translating"
              component={TranslatingDetails}
            />
            <Route
              path="/admin/:type/prioritizing"
              component={PrioritizingList}
            />

            <Route
              path="/admin/eligibility/:type/:shortId"
              component={EligibilityForm}
            />
            <Route
              path="/admin/appraisals/:type/:shortId"
              component={AppraisalForm}
            />
            <Route path="/admin/studies/:type/:shortId" component={StudyForm} />
            <Route
              path="/admin/batch/articles/studies/:shortId"
              component={StudyList}
            />
            <Route
              path="/admin/batch/articles/appraisals/:shortId"
              component={AppraisalList}
            />
            <Route
              path="/admin/batch/articles/:stage/:shortId"
              component={Articles}
            />
            <Route path="/admin/upload" component={BatchUpload} />
            <Route path="/admin/notes" component={Notes} />
            <Route path="/admin/email-manager" component={EmailManager} />
            <Route path="/admin/user-manager" component={UserManager} />
          </Switch>
        </Router>
      </LanguageProvider>
    );
  }
}

export default App;
