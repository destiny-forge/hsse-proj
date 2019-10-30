/**
 * @name Routes.js
 * @author Kwadwo Sakyi
 * @description This file defines all routes used by the front-end to render a user interface for various paths.
 * 
 * Every route combines a path (which can be loaded in a browser) and a component which is rendered when that
 * path is loaded.  Components are all fond in the ./components/ directory and include all markup required to
 * render the UI.
 * 
 * For example, the route for the path "/hse/assignedeligibilityfiltersarticlequeue", below, renders the
 * ArticleQueue component, which in turn calls
 * listHSEAssignedEligibilityFiltersArticlesQueue(), a function defined in actions/index.js which makes a
 * request to the backend and then dispatches either the HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE or
 * HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR signal (based on whether the request is successful or
 * not) which are defined in actions/types.js
 */

import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';

import DashboardMain from './components/Dashboard/DashboardMain';

import Login from './components/Pages/Login';
import Signout from './components/Pages/Signout';
import Register from './components/Pages/Register';
import RegistrationConfirmed from './components/Pages/RegistrationConfirmed';
import Recover from './components/Pages/Recover';
import ConfirmRegistration from './components/Pages/ConfirmRegistration';
import ConfirmPasswordReset from './components/Pages/ConfirmPasswordReset';
import SuccessfulPasswordReset from './components/Pages/SuccessfulPasswordReset';
import ResetPassword from './components/Pages/ResetPassword';
import Landing from './components/Pages/Landing';
import Lock from './components/Pages/Lock';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Maintenance from './components/Pages/Maintenance';

import UserEditor from './components/Settings/UserEditor';

import FilterArticleInput from './components/HSE/Article/AssignedEligibility/FilterArticleInput';
//import FilterResolution from './components/HSE/Article/AssignedEligibility/FilterResolution';
import ArticleResolution from './components/HSE/Article/AssignedEligibility/ArticleResolution';
import ArticleQueue from './components/HSE/Article/AssignedEligibility/ArticleQueue';
import HSEAssignedQualityAppraisalsArticleQueue from './components/HSE/HSEAssignedQualityAppraisalsArticleQueue';
import HSEAssignedQualityAppraisalsArticleInput from './components/HSE/HSEAssignedQualityAppraisalsArticleInput';
import HSEAssignedQualityAppraisalsArticleResolution from './components/HSE/HSEAssignedQualityAppraisalsArticleResolution';
//import HSEAssignedQualityAppraisalsResolution from './components/HSE/HSEAssignedQualityAppraisalsResolution';
import HSEAssignedLinkingStudiesArticleInput from './components/HSE/HSEAssignedLinkingStudiesArticleInput';
import HSEAssignedLinkingStudiesArticleQueue from './components/HSE/HSEAssignedLinkingStudiesArticleQueue';
import HSEAssignedPresentationDetailsArticleInput from './components/HSE/HSEAssignedPresentationDetailsArticleInput';
import HSEAssignedPresentationDetailsArticleQueue from './components/HSE/HSEAssignedPresentationDetailsArticleQueue';

import HSEAssignedTrackingPrioritizingArticleQueue from './components/HSE/HSEAssignedTrackingPrioritizingArticleQueue';

import AddArticle from './components/HSE/Article/AddArticle';
import EditArticle from './components/HSE/Article/EditArticle';
import HSEBatchUpload from './components/HSE/HSEBatchUpload';
import HSEPendingEligibilityFiltersArticleQueue from './components/HSE/HSEPendingEligibilityFiltersArticleQueue';
import HSEPendingEligibilityFiltersBatchfileQueue from './components/HSE/HSEPendingEligibilityFiltersBatchfileQueue';
import HSEPendingQualityAppraisalsArticleQueue from './components/HSE/HSEPendingQualityAppraisalsArticleQueue';
import HSEPendingLinkingStudiesArticleQueue from './components/HSE/HSEPendingLinkingStudiesArticleQueue';
import HSEPendingPresentationDetailsArticleQueue from './components/HSE/HSEPendingPresentationDetailsArticleQueue';

import HSEPendingTranslatingTitlesQueue from './components/HSE/HSEPendingTranslatingTitlesArticleQueue';
import HSEPendingTrackingPrioritizingQueue from './components/HSE/HSEPendingTrackingPrioritizingArticleQueue';

