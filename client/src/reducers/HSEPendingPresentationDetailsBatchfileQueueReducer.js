import { HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE, HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingPresentationDetailsBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE: 
            return { ...state, hsePendingPresentationDetailsBatchfiles: action.payload };                   
        case HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR: 
            return { ...state, hsePendingPresentationDetailsBatchfileErrorMessage: 'Error listing pending presentation details batchfiles' };
        default:
            return state;
            
    }

}
