/**
 * @name AdministratorHSEPresentationDetailsQueue.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator HSE Presentation Details. This handles the fetching of articles
 *  for populating pending articles in the administrator presentation details queue and assignment of detailers.
 */


import { 
    ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE,
    ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE_ERROR,

    ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS,
    ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    administratorHSEPresentationErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE: 
            return { ...state, administratorHSEPresentationArticles: action.payload };

        case ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE_ERROR: 
            return { ...state, administratorHSEPresentationErrorMessage: 'Error listing administrator hse presentation details article(s)' };

        case ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS: 
            return { ...state, administratorHSEPresentationArticles: action.payload };
        
        case ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR: 
            return { ...state, administratorHSEPresentationDetailsErrorMessage: 'Error administrator hse assigning detailer(s) to article(s)' };
        default:
            return state;
    }

}
