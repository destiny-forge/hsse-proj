import { 
    HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
    HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER,
    HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

    HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER,
    HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };

        case HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };

        case HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };
        
        case HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        
        case HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };
        
        case HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        default:
            return state;
            
    }

}
