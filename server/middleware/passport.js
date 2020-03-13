const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const createError = require('http-errors');
const { createAccessToken } = require('../modules/users/helpers')

const User = require('../modules/users/model');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'secret'
  }, (email, secret, done) => {
    User.findOne({ email: email }, (error, user) => {
      console.log('pass use',error)
      if (error) createError(error);
      if (!user) return done(null, false, { status: 401, message: 'User not found or does not exist' });

      if (bcrypt.compareSync(secret, user.secret.hash)) {
        user.access.token = 'sdmvsdv'
      }

    })
  }));

	passport.serializeUser((user, done) => done(null, user._id));
	passport.deserializeUser((_id, done) => User.findById(_id, (err, user) => done(err, user)));
};
