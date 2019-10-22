/**
 * @name HSEAdministratorLinkingStudiesQueue.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator Linking studies. This handles the fetching of articles
 *  for populating pending articles in the administrator linking studies queue and assignment of linkers.
 */


import { 
    ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE,
    ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE_ERROR,

    ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS,
    ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    administratorHSELinkingStudiesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE: 
            return { ...state, administratorHSELinkingStudiesArticles: action.payload };

        case ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE_ERROR: 
            return { ...state, administratorHSELinkingStudiesErrorMessage: 'Error listing administrator linking studies article(s)' };

        case ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS: 
            return { ...state, administratorHSELinkingStudiesArticles: action.payload };
        
        case ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR: 
            return { ...state, administratorHSELinkingStudiesErrorMessage: 'Error administrator assigning linker(s) to article(s)' };
        default:
            return state;
            
    }

}
