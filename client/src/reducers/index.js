/**
 * @name index.js
 * @description This file is responsible for combining all the reducers
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

import HSEArticleReducer from './HSEArticleReducer';

import FiltersArticleQueueReducer from './HSE/Pending/FiltersArticleQueueReducer';
import HSEPendingEligibilityFiltersBatchfileQueueReducer from './HSEPendingEligibilityFiltersBatchfileQueueReducer';

import HSEAssignedEligibilityFiltersArticleQueueReducer from './HSEAssignedEligibilityFiltersArticleReducer';

import HSEPendingQualityAppraisalsArticleQueueReducer from './HSEPendingQualityAppraisalsArticleQueueReducer';
import HSEPendingQualityAppraisalsBatchfileQueueReducer from './HSEPendingQualityAppraisalsBatchfileQueueReducer';

import HSEAssignedQualityAppraisalsArticleQueueReducer from './HSEAssignedQualityAppraisalsArticleReducer';

import HSEPendingLinkingStudiesArticleQueueReducer from './HSEPendingLinkingStudiesArticleQueueReducer';
import HSEPendingLinkingStudiesBatchfileQueueReducer from './HSEPendingLinkingStudiesBatchfileQueueReducer';

import HSEAssignedLinkingStudiesArticleQueueReducer from './HSEAssignedLinkingStudiesArticleReducer';

import HSEPendingPresentationDetailsArticleQueueReducer from './HSEPendingPresentationDetailsArticleQueueReducer';
import HSEPendingPresentationDetailsBatchfileQueueReducer from './HSEPendingPresentationDetailsBatchfileQueueReducer';

import HSEAssignedPresentationDetailsArticleQueueReducer from './HSEAssignedPresentationDetailsArticleReducer';

import HSEPendingTranslatingTitlesArticleQueueReducer from './HSEPendingTranslatingTitlesArticleQueueReducer';
import HSEPendingTranslatingTitlesBatchfileQueueReducer from './HSEPendingTranslatingTitlesBatchfileQueueReducer';

import HSEPendingTrackingPrioritizingArticleQueueReducer from './HSEPendingTrackingPrioritizingArticleQueueReducer';
import HSEPendingTrackingPrioritizingBatchfileQueueReducer from './HSEPendingTrackingPrioritizingBatchfileQueueReducer';

import HSEAssignedTrackingPrioritizingArticleQueueReducer from './HSEAssignedTrackingPrioritizingArticleReducer';



import SSEArticleReducer from './SSEArticleReducer';
import SSEPendingEligibilityFiltersArticleQueueReducer from './SSEPendingEligibilityFiltersArticleQueueReducer';
import SSEPendingEligibilityFiltersBatchfileQueueReducer from './SSEPendingEligibilityFiltersBatchfileQueueReducer';

import SSEAssignedEligibilityFiltersArticleQueueReducer from './SSEAssignedEligibilityFiltersArticleReducer';

import SSEPendingQualityAppraisalsArticleQueueReducer from './SSEPendingQualityAppraisalsArticleQueueReducer';
import SSEPendingQualityAppraisalsBatchfileQueueReducer from './SSEPendingQualityAppraisalsBatchfileQueueReducer';

import SSEAssignedQualityAppraisalsArticleQueueReducer from './SSEAssignedQualityAppraisalsArticleReducer';

import SSEPendingLinkingStudiesArticleQueueReducer from './SSEPendingLinkingStudiesArticleQueueReducer';
import SSEPendingLinkingStudiesBatchfileQueueReducer from './SSEPendingLinkingStudiesBatchfileQueueReducer';

import SSEAssignedLinkingStudiesArticleQueueReducer from './SSEAssignedLinkingStudiesArticleReducer';

import SSEPendingPresentationDetailsArticleQueueReducer from './SSEPendingPresentationDetailsArticleQueueReducer';
import SSEPendingPresentationDetailsBatchfileQueueReducer from './SSEPendingPresentationDetailsBatchfileQueueReducer';

import SSEPendingTranslatingTitlesArticleQueueReducer from './SSEPendingTranslatingTitlesArticleQueueReducer';
import SSEPendingTranslatingTitlesBatchfileQueueReducer from './SSEPendingTranslatingTitlesBatchfileQueueReducer';


import SSEAssignedPresentationDetailsArticleQueueReducer from './SSEAssignedPresentationDetailsArticleReducer';

import SSEAssignedTranslatingTitlesArticleQueueReducer from './SSEAssignedTranslatingTitlesArticleQueueReducer';


// ADMINISTRATOR HSE SECTION
import AdministratorHSEGoLiveQueueReducer from './AdministratorHSEGoLiveQueueReducer';
import AdministratorHSETrackingPrioritizingQueueReducer from './AdministratorHSETrackingPrioritizingQueueReducer';
import AdministratorHSEEligibilityFiltersQueueReducer from './AdministratorHSEEligibilityFiltersQueueReducer';
import AdministratorHSEQualityAppraisalsQueueReducer from './AdministratorHSEQualityAppraisalsQueueReducer';
import AdministratorHSELinkingStudiesQueueReducer from './AdministratorHSELinkingStudiesQueueReducer';
import AdministratorHSEPresentationDetailsQueueReducer from './AdministratorHSEPresentationDetailsQueueReducer';

// ADMINISTRATOR SSE SECTION
import AdministratorSSEGoLiveQueueReducer from './AdministratorSSEGoLiveQueueReducer';
import AdministratorSSETrackingPrioritizingQueueReducer from './AdministratorSSETrackingPrioritizingQueueReducer';
import AdministratorSSEEligibilityFiltersQueueReducer from './AdministratorSSEEligibilityFiltersQueueReducer';
import AdministratorSSEQualityAppraisalsQueueReducer from './AdministratorSSEQualityAppraisalsQueueReducer';
import AdministratorSSELinkingStudiesQueueReducer from './AdministratorSSELinkingStudiesQueueReducer';
import AdministratorSSEPresentationDetailsQueueReducer from './AdministratorSSEPresentationDetailsQueueReducer';


export default combineReducers({

    sse: SSEArticleReducer,
    form: formReducer,
    auth: authReducer,

    filtersArticleQueue: FiltersArticleQueueReducer,
    hsePendingEligibilityFiltersBatchfileQueue: HSEPendingEligibilityFiltersBatchfileQueueReducer,
    
    hsePendingQualityAppraisalsArticleQueue: HSEPendingQualityAppraisalsArticleQueueReducer,
    hsePendingQualityAppraisalsBatchfileQueue: HSEPendingQualityAppraisalsBatchfileQueueReducer,
    
    hsePendingLinkingStudiesArticleQueue: HSEPendingLinkingStudiesArticleQueueReducer,
    hsePendingLinkingStudiesBatchfileQueue: HSEPendingLinkingStudiesBatchfileQueueReducer,

    hsePendingPresentationDetailsArticleQueue: HSEPendingPresentationDetailsArticleQueueReducer,
    hsePendingPresentationDetailsBatchfileQueue: HSEPendingPresentationDetailsBatchfileQueueReducer,

    hsePendingTranslatingTitlesArticleQueue: HSEPendingTranslatingTitlesArticleQueueReducer,
    hsePendingTranslatingTitlesBatchfileQueue: HSEPendingTranslatingTitlesBatchfileQueueReducer,

    hsePendingTrackingPrioritizingArticleQueue: HSEPendingTrackingPrioritizingArticleQueueReducer,
    hsePendingTrackingPrioritizingBatchfileQueue: HSEPendingTrackingPrioritizingBatchfileQueueReducer,
    
    hseAssignedEligibilityFiltersArticleQueue: HSEAssignedEligibilityFiltersArticleQueueReducer,
    hseAssignedQualityAppraisalsArticleQueue: HSEAssignedQualityAppraisalsArticleQueueReducer,
    hseAssignedLinkingStudiesArticleQueue: HSEAssignedLinkingStudiesArticleQueueReducer,
    hseAssignedPresentationDetailsArticleQueue: HSEAssignedPresentationDetailsArticleQueueReducer,
    hseAssignedTrackingPrioritizingArticleQueue: HSEAssignedTrackingPrioritizingArticleQueueReducer,

    hse: HSEArticleReducer,

    ssePendingEligibilityFiltersArticleQueue: SSEPendingEligibilityFiltersArticleQueueReducer,
    ssePendingEligibilityFiltersBatchfileQueue: SSEPendingEligibilityFiltersBatchfileQueueReducer,

    sseAssignedEligibilityFiltersArticleQueue: SSEAssignedEligibilityFiltersArticleQueueReducer,
  
    ssePendingQualityAppraisalsArticleQueue: SSEPendingQualityAppraisalsArticleQueueReducer,
    ssePendingQualityAppraisalsBatchfileQueue: SSEPendingQualityAppraisalsBatchfileQueueReducer,
  
    sseAssignedQualityAppraisalsArticleQueue: SSEAssignedQualityAppraisalsArticleQueueReducer,

    ssePendingLinkingStudiesArticleQueue: SSEPendingLinkingStudiesArticleQueueReducer,
    ssePendingLinkingStudiesBatchfileQueue: SSEPendingLinkingStudiesBatchfileQueueReducer,
  
    sseAssignedLinkingStudiesArticleQueue: SSEAssignedLinkingStudiesArticleQueueReducer,

    ssePendingPresentationDetailsArticleQueue: SSEPendingPresentationDetailsArticleQueueReducer,
    ssePendingPresentationDetailsBatchfileQueue: SSEPendingPresentationDetailsBatchfileQueueReducer,
  
    sseAssignedPresentationDetailsArticleQueue: SSEAssignedPresentationDetailsArticleQueueReducer,

    ssePendingTranslatingTitlesArticleQueue: SSEPendingTranslatingTitlesArticleQueueReducer,
    ssePendingTranslatingTitlesBatchfileQueue: SSEPendingTranslatingTitlesBatchfileQueueReducer,

    sseAssignedTranslatingTitlesArticleQueue: SSEAssignedTranslatingTitlesArticleQueueReducer,

    
    administratorHSEEligibilityFiltersQueue: AdministratorHSEEligibilityFiltersQueueReducer,
    administratorHSEQualityAppraisalsQueue: AdministratorHSEQualityAppraisalsQueueReducer,
    administratorHSELinkingStudiesQueue: AdministratorHSELinkingStudiesQueueReducer,
    administratorHSEPresentationDetailsQueue: AdministratorHSEPresentationDetailsQueueReducer,
    administratorHSEGoLiveQueue: AdministratorHSEGoLiveQueueReducer,
    administratorHSETrackingPrioritizingQueue: AdministratorHSETrackingPrioritizingQueueReducer,


    administratorSSEEligibilityFiltersQueue: AdministratorSSEEligibilityFiltersQueueReducer,
    administratorSSEQualityAppraisalsQueue: AdministratorSSEQualityAppraisalsQueueReducer,
    administratorSSELinkingStudiesQueue: AdministratorSSELinkingStudiesQueueReducer,
    administratorSSEPresentationDetailsQueue: AdministratorSSEPresentationDetailsQueueReducer,
    administratorSSEGoLiveQueue: AdministratorSSEGoLiveQueueReducer,
    administratorSSETrackingPrioritizingQueue: AdministratorSSETrackingPrioritizingQueueReducer


});