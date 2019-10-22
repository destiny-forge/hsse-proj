/**
 * @name HSEAdministratorGoLiveQueue.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator Linking studies. This handles the fetching of articles
 *  for populating pending articles in the administrator linking studies queue and assignment of linkers.
 */


import { 
    ADMINISTRATOR_SSE_GO_LIVE_QUEUE,
    ADMINISTRATOR_SSE_GO_LIVE_QUEUE_ERROR,

    ADMINISTRATOR_SSE_GO_LIVE_ASSIGN_LIVE,
    ADMINISTRATOR_SSE_GO_LIVE_ASSIGN_LIVE_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    administratorSSEGOLIVEErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_SSE_GO_LIVE_QUEUE: 
            return { ...state, administratorSSEGoLiveArticles: action.payload };

        case ADMINISTRATOR_SSE_GO_LIVE_QUEUE_ERROR: 
            return { ...state, administratorSSEGoLiveErrorMessage: 'Error listing administrator live article(s)' };

        case ADMINISTRATOR_SSE_GO_LIVE_ASSIGN_LIVE: 
            return { ...state, administratorHSEGoLiveArticles: action.payload };
        
        case ADMINISTRATOR_SSE_GO_LIVE_ASSIGN_LIVE_ERROR: 
            return { ...state, administratorHSEGoLiveErrorMessage: 'Error administrator sse assigning live article(s)' };
        default:
            return state;
            
    }

}
