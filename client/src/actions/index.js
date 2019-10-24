import axios from 'axios';
import { 
  AUTH_USER, 
  AUTH_ERROR, 
  CONFIRM_USER_EMAIL, 
  FORGOT_PASSWORD_EMAIL,

  CURRENT_USER,
  CURRENT_USER_ERROR,

  FETCH_ALL_USERS,
  FETCH_ALL_USERS_ERROR,

  FETCH_USER_BY_EMAIL,
  FETCH_USER_BY_EMAIL_ERROR,

  ADD_USER_ROLE,
  ADD_USER_ROLE_ERROR,

  REMOVE_USER_ROLE,
  REMOVE_USER_ROLE_ERROR,

  UPDATE_USER_ROLE,
  UPDATE_USER_ROLE_ERROR,

  ACTIVATE_USER,
  ACTIVATE_USER_ERROR,

  DEACTIVATE_USER,
  DEACTIVATE_USER_ERROR,

  HSE_CREATE_ARTICLE,
  HSE_CREATE_ARTICLE_ERROR,
  HSE_CREATE_BATCHFILE,
  HSE_CREATE_BATCHFILE_ERROR,

  HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE,
  HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE_ERROR,

  HSE_ADD_ARTICLE_TO_LOST_QUEUE,
  HSE_ADD_ARTICLE_TO_LOST_QUEUE_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE,
  HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_JUNIOR_FILTER,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_JUNIOR_FILTER_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_SENIOR_FILTER,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_SENIOR_FILTER_ERROR,

  // Quality Appraisals 
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR,

  HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE,
  HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR,

  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER,
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR,

  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER,
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR,


  // Linking Studies
  HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE,
  HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT,
  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_ERROR,

  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE,
  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE_ERROR,

  HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE,
  HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR,

  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE,
  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH,
  HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR,

  HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER,
  HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR,


  // Presentation Details
  HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE,
  HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT,
  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_ERROR,

  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE,
  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE_ERROR,

  HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE,
  HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR,

  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE,
  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH,
  HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR,

  HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER,
  HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR,


/* SSE */
  SSE_CREATE_ARTICLE,
  SSE_CREATE_ARTICLE_ERROR,
  SSE_CREATE_BATCHFILE,
  SSE_CREATE_BATCHFILE_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE,
  SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER,
  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER,
  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR,

  // Quality Appraisals
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR,

  SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE,
  SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR,

  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER,
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR,

  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER,
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR,

  // Linking Studies
  SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE,
  SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT,
  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_ERROR,

  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE,
  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE_ERROR,

  SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE,
  SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR,

  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE,
  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH,
  SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR,

  SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER,
  SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR,

  // Presentation Details
  SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE,
  SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT,
  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_ERROR,

  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE,
  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE_ERROR,

  SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE,
  SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR,

  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE,
  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH,
  SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR,

  SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER,
  SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR,
/*
  // Administrator HSE
  ADMINISTRATOR_HSE_GO_LIVE_QUEUE,
  ADMINISTRATOR_HSE_GO_LIVE_QUEUE_ERROR,

  ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE,
  ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE_ERROR,

  // TRACKING PRIORITIZING
  ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE,
  ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE_ERROR,

  ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS,
  ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR,

  // ELIGIBILITY FILTERS
  ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_QUEUE,
  ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_QUEUE_ERROR,

  ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS,
  ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS_ERROR,
              
  ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS,
  ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS_ERROR,

  // QUALITY APPRAISALS
  ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE,
  ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE_ERROR,

  ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS,
  ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR,

  ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS,
  ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR,

  // LINKING STUDIES
  ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE,
  ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE_ERROR,

  ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS,
  ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR,

  // PRESENTATION DETAILS
  ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE,
  ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE_ERROR,

  ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS,
  ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR

*/
} from './types';

const backendServer = `${process.env.REACT_APP_BACKEND_SERVER}`;

let headers = {
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem('token') 
};

export const signup = (formProps, callback) => async dispatch => {
  
  try {
    await axios.post(
      `${backendServer}/signup`,
      formProps
    );

    dispatch({ type: CONFIRM_USER_EMAIL, payload: 'Please confirm your email' });

    callback();

  } catch (e) {

    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });

  }
};

