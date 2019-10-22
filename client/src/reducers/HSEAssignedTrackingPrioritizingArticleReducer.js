import { 
    HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE,
    HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR,
    HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH,
    HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    hseAssignedTrackingPrioritizngErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE: 
            return { ...state, hseAssignedTrackingPrioritizingArticles: action.payload };
        case HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedTrackingPrioritizingErrorMessage: action.payload };
        case HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH: 
            return { ...state, hseAssignedTrackingPrioritizingArticleFetch: action.payload };
        case HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH_ERROR: 
            return { ...state, hseAssignedTrackingPrioritizingErrorMessage: action.payload };
        default:
            return state;
            
    }

}
