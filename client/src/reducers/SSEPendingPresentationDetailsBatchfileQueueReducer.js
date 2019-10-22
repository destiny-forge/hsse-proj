import { SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE, SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingPresentationDetailsBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE: 
            return { ...state, ssePendingPresentationDetailsBatchfiles: action.payload };                   
        case SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR: 
            return { ...state, ssePendingPresentationDetailsBatchfileErrorMessage: 'Error listing pending presentation details batchfiles' };
        default:
            return state;
            
    }

}
