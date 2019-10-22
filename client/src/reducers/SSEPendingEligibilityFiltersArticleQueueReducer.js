import { 
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER,
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER,
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE: 
            return { ...state, ssePendingEligibilityFiltersArticles: action.payload };

        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR: 
            return { ...state, ssePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };

        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER: 
            return { ...state, ssePendingEligibilityFiltersArticles: action.payload };
        
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR: 
            return { ...state, ssePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER: 
            return { ...state, ssePendingEligibilityFiltersArticles: action.payload };
        
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR: 
            return { ...state, ssePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        default:
            return state;
            
    }

}
