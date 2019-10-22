import { 
    SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE,
    SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER,
    SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    pendingPresentationDetailsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE: 
            return { ...state, ssePendingPresentationDetailsArticles: action.payload };

        case SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR: 
            return { ...state, ssePendingPresentationDetailsErrorMessage: 'Error listing pending presentation details articles' };

        case SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER: 
            return { ...state, ssePendingPresentationDetailsArticles: action.payload };
        
        case SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR: 
            return { ...state, ssePendingPresentationDetailsErrorMessage: 'Error assigning junior detailer to article(s)' };
        default:
            return state;
            
    }

}