export const signin = (formProps, successCallback, failureCallback) => async dispatch => {
  
  try {
    const response = await axios.post(
      `${backendServer}/signin`,
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });

    localStorage.setItem('token', response.data.token);

    successCallback();
    //return response.data

  } catch (e) {

    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials or Unconfirmed email' });
    
    failureCallback();
    //return e;
  }
};

export const resetPassword = (formProps, token, history) => async dispatch => {
  try {
    await axios.post(
      `${backendServer}/resetpassword/${token}`,
      formProps
    );

    dispatch({ type: AUTH_USER, payload: 'Password has been reset' });
    
    history.push('/successfulpasswordreset');
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Password could NOT be reset' });
  }
};

export const forgotpassword = (formProps, callback) => async dispatch => {
  try {
    await axios.post(
      `${backendServer}/forgotpassword`,
      formProps
    );

    dispatch({ type: FORGOT_PASSWORD_EMAIL, payload: 'Sending password reset email' });
    
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials or Unconfirmed email' });
  }
};

export const getCurrentUser = ( ) => async dispatch => {
  
  try {
      const response = await axios.get(`${backendServer}/currentuser`, {
      headers: { authorization: localStorage.getItem('token') }
    });
    
    dispatch({ type: CURRENT_USER, payload: response.data });
    return response.data;
  } catch (e) {
    
    dispatch({ type: CURRENT_USER_ERROR, payload: e });

  }
};

