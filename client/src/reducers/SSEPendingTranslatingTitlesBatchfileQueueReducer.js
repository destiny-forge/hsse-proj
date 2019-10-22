import { SSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE, SSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingTranslatingTitlesBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE: 
            return { ...state, ssePendingTranslatingTitlesBatchfiles: action.payload };                   
        case SSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR: 
            return { ...state, ssePendingTranslatingTitlesBatchfileErrorMessage: 'Error listing pending translating titles batchfiles' };
        default:
            return state;
            
    }

}
