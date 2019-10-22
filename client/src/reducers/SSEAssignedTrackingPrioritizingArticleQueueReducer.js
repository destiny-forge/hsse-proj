import { 
    SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE,
    SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR,
    SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH,
    SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sseAssignedTrackingPrioritizingErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE: 
            return { ...state, sseAssignedTrackingPrioritizingArticles: action.payload };
        case SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR: 
            return { ...state, sseAssignedTrackingPrioritizingErrorMessage: action.payload };
        case SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH: 
            return { ...state, sseAssignedTrackingPrioritizingArticleFetch: action.payload };
        case SSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH_ERROR: 
            return { ...state, sseAssignedTrackingPrioritizingErrorMessage: action.payload };
        default:
            return state;
            
    }

}
