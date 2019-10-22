import { SSE_FETCH_ARTICLE, SSE_CREATE_ARTICLE, SSE_DELETE_ARTICLE } from '../actions/types';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case SSE_FETCH_ARTICLE:
            return { ...state, errorMessage: action.payload };
        case SSE_CREATE_ARTICLE:
            return { ...state };
        case SSE_DELETE_ARTICLE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
            
    }

}