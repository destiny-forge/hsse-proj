import { 
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR,

    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, ssePendingQualityAppraisalsArticles: action.payload };

        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, ssePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };

        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER: 
            return { ...state, ssePendingQualityAppraisalsArticles: action.payload };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR: 
            return { ...state, ssePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER: 
            return { ...state, ssePendingQualityAppraisalsArticles: action.payload };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR: 
            return { ...state, ssePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };
        default:
            return state;
            
    }

}
