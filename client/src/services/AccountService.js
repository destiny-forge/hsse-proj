/*
 * Account service for interacting with the API backend
 */

const AccountService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const edit = async (id, email, password, confirm) => {
    const url = `${baseURL}/account`;
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        id,
        email,
        password,
        confirm,
      }),
    };
    const response = await fetch(url, opts);
    const result = await response.json();
    return result.data;
  };

  return {
    edit,
  };
};

export default AccountService;
