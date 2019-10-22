import { SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE, SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE: 
            return { ...state, ssePendingQualityAppraisalsBatchfiles: action.payload };                   
        case SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR: 
            return { ...state, ssePendingQualityAppraisalsBatchfileErrorMessage: 'Error listing pending quality appraisal batchfiles' };
        default:
            return state;
            
    }

}
