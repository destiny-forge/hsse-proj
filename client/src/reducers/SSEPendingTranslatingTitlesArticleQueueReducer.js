import { 
    SSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE,
    SSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR,
    SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    pendingTranslatingTitlesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE:
            return { ...state, ssePendingTranslatingTitlesArticles: action.payload };

        case SSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR:
            return { ...state, ssePendingTranslatingTitlesErrorMessage: action.payload };

        case SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR: 
            return { ...state, ssePendingTranslatingTitlesArticles: action.payload };
        
        case SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR: 
            return { ...state, ssePendingTranslatingTitlesErrorMessage: action.payload };
        default:
            return state;
            
    }

}