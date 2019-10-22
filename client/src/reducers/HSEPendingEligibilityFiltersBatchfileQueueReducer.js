import { HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE, HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingEligibilityFiltersBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE: 
            return { ...state, hsePendingEligibilityFiltersBatchfiles: action.payload };                   
        case HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR: 
            return { ...state, hsePendingEligibilityFiltersBatchfileErrorMessage: 'Error listing pending quality appraisal batchfiles' };
        default:
            return state;
            
    }

}
