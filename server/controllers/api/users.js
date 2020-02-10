const router = require('express').Router();
const passport = require('passport');
const createError = require('http-errors');
const asyncHandler = require('express-async-handler');
const { publicRoute, privateRoute } = require('../../middleware/api-guard');
const { validator, schemas } = require('../../middleware/validator/validator');

const User = require('../../modules/users/model');
const service = require('../../modules/users/service');
const { createAuthToken } = require('../../modules/users/helpers');

router.post('/login', publicRoute, validator(schemas.loginPOST, 'body'), asyncHandler(async (req, res, next) => {
	await passport.authenticate('local', { session: false },(err, user, info) => {
		console.log(user);
		if (err) throw createError(500, err);
		if (!user) return next(createError(404, info));
		if (!user.service.isVerified) return next(createError(400, 'Email not confirmed'));

		req.logIn(user, (err) => {
			if (err) {
				return next(createError(500, err));
			}

			else {
				user.secret['token'] = createAuthToken(user._id);

				user.save((err, result) => {
					if (err) next(createError(500, err));

					if (result) {
						return res.status(200).send({
							auth: true, user: user, token: user.secret.token
						})
					}
				})
			}
		})
	})(req, res, next)
}));

router.post('/logout', privateRoute, asyncHandler(async (req, res, next) => {
	await User.findOne({ 'secret.token': req.headers['x-access-token']}, (error, user) => {
		if (error) throw createError(500, error);
		if (!user) return next(createError(401, 'Session is over, need to login!'));
		else {
			user.secret['token'] = null;

			user.save((err, result) => {
				if (err) return next(createError(500, err));
				if (result) {
					delete req.headers['x-access-token'];
					return res.status(200).json('See you soon!');
				}
			})
		}
	});
}));

module.exports = router;
