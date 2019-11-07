/**
 * @name authentication.js
 * @description This file defines all functions that manage user authentication
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const nodemailer = require('nodemailer');
// const aws = require('aws-sdk');
const ses = require('nodemailer-ses-transport');

/* lets do this a better way */
const config = require('../config/baseConfig');

const USER = ['user'];
const UPLOADER = ['user', 'uploader'];
const DETAILER = ['user', 'uploader', 'detailer'];
const LINKER = ['user', 'uploader', 'detailer', 'linker'];
const JUNIOR_APPRAISER = [
  'user',
  'uploader',
  'detailer',
  'linker',
  'juniorappraiser'
];
const SENIOR_APPRAISER = [
  'user',
  'uploader',
  'detailer',
  'linker',
  'juniorappraiser',
  'seniorappraiser'
];
const JUNIOR_FILTERER = [
  'user',
  'uploader',
  'detailer',
  'linker',
  'juniorappraiser',
  'seniorappraiser',
  'juniorfilterer'
];
const SENIOR_FILTERER = [
  'user',
  'uploader',
  'detailer',
  'linker',
  'juniorappraiser',
  'seniorappraiser',
  'juniorfilterer',
  'seniorfilterer'
];
const PRIORITIZER = [
  'user',
  'uploader',
  'detailer',
  'linker',
  'juniorappraiser',
  'seniorappraiser',
  'juniorfilterer',
  'seniorfilterer',
  'prioritizer'
];
const ADMINISTRATOR = [
  'user',
  'uploader',
  'detailer',
  'linker',
  'juniorappraiser',
  'seniorappraiser',
  'juniorfilterer',
  'seniorfilterer',
  'prioritizer',
  'administrator'
];

const UserModelClass = mongoose.model('Users');

const userToken = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
};

const transporter = nodemailer.createTransport(
  ses({
    accessKeyId: process.env.HSSE_SES_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_SES_SECRET_KEY,
    region: process.env.REGION
  })
);

const sendConfirmation = (args, emailToken) => {
  const confirmationUrl = `${config.backendServer}/confirmuser/${emailToken}`;
  transporter.sendMail({
    from: 'forum@mcmaster.ca',
    to: args.email,
    subject: 'Confirm Registration Email',
    html: `Please click this email to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`
  });
};

const sendResetEmail = (args, emailToken) => {
  console.log('*********** sending email *******');

  const resetUrl = `${config.frontendServer}/resetpassword/${emailToken}`;
  transporter.sendMail({
    from: 'forum@mcmaster.ca',
    to: args.email,
    subject: 'Reset Password Email',
    html: `Please click this to reset your password: <a href="${resetUrl}">${resetUrl}</a>`
  });
};

/**
 * Signs a user into the application
 *
 * @param ReadableStream req The function's request body
 * @param string req.user The username of the user to sign in.
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.signin = (req, res, next) => {
  res.send({ token: userToken(req.user) });
};

/**
 * Signs up a user with a new account
 *
 * @param ReadableStream req The function's request body
 * @param string req.body.email The user's email address
 * @param string req.body.password The user's password
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.signup = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  UserModelClass.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const newUser = new UserModelClass({
      email,
      password
    });
    /*
        newUser.save( (err) => {
            res.json({ token: userToken(newUser) });
        });
*/

    newUser.save(err => {
      res.json({ message: 'Email confirmation sent!' });
    });

    // console.log(`email: ${email}, password: ${password}`);

    sendConfirmation(newUser, userToken(newUser));
  });
};

const parseToken = bearer_token => bearer_token.split(' ')[1];