export const fetchUserByEmail = (email) => async dispatch => {
  
  try {
      const response = await axios.get(`${backendServer}/fetchuserbyemail/${email}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    
    dispatch({ type: FETCH_USER_BY_EMAIL, payload: response.data });
    return response.data;
  } catch (e) {
    
    dispatch({ type: FETCH_USER_BY_EMAIL_ERROR, payload: e });
    return e;
  }
};

export const fetchAllUsers = ( ) => async dispatch => {
  
  try {
      const response = await axios.get(`${backendServer}/fetchallusers`, {
      headers: { authorization: localStorage.getItem('token') }
    });
    
    dispatch({ type: FETCH_ALL_USERS, payload: response.data });
    return response.data;

  } catch (e) {
    
    dispatch({ type: FETCH_ALL_USERS_ERROR, payload: e });

  }
};

export const signout = () => {
  
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: 'Successfully signed out'
  };

};

export const addRole = (value) => async dispatch => {
  try { 
    const response = await axios.post(`${backendServer}/addrole`, 
    { value },
    {
      headers: { authorization: localStorage.getItem('token') }
    });
  
    dispatch({ type: ADD_USER_ROLE, payload: response.data });

  } catch (e) {
  
    dispatch({ type: ADD_USER_ROLE_ERROR, payload: e });

  }
};

export const updateRole = (value) => async dispatch => {
  
  try { 
    const response = await axios.post(`${backendServer}/updaterole`, 
    { value },
    {
      headers: { authorization: localStorage.getItem('token') }
    });
  
    dispatch({ type: UPDATE_USER_ROLE, payload: response.data });
    return response.data;

  } catch (e) {
  
    dispatch({ type: UPDATE_USER_ROLE_ERROR, payload: e });
    return e;

  }
};

export const removeRole = (value) => async dispatch => {
  try { 
    const response = await axios.post(`${backendServer}/removerole`, 
    { value },
    {
      headers: { authorization: localStorage.getItem('token') }
    });
  
    dispatch({ type: REMOVE_USER_ROLE, payload: response.data });

  } catch (e) {
  
    dispatch({ type: REMOVE_USER_ROLE_ERROR, payload: e });

  }
};

export const activateUser = (value) => async dispatch => {
  try { 
    const response = await axios.post(`${backendServer}/activateuser`, 
    { value },
    {
      headers: { authorization: localStorage.getItem('token') }
    });
  
    dispatch({ type: ACTIVATE_USER, payload: response.data });

  } catch (e) {
  
    dispatch({ type: ACTIVATE_USER_ERROR, payload: e });

  }
};

export const deactivateUser = (value) => async dispatch => {
  try { 
    const response = await axios.post(`${backendServer}/deactivateuser`, 
    { value },
    {
      headers: { authorization: localStorage.getItem('token') }
    });
  
    dispatch({ type: DEACTIVATE_USER, payload: response.data });

  } catch (e) {
  
    dispatch({ type: DEACTIVATE_USER_ERROR, payload: e });

  }
};

// HSE Article
export const onHSEArticleSubmit = (values, history) => async dispatch => {
  console.log(values);
  try {
    const response = await axios.post(
      `${backendServer}/hse/articles`,
      values
    );

    history.push('/hse/pendingeligibilityfiltersarticlequeue');

    dispatch({ type: HSE_CREATE_ARTICLE, payload: response.data })

  } catch(e) {

    dispatch({ type: HSE_CREATE_ARTICLE_ERROR, payload: 'Error creating Article'});

  }
};

export const submitHSEBatchFile = (state, history) => async dispatch => {

  const uploadConfig = await axios.get('/api/hse/getfileurl');

  await axios.put(uploadConfig.data.url, state.file, {
    headers: {
      'Content-Type': state.file.type,
    }
  });

  const articleBatch = await axios.post('/api/hse/batchfile', { 
    url: uploadConfig.data.key, 
    language: state.selectedLanguageOption.label, 
    articleSource: state.selectedSourceOption.label, 
    harvestDate: state.harvestDate,
    fileName: state.file.name
  });
  
  if(articleBatch) {
    
    dispatch({ type: HSE_CREATE_BATCHFILE, payload: 'Batchfile succesfully uploaded' });

    // Successful upload
    history.push('/hse/pendingeligibilityfiltersarticlequeue');

  } else {
    // Unsuccesful upload
    dispatch({ type: HSE_CREATE_BATCHFILE_ERROR, payload: 'Batchfile succesfully uploaded' });
    history.push('/hse/pendingeligibilityfiltersarticlequeue');
  }

};

export const listHSEPendingEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendingeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
    return response.data;
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse eligibility filter article pending queue'});
  }
};

export const listHSEPendingQualityAppraisalsArticlesQueue = () => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendingqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data });
    return response.data;
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse quality appraisals article pending queue'});
  }
};

export const listHSEPendingLinkingStudiesArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendinglinkingstudiesarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE, payload: response.data })
    return response.data
  } catch(e) {
    dispatch({ type: HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse linking studies article pending queue'});
  }
};

export const listHSEPendingPresentationDetailsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendingpresentationdetailsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse presentation details article pending queue'});
  }
};

export const listHSEPendingEligibilityFiltersBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/articlebatchfiles`);

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing hse eligibility filter batchfile pending queue'});
  }
};

export const listHSEPendingQualityAppraisalsBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/articlebatchfiles`);

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing hse quality appraisals batchfile pending queue'});
  }
};

export const listHSEPendingLinkingStudiesBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/articlebatchfiles`);

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR, payload: 'Error showing hse linking studies batchfile pending queue'});
  }
};

export const listHSEPendingPresentationDetailsBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/articlebatchfiles`);

    // history.push('/dashboard');
    dispatch({ type: HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing hse presentation details batchfile pending queue'});
  }
};

export const listHSEAssignedEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse eligibility filter article assigned queue'});
  }
};

export const listHSEAssignedQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse quality appraisal article assigned queue'});
  }
};

export const listHSEAssignedLinkingStudiesArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedlinkingstudiesarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse linking studies article assigned queue'});
  }
};

export const listHSEAssignedPresentationDetailsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedpresentationdetailsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse presentation details article assigned queue'});
  }
};

export const addArticleToComplicatedQueue = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/articles/addtocomplicatedqueue/${articleId}`, {}, { headers });
  
    // history.push('/dashboard');
    dispatch({ type: HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE_ERROR, payload: e.message });
  }
};

export const addArticleToLostQueue = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/articles/addtolostqueue/${articleId}`, {}, { headers });
  
    dispatch({ type: HSE_ADD_ARTICLE_TO_LOST_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ADD_ARTICLE_TO_LOST_QUEUE_ERROR, payload: e.message });
  }
};

export const fetchHSEAssignedEligibilityFiltersArticle = (articleId, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.get(`${backendServer}/hse/assignedeligibilityfiltersarticlequeue/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH, payload: response.data })

    return response.data;

  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR, payload: 'Error fetching hse eligibility filter assigned article'});
  }
};

