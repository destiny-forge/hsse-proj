/**
 * @name AdministratorHSEQualityAppraisalsQueueReducer.js
 * @author Kwadwo Sakyi
 * @description Reducer for Administrator HSE Quality Appraisals. This handles the fetching of articles
 *  for populating pending articles in the administrator queue and assignment of filterers
 */


import { 
    ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE,
    ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE_ERROR,

    ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS,
    ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR,

    ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS,
    ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    administratorHSEQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE: 
            return { ...state, administratorHSEEligibilityFiltersArticles: action.payload };

        case ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE_ERROR: 
            return { ...state, administratorHSEEligibilityFiltersErrorMessage: 'Error listing administrator quality appraisals articles' };

        case ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS: 
            return { ...state, administratorHSEEligibilityFiltersArticles: action.payload };
        
        case ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR: 
            return { ...state, administratorHSEEligibilityFiltersErrorMessage: 'Error administrator hse assigning junior appraiser(s) articles to user' };
        
        case ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS: 
            return { ...state, administratorHSEEligibilityFiltersArticles: action.payload };
        
        case ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR: 
            return { ...state, administratorHSEQualityAppraisalsErrorMessage: 'Error administrator hse assigning senior appraiser(s) articles to user' };
        default:
            return state;
            
    }

}
