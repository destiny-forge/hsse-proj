import { 
    SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE,
    SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER,
    SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    pendingLinkingStudiesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE: 
            return { ...state, ssePendingLinkingStudiesArticles: action.payload };

        case SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR: 
            return { ...state, ssePendingLinkingStudiesErrorMessage: 'Error listing pending linking studies articles' };

        case SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER: 
            return { ...state, ssePendingLinkingStudiesArticles: action.payload };
        
        case SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR: 
            return { ...state, ssePendingLinkingStudiesErrorMessage: 'Error assigning junior linker to article(s)' };
        default:
            return state;
            
    }

}