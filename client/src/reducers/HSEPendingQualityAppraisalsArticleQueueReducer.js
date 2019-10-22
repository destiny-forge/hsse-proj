import { 
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER,
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR,

    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER,
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };

        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };

        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };
        
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };
        default:
            return state;
            
    }

}
