import { 
    SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE,
    SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,
    SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH,
    SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sseAssignedLinkingStudiesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE: 
            return { ...state, sseAssignedLinkingStudiesArticles: action.payload };
        case SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR: 
            return { ...state, sseAssignedLinkingStudiesErrorMessage: action.payload };
        case SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH: 
            return { ...state, sseAssignedLinkingStudiesArticleFetch: action.payload };
        case SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR: 
            return { ...state, sseAssignedLinkingStudiesErrorMessage: action.payload };
        default:
            return state;
            
    }

}
