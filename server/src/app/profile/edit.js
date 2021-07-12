/**
 * Edit user profile fields
 */
module.exports = ({ userRepository }) => {
  const edit = async ({
    id,
    firstName,
    lastName,
    language,
    country,
    roles,
  }) => {
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

      roles = roles.filter((role) => validRoles.includes(role));

      const fields = {
        firstName,
        lastName,
        country,
        language,
        client_roles: roles,
        updatedAt: new Date(),
      };

      await userRepository.update(id, fields);

      return {
        id,
        ...fields,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    edit,
  };
};
