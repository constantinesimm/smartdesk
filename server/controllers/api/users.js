const router = require('express').Router();
const { publicRoute, privateRoute } = require('../../middleware/api-guard');
const { validator, schemas } = require('../../middleware/validator/validator');

const User = require('../../modules/users/model');
const service = require('../../modules/users/service');

router.post('/login', publicRoute, validator(schemas.loginPOST, 'body'), (req, res, next) => {
  service.authenticate(req, res)
    .then(result => res.json(result))
    .catch(error => next(error));
});

/*
router.post('/login', publicRoute, validator(schemas.loginPOST, 'body'), asyncHandler(async (req, res, next) => {
	await passport.authenticate('local', { session: false },(err, user, info) => {
		console.log(user);
		if (err) throw createError(500, err);
		if (!user) return next(createError(404, info));
		if (!user.service.isVerified) return next(createError(400, 'Email not confirmed'));

		req.logIn(user, (err) => {
			if (err) {
				return next(createError(500, err));
			} else {
				user.secret['token'] = createAuthToken(user._id);

				user.save((err, result) => {
					if (err) next(createError(500, err));

					if (result) {
						return res.status(200).send({
							auth: true, user: user, token: user.secret.token
						})
					}
					next()
				})
			}
		})
	})(req, res, next)
}));
 */

router.post('/logout', (req, res, next) => {
  service.loggedOut(req, res)
    .then(response => res.json(response))
    .catch(error => next({status: error.status || 400, message: error.message}));
});

router.post('/register/new', (req, res, next) => {
  service.registerInvite(req, res, next)
    .then(response => res.json(response))
    .catch(error => next({status: error.status || 400, message: error.message}));
});

router.post('/register/:userId/complete/:token', (req, res, next) => {
  service.registerComplete(req, res, next)
    .then(response => res.json(response))
    .catch(error => next({status: error.status || 400, message: error.message}))
});

module.exports = router;