// Administrator HSE
import AdministratorHSEEligibilityFiltersQueue from './components/Administrator/HSE/AdministratorHSETrackingPrioritizingQueue';
import AdministratorHSEQualityAppraisalsQueue from './components/Administrator/HSE/AdministratorHSEQualityAppraisalsQueue';
import AdministratorHSELinkingStudiesQueue from './components/Administrator/HSE/AdministratorHSELinkingStudiesQueue';
import AdministratorHSEPresentationDetailsQueue from './components/Administrator/HSE/AdministratorHSEPresentationDetailsQueue';
import AdministratorHSEGoLiveQueue from './components/Administrator/HSE/AdministratorHSEGoLiveQueue';
import AdministratorHSETrackingPrioritizingQueue from './components/Administrator/HSE/AdministratorHSETrackingPrioritizingQueue';

// SSE
import SSEAssignedEligibilityFilterResolution from './components/SSE/SSEAssignedEligibilityFilterResolution';
import SSEAssignedEligibilityFilterArticleInput from './components/SSE/SSEAssignedEligibilityFilterArticleInput';
import SSEAssignedEligibilityFiltersArticleQueue from './components/SSE/SSEAssignedEligibilityFiltersArticleQueue';

import SSEAssignedQualityAppraisalsArticleQueue from './components/SSE/SSEAssignedQualityAppraisalsArticleQueue';
import SSEAssignedQualityAppraisalsArticleInput from './components/SSE/SSEAssignedQualityAppraisalsArticleInput';
import SSEAssignedQualityAppraisalsResolution from './components/SSE/SSEAssignedQualityAppraisalsResolution'

import SSEAssignedLinkingStudiesArticleInput from './components/SSE/SSEAssignedLinkingStudiesArticleInput';
import SSEAssignedLinkingStudiesArticleQueue from './components/SSE/SSEAssignedLinkingStudiesArticleQueue';

import SSEAssignedPresentationDetailsArticleInput from './components/SSE/SSEAssignedPresentationDetailsArticleInput';
import SSEAssignedPresentationDetailsArticleQueue from './components/SSE/SSEAssignedPresentationDetailsArticleQueue';

import SSEAssignedTranslatingTitlesArticleQueue from './components/SSE/SSEAssignedTranslatingTitlesArticleQueue';
import SSEAssignedTranslatingTitlesArticleInput from './components/SSE/SSEAssignedTranslatingTitlesArticleInput';

import SSEAssignedTrackingPrioritizingArticleQueue from './components/SSE/SSEAssignedTrackingPrioritizingArticleQueue';
import SSEAssignedTrackingPrioritizingArticleInput from './components/SSE/SSEAssignedTrackingPrioritizingArticleInput';

import AddSSEArticle from './components/SSE/AddSSEArticle';
import SSEArticleEdit from './components/SSE/SSEArticleEdit';
import SSEBatchUpload from './components/SSE/SSEBatchUpload';
import SSEPendingEligibilityFiltersArticleQueue from './components/SSE/SSEPendingEligibilityFiltersArticleQueue';
import SSEPendingEligibilityFiltersBatchfileQueue from './components/SSE/SSEPendingEligibilityFiltersBatchfileQueue';
import SSEPendingQualityAppraisalsArticleQueue from './components/SSE/SSEPendingQualityAppraisalsArticleQueue';
import SSEPendingLinkingStudiesArticleQueue from './components/SSE/SSEPendingLinkingStudiesArticleQueue';
import SSEPendingPresentationDetailsArticleQueue from './components/SSE/SSEPendingPresentationDetailsArticleQueue';

import SSEPendingTranslatingTitlesArticleQueue from './components/SSE/SSEPendingTranslatingTitlesArticleQueue';
import SSEPendingTrackingPrioritizingArticleQueue from './components/SSE/SSEPendingTrackingPrioritizingArticleQueue';

// Administrator SSE
import AdministratorSSEEligibilityFiltersQueue from './components/Administrator/SSE/AdministratorSSEEligibilityFiltersQueue';
import AdministratorSSEQualityAppraisalsQueue from './components/Administrator/SSE/AdministratorSSEQualityAppraisalsQueue';
import AdministratorSSELinkingStudiesQueue from './components/Administrator/SSE/AdministratorSSELinkingStudiesQueue';
import AdministratorSSEPresentationDetailsQueue from './components/Administrator/SSE/AdministratorSSEPresentationDetailsQueue';
import AdministratorSSEGoLiveQueue from './components/Administrator/SSE/AdministratorSSEGoLiveQueue';
import AdministratorSSETrackingPrioritizingQueue from './components/Administrator/SSE/AdministratorSSETrackingPrioritizingQueue';

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
'/',
'/login',
'/signout',
'/register',
'/recover',
'/confirmregistration',
'/registrationconfirmed',
'/confirmpasswordreset',
'/resetpassword/:token',
'/successfulpasswordreset',
'/lock',
'/notfound',
'/error500',
'/maintenance'
];

