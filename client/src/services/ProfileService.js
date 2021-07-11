/*
 * Profile service for interacting with the API backend
 */

const ProfileService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const get = async () => {
    const id = localStorage.getItem('client_token');
    if (!id) {
      return null;
    }
    const url = `${baseURL}/profile/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  const edit = async ({ email, password }) => {
    const url = `${baseURL}/profile`;
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const response = await fetch(url, opts);
    const result = await response.json();
    return result.data;
  };

  return {
    get,
    edit,
  };
};

export default ProfileService;
