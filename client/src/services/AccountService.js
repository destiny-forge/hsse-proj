import API from './API';
/*
 * Account service for interacting with the API backend
 */

const AccountService = () => {
  const edit = async ({ id, email, password, confirm }) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        id,
        email,
        password,
        confirm,
      }),
    };
    return await API.call('/account-edit', opts);
  };

  return {
    edit,
  };
};

export default AccountService;
