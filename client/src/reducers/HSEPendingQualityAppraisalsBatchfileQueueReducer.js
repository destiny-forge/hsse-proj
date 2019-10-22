import { HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE, HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE: 
            return { ...state, hsePendingQualityAppraisalsBatchfiles: action.payload };                   
        case HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR: 
            return { ...state, hsePendingQualityAppraisalsBatchfileErrorMessage: 'Error listing pending quality appraisal batchfiles' };
        default:
            return state;
            
    }

}
