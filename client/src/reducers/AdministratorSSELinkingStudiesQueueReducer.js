/**
 * @name SSEAdministratorLinkingStudiesQueue.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator SSE Linking studies. This handles the fetching of articles
 *  for populating pending articles in the administrator linking studies queue and assignment of linkers.
 */


import { 
    ADMINISTRATOR_SSE_LINKING_STUDIES_QUEUE,
    ADMINISTRATOR_SSE_LINKING_STUDIES_QUEUE_ERROR,

    ADMINISTRATOR_SSE_LINKING_STUDIES_ASSIGN_LINKERS,
    ADMINISTRATOR_SSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    administratorSSELinkingStudiesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_SSE_LINKING_STUDIES_QUEUE: 
            return { ...state, administratorSSELinkingStudiesArticles: action.payload };

        case ADMINISTRATOR_SSE_LINKING_STUDIES_QUEUE_ERROR: 
            return { ...state, administratorSSELinkingStudiesErrorMessage: 'Error listing administrator linking studies article(s)' };

        case ADMINISTRATOR_SSE_LINKING_STUDIES_ASSIGN_LINKERS: 
            return { ...state, administratorSSELinkingStudiesArticles: action.payload };
        
        case ADMINISTRATOR_SSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR: 
            return { ...state, administratorSSELinkingStudiesErrorMessage: 'Error administrator sse assigning linker(s) to article(s)' };
        default:
            return state;
            
    }

}
