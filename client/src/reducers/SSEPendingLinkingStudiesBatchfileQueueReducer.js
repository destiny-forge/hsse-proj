import { SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE, SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingLinkingStudiesBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE: 
            return { ...state, ssePendingLinkingStudiesBatchfiles: action.payload };                   
        case SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR: 
            return { ...state, ssePendingLinkingStudiesBatchfileErrorMessage: 'Error listing pending linking studies batchfiles' };
        default:
            return state;
            
    }

}
