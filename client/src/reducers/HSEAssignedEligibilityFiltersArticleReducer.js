import { 
    HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
    HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,
    HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH,
    HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    hseAssignedEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE: 
            return { ...state, hseAssignedEligibilityFiltersArticles: action.payload };
        case HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedEligibilityFiltersErrorMessage: action.payload };
        case HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH: 
            return { ...state, hseAssignedEligibilityFiltersArticleFetch: action.payload };
        case HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR: 
            return { ...state, hseAssignedEligibilityFiltersErrorMessage: action.payload };
        default:
            return state;
            
    }

}
