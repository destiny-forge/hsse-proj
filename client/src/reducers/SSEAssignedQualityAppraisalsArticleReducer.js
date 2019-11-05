import { 
    SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,
    SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH,
    SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sseAssignedQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  console.log("... hmm", action);
    switch(action.type) {
        case SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, sseAssignedQualityAppraisalsArticles: action.payload };
        case SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, sseAssignedQualityAppraisalsErrorMessage: action.payload };
        case SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH: 
            return { ...state, sseAssignedQualityAppraisalsArticleFetch: action.payload };
        case SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR: 
            return { ...state, sseAssignedQualityAppraisalsErrorMessage: action.payload };
        default:
            return state;
            
    }

}