const Routes = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };

  const stringArrayContainers  = (array, str) => {
    const contains = (el) => {
      return (el.indexOf(str) !== -1) ? true : false;
    }
    return array.some(contains);
  }

  const animationName = 'rag-fadeIn'

  if (stringArrayContainers(listofPages, currentKey)) {
    return (
      <BasePage>
        <Switch location={location}>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login}/>
          <Route path="/registrationconfirmed" component={RegistrationConfirmed} />
          <Route path="/register" component={Register}/>
          <Route path="/signout" component={Signout}/>
          <Route path="/recover" component={Recover}/>
          <Route path="/confirmregistration" component={ConfirmRegistration}/>
          <Route path="/confirmpasswordreset" component={ConfirmPasswordReset}/>
          <Route path="/resetpassword/:token" component={ResetPassword}/>
          <Route path="/successfulpasswordreset" component={SuccessfulPasswordReset}/>
          <Route path="/lock" component={Lock}/>
          <Route path="/notfound" component={NotFound}/>
          <Route path="/error500" component={Error500}/>
          <Route path="/maintenance" component={Maintenance}/>
        </Switch>
      </BasePage>
    )
  } else {
    return (
      <Base>
        <TransitionGroup>
          <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
            <div>
              <Switch location={location}>
                <Route path="/dashboard" component={DashboardMain}/>
                
                <Route path="/settings/edit-user" component={UserEditor} />
                
                <Route path="/administrator/golive-queue" component={AdministratorHSEGoLiveQueue} />
                <Route path="/administrator/tracking-prioritizing" component={AdministratorHSETrackingPrioritizingQueue} />
                <Route path="/administrator/eligibility-filters" component={AdministratorHSEEligibilityFiltersQueue} />
                <Route path="/administrator/quality-appraisals" component={AdministratorHSEQualityAppraisalsQueue} />
                <Route path="/administrator/linking-studies" component={AdministratorHSELinkingStudiesQueue} />
                <Route path="/administrator/presentation-details" component={AdministratorHSEPresentationDetailsQueue} />
                
                <Route path="/administrator/ssegolivequeue" component={AdministratorSSEGoLiveQueue} />
                <Route path="/administrator/ssetrackingprioritizingqueue" component={AdministratorSSETrackingPrioritizingQueue} />
                <Route path="/administrator/sseeligibilityfiltersqueue" component={AdministratorSSEEligibilityFiltersQueue} />
                <Route path="/administrator/ssequalityappraisalsqueue" component={AdministratorSSEQualityAppraisalsQueue} />
                <Route path="/administrator/sselinkingstudiesqueue" component={AdministratorSSELinkingStudiesQueue} />
                <Route path="/administrator/ssepresentationdetailsqueue" component={AdministratorSSEPresentationDetailsQueue} />

                <Route path="/hse/edit-article/:articleId" component={EditArticle} />

                <Route path="/hse/assigned-eligibility-filters-article-input/:articleId" component={FilterArticleInput} />
                <Route path="/hse/assigned-eligibility-filters-article-resolution/:articleId" component={ArticleResolution} />
                <Route path="/hse/assigned-eligibility-filters-articlequeue" component={ArticleQueue} />

                <Route path="/hse/assignedqualityappraisalsarticlequeue" component={HSEAssignedQualityAppraisalsArticleQueue} />
                <Route exact path="/hse/assignedqualityappraisalsarticleinput/:articleId" component={HSEAssignedQualityAppraisalsArticleInput} />
                <Route path="/hse/assignedqualityappraisalsarticleresolution/:articleId" component={HSEAssignedQualityAppraisalsArticleResolution} />

                <Route path="/hse/assignedlinkingstudiesarticlequeue" component={HSEAssignedLinkingStudiesArticleQueue} />
                <Route path="/hse/assignedlinkingstudiesarticleinput/:articleId" component={HSEAssignedLinkingStudiesArticleInput} />

                <Route path="/hse/assignedpresentationdetailsarticlequeue" component={HSEAssignedPresentationDetailsArticleQueue} />
                <Route path="/hse/assignedpresentationdetailsarticleinput/:articleId" component={HSEAssignedPresentationDetailsArticleInput} />

                <Route path="/hse/assignedtrackingprioritizingarticlequeue" component={HSEAssignedTrackingPrioritizingArticleQueue} />


                {/* Pending HSE Queue */}
                <Route path="/hse/add-article" component={AddArticle} />
                <Route path="/hse/batchfileupload" component={HSEBatchUpload} />
                <Route path="/hse/pendingeligibilityfiltersarticlequeue" component={HSEPendingEligibilityFiltersArticleQueue} />
                <Route path="/hse/pendingeligibilityfiltersbatchfilequeue" component={HSEPendingEligibilityFiltersBatchfileQueue} />
                <Route path="/hse/pendingqualityappraisalsarticlequeue" component={HSEPendingQualityAppraisalsArticleQueue} />
                <Route path="/hse/pendinglinkingstudiesarticlequeue" component={HSEPendingLinkingStudiesArticleQueue} />
                <Route path="/hse/pendingpresentationdetailsarticlequeue" component={HSEPendingPresentationDetailsArticleQueue} />

                <Route path="/hse/pendingtranslatingtitlesqueue" component={HSEPendingTranslatingTitlesQueue} />
                <Route path="/hse/pendingtrackingprioritizingqueue" component={HSEPendingTrackingPrioritizingQueue} />

                {/* HSE Forms */}

                <Route path="/sse/editarticle/:articleId" component={SSEArticleEdit} />

                {/* Assigned SSE Queue */}
                <Route path="/sse/assignedeligibilityfiltersarticleinput/:articleId" component={SSEAssignedEligibilityFilterArticleInput} />
                <Route path="/sse/assignedeligibilityfiltersarticleresolution/:articleId" component={SSEAssignedEligibilityFilterResolution} />
                <Route path="/sse/assignedeligibilityfiltersarticlequeue" component={SSEAssignedEligibilityFiltersArticleQueue} />

                <Route path="/sse/assignedqualityappraisalsarticlequeue" component={SSEAssignedQualityAppraisalsArticleQueue} />
                <Route path="/sse/assignedqualityappraisalsarticleinput/:articleId" component={SSEAssignedQualityAppraisalsArticleInput} />
                <Route path="/sse/assignedqualityappraisalsarticleresolution/:articleId" component={SSEAssignedQualityAppraisalsResolution} />

                <Route path="/sse/assignedlinkingstudiesarticleinput/:articleId" component={SSEAssignedLinkingStudiesArticleInput} />
                <Route path="/sse/assignedlinkingstudiesarticlequeue" component={SSEAssignedLinkingStudiesArticleQueue} />

                <Route path="/sse/assignedpresentationdetailsarticleinput/:articleId" component={SSEAssignedPresentationDetailsArticleInput} />
                <Route path="/sse/assignedpresentationdetailsarticlearticlequeue" component={SSEAssignedPresentationDetailsArticleQueue} />

                <Route path="/sse/assignedtranslatingtitlesarticleinput/:articleId" component={SSEAssignedTranslatingTitlesArticleInput} />
                <Route path="/sse/assignedtranslatingtitlesarticlearticlequeue" component={SSEAssignedTranslatingTitlesArticleQueue} />

                <Route path="/sse/assignedtrackingprioritizingarticleinput/:articleId" component={SSEAssignedTrackingPrioritizingArticleInput} />
                <Route path="/sse/assignedtrackingprioritizingarticlearticlequeue" component={SSEAssignedTrackingPrioritizingArticleQueue} />                            


                {/* Pending SSE Queue */}
                <Route path="/sse/add-article" component={AddSSEArticle} />
                <Route path="/sse/batchfileupload" component={SSEBatchUpload} />
                <Route path="/sse/pendingeligibilityfiltersarticlequeue" component={SSEPendingEligibilityFiltersArticleQueue} />
                <Route path="/sse/pendingeligibilityfiltersbatchfilequeue" component={SSEPendingEligibilityFiltersBatchfileQueue} />
                <Route path="/sse/pendingqualityappraisalsarticlequeue" component={SSEPendingQualityAppraisalsArticleQueue} />
                <Route path="/sse/pendinglinkingstudiesarticlequeue" component={SSEPendingLinkingStudiesArticleQueue} />
                <Route path="/sse/pendingpresentationdetailsarticlequeue" component={SSEPendingPresentationDetailsArticleQueue} />

                <Route path="/sse/pendingtranslatingtitlesarticlequeue" component={SSEPendingTranslatingTitlesArticleQueue} />
                <Route path="/sse/pendingtrackingprioritizingarticlequeue" component={SSEPendingTrackingPrioritizingArticleQueue} />


                <Redirect to="/notfound" />

              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Base>
    )
  }
}

export default withRouter(Routes);
