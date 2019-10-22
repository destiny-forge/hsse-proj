import { 
    HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE,
    HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR,
    HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH,
    HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    hseAssignedTranslatingTitlesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE: 
            return { ...state, hseAssignedTranslatingTitlesArticles: action.payload };
        case HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedTranslatingTitlesErrorMessage: action.payload };
        case HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH: 
            return { ...state, hseAssignedTranslatingTitlesArticleFetch: action.payload };
        case HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH_ERROR: 
            return { ...state, hseAssignedTranslatingTitlesErrorMessage: action.payload };
        default:
            return state;
            
    }

}
