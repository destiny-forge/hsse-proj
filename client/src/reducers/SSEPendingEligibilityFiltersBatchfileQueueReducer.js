import { SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE, SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingEligibilityFiltersBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE: 
            return { ...state, ssePendingEligibilityFiltersBatchfiles: action.payload };                   
        case SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR: 
            return { ...state, ssePendingEligibilityFiltersBatchfileErrorMessage: 'Error listing pending eligibility and filters batchfiles' };
        default:
            return state;
            
    }

}
