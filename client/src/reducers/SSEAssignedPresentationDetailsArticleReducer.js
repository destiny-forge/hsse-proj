import { 
    SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE,
    SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,
    SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH,
    SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sseAssignedPresentationDetailsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE: 
            return { ...state, sseAssignedPresentationDetailsArticles: action.payload };
        case SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR: 
            return { ...state, sseAssignedPresentationDetailsErrorMessage: action.payload };
        case SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH: 
            return { ...state, sseAssignedPresentationDetailsArticleFetch: action.payload };
        case SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR: 
            return { ...state, sseAssignedPresentationDetailsErrorMessage: action.payload };
        default:
            return state;
            
    }

}
