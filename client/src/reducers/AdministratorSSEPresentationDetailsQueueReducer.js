/**
 * @name SSEAdministratorPresentationDetailsQueue.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator SSE Presentation Details. This handles the fetching of articles
 *  for populating pending articles in the administrator presentation details queue and assignment of detailers.
 */


import { 
    ADMINISTRATOR_SSE_PRESENTATION_DETAILS_QUEUE,
    ADMINISTRATOR_SSE_PRESENTATION_DETAILS_QUEUE_ERROR,

    ADMINISTRATOR_SSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS,
    ADMINISTRATOR_SSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    administratorSSEPresentationErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_SSE_PRESENTATION_DETAILS_QUEUE: 
            return { ...state, administratorSSEPresentationArticles: action.payload };

        case ADMINISTRATOR_SSE_PRESENTATION_DETAILS_QUEUE_ERROR: 
            return { ...state, administratorSSEPresentationErrorMessage: 'Error listing administrator presentation details article(s)' };

        case ADMINISTRATOR_SSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS: 
            return { ...state, administratorSSEPresentationArticles: action.payload };
        
        case ADMINISTRATOR_SSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR: 
            return { ...state, administratorSSEPresentationDetailsErrorMessage: 'Error administrator assigning detailer(s) to article(s)' };
        default:
            return state;
    }

}
