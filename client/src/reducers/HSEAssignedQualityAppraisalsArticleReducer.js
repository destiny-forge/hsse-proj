import { 
    HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,
    HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH,
    HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    hseAssignedQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, hseAssignedQualityAppraisalsArticles: action.payload };
        case HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedQualityAppraisalsErrorMessage: action.payload };
        case HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH: 
            return { ...state, hseAssignedQualityAppraisalsArticleFetch: action.payload };
        case HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR: 
            return { ...state, hseAssignedQualityAppraisalsErrorMessage: action.payload };
        default:
            return state;
            
    }

}
