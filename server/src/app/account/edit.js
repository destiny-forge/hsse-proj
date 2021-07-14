/**
 * Edit user account fields
 */
module.exports = ({ userRepository, events }) => {
  const edit = async (id, email, password, confirm) => {
    let emailChanged = false;

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
          error: "Account does not exist",
        };
      }

      // if the email address has changed, then
      // we need to update it along with the subscriptions

      const fields = {
        email,
        password,
        updatedAt: new Date(),
      };

      if (dbUser.email === email) {
        delete fields.email;
      } else {
        emailChanged = true;
      }

      await userRepository.updateWithPassword(dbUser._id, fields);

      if (emailChanged) {
        events.emit("email.changed", {
          type: dbUser.type,
          old_email: dbUser.email,
          new_email: email,
        });
      }

      return {
        id,
        email,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    edit,
  };
};
