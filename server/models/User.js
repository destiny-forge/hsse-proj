/**
 * @name User.js
 * @author Kwadwo Sakyi
 * @description Defines the user model
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  confirmed: { type: Boolean, default: false },
  roles: {
    type: [
      {
        type: String,
        enum: [
          'user',
          'uploader',
          'detailer',
          'linker',
          'juniorappraiser',
          'seniorappraiser',
          'juniorfilterer',
          'seniorfilterer',
          'prioritizer',
          'administrator',
        ],
      },
    ],
    default: ['user'],
    required: 'Please select at least one role',
  },
  eligibilityFilterArticles: [{ type: Schema.Types.ObjectId, ref: 'HSEArticles' }],
  qualityAppraisalArticles: [{ type: [Schema.Types.ObjectId], ref: 'HSEArticles' }],
  linkingStudiesArticles: [{ type: [Schema.Types.ObjectId], ref: 'HSEArticles' }],
  presentationDetailsArticles: [{ type: [Schema.Types.ObjectId], ref: 'HSEArticles' }],
});

/**
 * A pre-middleware function which hashes the user's password before saving
 */
userSchema.pre('save', function preSave(next) {
  const user = this;

  return bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    return bcrypt.hash(user.password, salt, null, (err2, hash) => {
      if (err2) {
        return next(err2);
      }

      user.password = hash;
      return next();
    });
  });
});

/**
 * Tests a user's password
 *
 * @param string candidatePassword The password to test
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  return bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    return callback(null, isMatch);
  });
};

mongoose.model('Users', userSchema);
