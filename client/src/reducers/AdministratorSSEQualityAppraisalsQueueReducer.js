/**
 * @name AdministratorSSEQualityAppraisalsQueueReducer.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator SSE Quality Appraisals. This handles the fetching of articles
 *  for populating pending articles in the administrator queue and assignment of filterers
 */


import { 
    ADMINISTRATOR_SSE_QUALITY_APPRAISALS_QUEUE,
    ADMINISTRATOR_SSE_QUALITY_APPRAISALS_QUEUE_ERROR,

    ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS,
    ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR,

    ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS,
    ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    administratorSSEQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_SSE_QUALITY_APPRAISALS_QUEUE: 
            return { ...state, administratorSSEEligibilityFiltersArticles: action.payload };

        case ADMINISTRATOR_SSE_QUALITY_APPRAISALS_QUEUE_ERROR: 
            return { ...state, administratorSSEEligibilityFiltersErrorMessage: 'Error listing administrator quality appraisals article(s)' };

        case ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS: 
            return { ...state, administratorSSEEligibilityFiltersArticles: action.payload };
        
        case ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR: 
            return { ...state, administratorSSEEligibilityFiltersErrorMessage: 'Error assigning administrator sse junior quality appraiser(s)' };
        
        case ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS: 
            return { ...state, administratorSSEEligibilityFiltersArticles: action.payload };
        
        case ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR: 
            return { ...state, administratorSSEQualityAppraisalsErrorMessage: 'Error assigning administrator sse senior quality appraiser(s)' };
        default:
            return state;
            
    }

}
