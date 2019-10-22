import { 
    HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE,
    HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,
    HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH,
    HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    hseAssignedPresentationDetailsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE: 
            return { ...state, hseAssignedPresentationDetailsArticles: action.payload };
        case HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedPresentationDetailsErrorMessage: action.payload };
        case HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH: 
            return { ...state, hseAssignedPresentationDetailsArticleFetch: action.payload };
        case HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR: 
            return { ...state, hseAssignedPresentationDetailsErrorMessage: action.payload };
        default:
            return state;
            
    }

}