/**
 * Sends an account confirmation email to a user
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.token The JWT user token
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.confirmUser = (req, res, next) => {
  const { sub } = jwt.decode(token, process.env.JWT_SECRET);

  UserModelClass.update(
    { _id: sub },
    { $set: { confirmed: true } },
    (err, user) => {
      if (err) {
        console.log('****** There was an error *******');
        return next(err);
      }
    }
  );

  return res.redirect(`${config.frontendServer}/registrationconfirmed`);
};

/**
 * Returns the current user's database document
 *
 * @param ReadableStream req The function's request body
 * @param object req.headers The request headers containing an authorization token
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.currentUser = async (req, res, next) => {
  console.log(req.headers.authorization);
  const token = parseToken(req.headers.authorization);
  const userId = getUserIdFromToken(token);
  const user = await UserModelClass.findOne({ _id: userId }).exec();
  return res.status(200).send({ user });
};

/**
 * Returns a user's database document based on their email address
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.email The user's email address
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.fetchUserByEmail = async (req, res, next) => {
  console.log(req.params);

  const { email } = req.params;

  const user = await UserModelClass.findOne({ email }).exec();

  return res.status(200).send({ user });
};

/**
 * Resets a user's password
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.token The JWT user token
 * @param object req.body An object containing "password" and "confirmPassword" properties
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.resetPassword = (req, res, next) => {
  console.log('**************** INSIDE RESET PASSWORD *******************');
  const { sub } = jwt.decode(req.params.token, process.env.JWT_SECRET);

  const { password } = req.body;
  const { confirmPassword } = req.body;

  console.log(
    `****************${password} - ${confirmPassword}*******************`
  );

  const hashedPassword = '';

  if (!password || !confirmPassword) {
    console.log('You must provide password and confirmPassword');
    return res.status(422).send({
      error: 'You must provide password and confirmPassword'
    });
  }
  if (password !== confirmPassword) {
    console.log('Your password and confirmPassword must match');
    return res.status(422).send({
      error: 'Your password and confirmPassword must match'
    });
  }

  console.log('**************** inside resetPassword2 *******************');

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }

      UserModelClass.update(
        { _id: sub },
        { $set: { password: hash } },
        (err, user) => {
          if (err) {
            console.log(
              '*************** ERROR SAVING NEW PASSWORD *******************'
            );
            return next(err);
          }

          console.log('**************** PASSWORD SAVED! *******************');
        }
      );

      next();
    });

    // return res.redirect(config.frontendServer + "/successfulpasswordreset" );
    // return res.redirect( "/successfulpasswordreset" );
  });
  return res
    .status(200)
    .send({ message: 'Password has been successfully reset' });
};

/**
 * Sends an email to a user enabling them to reset their password
 *
 * @param ReadableStream req The function's request body
 * @param string req.body.email The user's email address
 * @param WritableStream res The function's response body
 * @param ? next TODO: document
 */
exports.sendPasswordResetEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(422).send({ error: 'You must provide email' });
  }

  UserModelClass.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      sendResetEmail(existingUser, userToken(existingUser));
      console.log(
        '**************** SENDING RESSET EMAIL ***********************'
      );
      return res.status(200).send({ message: 'Password reset email sent' });
    }
    console.log(`************${email}************ FOUND ONE ***************`);
    return res.status(422).send({ error: 'User is not registered' });
  });
};

const getUserIdFromToken = token =>
  jwt.decode(token, process.env.JWT_SECRET).sub;

/**
 * Returns a user's database document based on the JWT authentication token
 *
 * @param JWTToken token
 */
exports.getUserFromToken = async token => {
  const userId = getUserIdFromToken(token);
  return await UserModelClass.findOne({ _id: userId }).exec();
};

/**
 * Returns a list of all users
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.fetchAllUsers = (req, res) => {
  UserModelClass.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    if (!users) {
      return res.status(404).send({
        message: 'No user has been found'
      });
    }
    return res.status(200).send(users);
  });
};

/**
 * DEFUNCT: to be removed
 */
exports.addRole = async (req, res) => {
  const values = req.body;

  UserModelClass.findOneAndUpdate((err, user) => {
    if (err) {
      return res.send(err);
    }
    if (!user) {
      return res.status(404).send({
        message: 'No user has been found'
      });
    }
    return res.status(200).send(user);
  });

  const token = parseToken(req.headers.authorization);
  const user = await getUserFromToken(token);

  await UserModelClass.findOneAndUpdate(
    { _id: user._id },

    { $push: { roles: values } },

    { new: true, useFindAndModify: false },

    { safe: true, upsert: trued },

    // the callback function
    (err, user) => {
      // Handle any possible database errors
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      if (!user) {
        console.log('No user found!');
        return res.status(404).send({
          message: 'No user has been found'
        });
      }
      console.log(user);
      return res.send({
        message: `${values} added to ${user}`
      });
    }
  );
};

