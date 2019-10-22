import { HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE, HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingLinkingStudiesBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE: 
            return { ...state, hsePendingLinkingStudiesBatchfiles: action.payload };                   
        case HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR: 
            return { ...state, hsePendingLinkingStudiesBatchfileErrorMessage: 'Error listing pending linking studies batchfiles' };
        default:
            return state;
            
    }

}
