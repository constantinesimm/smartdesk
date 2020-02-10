const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const createError = require('http-errors');

const User = require('../modules/users/model');

module.exports = (passport) => {
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'secret'
	}, (username, password, done) => {
		User.findOne({ email: username }, (error, user) => {
			if (error) throw createError(500, error);
			if (!user) return done(null, false, { message: 'User not found or does not exist' });

			bcrypt.compare(password, user.secret.hash, (error, isMatch) => {
				if (error) throw createError(500, error);

				if (isMatch) return done(null, user);
				else return done(null, false, { message: 'Incorrect login or password' });
			});
		});
	}));

	passport.serializeUser((user, done) => done(null, user._id));
	passport.deserializeUser((_id, done) => User.findById(_id, (err, user) => done(err, user)));
};
