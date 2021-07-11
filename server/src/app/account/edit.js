/**
 * Edit user account fields
 */
module.exports = ({ userRepository }) => {
  const edit = async (id, email, password, confirm) => {
    if (!id) {
      return {
        error: "A valid user is required",
      };
    }

    if (!email) {
      return {
        error: "A valid email is required",
      };
    }

    if (!password) {
      return {
        error: "A valid password is required",
      };
    }

    if (!confirm) {
      return {
        error: "A valid confirm password is required",
      };
    }

    if (password !== confirm) {
      return {
        error: "The password and confirm password must match",
      };
    }

    try {
      const dbUser = await userRepository.findById(id);
      if (!dbUser) {
        return {
          error: "User profile does not exist",
        };
      }

      const fields = {
        email: user.email,
        password: user.password,
        updatedAt: new Date(),
      };

      await userRepository.updateWithPassword(id, fields);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    edit,
  };
};
