import { 
    SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
    SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,
    SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH,
    SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sseAssignedEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE: 
            return { ...state, sseAssignedEligibilityFiltersArticles: action.payload };
        case SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR: 
            return { ...state, sseAssignedEligibilityFiltersErrorMessage: action.payload };
        case SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH: 
            return { ...state, sseAssignedEligibilityFiltersArticleFetch: action.payload };
        case SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR: 
            return { ...state, sseAssignedEligibilityFiltersErrorMessage: action.payload };
        default:
            return state;
            
    }

}