/**
 * DEFUNCT: to be removed
 */
exports.removeRole = async (req, res) => {
  const values = req.body;

  const token = parseToken(req.headers.authorization);
  const user = await getUserIdFromToken(token);

  await UserModelClass.findOneAndUpdate(
    { _id: user._id },

    { $pull: { roles: values } },

    { safe: true, upsert: true },

    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      if (!user) {
        console.log('No user found!');
        return res.status(404).send({
          message: 'No user has been found'
        });
      }
      console.log(user);
      return res.send({
        message: `${values} added to ${user}`
      });
    }
  );
};

/**
 * Updates a user's role
 *
 * @param ReadableStream req The function's request body
 * @param object req.body.value An object containing "selectedRole" and "selectedEmail" properties
 * @param WritableStream res The function's response body
 */
exports.updateRole = async (req, res) => {
  // console.log(req.body.value);
  let values;
  const { selectedRole, selectedEmail } = req.body.value;

  switch (selectedRole) {
    case 'user':
      values = USER;
      break;
    case 'uploader':
      values = UPLOADER;
      break;
    case 'detailer':
      values = DETAILER;
      break;
    case 'linker':
      values = LINKER;
      break;
    case 'juniorappraiser':
      values = JUNIOR_APPRAISER;
      break;
    case 'seniorappraiser':
      values = SENIOR_APPRAISER;
      break;
    case 'juniorfilterer':
      values = JUNIOR_FILTERER;
      break;
    case 'seniorfilterer':
      values = SENIOR_FILTERER;
      break;
    case 'prioritizer':
      values = PRIORITIZER;
      break;
    case 'administrator':
      values = ADMINISTRATOR;
      break;
    default:
      values = USER;
  }

  await UserModelClass.findOneAndUpdate(
    // { _id: user._id },

    { email: selectedEmail },

    { roles: values },

    { useFindAndModify: true, upsert: true },

    // { safe: true, upsert: true },

    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      if (!user) {
        console.log('No user found!');
        return res.status(404).send({
          message: 'Unable to update role!'
        });
      }
      console.log(user);
      return res.send({
        message: `Role: "${selectedRole}" assigned to ${user.email}`
      });
    }
  );
};

/**
 * Allows a user account to be used
 *
 * @param ReadableStream req The function's request body
 * @param string req.body.values The username to activate
 * @param WritableStream res The function's response body
 */
exports.activateUser = async (req, res) => {
  const user = req.body.values;

  // await UserModelClass.findOneAndUpdate(
  await UserModelClass.findByIdAndUpdate(
    { _id: user._id },

    { confirm: true },

    { new: true, useFindAndModify: false },

    (err, user) => {
      if (err) {
      } else if (!user) {
        console.log('No user found!');
        return res.status(404).send({
          message: 'No user has found'
        });
      } else {
        console.log(user);
        return res.send({
          message: `${values} added to ${user}`
        });
      }
    }
  );
};

/**
 * Disables a user account, not allowing it to be used
 *
 * @param ReadableStream req The function's request body
 * @param string req.body.values The username to deactivate
 * @param WritableStream res The function's response body
 */
exports.deactivateUser = async (req, res) => {
  const user = req.body.values;

  await UserModelClass.findOneAndUpdate(
    { _id: user._id },

    { confirm: false },

    { new: true, useFindAndModify: false },

    (err, user) => {
      if (err) {
      } else if (!user) {
        console.log('No user found!');
        return res.status(404).send({
          message: 'No user has found'
        });
      } else {
        console.log(user);
        return res.send({
          message: `${values} added to ${user}`
        });
      }
    }
  );
};
