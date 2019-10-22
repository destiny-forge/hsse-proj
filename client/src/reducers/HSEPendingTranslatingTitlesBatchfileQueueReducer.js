import { HSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE, HSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingTranslatingTitlesBatchfileErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE: 
            return { ...state, hsePendingTranslatingTitlesBatchfiles: action.payload };                   
        case HSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR: 
            return { ...state, hsePendingTranslatingTitlesBatchfileErrorMessage: 'Error listing pending translating titles batchfiles' };
        default:
            return state;
            
    }

}
