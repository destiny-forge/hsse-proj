/*
 * User service for interacting with the API backend
 */

const UserService = ({ fetch }) => {
  const create = async (user) => {
    const res = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
    return Promise.resolve(res);
  };

  const search = async (email, role) => {
    const params = {
      method: 'GET',
      data: {
        email,
        role,
      },
    };
    const res = await fetch('/users/search', params);
    return Promise.resolve(res);
  };

  return {
    create,
    search,
  };
};

export default UserService;
