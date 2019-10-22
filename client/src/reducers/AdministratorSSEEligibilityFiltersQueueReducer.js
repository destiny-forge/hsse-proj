/**
 * @name HSEAdministratorEligibilityFiltersQueueReducer.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator Eligibility Filters. This handles the fetching of articles
 *  for populating pending articles in the administrator queue and assignment of filterers
 */


import { 
    ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_QUEUE,
    ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_QUEUE_ERROR,

    ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS,
    ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS_ERROR,

    ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS,
    ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    administratorSSEEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_QUEUE: 
            return { ...state, administratorHSEEligibilityFiltersArticles: action.payload };

        case ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_QUEUE_ERROR: 
            return { ...state, administratorHSEEligibilityFiltersErrorMessage: 'Error listing administrator eligibility and filters articles' };

        case ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS: 
            return { ...state, administratorHSEEligibilityFiltersArticles: action.payload };
        
        case ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS_ERROR: 
            return { ...state, administratorHSEEligibilityFiltersErrorMessage: 'Error listing administrator eligibility and filters articles' };
        
        case ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS: 
            return { ...state, administratorHSEEligibilityFiltersArticles: action.payload };
        
        case ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS_ERROR: 
            return { ...state, administratorHSEEligibilityFiltersErrorMessage: 'Error listing administrator eligibility and filters articles' };
        default:
            return state;
            
    }

}
