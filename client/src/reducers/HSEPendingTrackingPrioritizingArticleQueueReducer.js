import { 
    HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_QUEUE,
    HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_JUNIOR_PRIORITIZER,
    HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_JUNIOR_PRIORITIZER_ERROR,

    HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_SENIOR_PRIORITIZER,
    HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_SENIOR_PRIORITIZER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingTrackingPrioritizingErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_QUEUE: 
            return { ...state, hsePendingTrackingPrioritizingArticles: action.payload };

        case HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingTrackingPrioritizingErrorMessage: 'Error listing pending tracking prioritizing articles' };

        case HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_JUNIOR_PRIORITIZER: 
            return { ...state, hsePendingTrackingPrioritizingArticles: action.payload };
        
        case HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_JUNIOR_PRIORITIZER_ERROR: 
            return { ...state, hsePendingTrackingPrioritizingErrorMessage: 'Error listing pending tracking prioritizing articles' };
        
        case HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_SENIOR_PRIORITIZER: 
            return { ...state, hsePendingTrackingPriritizingArticles: action.payload };
        
        case HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_SENIOR_PRIORITIZER_ERROR: 
            return { ...state, hsePendingTrackingPrioritizingErrorMessage: 'Error listing pending tracking prioritizing articles' };
        default:
            return state;
            
    }

}
