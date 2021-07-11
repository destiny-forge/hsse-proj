/**
 * Edit user profile fields
 */
module.exports = ({ userRepository }) => {
  const edit = async (id, user) => {
    if (!user) {
      return {
        error: "A valid user is required",
      };
    }

    try {
      const dbUser = await userRepository.findById(id);
      if (!dbUser) {
        return {
          error: "User profile does not exist",
        };
      }

      const validRoles = [
        "student",
        "researcher",
        "professional",
        "manager",
        "policymaker",
        "other",
      ];

      user.roles = user.roles.filter((role) => validRoles.includes(role));

      const fields = {
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        language: user.language,
        roles: user.roles,
        updatedAt: new Date(),
      };

      await userRepository.update(id, fields);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    edit,
  };
};
