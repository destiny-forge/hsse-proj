/**
 * @name HSEAdministratorGoLiveQueue.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator Linking studies. This handles the fetching of articles
 *  for populating pending articles in the administrator linking studies queue and assignment of linkers.
 */


import { 
    ADMINISTRATOR_HSE_GO_LIVE_QUEUE,
    ADMINISTRATOR_HSE_GO_LIVE_QUEUE_ERROR,

    ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE,
    ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    administratorHSEGOLIVEErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_HSE_GO_LIVE_QUEUE: 
            return { ...state, administratorHSEGoLiveArticles: action.payload };

        case ADMINISTRATOR_HSE_GO_LIVE_QUEUE_ERROR: 
            return { ...state, administratorHSEGoLiveErrorMessage: 'Error listing administrator linking studies article(s)' };

        case ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE: 
            return { ...state, administratorHSEGoLiveArticles: action.payload };
        
        case ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE_ERROR: 
            return { ...state, administratorHSEGoLiveErrorMessage: 'Error administrator hse assigning live article(s)' };
        default:
            return state;
            
    }

}