export const fetchHSEAssignedQualityAppraisalsArticle = (articleId, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.get(`${backendServer}/hse/assignedqualityappraisalsarticlequeue/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH, payload: response.data });

    return response.data;
    
  } catch(e) {
    // dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR, payload: 'Error fetching hse quality appraisals assigned article'});
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR, payload: e});
    return e;
  }
};

export const fetchHSEAssignedLinkingStudiesArticle = (articleId, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.get(`${backendServer}/hse/assignedlinkingstudiesarticlequeue/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR, payload: 'Error fetching hse linking studies assigned article'});
  }
};

export const fetchHSEAssignedPresentationDetailsArticle = (articleId, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.get(`${backendServer}/hse/assignedpresentationdetailsarticlequeue/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR, payload: 'Error fetching hse presentation details assigned article'});
  }
};

export const assignHSEPendingEligibilityFiltersArticlesJuniorFilter = (articleId , history) => async dispatch => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  console.log(headers);
  try {
    const response = await axios.post(`${backendServer}/hse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER, payload: response.data });
    history.push('/hse/pendingeligibilityfiltersarticlequeue');
    return response;
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior filter role for article'});
    return e;
  }
  // history.push('/hse/assignedeligibilityfiltersarticlequeue');
};

export const assignAllHSEPendingEligibilityFiltersArticlesJuniorFilter = (articleIds , history) => async dispatch => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  console.log(headers);
  try {
    const response = await axios.post(`${backendServer}/hse/pendingeligibilityfiltersarticlequeue/addalljuniorfilterer`, 
    {
      articleIds
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_JUNIOR_FILTER, payload: response.data });
    return response;
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior filter role for all articles'});
    return e;
  }
  // history.push('/hse/assignedeligibilityfiltersarticlequeue');
};

export const assignHSEPendingQualityAppraisalsArticlesJuniorAppraiser = (articleId , history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/pendingqualityappraisalsarticlequeue/addjuniorappraiser/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER, payload: response.data });
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR, payload: 'Error assigning junior appraiser role for article'});
  }
  history.push('/hse/assignedqualityappraisalsarticlequeue');
};

export const assignHSEPendingLinkingStudiesArticlesJuniorLinker = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/hse/pendinglinkingstudiesarticlequeue/addjuniorlinker/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER, payload: response.data });
    history.push('/hse/assignedlinkingstudiesarticlequeue');
  } catch(e) {
    dispatch({ type: HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR, payload: 'Error assigning junior linker role for article'});
  }
};

export const assignHSEPendingPresentationDetailsArticlesJuniorPresenter = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/hse/pendingpresentationdetailsarticlequeue/addjuniordetailer/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER, payload: response.data });
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR, payload: 'Error assigning junior detailer role for article'});
  }
  history.push('/hse/assignedpresentationdetailsarticlequeue');
};

export const assignHSEPendingEligibilityFiltersArticlesSeniorFilter = (articleId, history) => async dispatch => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/${articleId}`,
    {
      articleId
    },
    {
      headers
    });
    
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER, payload: response.data });
    return response.data;
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR, payload: 'Error assigning senior filter role for article'});
    return e;
  }
  // history.push('/hse/assignedeligibilityfiltersarticlequeue');
};

export const assignAllHSEPendingEligibilityFiltersArticlesSeniorFilter = (articleIds, history) => async dispatch => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer`,
    {
      articleIds
    },
    {
      headers
    });
    
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_SENIOR_FILTER, payload: response.data });
    return response.data;
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_SENIOR_FILTER_ERROR, payload: 'Error assigning senior filter role for all article'});
    return e;
  }
  // history.push('/hse/assignedeligibilityfiltersarticlequeue');
};

