/**
 * Account registration
 */
module.exports = ({ userRepository, events }) => {
  const register = async (type, email, password) => {
    try {
      if ((type !== "hse") | (type !== "sse") || type !== "cvd") {
        return { error: "invalid" };
      }

      let user = await userRepository.findByEmail(type, email);
      if (user) {
        return { error: "email has already been taken" };
      }

      user = stubUser({ type, email, password });
      user = await userRepository.create(user);

      const data = {
        id: user._id,
        email: user.email,
      };

      events.emit("account.registered", data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    register,
  };
};

const stubUser = ({ type, email, password }) => {
  const now = new Date();
  return {
    email,
    // note: password length and complexity should also be managed
    password,
    type,
    confirmed: false,
    roles: ["user"],
    createdAt: now,
    updatedAt: now,
  };
};
