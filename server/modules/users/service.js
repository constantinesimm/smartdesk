const passport = require('passport');
const createError = require('http-errors');
const User = require('../users/model');

const { createAuthToken, createServiceToken, createHashFromPassword, validateEmail, validatePassword } = require('./helpers');

module.exports = {
	authenticate, logout
};

async function authenticate(req, res, next) {

	if (!validateEmail(req.body.email) || !validatePassword(req.body.secret)) {
		next(createError(400, 'Email or Password is invalid.'));
	}

	passport.authenticate('local', {}, (error, user, info) => {
		if (error) throw error;
		if (!user) next(createError(404, info))
		if (!user.service.isVerified) next(createError(400, info))

		req.logIn(user, error => {
			if (error) {
				next(createError(500, error));
			} else {
				user.secret['token'] = createAuthToken(user._id);
				user
					.save()
					.then(() => res.status(200).send({ auth: true, user: user, token: user.secret.token }))
			}
		})
	})(req, res, next)
}

async function logout(req, res) {
	console.log('logout', req.session);
	req.session.destroy(function() {
		res.clearCookie('connect.sid');
		res.status(200).send('User logout succeed');
	});
}
