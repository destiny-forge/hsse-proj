import { HSE_PENDING_TRACKING_PRIORITIZING_BATCHFILE_QUEUE, HSE_PENDING_TRACKING_PRIORITIZING_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingTrckingPrioritizingBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_TRACKING_PRIORITIZING_BATCHFILE_QUEUE: 
            return { ...state, hsePendingTrackingPrioritizingBatchfiles: action.payload };                   
        case HSE_PENDING_TRACKING_PRIORITIZING_BATCHFILE_QUEUE_ERROR: 
            return { ...state, hsePendingTranslatingTitlesBatchfileErrorMessage: 'Error listing pending tracking prioritizing batchfiles' };
        default:
            return state;
            
    }

}
