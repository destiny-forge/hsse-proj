/**
 * @name AdministratorHSETrackingPrioritizingQueueReducer.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator Tracking Prioritizing. This handles the fetching of articles
 *  for populating pending articles in the administrator tracking prioritizing queue and assignment of prioritizers
 */


import { 
    ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE,
    ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE_ERROR,

    ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS,
    ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    administratorHSETrackingPrioritizingQueueErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE: 
            return { ...state, administratorHSETrackingPrioritizingQueue: action.payload };
                               
        case ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE_ERROR: 
            return { ...state, administratorHSETrackingPrioritizingQueueErrorMessage: 'Error listing administrator hse tracking prioritizing articles' };

        case ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS: 
            return { ...state, administratorHSETrackingPrioritizingQueueQueue: action.payload };
        
        case ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR: 
            return { ...state, administratorHSETrackingPrioritizingQueueErrorMessage: 'Error administrator hse assigning prioritizer(s) to article(s)' };
        default:
            return state;
            
    }

}
