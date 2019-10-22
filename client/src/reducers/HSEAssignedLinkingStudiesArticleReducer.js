import { 
    HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE,
    HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,
    HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH,
    HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    hseAssignedLinkingStudiesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE: 
            return { ...state, hseAssignedLinkingStudiesArticles: action.payload };
        case HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedLinkingStudiesErrorMessage: action.payload };
        case HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH: 
            return { ...state, hseAssignedLinkingStudiesArticleFetch: action.payload };
        case HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR: 
            return { ...state, hseAssignedLinkingStudiesErrorMessage: action.payload };
        default:
            return state;
            
    }

}
