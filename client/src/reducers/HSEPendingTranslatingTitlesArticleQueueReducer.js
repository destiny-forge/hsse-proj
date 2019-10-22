import { 
    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE,
    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR,
    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    hsePendingTranslatingTitlesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE: 
            return { ...state, hsePendingTranslatingTitlesArticles: action.payload };

        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingTranslatingTitlesErrorMessage: action.payload };

        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR: 
            return { ...state, hsePendingTranslatingTitlesArticles: action.payload };
        
        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR: 
            return { ...state, hsePendingTranslatingTitlesErrorMessage: action.payload };
        default:
            return state;
            
    }

}
