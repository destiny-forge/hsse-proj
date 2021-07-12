/*
 * Profile service for interacting with the API backend
 */
import AuthService from './AuthService';

const API = () => {
  const Auth = new AuthService();
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const getQueryString = (params) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');
  };

  const call = async (url, opts) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (Auth.loggedIn()) {
      headers['Authorization'] = `Bearer ${Auth.getToken()}`;
    }

    if (opts) {
      if (opts.method === 'GET' || opts.method === 'DELETE') {
        const qs = '?' + getQueryString(opts.data);
        url = url + qs;
      }
    }

    return fetch(`${baseURL}${url}`, {
      headers,
      ...opts,
    })
      .then(_checkStatus)
      .then((resp) => resp.json());
  };

  const _checkStatus = (resp) => {
    // raises an error in case response status is not a success
    if (resp.status >= 200 && resp.status < 300) {
      // Success status lies between 200 to 300
      return resp;
    } else {
      let error = new Error(resp.statusText);
      error.response = resp;

      // Unauthorized
      if (resp.status === 401) {
        Auth.logout();
        document.location = window.location.origin;
      }
      throw error;
    }
  };

  return {
    call,
  };
};

export default API();