export const assignHSEPendingQualityAppraisalsArticlesSeniorAppraiser = (articleId, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/pendingqualityappraisalsarticlequeue/addseniorappraiser/${articleId}`,
    {
      articleId
    },
    {
      headers
    });

    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER, payload: response.data });
    history.push('/hse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR, payload: 'Error assigning senior appraiser role for article'});
  }
};

export const assignHSEAssignedEligibilityFiltersArticleEdit = (articleId, inputValues, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    
    const response = await axios.post(`${backendServer}/hse/assignedeligibilityfiltersarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignHSEAssignedQualityAppraisalsArticleEdit = (articleId, inputValues, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/assignedqualityappraisalsarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT, payload: response.data });
    history.push('/hse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignHSEAssignedLinkingStudiesArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedlinkingstudiesarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT, payload: response.data });
    //history.push('/hse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignHSEAssignedPresentationDetailsArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedpresentationdetailsarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT, payload: response.data });
    //history.push('/hse/assignedpresentationdetailsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignHSEAssignedEligibilityFiltersArticleEditComplete = (articleId, inputValues, history) => async dispatch => {console.log(inputValues);
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/assignedeligibilityfiltersarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignHSEAssignedQualityAppraisalsArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') 
  };
  try {
    const response = await axios.post(`${backendServer}/hse/assignedqualityappraisalsarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/hse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignHSEAssignedLinkingStudiesArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedlinkingstudiesarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/hse/assignedlinkingstudiesarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignHSEAssignedPresentationDetailsArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedpresentationdetailsarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/hse/assignedlinkingstudiesarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const onSSEArticleSubmit = (values, history) => async dispatch => {
  
  try {
    const response = await axios.post(
      `${backendServer}/sse/articles`,
      values
    );

    history.push('/sse/pendingeligibilityfiltersarticlequeue');

    dispatch({ type: SSE_CREATE_ARTICLE, payload: response.data })

  } catch(e) {

    dispatch({ type: SSE_CREATE_ARTICLE_ERROR, payload: 'Error creating Article'});

  }
};

export const submitSSEBatchFile = (state, history) => async dispatch => {

  const uploadConfig = await axios.get('/api/sse/getfileurl');

  await axios.put(uploadConfig.data.url, state.file, {
    headers: {
      'Content-Type': state.file.type,
    }
  });

  const articleBatch = await axios.post('/api/sse/batchfile', { 
    url: uploadConfig.data.key, 
    language: state.selectedLanguageOption.label, 
    articleSource: state.selectedSourceOption.label, 
    harvestDate: state.harvestDate,
    fileName: state.file.name
  });
  // console.log(state.file.name);
  if(articleBatch) {
    
    dispatch({ type: SSE_CREATE_BATCHFILE, payload: 'Batchfile succesfully uploaded' });

    // Successful upload
    history.push('/sse/pendingeligibilityfiltersarticlequeue');

  } else {
    // Unsuccesful upload
    dispatch({ type: SSE_CREATE_BATCHFILE_ERROR, payload: 'Batchfile succesfully uploaded' });
    history.push('/sse/pendingeligibilityfiltersarticlequeue');
    console.log("Batchfile upload failed")
  }

};

export const listSSEPendingEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/pendingeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
    return response.data;
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse eligibility filter article pending queue'});
  }
};

export const listSSEPendingQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/pendingqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse quality appraisals article pending queue'});
  }
};

export const listSSEPendingLinkingStudiesArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/pendinglinkingstudiesarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse linking studies article pending queue'});
  }
};

export const listSSEPendingPresentationDetailsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/pendingpresentationdetailsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    dispatch({ type: SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse presentation details article pending queue'});
  }
};

export const listSSEPendingEligibilityFiltersBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/articlebatchfiles`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing sse eligibility filter batchfile pending queue'});
  }
};

export const listSSEPendingQualityAppraisalsBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/articlebatchfiles`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing sse quality appraisals batchfile pending queue'});
  }
};

export const listSSEPendingLinkingStudiesBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/articlebatchfilesqueue`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR, payload: 'Error showing sse linking studies batchfile pending queue'});
  }
};

export const listSSEPendingPresentationDetailsBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/articlebatchfilesqueue`);

    // history.push('/dashboard');
    dispatch({ type: SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing sse presentation details batchfile pending queue'});
  }
};

export const listSSEAssignedEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse eligibility filter article assigned queue'});
  }
};

export const listSSEAssignedQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse quality appraisals article assigned queue'});
  }
};

export const listSSEAssignedLinkingStudiesArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedlinkingstudiesarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });
    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse linking studies article assigned queue'});
  }
};

export const listSSEAssignedPresentationDetailsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedpresentationdetailsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });
    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse presentation details article assigned queue'});
  }
};

export const fetchSSEAssignedEligibilityFiltersArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedeligibilityfiltersarticlequeue/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR, payload: 'Error fetching sse eligibility filter assigned article'});
  }
};

export const fetchSSEAssignedQualityAppraisalsArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedqualityappraisalsarticlequeue/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR, payload: 'Error fetching sse quality appraisals assigned article'});
  }
};

export const fetchSSEAssignedLinkingStudiesArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedlinkingstudiesarticlequeue/fetcharticle/${articleId}`, { headers });

    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR, payload: 'Error fetching sse linking studies assigned article'});
  }
};

export const fetchSSEAssignedPresentationDetailsArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedpresentationdetailsarticlequeue/fetcharticle/${articleId}`, { headers });

    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR, payload: 'Error fetching sse presentation details assigned article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticlesJuniorFilter = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/sse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER, payload: response.data });
    history.push('/sse/assignedeligibilityfiltersarticlequeue');
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior filter role for article'});
  }
};

export const assignSSEPendingQualityAppraisalsArticlesJuniorAppraiser = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/sse/pendingqualityappraisalsarticlequeue/addjuniorappraiser/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER, payload: response.data });
    history.push('/sse/assignedqualityappraisalsarticlequeue');
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR, payload: 'Error assigning junior appraiser role for article'});
  }
};

export const assignSSEPendingLinkingStudiesArticlesJuniorLinker = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/sse/pendinglinkingstudiesarticlequeue/addjuniorlinker/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER, payload: response.data });
    history.push('/sse/assignedlinkingstudiesarticlequeue');
  } catch(e) {
    dispatch({ type: SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR, payload: 'Error assigning junior linker role for article'});
  }
};

export const assignSSEPendingPresentationDetailsArticlesJuniorDetailer = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/sse/pendingpresentationdetailsarticlequeue/addjuniordetailer/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER, payload: response.data });
    history.push('/sse/assignedpresentationdetailsarticlequeue');
  } catch(e) {
    dispatch({ type: SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR, payload: 'Error assigning junior detailer role for article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticlesSeniorFilter = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/${articleId}`,
    {
      articleId
    },
    {
      headers
    });

    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER, payload: response.data });
    
    
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR, payload: 'Error assigning senior filter role for article'});
  }
  history.push('/sse/assignedeligibilityfiltersarticlequeue');
};

export const assignSSEPendingQualityAppraisalsArticlesSeniorAppraiser = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/pendingqualityappraisalsarticlequeue/addseniorappraiser/${articleId}`,
    {
      articleId
    },
    {
      headers
    });

    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER, payload: response.data });
    history.push('/sse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR, payload: 'Error assigning senior appraiser role for article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedeligibilityfiltersarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT, payload: response.data });
    //history.push('/sse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignSSEPendingQualityAppraisalsArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedqualityappraisalsarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT, payload: response.data });
    //history.push('/sse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignSSEPendingLinkingStudiesArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedlinkingstudiesarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT, payload: response.data });
    //history.push('/sse/assignedlinkingstudiesarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignSSEPendingPresentationDetailsArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedpresentationdetailsarticlequeue/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT, payload: response.data });
    //history.push('/sse/assignedpresentationdetailsarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedeligibilityfiltersarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/sse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignSSEPendingQualityAppraisalsArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedqualityappraisalsarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/sse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignSSEPendingLinkingStudiesArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedlinkingstudiesarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/sse/assignedlinkingstudiesarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignSSEPendingPresentationDetailsArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedpresentationdetailsarticlequeue/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/sse/assignedpresentationdetailsarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

