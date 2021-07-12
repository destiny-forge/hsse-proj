import API from './API';
/*
 * Profile service for interacting with the API backend
 */

const ProfileService = () => {
  const get = async () => {
    const id = localStorage.getItem('client_token');
    if (!id) {
      return null;
    }
    const response = await API.call(`/profile/${id}`);
    const result = await response.json();
    return result.data;
  };

  const edit = async ({
    id,
    firstName,
    lastName,
    language,
    country,
    roles,
  }) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        language,
        country,
        roles,
      }),
    };

    try {
      const response = await API.call('/profile', opts);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  return {
    get,
    edit,
  };
};

export default ProfileService;
