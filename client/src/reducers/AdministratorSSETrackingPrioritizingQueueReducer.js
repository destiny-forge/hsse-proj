/**
 * @name SSEAdministratorTrackingPrioritizingQueueReducer.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator SSE Tracking Prioritizing. This handles the fetching of articles
 *  for populating pending articles in the administrator tracking prioritizing queue and assignment of prioritizers
 */


import { 
    ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_QUEUE,
    ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_QUEUE_ERROR,

    ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS,
    ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    administratorSSETrackingPrioritizingQueueErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_QUEUE: 
            return { ...state, administratorSSETrackingPrioritizingQueue: action.payload };
                               
        case ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_QUEUE_ERROR: 
            return { ...state, administratorSSETrackingPrioritizingQueueErrorMessage: 'Error listing administrator sse tracking prioritizing articles' };

        case ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS: 
            return { ...state, administratorSSETrackingPrioritizingQueueQueue: action.payload };
        
        case ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR: 
            return { ...state, administratorSSETrackingPrioritizingQueueErrorMessage: 'Error administrator sse assigning prioritizer(s) to article(s)' };
        default:
            return state;
            
    }

}
