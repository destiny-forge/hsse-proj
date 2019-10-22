import { 
    SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE,
    SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR,
    SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH,
    SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sseAssignedTranslatingTitlesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE: 
            return { ...state, sseAssignedTranslatingTitlesArticles: action.payload };
        case SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR: 
            return { ...state, sseAssignedTranslatingTitlesErrorMessage: action.payload };
        case SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH: 
            return { ...state, sseAssignedTranslatingTitlesArticleFetch: action.payload };
        case SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH_ERROR: 
            return { ...state, sseAssignedTranslatingTitlesErrorMessage: action.payload };
        default:
            return state;
            
    }

}
