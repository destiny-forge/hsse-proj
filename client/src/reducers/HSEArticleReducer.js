import { 
    HSE_FETCH_ARTICLE,
    HSE_CREATE_ARTICLE,
    HSE_DELETE_ARTICLE,
    HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE,
    HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE_ERROR 
} from '../actions/types';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case HSE_FETCH_ARTICLE:
            return { ...state, errorMessage: action.payload };
        case HSE_CREATE_ARTICLE:
            return { ...state };
        case HSE_DELETE_ARTICLE:
            return { ...state, errorMessage: action.payload };
        case HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE:
            return { ...state, message: action.payload };
        case HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
            
    }

}