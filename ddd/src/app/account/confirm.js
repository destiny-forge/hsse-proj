/**
 * Account confirmation
 */
module.exports = ({ userRepository, webToken }) => {
  const confirm = async ({ token }) => {
    try {
      const verifyToken = webToken.verify();
      const user = verifyToken(token);

      const result = await userRepository.update(user.id, {
        confirmed: true
      });

      if (!result.ok) {
        throw new Error("Could not set user to confirmed status");
      }

      return {
        id: user.id,
        email: user.email,
        confirmed: true
      };
    } catch (error) {
      throw new Error("Token not verified");
    }
  };

  const isConfirmed = userId => {
    try {
      const user = userRepository.findById(userId);
      return user.confirmed;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    isConfirmed,
    confirm
  };
};
