import { 
    HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE,
    HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER,
    HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    pendingPresentationDetailsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE: 
            return { ...state, hsePendingPresentationDetailsArticles: action.payload };

        case HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingPresentationDetailsErrorMessage: 'Error listing pending presentation details articles' };

        case HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER: 
            return { ...state, hsePendingPresentationDetailsArticles: action.payload };
        
        case HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR: 
            return { ...state, hsePendingPresentationDetailsErrorMessage: 'Error assigning junior detailer to article(s)' };
        default:
            return state;
            
    }

}
