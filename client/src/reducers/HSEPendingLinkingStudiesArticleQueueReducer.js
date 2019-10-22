import { 
    HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE,
    HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER,
    HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    pendingLinkingStudiesErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE: 
            return { ...state, hsePendingLinkingStudiesArticles: action.payload };

        case HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingLinkingStudiesErrorMessage: 'Error listing pending linking studies articles' };

        case HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER: 
            return { ...state, hsePendingLinkingStudiesArticles: action.payload };
        
        case HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR: 
            return { ...state, hsePendingLinkingStudiesErrorMessage: 'Error assigning junior linker to article(s)' };
        default:
            return state;
            
    }

}
