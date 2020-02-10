const User = require('../modules/users/model');
const createError = require('http-errors');

module.exports = {
	publicRoute(req, res, next) {
		if (!req.headers['x-access-token']) next();
		else throw createError(403, 'Forbidden. Only for guest users')
	},
	privateRoute(req, res, next) {
		const user = async () => await User.findOne({ 'secret.token': req.headers['x-access-token'] });

		if (!req.headers['x-access-token']) next(createError(401, 'Access denied, need to authenticate'));
		else if (!user(req.headers['x-access-token'])) next(createError(404, 'Access denied. No user found with this token'));
		else next();
	}
};
